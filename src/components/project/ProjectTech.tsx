import styled from '@emotion/styled'
import OpenBox from './OpenBox'
import { Tech } from 'models/Project'

const Version = styled.div`
  margin-top: 10px;
`
const VersionInfo = styled.p`
  font-style: italic;
  position: relative;
  padding-left: 20px;
  margin-top: 5px;
  color: ${(props) => props.theme.color};
  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 10px;
    left: 5px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.color};
  }
`

interface ProjectTechProps {
  tech: Tech[][]
}
const ProjectTech = ({ tech }: ProjectTechProps) => {
  return (
    <>
      {tech.map((v, i) => (
        <Version key={i}>
          {tech.length > 1 && <VersionInfo>version. {i + 1}</VersionInfo>}
          <div>
            {v.map((v1, i1) => (
              <OpenBox
                key={i1}
                name={v1.name}
                explain={v1.explain}
                defaultOpen={i === 0 && i1 === 0}
              />
            ))}
          </div>
        </Version>
      ))}
    </>
  )
}

export default ProjectTech
