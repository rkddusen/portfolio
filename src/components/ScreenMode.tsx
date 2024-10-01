import styled from '@emotion/styled'
import { ReactNode, useEffect, useState } from 'react'

const ScreenModeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 20px 10px 20px;
  box-sizing: border-box;
`

interface ScreenModeProps {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
const ScreenMode = ({ isDarkMode, setIsDarkMode }: ScreenModeProps) => {
  const [modeCheck, setModeCheck] = useState<number>(1)

  useEffect(() => {
    if (localStorage.getItem('themeMode') === null) {
      setModeCheck(1)
    } else {
      if (!isDarkMode) setModeCheck(2)
      else setModeCheck(3)
    }
  }, [])

  const handleDeviceTheme = (): void => {
    const isBrowserDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(isBrowserDarkMode)
    window.localStorage.removeItem('themeMode')
    setModeCheck(1)
  }
  const handleLightTheme = (): void => {
    setIsDarkMode(false)
    window.localStorage.setItem('themeMode', 'light')
    setModeCheck(2)
  }
  const handleDarkTheme = (): void => {
    setIsDarkMode(true)
    window.localStorage.setItem('themeMode', 'dark')
    setModeCheck(3)
  }
  return (
    <ScreenModeContainer>
      <Mode
        name="기기 설정"
        modeId={1}
        handleModeClick={handleDeviceTheme}
        isCheck={modeCheck === 1}
      >
        <>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </>
      </Mode>
      <Mode
        name="라이트 모드"
        modeId={2}
        handleModeClick={handleLightTheme}
        isCheck={modeCheck === 2}
      >
        <>
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </>
      </Mode>
      <Mode
        name="다크 모드"
        modeId={3}
        handleModeClick={handleDarkTheme}
        isCheck={modeCheck === 3}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </Mode>
    </ScreenModeContainer>
  )
}

const ModeContainer = styled.div`
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`
interface ModeBoxProps {
  isCheck: boolean
}
const ModeBox = styled.div<ModeBoxProps>`
  position: relative;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  box-sizing: border-box;
  border: ${(props) =>
    props.isCheck
      ? `1px solid ${props.theme.isDarkMode ? 'white' : 'black'}`
      : `1px solid ${props.theme.border}`};
  stroke: ${(props) => props.theme.color};
`
interface ModeBoxProps {
  isDark?: boolean
}
const ModeBoxTheme = styled(ModeBox)<ModeBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isDark ? '#1a1a1a' : '#ffffff')};
  stroke: ${(props) => (props.isDark ? '#ffffff' : '#1a1a1a')};
`
interface BoxHalfProps {
  right?: boolean
}
const BoxHalf = styled.div<BoxHalfProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.right ? '50%' : 0)};
  right: ${(props) => (props.right ? 0 : '50%')};
  background-color: ${(props) => (props.right ? '#1a1a1a' : '#ffffff')};
  overflow: hidden;
`
const DeviceSvg = styled.svg<BoxHalfProps>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.right ? 0 : '100%')};
  transform: translate(-50%, -50%);
  stroke: ${(props) => (props.right ? '#ffffff' : '#1a1a1a')};
`
interface ModeCheckProps {
  isCheck: boolean
}
const ModeCheck = styled.div<ModeCheckProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: ${(props) => (props.isCheck ? 'visible' : 'hidden')};
  background-color: ${(props) => props.theme.bgHover};
  opacity: 90%;
`
const Check = styled.svg<ModeCheckProps>`
  visibility: ${(props) => (props.isCheck ? 'visible' : 'hidden')};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const ModeName = styled.p`
  font-size: 12px;
  margin-top: 5px;
  color: ${(props) => props.theme.color};
  white-space: nowrap;
`
interface ModeProps {
  name: string
  modeId: number
  handleModeClick: () => void
  children: ReactNode
  isCheck: boolean
}
const Mode = ({
  name,
  modeId,
  handleModeClick,
  children,
  isCheck,
}: ModeProps) => {
  return (
    <ModeContainer onClick={handleModeClick}>
      {modeId === 1 ? (
        <ModeBox isCheck={isCheck}>
          <BoxHalf>
            <DeviceSvg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {children}
            </DeviceSvg>
          </BoxHalf>
          <BoxHalf right>
            <DeviceSvg
              right
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {children}
            </DeviceSvg>
          </BoxHalf>
          <ModeCheck isCheck={isCheck} />
          <Check
            isCheck={isCheck}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </Check>
        </ModeBox>
      ) : (
        <ModeBoxTheme isDark={modeId === 3} isCheck={isCheck}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {children}
          </svg>
          <ModeCheck isCheck={isCheck} />
          <Check
            isCheck={isCheck}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </Check>
        </ModeBoxTheme>
      )}
      <ModeName>{name}</ModeName>
    </ModeContainer>
  )
}

export default ScreenMode
