import styled from '@emotion/styled'

const InfoContent = styled.p`
  position: relative;
  padding-left: 20px;
  margin-top: 5px;
  color: ${(props) => props.theme.color};
  font-size: 14px;
  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 8px;
    left: 5px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.color};
  }

  @media (min-width: 640px) {
    font-size: 16px;
  }
`

interface ProjectInfoProps {
  info: string[]
}
const ProjectInfo = ({ info }: ProjectInfoProps) => {
  return (
    <>
      {info.map((v, i) => (
        <InfoContent key={i}>{v}</InfoContent>
      ))}
    </>
  )
}

export default ProjectInfo
