import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import SplitText from 'react-pose-text'

const wordPoses = {
  exit: { opacity: 0, y: 100 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ wordIndex }) => wordIndex * 300,
  },
}

const SplitTextContainer = styled.h1`
  position: absolute;
  right: 5%;
  top: 33vh;
  color: white;
  z-index: 1;
  text-align: center;
  pointer-events: none;
`

const MainText = styled.div`
  font-size: 2.5rem;
  font-family: 'work sans';
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 5px 5px #000;
`

const SecondaryText = styled.div`
  font-family: 'prata';
`

const FluidImage = styled(Img)`
  width: 100%;
  height: 100%;
`
const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Triangle = styled.div`
  position: absolute;
  display: inline-block;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(33, 35, 81, 1) 35%,
    rgba(33, 35, 81, 1) 100%
  );
  width: 200vw;
  height: 200vh;
  transform: rotate(-45deg) translateY(-50%) translateX(45%);
  transition: transform 1s;

  &:hover {
    transform: rotate(0) translateY(-50%) translateX(33%);
  }
`

const Hero = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp(filter: { original: { src: { regex: "/hero/" } } }) {
            edges {
              node {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={data => (
        <HeroContainer>
          <SplitTextContainer>
            <SecondaryText>
              <SplitText initialPose="exit" pose="enter" wordPoses={wordPoses}>
                - The -
              </SplitText>
            </SecondaryText>
            <MainText>
              <SplitText initialPose="exit" pose="enter" wordPoses={wordPoses}>
                Appalachian
              </SplitText>
            </MainText>
            <MainText>
              <SplitText initialPose="exit" pose="enter" wordPoses={wordPoses}>
                Flag Company
              </SplitText>
            </MainText>
            <SecondaryText>
              <SplitText initialPose="exit" pose="enter" wordPoses={wordPoses}>
                - est. 2015 -
              </SplitText>
            </SecondaryText>
          </SplitTextContainer>

          <FluidImage fluid={data.allImageSharp.edges[0].node.fluid} />
          <Triangle />
        </HeroContainer>
      )}
    />
  )
}

export default Hero
