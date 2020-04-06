import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: fixed #ffffff
    linear-gradient(
      to bottom,
      #0f1b32,
      rgba(0, 11, 255, 0.5),
      rgba(0, 11, 255, 0) 50%
    );
`
const Page = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Header = styled.header`
  font-family: 'DM Serif Display', serif;
  padding: 1.5em 0;
`

const Logo = styled(Link)`
  font-family: 'DM Serif Display', serif;
  color: #ffffff;
  text-decoration: none;
`

const MainLayout = ({ children }) => {
  return (
    <>
      <Background />
      <Page>
        <Header>
          <Logo to={routes.home()}>Baseline</Logo>
        </Header>
        <main>{children}</main>
      </Page>
    </>
  )
}

export default MainLayout
