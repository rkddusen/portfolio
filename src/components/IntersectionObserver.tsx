import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledDiv = styled.div`
  opacity: 0;
  transform: translateY(50px);
  &.animated {
    animation: ${slideUp} 0.5s ease-in-out 0s 1 normal forwards;
  }
`

interface IntersectionObserver {
  children: ReactNode
}
const IntersectionObserver = ({ children }: IntersectionObserver) => {
  const [ref, inView] = useInView({
    threshold: 0.2, // 20% of component visible
  })

  const [animated, setAnimated] = useState<boolean>(false)

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true)
    }
  }, [inView, animated])

  return (
    <StyledDiv ref={ref} className={animated ? 'animated' : ''}>
      {children}
    </StyledDiv>
  )
}

export default IntersectionObserver
