import styled from '@emotion/styled';
import { useState } from 'react';



function NavBar() {

  const [open, setOpen] = useState(false);

  const Container = styled.div`
    width: 100%;
  `

  const Content = styled.div`
    display: flex;
    align-items: baseline;
    padding: 0em 8em;
    padding-bottom: 6em;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0em;
      height: ${open ? '400px' : '0px'};
    }
  `

  const Menu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      position: absolute;
      flex-direction: column;
      align-items: center;
      background-color: hsl(0, 0%, 100%);
      padding: 1em 0em;
    }
  `

  const Left = styled.div`
    display: flex;
    padding: 0rem 2rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `

  const Right = styled.div`
    @media (max-width: 768px) {
      width: full;
      display: flex;
      flex-direction: column;
      background-color: hsl(0, 0%, 100%);
      border-top: 1px solid hsl(240, 2%, 79%);
      margin: 0em 1em;
    }
  `

  const BlogrLogo = styled.h1`
    color: hsl(0, 0%, 100%);
    font-size: 2.5rem;
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    @media (max-width: 768px) {
      padding-bottom: 1em;
    }
  `

  const MenuButton = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-size: 1rem;
    color: hsl(0, 0%, 100%);
    padding-left: 2rem;
    @media (max-width: 768px) {
      color: hsl(240, 10%, 16%);
      padding-bottom: 1rem;
    }
    &:hover {
      text-decoration: underline;
    }
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
    @media (max-width: 768px) {
      color: hsl(0, 0%, 100%);
      background: linear-gradient(90deg, hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%);
    }
    &:hover {
      background-color: hsl(355, 100%, 74%)
    }
  `

  const SecondaryButton = styled.button`
    border-radius: 2.5rem;
    padding: 1rem;
    background-color: transparent;
    color: hsl(240, 2%, 79%);
    font-family: 'Ubuntu', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    border: 0px;
    @media (max-width: 768px) {
      color: hsl(240, 10%, 16%);
    }
  `

  const options = ['Product', 'Company', 'Contact'];

  return (
    <Container>
      <Content>
        <BlogrLogo>Blogr</BlogrLogo>
        <Menu>
          <Left>
            {
              options.map((option, i) => (
                <MenuButton key={`menu-button-${i}`}>
                  {option}
                  <img src="/icon-arrow-light.svg" style={{ paddingLeft: '0.5rem' }} />
                </MenuButton>
              ))
            }
          </Left>
          <Right>
            <SecondaryButton>Login</SecondaryButton>
            <PrimaryButton>Sign Up</PrimaryButton>
          </Right>
        </Menu>
      </Content>
    </Container>
  )
}

export default NavBar