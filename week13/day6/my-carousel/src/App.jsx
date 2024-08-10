import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hongKong from "./assets/hong-kong.jpg"
import japan from "./assets/japan.webp"
import macao from "./assets/macao.webp"
import lasVegas from "./assets/las-vegas.webp"
import './App.css'

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Carousel>
        <div>
            <img src={hongKong} />
            <p className="legend">Hong Kong</p>
        </div>
        <div>
            <img src={japan} />
            <p className="legend">Japan</p>
        </div>
        <div>
            <img src={macao} />
            <p className="legend">Macao</p>
        </div>
        <div>
            <img src={lasVegas} />
            <p className="legend">Las Vegas</p>
        </div>
    
      </Carousel>



    </>
  )
}

export default App
