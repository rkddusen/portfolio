import styled from '@emotion/styled'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'

const ToastContainer = styled.div`
  position: fixed;
  text-align: center;
  z-index: 99;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 20px 30px;
  background-color: white;
  border-radius: 50px;
  white-space: break-spaces;
  word-break: keep-all;

  box-shadow: 0 2px 10px 0
    ${(props) =>
      props.theme.isDarkMode
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.1)'};
`
interface ToastProps {
  setToast: React.Dispatch<React.SetStateAction<boolean>>
  text: string
}
const Toast = ({ setToast, text }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false)
    }, 1500)
    return () => {
      clearTimeout(timer)
    }
  }, [setToast])

  return ReactDOM.createPortal(
    <ToastContainer>{text}</ToastContainer>,
    document.body,
  )
}

export default Toast
