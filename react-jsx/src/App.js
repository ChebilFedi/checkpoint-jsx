import React from 'react';

import './App.css';
import imageInSrc from './imageInSrc.jpg';
import'./style.css';

function App() {
  return (
    <div className="App">
      <div style={{ border: 'solid 1px black', maxwidth: "100vw" }}>

        <h1 className="title red">Recommended series</h1>

        <br/>

          <img src={imageInSrc} /> <br/>

            <img src="/imageInPublic.jpeg"/>  

</div>
<br/>

          <video width="320" height="240" controls>

            <source src="myVideo.mp4" type="video/mp4"/> 

</video> 

    </div>
  );
}

export default App;
