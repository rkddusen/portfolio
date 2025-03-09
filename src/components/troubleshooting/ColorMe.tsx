import styled from '@emotion/styled'

const Title = styled.p`
  margin: 10px 0;
  font-weight: bold;
  color: ${(props) => props.theme.color};
`
const SemiTitle = styled.p`
  font-weight: bold;
  font-style: italic;
  font-size: 14px;
  margin-top: 10px;
  color: ${(props) => props.theme.color};
`
const Text = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color};
`
const ColorMe = () => {
  return (
    <div>
      <div>
        <Title>1. 데이터 저장소 선택 문제</Title>
        <div>
          <Text>
            색상을 저장하는 기능을 만드는 것이 목표이기 때문에 색상 데이터를
            저장할 저장소를 선택해야 했습니다. 규모가 큰 프로젝트가 아니었기에
            DB를 쓰는 것은 과하다고 생각했습니다. 이에, 여러 저장소를 비교하여
            적절한 것을 선택할 필요가 있었습니다.
          </Text>
        </div>
      </div>
      <div>
        <Title>해결</Title>
        <div>
          <SemiTitle>[GitHub Pages]</SemiTitle>
          <Text>
            GitHub Pages로 배포할 웹에서는 3가지의 저장소를 두고 고민했습니다.
          </Text>
          <Text>
            우선 sessionStorage는 약 5MB에서 10MB의 용량이 있지만, 탭이나 창을
            닫으면 데이터가 사라지는 문제가 있습니다.
          </Text>
          <Text>
            두 번째로 localStorage는 sessionStorage와 용량은 비슷하지만,
            사용자가 직접 삭제하지 않는 이상 영구적으로 저장할 수 있습니다.
          </Text>
          <Text>
            마지막 IndexedDB의 경우 상당한 양의 정보를 저장할 수 있고,
            localStorage와 마찬가지로 사용자가 직접 삭제하지 않는 이상
            영구적으로 저장할 수 있습니다.
          </Text>
          <Text>
            이렇게 3개의 저장소를 비교한 결과 localStorage가 프로젝트에 가장
            적합하다고 생각했습니다. sessionStorage의 경우에는 데이터가 브라우저
            세션동안 유지되기에 색상 정보를 저장해야 하는 서비스에 사용할 수
            없었습니다. IndexedDB는 복잡한 쿼리와 대량의 데이터를 다룰 때 적합한
            저장소입니다. 그러기에 간단한 색상 정보를 저장할 만한 충분한 조건을
            가진 저장소는 localStorage라고 생각했습니다.
          </Text>
        </div>
        <div>
          <SemiTitle>[Chrome Extension]</SemiTitle>
          <Text>
            Chrome Extension으로 배포할 프로그램에서는 또 다른 3가지의 저장소를
            두고 고민했습니다.
          </Text>
          <Text>
            우선 localStorage는 GitHub Pages로 배포한 웹에서 사용한
            localStorage를 그대로 사용할 수 있습니다.
          </Text>
          <Text>
            두 번째로 chrome.storage.sync는 사용자가 로그인한 구글 계정을 통해
            데이터를 저장하고 여러 기기에 걸쳐 동기화할 수 있습니다. 계정에
            저장할 수 있기에 다른 컴퓨터나 기기에서 동일한 정보를 가질 수
            있습니다. 하지만 총 100KB의 데이터만 저장할 수 있습니다.
          </Text>
          <Text>
            세 번째로 chrome.storage.local은 현재 기기에 데이터를 저장합니다.
            sync처럼 다른 기기와 동기화될 수는 없습니다. 그러나 5MB의 데이터를
            사용할 수 있고, unlimitedStorage 권한을 요청하면 더 많은 공간을
            확보할 수 있습니다.
          </Text>
          <Text>
            이렇게 3개의 저장소를 비교한 결과 chrome.storage.local이 프로그램에
            가장 적합하다고 생각했습니다. localStorage의 경우에는 서비스
            워커(background.js)에서 사용할 수 없었습니다. chrome.storage.sync의
            경우에는 계정에 저장되어 기기마다 동기화할 수 있는 점이 마음에
            들었지만, 최대 100KB의 제한이 있다는 점에서 chrome.storage.local이
            낫다고 판단했습니다. 다만, 프로그램을 리팩토링하는 과정에서 기기 간
            동기화가 필요하다고 느껴진다면 chrome.storage.sync 도입도 다시
            고려해 볼 예정입니다.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default ColorMe
