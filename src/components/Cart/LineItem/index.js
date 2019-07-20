import React, { useContext } from 'react'
import { Row, Col, Typography, Button, Icon } from 'antd'
import styled from 'styled-components'

import StoreContext from '../../../context/StoreContext'

const { Text, Title } = Typography

const RemoveButton = styled(Button)`
  background-color: #972136 !important;
  color: white !important;
  margin-top: 30px;
`

const LineItem = props => {
  const context = useContext(StoreContext)
  const { line_item } = props

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      className="cart-thumb"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions ? (
    <>
      {line_item.variant.selectedOptions.map(option => {
        return (
          <>
            <Text>{option.name}: </Text>
            <Text>{option.value}</Text>
            <br />
          </>
        )
      })}
    </>
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  return (
    <Row gutter={16}>
      <Col xs={8} md={4}>
        <div>{variantImage}</div>
      </Col>
      <Col span={16}>
        <Title level={4}>{line_item.title}</Title>

        <div>
          {line_item.variant.title !== 'Default Title' && selectedOptions}
        </div>

        <Text>Quantity: </Text>
        <Text>{line_item.quantity}</Text>
        <br />
        <RemoveButton onClick={handleRemove}>
          Remove <Icon type="delete" />
        </RemoveButton>
      </Col>
    </Row>
  )
}

export default LineItem
