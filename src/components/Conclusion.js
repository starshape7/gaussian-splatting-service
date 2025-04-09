import React from 'react';

function Conclusion() {
    return (
        <article id="Conclusion">
            <h2 className="major">Conclusion</h2>
            <span className="image main">
        <img src="/images/pic03.jpg" alt="Project Conclusion" />
      </span>
            <p>
                본 프로젝트는 <strong>Gaussian Splatting AI</strong> 기술을 활용하여 사진과 동영상을 3D 형태로 변환하고, 이를 웹에서 손쉽게 시각화할 수 있는 서비스를 구축하는 것을 목표로 삼았습니다.
                사용자 친화적인 인터페이스와 클라우드 기반의 배포 환경을 통해 누구나 복잡한 3D 시각화 기술을 경험할 수 있도록 설계되었습니다.
            </p>
            <p>
                프로젝트를 통해 얻은 주요 성과는 다음과 같습니다:
            </p>
            <ul>
                <li>
                    <strong>AI 모델 오픈 소스 직접 활용:</strong> Gaussian Splatting AI 소스코드를 직접 구현하여 자동화된 스플래팅 데이터 처리 및 3D 시각화가 가능해졌습니다.
                </li>
                <li>
                    <strong>사용자 경험 개선:</strong> 간단한 파일 업로드로 복잡한 AI 결과물을 확인할 수 있는 직관적인 사용자 인터페이스를 제공합니다.
                </li>
                <li>
                    <strong>웹 기술 활용:</strong> 동적 HTML 및 JavaScript를 활용해 실시간 결과물을 웹에서 확인할 수 있도록 구현했습니다.
                </li>
            </ul>
            <p>
                이 프로젝트는 AI 기술의 실제 활용 가능성을 보여주는 사례로, 다양한 산업 분야에서 응용 가능성이 높습니다. 특히 건축, 엔터테인먼트, 교육 등에서 실시간 3D 데이터 시각화는 매우 유용한 도구가 될 것입니다.
                앞으로는 성능 최적화와 더 많은 데이터 포맷 지원을 통해 프로젝트의 활용도를 더욱 확장해 나가고자 합니다.
            </p>
        </article>
    );
}

export default Conclusion;
