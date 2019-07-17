import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Global, css } from '@emotion/core'

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
        min-height: 100%;
        font-family: 'prata';
      }
      html {
        font-family: sans-serif;
        overflow-y: scroll;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      .ant-layout {
        background-color: white;
      }

      .cart-thumb {
        width: 100%;
        height: auto;
      }
    `}
  />
)

export const Img = styled(Image)`
  max-width: 100%;
  width: 100%;
  height: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`
