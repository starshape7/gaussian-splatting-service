import React, { useEffect } from 'react';
import axios from 'axios';

function Header() {
    useEffect(() => {
        async function fetchServerUrl() {
            try {
                // Axios로 GET 요청 보내기
                const response = await axios.get('http://localhost:8080/api/server-url');
                const serverUrl = response.data; // 서버에서 반환한 데이터

                // 링크 생성
                const linkElement = document.createElement('a');
                linkElement.href = serverUrl;
                linkElement.innerText = serverUrl;
                linkElement.target = "_blank"; // 새 창에서 열기

                // 링크 표시
                const serverLink = document.getElementById('serverLink');
                serverLink.innerHTML = ""; // 기존 텍스트 제거
                serverLink.appendChild(linkElement);
            } catch (error) {
                console.error("Error fetching server URL:", error);
                document.getElementById('serverLink').innerText = "Failed to retrieve server link.";
            }
        }

        // 페이지 로드 시 서버 URL 가져오기
        fetchServerUrl();
    }, []);

    return (
        <header id="header">
            <div className="logo">
                <span className="icon fa-gem"></span>
            </div>
            <div className="content">
                <div className="inner">
                    <h1>인공지능2 : 3D 모델링 서비스</h1>
                    <p>
                        본 페이지는 <strong>인공지능 기반 가우시안 스플래팅</strong> 기술을 사용하여 3D 데이터 시각화를 제공합니다.
                        <br/>
                        간단한 파일 업로드만으로 웹에서 실시간으로 3D 데이터를 확인할 수 있습니다.
                    </p>
                    <h4>Server Information</h4>
                    <p id="serverLink">Loading server link...</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#Gallery">Gallery</a></li>
                    <li><a href="#test">Test</a></li>
                    <li><a href="#Conclusion">Conclusion</a></li>
                    <li><a href="#Source">Source</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
