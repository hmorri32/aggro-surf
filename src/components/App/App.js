import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


const SVGguy = () => {
  return(
    <svg className='aggro-surf-welcome' viewBox="0 0 100 20">
      {/* thanks! : https://codepen.io/web-tiki/details/YNKMpB */}
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#326384"/>
          <stop offset="95%" stopColor="#123752"/>
        </linearGradient>
        <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
          <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1.5s"
              type="translate"
              from="0,0"
              to="40,0"
              repeatCount="indefinite"
            />
            </path>
        </pattern>
      </defs>
      <text
        textAnchor="middle"
        x="50"
        y="15"
        fontSize="15"
        fill="url(#wave)"
        fillOpacity="1">aggro-surf</text>
      <text
        textAnchor="middle"
        x="50"
        y="15"
        fontSize="15"
        fill="url(#gradient)"
        fillOpacity="0.5">aggro-surf</text>
    </svg>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to='/suh'>
            <SVGguy />
          </Link>
        </div>
        <div className="App-background">
        </div>
      </div>
    );
  }
}

  export default App;
