import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
  
const Editor = ({getEditorContent}) => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={'<p><i>우리 모임을 소개하는 글을 작성해주세요! 아래 예시와 같은 내용이 포함되면 좋아요. (400자 이내)</i></p><p>이번 모임은 도봉산에서 진행하는 클린 하이킹입니다. 플로깅을 처음 하는 분들도 적응하실 수 있도록 그렇게 긴 코스로 잡지는 않았어요.&nbsp;<br>도봉산 주변에 사시는 분들 중에 환경을 생각하는 분들이라면 주말에 공기 쐬는 겸 놀러오세요. 하지만 너무 가벼운 마음 보다는 쓰레기를 줍겠다는 다짐 정도 하고 오시길 추천드립니다.도록 잘 인솔하겠습니다! 같이 즐겁게 해봐요!</p><ol><li><strong>모임 장소</strong> : 도봉산 공영주차장&nbsp;</li><li><strong>진행 코스</strong> : 도봉탐방지원센터 - 도봉산장 - 산악구조대 - 신선대 정상 - 신선대 정상과 만월사로 이어지는 길 - 도봉탐방지원센터</li><li><strong>진행 거리</strong> : 6km</li><li><strong>예상 소요 시간</strong> : 3시간(운동 시간 2시간, 기타 1시간)</li><li><strong>준비물</strong> : 안쓰는 비닐봉지, 장갑, 텀블러</li><li><strong>제공</strong> : 물품 보관, 정수기, 화장실</li></ol>'}
        onChange={(event, editor) => {
            const data = editor.getData();
            getEditorContent(data);
        }}
      />
    </div>
  );
};

Editor.defaultProps = {
    getEditorContent: () => {},
};

export default Editor;