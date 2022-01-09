import ChampionList from "./components/ChampionList";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ChampionInfo from "./components/ChampionInfo";
import {ChampionsProvider} from './context/champions/ChampionsContext'

function App() {
  return (
      <ChampionsProvider>
        <Router>
          <div className="">
            <div className=""> Welcome to my site </div>
            <Routes>
              <Route path='/' element={<ChampionList/>}/>
              <Route path='/champion/:name' element={<ChampionInfo/>}/>
            </Routes>
            
          </div>
        </Router>
      </ChampionsProvider>    
  );
}

export default App;
