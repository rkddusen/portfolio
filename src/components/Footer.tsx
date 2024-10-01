import styled from '@emotion/styled'
import { ThemeSnsType } from 'styles/theme'
import Toast from './Toast'
import { useState } from 'react'

const FooterContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  overflow: hidden;
`
const FooterContent = styled.div``
const FooterExplain = styled.p`
  line-height: 120%;
  font-size: 25px;
  text-align: center;
  color: ${(props) => props.theme.color};
  margin-top: 100px;
  font-weight: 700;
  white-space: break-spaces;
  word-break: keep-all;
  padding: 0 10px;

  @media (min-width: 640px) {
    font-size: 30px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
  }
`
const SnsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 50px 0;
  flex-wrap: wrap;
  @media (min-width: 640px) {
    gap: 20px;
  }
  @media (min-width: 768px) {
    gap: 30px;
  }
`
const SnsBtn = styled.div`
  background-color: ${(props) => props.theme.box};
  width: 80px;
  height: 80px;
  border-radius: 30px;
  flex-shrink: 0;
  padding: 15px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 12px 2px
      ${(props) =>
        props.theme.isDarkMode
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.1)'};
  }

  @media (min-width: 640px) {
    width: 100px;
    height: 100px;
    padding: 15px;
  }
  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    padding: 20px;
  }
`
interface SnsIcon {
  icon: keyof ThemeSnsType
}
const SnsIcon = styled.div<SnsIcon>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${(props) => props.theme[props.icon]});
`
const Copyright = styled.p`
  text-align: center;
  font-size: 12px;
  color: ${(props) => props.theme.color};
  margin-top: 100px;
`

const Footer = () => {
  const [toast, setToast] = useState<boolean>(false)
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setToast(true)
    } catch (err) {
      setToast(false)
      console.log(err)
    }
  }
  return (
    <FooterContainer>
      <FooterContent>
        <FooterExplain>
          지금까지 강두연의 포트폴리오였습니다.{'\n'}감사합니다!
        </FooterExplain>
        <SnsContent>
          <SnsBtn onClick={() => copyToClipboard('k99endus@naver.com')}>
            <SnsIcon icon={'naver'} />
          </SnsBtn>
          <a
            href="https://open.kakao.com/o/sjXBWYre"
            target="_blank"
            rel="noreferrer"
          >
            <SnsBtn>
              <SnsIcon icon={'kakaotalk'} />
            </SnsBtn>
          </a>
          <a
            href="https://github.com/rkddusen"
            target="_blank"
            rel="noreferrer"
          >
            <SnsBtn>
              <SnsIcon icon={'git'} />
            </SnsBtn>
          </a>
          <a href="https://duyaan.tistory.com" target="_blank" rel="noreferrer">
            <SnsBtn>
              <SnsIcon icon={'tistory'} />
            </SnsBtn>
          </a>
        </SnsContent>
        <Copyright>Copyright 2024. kangduyeon all rights reserved.</Copyright>
      </FooterContent>
      {toast && (
        <Toast
          setToast={setToast}
          text={'이메일 주소가 클립보드에 복사되었습니다.'}
        />
      )}
    </FooterContainer>
  )
}

export default Footer
