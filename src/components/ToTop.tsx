import styled from '@emotion/styled'

const FloatMenuContainer = styled.div`
  position: fixed;
  bottom: 85px;
  right: 20px;
  z-index: 99;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const FloatCircle = styled.div`
  position: relative;
  right: 0;
  bottom: 0;
  width: 54px;
  height: 54px;
  background-color: ${(props) => props.theme.bg};
  border-radius: 20px;
  box-shadow: 0 2px 10px 0
    ${(props) =>
      props.theme.isDarkMode
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.1)'};
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 12px 2px
      ${(props) =>
        props.theme.isDarkMode
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.1)'};
  }
  &:active {
    width: 48px;
    height: 48px;
    bottom: 3px;
    right: 3px;
  }
`
const TopBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const TopSvg = styled.svg`
  stroke: ${(props) => props.theme.color};
`
const TopText = styled.p`
  color: ${(props) => props.theme.color};
  font-size: 14px;
`

const ToTop = () => {
  const handleToTop = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <FloatMenuContainer>
      <FloatCircle onClick={handleToTop}>
        <TopBtn>
          <TopSvg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </TopSvg>
          <TopText>TOP</TopText>
        </TopBtn>
      </FloatCircle>
    </FloatMenuContainer>
  )
}

export default ToTop
