import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Row, Col, Typography, Badge, Icon, Button } from 'antd'
import StoreContext from '../../context/StoreContext'

const { Header } = Layout
const { Title } = Typography

const CartButton = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
`

const countQuantity = lineItems => {
  let quantity = 0

  lineItems.forEach(item => {
    quantity = quantity + item.quantity
  })

  return quantity
}

const Nav = ({ siteTitle }) => {
  const context = useContext(StoreContext)
  const { checkout } = context
  const [quantity, setQuantity] = useState(
    countQuantity(checkout ? checkout.lineItems : [])
  )

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []))
  }, [checkout])

  return (
    <Header>
      <Row type="flex" justify="center">
        <Col span={18}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Col>
        <Col span={6}>
          <CartButton to="/cart">
            <Button>
              Cart
              <Icon type="shopping-cart" />
              {quantity !== 0 && <Badge count={quantity} />}
            </Button>
          </CartButton>
        </Col>
      </Row>
    </Header>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
