import styled from '@emotion/styled'
import { useState } from 'react'

const OpenBoxContainer = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.border};
  margin-top: 5px;
`
const OpenButton = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
  background-color: ${(props) => props.theme.btn};
  color: ${(props) => props.theme.color};
  stroke: ${(props) => props.theme.color};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: ${(props) => props.theme.btnHover};
    cursor: pointer;
  }

  @media (min-width: 640px) {
    font-size: 16px;
  }
`
const OpenedContent = styled.div`
  width: 100%;
  padding: 20px 12px;
  box-sizing: border-box;
  color: ${(props) => props.theme.color};
`

const OpenedContentText = styled.p`
  font-size: 14px;
  white-space: pre-wrap;
  @media (min-width: 640px) {
    font-size: 16px;
  }
`

interface OpenBoxProps {
  name: string
  explain: string
  defaultOpen: boolean
}

const OpenBox = ({ name, explain, defaultOpen = false }: OpenBoxProps) => {
  const [open, setOpen] = useState<boolean>(defaultOpen)
  return (
    <OpenBoxContainer>
      <OpenButton onClick={() => setOpen((prev) => !prev)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? <path d="M18 15l-6-6-6 6" /> : <path d="M6 9l6 6 6-6" />}
        </svg>
        <p>{name}</p>
      </OpenButton>
      {open && (
        <OpenedContent>
          <OpenedContentText>{explain}</OpenedContentText>
        </OpenedContent>
      )}
    </OpenBoxContainer>
  )
}

export default OpenBox
