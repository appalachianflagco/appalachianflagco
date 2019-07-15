import React, { useContext } from 'react'
import { Row, Col, Typography, Button, Divider, Icon } from 'antd'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

const { Title, Text } = Typography

const Cart = () => {
  const context = useContext(StoreContext)
  const { checkout } = context

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return (
      <>
        <LineItem key={line_item.id.toString()} line_item={line_item} />
        <Divider />
      </>
    )
  })

  return (
    <Row gutter={16}>
      <Col span={16}>{line_items}</Col>
      <Col span={8}>
        <Title level={3}>Subtotal</Title>
        <Text>$ {checkout.subtotalPrice}</Text>
        <Title level={3}>Taxes</Title>
        <Text>$ {checkout.totalTax}</Text>
        <Title level={3}>Total</Title>
        <Text>$ {checkout.totalPrice}</Text>
        <Divider></Divider>
        <Button onClick={handleCheckout}>
          Check Out <Icon type="shopping" />
        </Button>
      </Col>
    </Row>
  )
}

export default Cart
