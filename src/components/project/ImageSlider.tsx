import styled from '@emotion/styled'
import { ReactNode, useEffect, useRef, useState } from 'react'

const SlideArea = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  overflow: hidden;
  padding: 0 10px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    gap: 10px;
  }
`
const ImageArea = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 70%;
    min-width: 480px;
  }
`
const SlideContent = styled.div`
  width: 100%;
  padding-bottom: 62.5%;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  border: 1px solid ${(props) => props.theme.border};
`
const SlideBox = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
`

const SlideUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  transform: translateX(-100%);
`
const SlideLi = styled.li`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border: 1px solid ${(props) => props.theme.border};
  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;
`
const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

interface ImageSliderProps {
  image: string[]
}
const ImageSlider = ({ image }: ImageSliderProps) => {
  const [mainSlides, setMainSlides] = useState<string[]>([])
  const [slideIndex, setSlideIndex] = useState<number>(1)
  const [isTranslating, setIsTranslating] = useState<boolean>(false)
  const mainSlideRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (image.length > 1) {
      const _slides = [image[image.length - 1], ...image, image[0]]
      setMainSlides(_slides)
    } else {
      setMainSlides(image)
    }
  }, [])

  const updateSliderRef = (num: number): void => {
    mainSlideRef.current!.style.transition = 'transform 0.8s ease-in-out'
    mainSlideRef.current!.style.transform = `translateX(-${num * 100}%)`
  }

  const handlePrevSlide = (): void => {
    if (!isTranslating) {
      setSlideIndex((prev) => prev - 1)
      setIsTranslating(true)
    }
  }

  const handleNextSlide = (): void => {
    if (!isTranslating) {
      setSlideIndex((prev) => prev + 1)
      setIsTranslating(true)
    }
  }

  const movingSlideEnd = (): void => {
    mainSlideRef.current!.style.transition = 'none'
    mainSlideRef.current!.style.transform = `translateX(-${(mainSlides.length - 2) * 100}%)`
  }

  const movingSlideStart = (): void => {
    mainSlideRef.current!.style.transition = 'none'
    mainSlideRef.current!.style.transform = `translateX(-100%)`
  }

  useEffect(() => {
    if (mainSlideRef.current!.style.transition.split(' ')[0] === 'none') {
      setIsTranslating(false)
    }
    updateSliderRef(slideIndex)
  }, [slideIndex])

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (slideIndex === 0) {
        movingSlideEnd()
        setSlideIndex(mainSlides.length - 2)
      } else if (slideIndex === mainSlides.length - 1) {
        movingSlideStart()
        setSlideIndex(1)
      } else {
        setIsTranslating(false)
      }
    }

    const sliderNode = mainSlideRef.current!
    sliderNode.addEventListener('transitionend', handleTransitionEnd)

    return () => {
      sliderNode.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [slideIndex, mainSlides.length])

  return (
    <SlideArea>
      {image.length > 1 && (
        <SlideArrow handleClickArrow={handlePrevSlide}>
          <path d="M14 20l-6-8 6-8" />
        </SlideArrow>
      )}
      <ImageArea>
        <SlideContent>
          <SlideBox>
            <SlideUl ref={mainSlideRef}>
              {mainSlides.map((v, i) => (
                <SlideLi key={i}>
                  <SlideImg src={v} alt="" />
                </SlideLi>
              ))}
            </SlideUl>
          </SlideBox>
        </SlideContent>
      </ImageArea>
      {image.length > 1 && (
        <SlideArrow handleClickArrow={handleNextSlide}>
          <path d="M10 20l6-8-6-8" />
        </SlideArrow>
      )}
    </SlideArea>
  )
}

const SlideArrowBox = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  stroke: ${(props) => props.theme.arrow};
  stroke-width: 1.5;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  &:hover {
    stroke: ${(props) => props.theme.color};
    stroke-width: 2;
  }
`
const Arrow = styled.svg`
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`
interface SlideArrowProps {
  handleClickArrow: () => void
  children: ReactNode
}
const SlideArrow = ({ handleClickArrow, children }: SlideArrowProps) => {
  return (
    <SlideArrowBox>
      <Arrow
        onClick={handleClickArrow}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </Arrow>
    </SlideArrowBox>
  )
}

export default ImageSlider
