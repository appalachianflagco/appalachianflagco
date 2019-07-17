import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Row, Col, Typography, Badge, Icon, Button } from 'antd'
import StoreContext from '../../context/StoreContext'
import { useScrollPosition } from '../../utils/hooks'

import Container from '../Container'

const { Header } = Layout
const { Title } = Typography

const StyledHeader = styled(Header)`
  position: absolute;
  z-index: 99;
  width: 100vw;
  transition: 0.5s background box-shadow;
  background: ${({ scrolly, dark }) =>
    scrolly > 200 || dark ? '#212531' : 'transparent'} !important;
  position: fixed;
  box-shadow: ${({ scrolly, dark }) =>
    scrolly > 200 || dark ? '-5px 8px 6px -6px #000;' : 'none'} !important;
`

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

const Nav = ({ siteTitle, dark }) => {
  const context = useContext(StoreContext)
  const { checkout } = context
  const [quantity, setQuantity] = useState(
    countQuantity(checkout ? checkout.lineItems : [])
  )
  const scrollY = useScrollPosition()

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []))
  }, [checkout])

  return (
    <StyledHeader scrolly={scrollY} dark={dark}>
      <Container>
        <Row type="flex" justify="center">
          <Col span={18}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: 'work sans',
                textShadow: '5px 5px 15px #000',
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
      </Container>
    </StyledHeader>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
