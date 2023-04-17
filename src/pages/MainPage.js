import { useTheme } from '../contexts/ThemeProvider';

import sunImage from '../assets/sun.png';
import moonImage from '../assets/moon.png';
import ToggleButton from '../components/ToggleButton';

function MainPage() {
  const [themeMode, toggleTheme, theme] = useTheme();
  return (
    <div
      className="container"
      style={Object.assign({}, containerStyle, {
        backgroundColor: theme.background,
      })}
    >
      <header className="header" style={headerStyle}>
        <img src={themeMode === 'light' ? sunImage : moonImage} alt="" />
        <ToggleButton toggleTheme={toggleTheme} theme={theme} />
        <p
          style={Object.assign({}, textBoxStyle, {
            color: theme.font,
            background: `linear-gradient(to top, ${theme.highlight} 40%, transparent 40%)`,
          })}
        >
          {themeMode === 'light' ? "It's daytime!" : "It's night!"}
        </p>
      </header>
    </div>
  );
}

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '20vmin',
  height: 'auto',
  gap: '80px',
};

const textBoxStyle = {
  fontSize: 'calc(10px + 2vmin)',
  fontFamily: 'Lora',
};

export default MainPage;
