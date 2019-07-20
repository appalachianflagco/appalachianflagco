import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { Img } from '../../utils/styles'
import { Row, Col } from 'antd'

import StyledTitle from '../StyledTitle'

const StyledProductGrid = styled.div`
  margin-bottom: 45px;
`

const ProductGrid = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  return (
    <StyledProductGrid>
      <Row gutter={{ md: 64 }}>
        {data.allShopifyProduct.edges.map(x => (
          <Col xs={24} md={8} key={x.node.id}>
            <div>
              <Link to={`/product/${x.node.handle}/`}>
                <Img
                  fluid={x.node.images[0].localFile.childImageSharp.fluid}
                  alt={x.node.handle}
                />
              </Link>
            </div>

            <StyledTitle level={4}>{x.node.title}</StyledTitle>
          </Col>
        ))}
      </Row>
    </StyledProductGrid>
  )
}

export default ProductGrid
