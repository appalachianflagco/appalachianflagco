import React from 'react'
import { Typography } from 'antd'
import styled from 'styled-components'

import Cart from '../components/Cart'
import Container from '../components/Container'

const CartPageContainer = styled(Container)`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 120px;
`

const { Title } = Typography
const CartPage = () => (
  <CartPageContainer>
    <Title>Cart</Title>
    <Cart />
  </CartPageContainer>
)

export default CartPage
