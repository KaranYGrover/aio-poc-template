import {
  Header,
  GameSelector,
  VideoSection,
  BackgroundBlur,
  ChartSection,
} from 'Components';
import { GameProvider } from 'GameContext';
import {default as HeatMap}  from './HeatMap/HeatMap';

function App() {
  return (
    <GameProvider>
      <BackgroundBlur />
      <Header />
      <GameSelector />
      <VideoSection />
      <ChartSection />
      <HeatMap/>
    </GameProvider>
  );
}

export default App;
