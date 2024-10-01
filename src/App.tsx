import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import FloatMenu from 'components/FloatMenu'
import Footer from 'components/Footer'
import Main from 'components/Main'
import ProjectSection from 'components/ProjectSection'
import ToTop from 'components/ToTop'
import GlobalStyle from 'styles/GlobalStyle'
import { darkTheme, lightTheme } from 'styles/theme'
import { useTheme } from 'hooks/useTheme'
import { useEffect } from 'react'

const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
  background-color: ${(props) => props.theme.bg};
`

const Content = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;
  will-change: transform;
  background-color: ${(props) => props.theme.bg};
`

const App = () => {
  const [isDarkMode, setIsDarkMode] = useTheme()
  const currentTheme = isDarkMode ? darkTheme : lightTheme

  useEffect(() => {
    console.log(`
╔⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✞⊷⊷⊷⊷⊷⊷⊷⊷⊷╗
  Thank you for watching
      My Portfolio
╚⊶⊶⊶⊷⊷⊷⊷⊷⊶⊶✞⊷⊷⊷⊷⊷⊷⊷⊷⊷╝
    `)
  }, [])
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Container>
        <ToTop />
        <FloatMenu isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Main />
        <Content>
          <ProjectSection />
          <Footer />
        </Content>
      </Container>
    </ThemeProvider>
  )
}

export default App
