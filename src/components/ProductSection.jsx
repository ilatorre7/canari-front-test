/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

function ProductSection() {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  `

  const Content = styled.div`
    padding: 6rem 8rem;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
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
    left: 50vw;
    @media (max-width: 768px) {
      width: 100%;
      display: none;
    }
  `

  const RightMobile = styled.div`
    display: none;
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      padding-bottom: 2rem;
    }
  `

  const Title = styled.h2`
    font-family: 'Overpass', sans-serif;
    font-size: 2rem;
    padding: 4rem;
    margin: 0;
    color: hsl(208, 49%, 24%);
    @media (max-width: 768px) {
      padding: 0rem;
      padding-top: 4rem;
      text-align: center;
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
      <Title>Designed for the future</Title>
      <Content>
        <Left>
          <Subtitle>Introducing an extensible editor</Subtitle>
          <ContentText>
            Blogr features an exceedingly intuitive interface which let's you focus on one thing: creating content. The editor supports management of multiple
            blogs and allows easy manipulation of embeds such as images, videos and Markdown. Extensibility with plugins and themes provide easy ways to add
            functionality or change the looks of a blog.   
          </ContentText>
          <Subtitle>Robust content management</Subtitle>
          <ContentText>
            Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections,
            format or flow. With this functionality you're in full control.
          </ContentText>
        </Left>
        <RightMobile>
          <img
            src="/illustration-editor-mobile.svg"
          />
        </RightMobile>
        <Right>
          <img
            src="/illustration-editor-desktop.svg"
          />
        </Right>
      </Content>
    </Container>
  )
}

export default ProductSection