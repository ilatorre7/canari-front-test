/** @jsxImportSource @emotion/react */
import NavBar from './NavBar';
import styled from '@emotion/styled';

function Hero() {

  const Container = styled.div`
    background: linear-gradient(90deg, hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%);
    border-bottom-left-radius: 7.5em 7.5em;
  `
  const Content = styled.div`
    padding: 6rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('/bg-pattern-intro-desktop.svg');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: bottom left -30%;
    @media (max-width: 768px) {
      font-size: 2em;
      text-align: center;
    }
  `

  const Header = styled.h1`
    color: hsl(0, 0%, 100%);
    font-family: 'Overpass', sans-serif;
    font-weight: 600;
    font-size: 4em;
    padding-bottom: 0.5em;
    margin: 0rem;
    @media (max-width: 768px) {
      font-size: 2em;
      text-align: center;
    }
  `;

  const SubHeader = styled.h2`
    color: hsl(0, 0%, 100%);
    font-family: 'Overpass', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    padding-bottom: 3rem;
    margin: 0rem;
  `

  const ButtonContainer = styled.div`
    display: flex;
    gap: 2em;
  `

  const PrimaryButton = styled.button`
    border-radius: 2.5rem;
    padding: 1rem;
    background-color: hsl(0, 0%, 100%);
    font-family: 'Ubuntu', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: hsl(353, 100%, 62%);
    border: 0px;
    &:hover {
      background-color: hsl(355, 100%, 74%);
    }
  `

  const SecondaryButton = styled.button`
    border-radius: 2.5rem;
    padding: 1rem;
    background-color: transparent;
    color: hsl(0, 0%, 100%);
    font-family: 'Ubuntu', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    border: 1px solid hsl(0, 0%, 100%);
    &:hover {
      background-color: hsl(0, 0%, 100%);
      color: hsl(355, 100%, 74%);
    }
  `

  return (
    <Container>
      <Content>
        <NavBar />
        <Header>A modern publishing platform</Header>
        <SubHeader>Grow your audience and build your online brand</SubHeader>
        <ButtonContainer>
          <PrimaryButton>Start for Free</PrimaryButton>
          <SecondaryButton>Learn More</SecondaryButton>
        </ButtonContainer> 
      </Content>
    </Container>
  )
}

export default Hero