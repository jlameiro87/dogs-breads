import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";
import Loading from './components/Loading';
import BreedDashboard from './components/BreedDashboard';

function App() {
  const [ page, setPage ] = useState(1);
  const { data = [], isFetching } = useFetchBreedsQuery(page);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {isFetching && <Loading />}
      {!isFetching && <BreedDashboard data={data} page={page} setPage={setPage} />}
    </div>
  );
}

export default App;
