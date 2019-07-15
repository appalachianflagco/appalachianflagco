import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Img } from '../../utils/styles'
import { Row, Col } from 'antd'

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
    <Row gutter={64}>
      {data.allShopifyProduct.edges.map(x => (
        <Col span={8} key={x.node.id}>
          <Link to={`/product/${x.node.handle}/`}>
            <Img
              fluid={x.node.images[0].localFile.childImageSharp.fluid}
              alt={x.node.handle}
            />
          </Link>
          <p>{x.node.title}</p>
        </Col>
      ))}
    </Row>
  )
}

export default ProductGrid
