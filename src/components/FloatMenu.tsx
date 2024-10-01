import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import ScreenMode from './ScreenMode'

const FloatMenuContainer = styled.div`
  position: fixed;
  bottom: 20px;
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
interface MenusProps {
  isMenuOpen: boolean
}
const MenuSvg = styled.svg<MenusProps>`
  stroke: ${(props) => props.theme.color};
  visibility: ${(props) => (!props.isMenuOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (!props.isMenuOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const MenuCloseSvg = styled.svg<MenusProps>`
  stroke: ${(props) => props.theme.color};
  visibility: ${(props) => (props.isMenuOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isMenuOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Menus = styled.div<MenusProps>`
  position: absolute;
  right: 0;
  bottom: 60px;
  max-height: ${(props) => (props.isMenuOpen ? '200px' : '0px')};
  background-color: ${(props) => props.theme.bg};
  max-width: 250px;
  /* display: ${(props) => (props.isMenuOpen ? 'block' : 'none')}; */
  border-radius: 10px;
  overflow: hidden;
  transition: max-height 400ms ease-in-out;
  box-shadow: 0 4px 10px 0
    ${(props) =>
      props.theme.isDarkMode
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.1)'};
`
const LinkMenuList = styled.a`
  display: block;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.bgHover};
  }
`
const MenuList = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 15px 15px;
  font-size: 14px;
  color: ${(props) => props.theme.color};
  & > svg {
    stroke: ${(props) => props.theme.color};
  }
`

interface FloatMenuProps {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const FloatMenu = ({ isDarkMode, setIsDarkMode }: FloatMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickEvent = (e: Event): void => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickEvent)
    return () => document.removeEventListener('click', handleClickEvent)
  }, [])

  return (
    <FloatMenuContainer ref={menuRef}>
      <FloatCircle
        onClick={() => {
          setIsMenuOpen((prev) => !prev)
        }}
      >
        <MenuSvg
          isMenuOpen={isMenuOpen}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </MenuSvg>
        <MenuCloseSvg
          isMenuOpen={isMenuOpen}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </MenuCloseSvg>
      </FloatCircle>
      <Menus isMenuOpen={isMenuOpen}>
        <div>
          <LinkMenuList
            href="https://buttercup-antlion-a0c.notion.site/104bc9ac80348045a56dd628cfbe2233"
            target="_blank"
            rel="noreferrer"
          >
            <MenuList>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
              </svg>
              <span>이력서 바로가기</span>
            </MenuList>
          </LinkMenuList>
        </div>
        <div
          style={{ width: '100%', height: '1px', backgroundColor: '#787878' }}
        ></div>
        <div>
          <MenuList>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <p>화면 모드</p>
          </MenuList>
        </div>
        <ScreenMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </Menus>
    </FloatMenuContainer>
  )
}

export default FloatMenu
