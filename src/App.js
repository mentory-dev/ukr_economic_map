import {Map} from './components'
import { Navigation } from './components/navigation/navigation';
import {MapProvider} from './context/mapContext'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <MapProvider>
        <Map />
      </MapProvider>
    </div>
  );
}

export default App;
