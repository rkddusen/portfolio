import styled from '@emotion/styled'
import kuphil_web_thumbnail from '../assets/thumbnail/kuphilWeb/images'
import color_me_thumbnail from '../assets/thumbnail/colorMe/images'
import yorizori_thumbnail from '../assets/thumbnail/yorizori/images'
import duyeons_portfolio_thumbnail from '../assets/thumbnail/duyeonsPortfolio/images'
import soool_with_wine_thumbnail from '../assets/thumbnail/sooolWithWine/images'
import ProjectItem from './project/ProjectItem'
import IntersectionObserver from './IntersectionObserver'
import KuphilWeb from './troubleshooting/KuphilWeb'
import ColorMe from './troubleshooting/ColorMe'
import SooolWithWine from './troubleshooting/SooolWithWine'

const ProjectContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
`
const ProjectTitle = styled.p`
  color: ${(props) => props.theme.color};
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 20px;

  @media (min-width: 640px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
  }
`
const Line = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color};
  height: 2px;
`

const ProjectSection = () => {
  return (
    <ProjectContainer>
      <ProjectTitle>Project</ProjectTitle>
      <Line />
      <div>
        <IntersectionObserver>
          <ProjectItem
            index={0}
            thumbnail={kuphil_web_thumbnail}
            Troubleshooting={KuphilWeb}
          />
        </IntersectionObserver>
        <IntersectionObserver>
          <ProjectItem
            index={1}
            thumbnail={color_me_thumbnail}
            Troubleshooting={ColorMe}
          />
        </IntersectionObserver>
        <IntersectionObserver>
          <ProjectItem
            index={2}
            thumbnail={yorizori_thumbnail}
            Troubleshooting={null}
          />
        </IntersectionObserver>
        <IntersectionObserver>
          <ProjectItem
            index={3}
            thumbnail={duyeons_portfolio_thumbnail}
            Troubleshooting={null}
          />
        </IntersectionObserver>
        <IntersectionObserver>
          <ProjectItem
            index={4}
            thumbnail={soool_with_wine_thumbnail}
            Troubleshooting={SooolWithWine}
          />
        </IntersectionObserver>
      </div>
    </ProjectContainer>
  )
}

export default ProjectSection
