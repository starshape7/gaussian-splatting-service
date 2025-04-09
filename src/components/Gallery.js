import React from 'react';

function Gallery() {
    return (
        <article id="Gallery">
            <h2 className="major">Gallery</h2>
            <span className="image main"><img src="/images/pic02.jpg" alt="3D Visualization Gallery Examples"/></span>
            <p>
                본 섹션에서는 <strong>가우시안 스플래팅 기술</strong>을 활용하여 생성된 다양한 작업 결과를 확인할 수 있습니다.
                아래에는 업로드한 데이터로 처리된 3D 모델들이 나열되어 있으며, 각 항목을 클릭하면 해당 데이터를
                웹 뷰어를 통해 시각적으로 탐색할 수 있습니다.
            </p>
            <p>
                작업 파일들은 건축 모델, 공학 시뮬레이션, 게임 환경 등 여러 실세계 응용 분야를 기반으로 제작되었으며,
                3D 데이터를 효율적으로 렌더링하고 시각화하는 데 중점을 두고 있습니다. 이를 통해 복잡한 데이터를
                직관적으로 이해하고, 활용 가능성을 탐구할 수 있습니다.
            </p>
            <h3 className="major">Pre-trained Learning</h3>
            <h4>Paper's Pre-trained</h4>
            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Run to Click</th>
                        <th>Source</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Paper Example 1</td>
                        <td><a href="/splat/bicycle/index.html" target="_blank" rel="noopener noreferrer">bicycle</a>
                        </td>
                        <td><a href="https://antimatter15.com/" target="_blank"
                               rel="noopener noreferrer">antimatter15</a></td>
                    </tr>
                    <tr>
                        <td>Paper Example 2</td>
                        <td><a href="/splat/plush/index.html" target="_blank"
                               rel="noopener noreferrer">plush</a></td>
                        <td><a href="https://antimatter15.com/" target="_blank"
                               rel="noopener noreferrer">antimatter15</a></td>
                    </tr>
                    <tr>
                        <td>Paper Example 3</td>
                        <td><a href="/splat/stump/index.html" target="_blank"
                               rel="noopener noreferrer">stump</a></td>
                        <td><a href="https://antimatter15.com/" target="_blank"
                               rel="noopener noreferrer">antimatter15</a></td>
                    </tr>
                    <tr>
                        <td>Paper Example 4</td>
                        <td><a href="/splat/treehill/index.html" target="_blank" rel="noopener noreferrer">treehill</a>
                        </td>
                        <td><a href="https://antimatter15.com/" target="_blank"
                               rel="noopener noreferrer">antimatter15</a></td>
                    </tr>
                    <tr>
                        <td>Paper Example 5</td>
                        <td><a href="/splat/truch/index.html" target="_blank" rel="noopener noreferrer">truck</a>
                        </td>
                        <td><a href="https://antimatter15.com/" target="_blank"
                               rel="noopener noreferrer">antimatter15</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <h4>Our's Pre-trained</h4>
            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Run to Click</th>
                        <th>Source</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Paper Example 1</td>
                        <td><a href="/splat/trashcan/index.html" target="_blank" rel="noopener noreferrer">trashcan</a>
                        </td>
                        <td><a href="https://antimatter15.com/" target="_blank"
                               rel="noopener noreferrer">antimatter15</a></td>
                    </tr>
                    <tr>
                        <td>Paper Example 2</td>
                        <td><a href="/splat/convenience_store/index.html" target="_blank"
                               rel="noopener noreferrer">store</a></td>
                        <td><a href="https://antimatter15.com/" target="_blank"
                               rel="noopener noreferrer">antimatter15</a></td>
                    </tr>
                    <tr>
                        <td>Paper Example 3</td>
                        <td><a href="/splat/christmas_tree/index.html" target="_blank"
                               rel="noopener noreferrer">tree</a></td>
                        <td><a href="https://antimatter15.com/" target="_blank"
                               rel="noopener noreferrer">antimatter15</a></td>
                    </tr>
                    <tr>
                        <td>Paper Example 4</td>
                        <td><a href="/splat/snowman/index.html" target="_blank" rel="noopener noreferrer">snowman</a>
                        </td>
                        <td><a href="https://antimatter15.com/" target="_blank"
                               rel="noopener noreferrer">antimatter15</a></td>
                    </tr>
                    <tr>
                        <td>Paper Example 5</td>
                        <td><a href="/splat/snowmans/index.html" target="_blank" rel="noopener noreferrer">snowmans</a>
                        </td>
                        <td><a href="https://antimatter15.com/" target="_blank"
                               rel="noopener noreferrer">antimatter15</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </article>
    );
}

export default Gallery;