export interface Role {
  name: string
  explain: string
}
export interface Tech {
  name: string
  explain: string
}
export interface Project {
  title: string
  date: string
  tags: string[]
  color: string
  link?: string
  git?: string
  introduce: string[]
  goal: string[]
  feature: string[]
  role?: Role[]
  tech: Tech[][]
}
