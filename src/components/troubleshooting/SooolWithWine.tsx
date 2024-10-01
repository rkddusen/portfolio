import styled from '@emotion/styled'
import signup from 'assets/troubleshooting/sooolWithWine/signup.png'

const Title = styled.p`
  margin: 10px 0;
  font-weight: bold;
  color: ${(props) => props.theme.color};
`
const Text = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color};
`
const Image = styled.img`
  width: 100%;
  margin-top: 10px;
`
const SooolWithWine = () => {
  return (
    <div>
      <div>
        <Title>1. 회원가입 UI 구성</Title>
        <div>
          <Text>
            Soool 서비스만의 회원가입을 제작할 때, UI에 대해서 많은 고민을
            했습니다.
          </Text>
          <Text>
            일괄 입력(한 페이지에서 모든 정보를 다 받는 방식)과 단계 입력(하나씩
            입력받고 다음 단계로 넘어가는 방식) 중에 어떤 방식을 선택해야 사용자
            경험을 극대화할 수 있을지 생각했습니다.
          </Text>
        </div>
      </div>
      <div>
        <Title>해결</Title>
        <div>
          <Text>
            많이 고민해 보고 다양한 디자인을 제작한 결과 Soool 서비스에서는
            회원가입 UI를 단계 입력으로 진행하기로 했습니다.
          </Text>
          <Text>
            일괄 입력의 경우에는 한 번에 모든 정보를 입력하여 빠르게 정보 입력이
            가능하며, 불필요한 화면 전환 없이 바로 모든 정보를 입력할 수
            있습니다. 또한, Soool 서비스의 경우에는 입력할 정보가 매우 간단하기
            때문에 단계 구분이 오히려 불필요하게 느껴질 수 있습니다.
          </Text>
          <Text>
            하지만, 단계 입력의 경우에는 단계를 나누어 사용자가 한 번에 모든
            정보를 입력해야 하는 부담을 줄일 수 있습니다. 또한, 진행 상황을
            시각화하여 목표까지 얼마나 남았는지 명확히 보여줌으로써 막연함을
            줄일 수 있습니다.
          </Text>
          <Text>
            두 방식 모두 장단점이 존재하지만, 단계 입력을 최종적으로 결정하게 된
            이유는 모바일 친화성과 사용자 유지성이었습니다. Soool 서비스의 경우
            반응형으로 제작을 진행하고 있기 때문에 모바일 친화성이 중요한
            요소입니다. 또한, 단계별로 나눠서 조금씩 요구하면 다음 단계로
            진행하는 과정에 성취감을 느낄 수 있어서 사용자 유지성이 높아질 수
            있다고 판단했습니다.
          </Text>
        </div>
        <Image src={signup} />
      </div>
    </div>
  )
}

export default SooolWithWine
