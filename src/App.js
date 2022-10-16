
import './App.css';
import { useState } from 'react';
function App() {
  const [aireGlobo, setAireGlobo] = useState(5);
  const [boom, setBoom] = useState(false);
  function agregarAire() {
    if (aireGlobo < 15) {
      setAireGlobo(aireGlobo + 1);
    }else{
      setBoom(true);
    }
  }
  function restarAire() {
    if (aireGlobo > 5) {
      setAireGlobo(aireGlobo - 1);
    }
    
  if(boom){
setBoom(false);
setAireGlobo(5);
  }

  }

  return (
    <div className="app">
      <div className="container text-center">
        <div className="row align-items-center all-height">
          <div className="col">
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-success" type="button" onClick={agregarAire} disabled={boom}>+Aire</button>
              <button className="btn btn-danger" type="button" onClick={restarAire} disabled={aireGlobo === 5}>-Aire</button>
            </div>
          </div>
          {<div className="col">

            {boom && <h1 style={{ fontSize: `15rem` }}>💥 </h1>}

           {!boom &&<h1 style={{ fontSize: `${aireGlobo}rem` }}>🎈</h1>} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
