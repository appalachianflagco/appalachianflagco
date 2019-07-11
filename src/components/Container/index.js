import React from 'react'
import styled from '@emotion/styled'
import { maxWidth } from 'styled-system'
import { Flex } from '@rebass/grid/emotion'

const Container = styled(Flex)(maxWidth)

Container.defaultProps = {
  maxWidth: ['540px', '720px', '1140px'],
  margin: '0 auto',
  padding: `1.0875rem 1.45rem`,
}

export default Container
