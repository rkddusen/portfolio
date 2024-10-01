import styled from '@emotion/styled'
import { Project } from 'models/Project'
import projectData from 'data/projects.json'
import ProjectTag from './ProjectTag'
import ProjectInfo from './ProjectInfo'
import ProjectRole from './ProjectRole'
import ProjectTech from './ProjectTech'
import { useState } from 'react'
import ImageSlider from './ImageSlider'

const ProjectItemContainer = styled.div`
  margin-top: 20px;
  padding: 30px 0;
  background-color: ${(props) => props.theme.box};
  border-radius: 20px;
  position: relative;
`
const ProjectItemContent = styled.div`
  padding: 0 20px;
  max-width: 600px;
  margin: 0 auto;
`
const Date = styled.p`
  color: ${(props) => props.theme.color};
  text-align: center;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`
const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  color: ${(props) => props.theme.color};
  text-align: center;

  @media (min-width: 640px) {
    font-size: 25px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
  }
`
const Tags = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`
const ProjectLink = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const ProjectLinkBtn = styled.div`
  padding: 15px 20px;
  font-size: 12px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.btn};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.btnHover};
    box-shadow: 0 4px 10px 0
      ${(props) =>
        props.theme.isDarkMode
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.1)'};
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`
const OpenProjectDetail = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
const OpenProjectDetailBtn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-bottom: 1px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  stroke: ${(props) => props.theme.color};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.hover};
    stroke: ${(props) => props.theme.hover};
  }
`
const OpenProjectDetailText = styled.p`
  font-weight: bold;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`
const Detail = styled.div`
  width: 100%;
  margin-top: 20px;
  line-height: 150%;
`
const DetailTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.color};

  @media (min-width: 640px) {
    font-size: 20px;
  }
`

interface ProjectItemProps {
  index: number
  thumbnail: string[]
  Troubleshooting: React.ComponentType | null
}
const ProjectItem = ({
  index,
  thumbnail,
  Troubleshooting,
}: ProjectItemProps) => {
  const [openDetail, setOpenDetail] = useState<boolean>(false)

  const project: Project = projectData[index]
  return (
    <ProjectItemContainer>
      <ProjectItemContent>
        <Date>({project.date})</Date>
        <Title>{project.title}</Title>
        <Tags>
          {project.tags.map((v, i) => (
            <ProjectTag key={i} bg={project.color} color="black">
              {v}
            </ProjectTag>
          ))}
        </Tags>
      </ProjectItemContent>
      <ImageSlider image={thumbnail} />
      <ProjectItemContent>
        {(project.git || project.link) && (
          <ProjectLink>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <ProjectLinkBtn>사이트 방문하기</ProjectLinkBtn>
              </a>
            )}
            {project.git && (
              <a href={project.git} target="_blank" rel="noreferrer">
                <ProjectLinkBtn>GitHub</ProjectLinkBtn>
              </a>
            )}
          </ProjectLink>
        )}
        <div>
          <OpenProjectDetail>
            <OpenProjectDetailBtn
              onClick={() => {
                setOpenDetail((prev) => !prev)
              }}
            >
              <OpenProjectDetailText>상세 설명</OpenProjectDetailText>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {openDetail ? (
                  <path d="M18 15l-6-6-6 6" />
                ) : (
                  <path d="M6 9l6 6 6-6" />
                )}
              </svg>
            </OpenProjectDetailBtn>
          </OpenProjectDetail>
          {openDetail && (
            <>
              <Detail>
                <DetailTitle>📚 프로젝트 소개</DetailTitle>
                <ProjectInfo info={project.introduce} />
              </Detail>
              <Detail>
                <DetailTitle>🎯 프로젝트 목표</DetailTitle>
                <ProjectInfo info={project.goal} />
              </Detail>
              <Detail>
                <DetailTitle>🗂️ 프로젝트 기능</DetailTitle>
                <ProjectInfo info={project.feature} />
              </Detail>
              {project.role && (
                <Detail>
                  <DetailTitle>🕹️ 담당</DetailTitle>
                  <ProjectRole role={project.role} />
                </Detail>
              )}
              <Detail>
                <DetailTitle>🧾 사용 기술</DetailTitle>
                <ProjectTech tech={project.tech} />
              </Detail>
              <Detail>
                {Troubleshooting && (
                  <>
                    <DetailTitle>🔎 문제/해결</DetailTitle>
                    <Troubleshooting />
                  </>
                )}
              </Detail>
            </>
          )}
        </div>
      </ProjectItemContent>
    </ProjectItemContainer>
  )
}

export default ProjectItem
