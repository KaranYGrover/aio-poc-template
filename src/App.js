import {
  Header,
  GameSelector,
  VideoSection,
  BackgroundBlur,
  ChartSection,
} from 'Components';
import { GameProvider } from 'GameContext';

function App() {
  return (
    <GameProvider>
      <BackgroundBlur />
      <Header />
      <GameSelector />
      <VideoSection />
      <ChartSection />
    </GameProvider>
  );
}

export default App;
