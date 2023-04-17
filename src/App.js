import { ThemeProvider } from './contexts/ThemeProvider';
import MainPage from './pages/MainPage';

function App() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
