/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

function LaptopSection() {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  `

  const Content = styled.div`
    padding: 12rem 8rem;
    position: relative;
    display: flex;
    flex-direction: reverse-row;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 2rem 0rem;
    }
  `

  const Left = styled.div`
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `

  const Right = styled.div`
    width: 50%;
    position: absolute;
    left: -25vw;
    @media (max-width: 768px) {
      display: none;
    }
  `

  const RightMobile = styled.div`
    display: none;
    @media (max-width: 768px) {
      display: flex;
      padding-bottom: 2rem;
    }
  `

  const Subtitle = styled.h3`
    font-family: 'Overpass', sans-serif;
    color: hsl(208, 49%, 24%);
    font-size: 1.5rem;
    margin: 0rem;
    padding-bottom: 1.5rem;
    @media (max-width: 768px) {
      text-align: center;
    }
  `

  const ContentText = styled.p`
    width: 80%;
    font-weight: 300;
    font-family: 'Overpass', sans-serif;
    font-size: 1rem;
    color: hsl(208, 49%, 24%);
    line-height: 1.5;
    letter-spacing: 0.05rem;
    margin: 0rem;
    padding-bottom: 4rem;
    @media (max-width: 768px) {
      text-align: center;
    }
  `

  return (
    <Container>
      <Content>
        <RightMobile>
          <img 
            src="/illustration-laptop-mobile.svg"
          />
        </RightMobile>
        <Right>
          <img 
            src="/illustration-laptop-desktop.svg"
          />
        </Right>
        <Left>
          <Subtitle>Free, open, simple</Subtitle>
          <ContentText>
            Blogr is a free and open source application backed by a large community of helpful developers.
            It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party
            commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn   
          </ContentText>
          <Subtitle>Powerful Tooling</Subtitle>
          <ContentText>
            Batteries included. We built a simple and straight forward CLI tool that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </ContentText>
        </Left>
      </Content>
    </Container>
  )
}

export default LaptopSection;
