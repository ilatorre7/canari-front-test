import styled from '@emotion/styled';

function StateOfArtSection() {

  const Container = styled.div`
    background: linear-gradient(90deg, hsl(237, 17%, 21%) 0%, hsl(237, 23%, 32%) 100%);
    background-size: auto 50%;
    border-bottom-left-radius: 7.5em 7.5em;
    border-top-right-radius: 7.5em 7.5em;
    overflow: hidden;
  `
  const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url('/bg-pattern-circles.svg');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: bottom left -30%;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 4rem 2rem;
      background-position: center top -10%;
    }
  `

  const Left = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
    }
  `

  const LeftMobile = styled.div`
    display: none;
    @media (max-width: 768px) {
      display: static;
    }
  `

  const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      width: 100%;
    }
  `
  const Title = styled.h2`
    margin: 0px;
    color: hsl(0, 0%, 100%);
    font-size: 2rem;
    font-family: 'Overpass', sans-serif;
    padding-bottom: 1.5rem;
    @media (max-width: 768px) {
      text-align: center;
    }
  `

  const Text = styled.p`
    margin: 0px;
    width: 60%;
    color: hsl(0, 0%, 100%);
    font-size: 1rem;
    font-family: 'Overpass', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: 0.05em;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  `

  return (
    <Container>
      <Content>
        <Left>
          <img src="/illustration-phones.svg"  />
        </Left>
        <Right>
          <Title>State of the Art Infrastructure</Title>
          <Text>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra fast conectivity.
            This ensures your site will load instantly no matter where your readers are, keeping your site competitive.
          </Text>
        </Right>
      </Content>
    </Container>
  )
}

export default StateOfArtSection