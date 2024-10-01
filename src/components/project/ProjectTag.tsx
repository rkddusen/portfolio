import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface TagProps {
  bg: string
  color: string
}
const Tag = styled.div<TagProps>`
  padding: 6px 12px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-radius: 5px;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`

interface ProjectTagProps {
  bg: string
  color: string
  children: ReactNode
}
const ProjectTag = ({ bg, color, children }: ProjectTagProps) => {
  return (
    <Tag bg={bg} color={color}>
      # {children}
    </Tag>
  )
}

export default ProjectTag
