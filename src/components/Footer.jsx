import styled from '@emotion/styled'
import React from 'react'
import { productButtons, connectButtons, companyButtons } from '../static';

function Footer() {

  const Container = styled.div`
    padding: 4rem;
    background-color: hsl(240, 10%, 16%);
    display: flex;
    flex-direction: row;
    border-top-right-radius: 7.5rem;
    justify-content: space-evenly;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `

  const Column = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      align-items: center;
      padding-bottom: 1rem;
    }
  `

  const BlogrLogo = styled.h1`
    color: hsl(0, 0%, 100%);
    font-size: 2.5rem;
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    @media (max-width: 768px) {
      padding-bottom: 2rem;
    }
  `

  const ColumnHeader = styled.h4`
    padding-bottom: 2rem;
    color: hsl(0, 0%, 100%);
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    margin: 0;
  `
  const ColumnButton = styled.h4`
    padding-bottom: 1rem;
    color: hsl(240, 2%, 79%);
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    margin: 0;
    &:hover {
      text-decoration: underline;
    }
  `

  return (
    <Container>
      <BlogrLogo>
        Blogr
      </BlogrLogo>
      <Column>
        <ColumnHeader>Product</ColumnHeader>
        {
          productButtons.map((button, i) => (
            <ColumnButton key={`productButton-${i}`}>{button}</ColumnButton>
          ))
        }
      </Column>
      <Column>
        <ColumnHeader>Company</ColumnHeader>
        {
          companyButtons.map((button, i) => (
            <ColumnButton key={`companyButton-${i}`}>{button}</ColumnButton>
          ))
        }
      </Column>
      <Column>
        <ColumnHeader>Connect</ColumnHeader>
        {
          connectButtons.map((button, i) => (
            <ColumnButton key={`connectButton-${i}`}>{button}</ColumnButton>
          ))
        }
      </Column>
    </Container>
  )
}

export default Footer;