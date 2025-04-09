import React from 'react';

function Main() {
    return (
        <article id="intro">
            <h2 className="major">Intro</h2>
            <span className="image main"><img src="/images/pic01.jpg" alt="Gaussian Splatting Visualization" /></span>
            <p>
                본 프로젝트는 <strong>가우시안 스플래팅 기술</strong>을 활용하여 3D 데이터를 시각적으로 표현하고
                사용자들이 간단한 업로드 작업만으로 자신만의 데이터를 실시간으로 확인할 수 있도록 설계되었습니다.
                AI 기반으로 처리된 데이터는 웹 상에서 빠르고 직관적인 시각화를 제공하며, 다양한 활용 가능성을 탐구할 수 있습니다.
            </p>
            <p>
                예를 들어, 가우시안 스플래팅은 건축, 엔지니어링, 게임 개발 등에서 복잡한 3D 모델을 보다
                효율적으로 시각화하는 데 사용될 수 있습니다. 해당 기술은
                <a href="https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/" target="_blank" rel="noopener noreferrer">Gaussian Splatting</a> 연구를 기반으로 하며,
                최신 기술과 웹 기술을 융합하여 사용자 경험을 최적화하는 것을 목표로 하고 있습니다.
            </p>
            <p>
                이 페이지에서 여러분은 업로드한 데이터를 실시간으로 확인하며, 다양한 시각적 특성을 조정하거나 탐색할 수 있습니다.
                데이터 처리 및 시각화 과정은 AI가 자동으로 처리하며, 사용자는 결과를 웹 뷰어를 통해 간단하게 확인할 수 있습니다.
            </p>
        </article>
    );
}

export default Main;