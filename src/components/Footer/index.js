import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'

const { Footer } = Layout

const StyledFooter = styled(Footer)`
  color: red;
`

const MyFooter = props => {
  return <StyledFooter>{props.children}</StyledFooter>
}

export default Footer
