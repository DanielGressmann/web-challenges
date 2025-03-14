import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledList>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </StyledList>
      </StyledNav>
      <Component {...pageProps} />
    </>
  );
}
