import React from 'react';
import './index.scss';

function App() {
  const [open, setOpen] = React.useState(false)

  return (

    <div className="App">
      <button onClick={() => setOpen(true)}className="open-modal-btn">✨ Открыть окно</button>
      <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg height="200" onClick={() => setOpen(false)}viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47nlgczx4eu4xl9jztm96wjhqpobsqco8odqvv4x34&rid=giphy.gif&ct=g" />
        </div>
      </div>
    </div>
  )
}



export default App;
