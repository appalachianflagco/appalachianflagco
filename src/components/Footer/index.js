import React from 'react'
import styled from 'styled-components'
import { Layout, Icon } from 'antd'

const { Footer } = Layout

const StyledFooter = styled(Footer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: inset 1px 4px 15px -6px #000;
  background-color: #212351 !important;
  color: white !important;
  height: 200px;
`

const SocialList = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 45px;
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

  @media (max-width: 768px) {
    width: 100%;
  }
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
      <Copyright>© {new Date().getFullYear()} Appalachian Flag Co.</Copyright>
    </StyledFooter>
  )
}

export default MyFooter
