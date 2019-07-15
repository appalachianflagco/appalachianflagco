import React from 'react'
import { Row, Col } from 'antd'
import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'
import StyledTitle from '../components/StyledTitle'
import StyledText from '../components/StyledText'
import Hero from '../components/Hero'
import Container from '../components/Container'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero></Hero>
    <Container>
      <StyledTitle level={2}>Shop</StyledTitle>
      <ProductGrid />
      <Row type="flex" justify="center" align="middle">
        <Col span={24}>
          <StyledTitle level={2}>About</StyledTitle>
        </Col>
      </Row>
      <Row gutter={32}>
        <Col span={12}>
          <StyledTitle level={3}>Origin</StyledTitle>
          <StyledText>
            The Appalachian Flag Company was founded in 2015 by Grayson and Gaby
            Hicks. Through their lifelong love of the Appalachian region, they
            realized that no symbol, no flag, had succeeded in representing the
            people that inhabited Appalachia. There were American flags, state
            flags, Confederate flags, college flags, but none of these evoked an
            accurate sense of place. Appalachia is different than America,
            different than the states in which it lies. It is different than the
            Confederacy and different than the colleges that lie within it. So
            we travelled the spine of Appalachia and designed a flag that every
            Appalachian should be proud to fly, the Appalachian Flag.
          </StyledText>
        </Col>
        <Col span={12}>
          <StyledTitle level={3}>Symbolism</StyledTitle>
          <StyledText>
            This company is first and foremost about the flag. We’re often asked
            about the story behind its design. We set out to create a timeless
            symbol that tells the story of Appalachia. Here’s the breakdown:
            green for the rolling hills and thick forests, blue for the vital
            crystal waters, a white star for each state that these hills touch,
            gray for the mystic, blanketing fogs, a dignified scroll proclaiming
            our name, and last but not least, our black bear. He captures the
            spirit of power, freedom, and ingenuity of the Appalachian people
            (we still love you, salamanders). Our dream is that this flag will
            reach the home, heart, and porch of every Appalachian, uniting us
            all as one.
          </StyledText>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <StyledTitle level={3}>Watch</StyledTitle>
          <iframe
            alt="camping flower gap black balsam appalachia"
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/F9Gbq3hRsJc?&amp;showinfo=0&amp;rel=0"
            frameBorder="0"
            allowFullScreen=""
          ></iframe>
        </Col>
      </Row>
    </Container>
  </>
)

export default IndexPage
