import sunImage from '../src/assets/sun.png';
import moonImage from '../src/assets/moon.png';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <div className="container" style={containerStyle}>
      <header class="header" style={headerStyle}>
        <img src={sunImage} alt="" />
        <ToggleButton />
        <p style={textBoxStyle}>It's daytime!</p>
      </header>
    </div>
  );
}

const containerStyle = {
  backgroundColor: '#FAF8F3',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const textBoxStyle = {
  fontSize: 'calc(10px + 2vmin)',
  fontFamily: 'Lora',
  background: 'linear-gradient(to top, #9DC6F3 40%, transparent 40%)',
};

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '20vmin',
  height: 'auto',
  gap: '80px',
};

export default App;
