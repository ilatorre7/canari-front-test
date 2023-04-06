import styled from '@emotion/styled';
import { useState } from 'react';
import { productButtons, connectButtons, companyButtons } from '../static';

function NavBar() {

  const [open, setOpen] = useState(false);

  const [productOpen, setProductOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

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
      align-items: center;
      padding: 1em 1em;
    }
  `

  const Menu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    @media (max-width: 768px) {
      position: absolute;
      width: 80%;
      top: 100px;
      flex-direction: column;
      background-color: hsl(0, 0%, 100%);
      padding: ${open ? '1em 0em' : '0em'};
      height: ${open ? 'auto' : '0px'};
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      transition: height 0.5s;
      border-radius: 0.5rem;
    }
  `

  const ButtonMenu = styled.div`
    padding-left: 2rem;
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      padding-left: 0rem;
      flex-direction: column;
      align-items: center;
    }
  `

  const ButtonMenuText = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-size: 1rem;
    color: hsl(0, 0%, 100%);
    @media (max-width: 768px) {
      color: ${props => props.state ? 'hsl(240, 2%, 79%)' : 'hsl(240, 10%, 16%)'};
      padding-bottom: 1rem;
      text-align: center;
      font-weight: 500;
    }
    &:hover {
      text-decoration: underline;
    }
  `

  const OpenedButtonMenu = styled.div`
    position: absolute;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-top: 1rem;
    padding: ${props => props.state ? '1em 2em' : '0em'};
    height: ${props => props.state ? 'auto' : '0px'};
    background-color: hsl(0, 0%, 100%);
    @media (max-width: 768px) {
      width: 80%;
      position: static;
      padding: 0rem;
      background-color: hsl(240, 2%, 79%);
      margin-bottom: 1rem;
    }
  `

  const OptionMenu = styled.h2`
    margin: 0;
    padding: 1rem 0rem;
    color: hsl(240, 10%, 16%);
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    &:hover {
      font-weight: 700;
    }
    @media (max-width: 768px) {
      padding: 1rem;
    }
  `

  const Left = styled.div`
    display: flex;
    padding: 0rem 2rem;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      padding: 0rem 0rem;
      align-items: center;
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
      align-self: flex-start;
    }
  `

  const MenuMobile = styled.div`
    display: none;
    position: absolute;
    right: 1.5em;
    @media (max-width: 768px) {
      display: block;
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

  return (
    <Container>
      <Content>
        <BlogrLogo>Blogr</BlogrLogo>
        <MenuMobile onClick={() => setOpen(!open)}>
          <img src={`${open ? '/icon-close.svg' : '/icon-hamburger.svg' }`} />
        </MenuMobile>
        <Menu>
          <Left>
            <ButtonMenu>
              <ButtonMenuText state={productOpen} onClick={() => setProductOpen(!productOpen)}>
                Product
                <img src="/icon-arrow-light.svg" style={{ paddingLeft: '0.5rem' }} />
              </ButtonMenuText>
              <OpenedButtonMenu state={productOpen}>
                {
                  productButtons.map((option, i) => (
                    <OptionMenu key={`productButton-${i}`} >
                      {option}
                    </OptionMenu>
                  ))
                }
              </OpenedButtonMenu>
            </ButtonMenu>
            <ButtonMenu>
              <ButtonMenuText state={companyOpen} onClick={() => setCompanyOpen(!companyOpen)}>
                Company
                <img src="/icon-arrow-light.svg" style={{ paddingLeft: '0.5rem' }} />
              </ButtonMenuText>
              <OpenedButtonMenu state={companyOpen}>
                {
                  companyButtons.map((option, i) => (
                    <OptionMenu key={`companyButton-${i}`} >
                      {option}
                    </OptionMenu>
                  ))
                }
              </OpenedButtonMenu>
            </ButtonMenu>
            <ButtonMenu>
              <ButtonMenuText state={contactOpen} onClick={() => setContactOpen(!contactOpen)}>
                Connect
                <img src="/icon-arrow-light.svg" style={{ paddingLeft: '0.5rem' }} />
              </ButtonMenuText>
              <OpenedButtonMenu state={contactOpen}>
                {
                  connectButtons.map((option, i) => (
                    <OptionMenu key={`contactButton-${i}`} >
                      {option}
                    </OptionMenu>
                  ))
                }
              </OpenedButtonMenu>
            </ButtonMenu>
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