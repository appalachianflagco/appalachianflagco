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
      }
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      .ant-carousel .slick-dots li button {
        height: 16px;
        background: black;
        border-radius: 25%;
      }

      .ant-carousel .slick-dots li.slick-active button {
        background: blue;
      }
    `}
  />
)

export const Img = styled(Image)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`
