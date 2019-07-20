import React, { useState, useRef } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import ProductForm from '../../components/ProductForm'
import { Img } from '../../utils/styles'
import { Carousel, Row, Col, Card, Typography } from 'antd'
import Container from '../../components/Container'
import Header from '../../components/Header'
const { Title, Text } = Typography

const ProductPageContainer = styled(Container)`
  padding-top: 120px;
`

const StyledCarousel = styled(Carousel)`
  @media (max-width: 768px) {
    max-height: 500px;
    max-width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    max-height: 325px;
  }
`

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const carouselRef = useRef(null)
  const [activeColor, setActiveColor] = useState()
  const matchingColorSlideIndex = product.images.findIndex(element => {
    return element.altText === activeColor
  })

  if (matchingColorSlideIndex > -1) {
    carouselRef.current && carouselRef.current.goTo(matchingColorSlideIndex)
  }

  return (
    <>
      <ProductPageContainer>
        <Row gutter={{ md: 16 }}>
          <Col xs={24} md={8}>
            <StyledCarousel dots="false" ref={carouselRef}>
              {product.images.map(x => {
                return (
                  <Img
                    fluid={x.localFile.childImageSharp.fluid}
                    key={x.id}
                    alt={product.title}
                    color={x.altText}
                  />
                )
              })}
            </StyledCarousel>
          </Col>
          <Col xs={24} md={16}>
            <Card>
              <Title>{product.title}</Title>
              <Text>
                <div
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              </Text>

              <ProductForm product={product} setActiveColor={setActiveColor} />
            </Card>
          </Col>
        </Row>
      </ProductPageContainer>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        altText
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      thumbs: images {
        localFile {
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
