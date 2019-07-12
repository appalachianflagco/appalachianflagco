import React, { useState, useRef } from 'react'
import { graphql } from 'gatsby'
import ProductForm from '../../components/ProductForm'
import { Img } from '../../utils/styles'
import { Carousel, Row, Col, Card } from 'antd'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const carouselRef = useRef(null)
  const [activeColor, setActiveColor] = useState()
  const matchingColorSlideIndex = product.images.findIndex(element => {
    return element.altText == activeColor
  })

  if (matchingColorSlideIndex > -1) {
    carouselRef.current.goTo(matchingColorSlideIndex)
  }

  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Carousel dotPosition="bottom" ref={carouselRef}>
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
          </Carousel>
        </Col>
        <Col span={16}>
          <Card>
            <h1>{product.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} setActiveColor={setActiveColor} />
          </Card>
        </Col>
      </Row>
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
