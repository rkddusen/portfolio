import styled from '@emotion/styled'

const MainContainer = styled.div`
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 0;
`

const MainBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${(props) => props.theme.main});
  background-size: cover;
  background-position: center;
  opacity: 50%;
  z-index: 0;
`

const MainContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const MainTitle = styled.p`
  position: absolute;
  left: 20px;
  top: 20px;
  text-align: start;
  font-size: 40px;
  font-weight: 900;
  white-space: break-spaces;
  color: ${(props) => (!props.theme.isDarkMode ? 'white' : 'gray')};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (min-width: 768px) {
    font-size: 60px;
  }
`
const MainExplain = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  white-space: break-spaces;
  word-break: keep-all;
  line-height: 120%;
  font-size: 25px;
  text-align: center;
  color: ${(props) => props.theme.color};
  padding: 30px 0;
  font-weight: 700;
  & span {
    font-size: 30px;
  }

  @media (min-width: 640px) {
    font-size: 30px;
    & span {
      font-size: 36px;
    }
  }
  @media (min-width: 768px) {
    font-size: 40px;
    & span {
      font-size: 48px;
    }
  }
`

const Main = () => {
  return (
    <MainContainer>
      <MainBackground />
      <MainContent>
        <div>
          <MainTitle>Artistic{'\n'}Developer</MainTitle>
          <MainExplain>
            <p>
              안녕하세요.{'\n'}프론트엔드 개발자 <span>강두연</span>입니다.
            </p>
          </MainExplain>
        </div>
      </MainContent>
    </MainContainer>
  )
}

export default Main
