import React from 'react'
import styled from 'styled-components'
import { Layout, Icon } from 'antd'

const { Footer } = Layout

const StyledFooter = styled(Footer)`
  background: linear-gradient(
    -45deg,
    #020024,
    #212351 85%,
    #eee 85%,
    #fff,
    90%,
    #c48340 90%,
    #b48340 95%,
    #343436 95%,
    #243436 100%
  ) !important;
  color: white !important;
  height: 400px;
`

const SocialList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 auto;
  justify-self: center;
  flex-direction: row;
  width: 300px;
  padding-left: 0px;
  justify-content: space-between;
`

const SocialItem = styled.li`
  font-size: 2rem;
`

const SocialLink = styled.a`
  color: white;
`

const Copyright = styled.div`
  width: 25%;
  text-align: center;
  margin: 0 auto;
`

const MyFooter = props => {
  return (
    <StyledFooter>
      <SocialList>
        <SocialItem>
          <SocialLink
            href="https://www.instagram.com/appalachianflagco/"
            target="_blank"
          >
            <Icon type="instagram" />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink
            href="https://twitter.com/appalachianflag"
            target="_blank"
          >
            <Icon type="twitter" />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink
            href="https://www.facebook.com/appalachianflagco/"
            target="_blank"
          >
            <Icon type="facebook" />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink
            href="https://www.youtube.com/channel/UCr1gUGcyDZ33MjQFHH5kQBA"
            target="_blank"
          >
            <Icon type="youtube" />
          </SocialLink>
        </SocialItem>
      </SocialList>
      <Copyright>© {new Date().getFullYear()}</Copyright>
    </StyledFooter>
  )
}

export default MyFooter
