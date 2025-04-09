import React, { useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Test from './components/Test';
import Conclusion from './components/Conclusion';
import './App.css';

function App() {
    useEffect(() => {
        // 기존의 main.js 등의 초기화 코드를 여기에 넣음으로써 페이지가 처음 로드될 때 동작하게 합니다.
        const loadScripts = () => {
            const scriptUrls = [
                '/assets/js/jquery.min.js',
                '/assets/js/browser.min.js',
                '/assets/js/breakpoints.min.js',
                '/assets/js/util.js',
                '/assets/js/main.js',
            ];

            scriptUrls.forEach((url) => {
                const script = document.createElement('script');
                script.src = url;
                script.async = true;
                document.body.appendChild(script);
            });
        };

        const loadStyles = () => {
            const styleUrls = [
                '/assets/css/fontawesome-all.min.css',
                '/assets/css/main.css',
                '/assets/css/noscript.css',
            ];

            styleUrls.forEach((url) => {
                const link = document.createElement('link');
                link.href = url;
                link.rel = 'stylesheet';
                link.type = 'text/css';
                document.head.appendChild(link);
            });
        };

        loadScripts();
        loadStyles();
    }, []); // 빈 배열을 사용하여 첫 렌더링 시에만 실행되도록 설정

  return (
      <div id="wrapper">
        <Header />
        <div id="main">
          <Main />
          <Gallery />
          <Test />
          <Conclusion />
        </div>
        <footer id="footer">
          <p className="copyright">
            &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </footer>
      </div>
  );
}

export default App;
