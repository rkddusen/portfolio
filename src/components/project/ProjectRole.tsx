import styled from '@emotion/styled'
import OpenBox from './OpenBox'
import { Role } from 'models/Project'

const ProjectRoleContainer = styled.div`
  margin-top: 10px;
`
interface ProjectContributionProps {
  role: Role[]
}
const ProjectRole = ({ role }: ProjectContributionProps) => {
  return (
    <ProjectRoleContainer>
      {role.map((v, i) => (
        <OpenBox
          key={i}
          name={v.name}
          explain={v.explain}
          defaultOpen={i === 0}
        />
      ))}
    </ProjectRoleContainer>
  )
}

export default ProjectRole
