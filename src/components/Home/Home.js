import React from 'react';
import News from '../News/News';
import '../../css/home-bg.css';

function Home() {
  return (
    <div id="home">
      <div className="head bg-info home-bg">
        <div className="home-content text-white">
          <div className="home-shadow-box px-3 py-4">
            <h1> Contest Track </h1>
            <div
              className="home-text d-inline-block"
              style={{ maxWidth: '700px', fontSize: '1rem', textAlign: 'justify' }}
            >
              A platform to practice coding questions on different competetive websites with lot of
              features like category wise questions , tracking coding progress and upcoming contest
              on Codforces, Codechef. You can also find company wise problems on Company page.
            </div>
          </div>
        </div>
        
      </div>

      <div className="py-4 px-3 mx-auto" style={{ maxWidth: '1200px' }}>
        <h1 className="display-4 text-center"> New Updates </h1>
        <News />
      </div>
    </div>
  );
}

export default Home;
