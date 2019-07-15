import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StoreContext from '../../context/StoreContext'
import VariantSelector from './VariantSelector'
import { Button, Input, Typography, Form, Icon } from 'antd'

const { Title, Text } = Typography

const BuyButton = styled(Button)`
  background-color: green !important;
  color: white !important;

  &:focus,
  &:hover {
    border-color: green !important;
  }
`

const ProductForm = props => {
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(props.product.variants[0])
  const context = useContext(StoreContext)

  const hasVariants = props.product.variants.length > 1
  const productVariant =
    context.client.product.helpers.variantForOptions(props.product, variant) ||
    variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  useEffect(() => {
    let defaultOptionValues = {}
    props.product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0]
    })
    setVariant(defaultOptionValues)
  }, [])

  useEffect(() => {
    checkAvailability(props.product.shopifyId)
  }, [productVariant])

  const checkAvailability = productId => {
    context.client.product.fetch(productId).then(product => {
      // this checks the currently selected variant for availability
      const result = product.variants.filter(
        variant => variant.id === productVariant.shopifyId
      )
      setAvailable(result[0].available)
    })
  }

  const handleQuantityChange = event => {
    setQuantity(event.target.value)
  }

  const handleOptionChange = (name, value) => {
    setVariant(prevState => ({
      ...prevState,
      [name]: value,
    }))

    props.setActiveColor(value)
  }

  const handleAddToCart = () => {
    context.addVariantToCart(productVariant.shopifyId, quantity)
  }

  const variantSelectors = hasVariants
    ? props.product.options.map(option => {
        return (
          <Form.Item label={option.name}>
            <VariantSelector
              onChange={handleOptionChange}
              key={option.id.toString()}
              option={option}
            />
          </Form.Item>
        )
      })
    : null

  return (
    <>
      <Title level={4}>${productVariant.price}</Title>
      <Form
        layout="horizontal"
        labelCol={{ xs: { span: 24 }, sm: { span: 4 } }}
        wrapperCol={{ xs: { span: 12 }, sm: { span: 4 } }}
        labelAlign="left"
      >
        {variantSelectors}
        <Form.Item label="Quantity">
          <Input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            onChange={handleQuantityChange}
            value={quantity}
          />
        </Form.Item>
        <Form.Item>
          <BuyButton
            htmlType="submit"
            disabled={!available}
            onClick={handleAddToCart}
          >
            Add to Cart
          </BuyButton>
        </Form.Item>
        {!available && (
          <Text type="danger">
            <Icon type="exclamation-circle" theme="filled" />
            This Product is out of Stock!
          </Text>
        )}
      </Form>
    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
