import React from 'react';

function ToggleButton({ toggleTheme, theme }) {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginRight: '12px' }}
    >
      <input type="checkbox" id="toggle" hidden onClick={toggleTheme} />

      <label
        htmlFor="toggle"
        className="toggleSwitch"
        style={Object.assign({}, toggleSwitchStyle, {
          backgroundColor: theme.switchBackground,
        })}
      >
        <span
          className="toggleButton"
          style={Object.assign({}, toggleButtonStyle, {
            backgroundColor: theme.switch,
          })}
        ></span>
      </label>
    </div>
  );
}

const toggleSwitchStyle = {
  width: '80px',
  height: '40px',
  display: 'block',
  position: 'relative',
  borderRadius: '30px',
  boxShadow: '0 0 16px 3px rgba(0 0 0 / 15%)',
  cursor: 'pointer',
};

const toggleButtonStyle = {
  width: '32px',
  height: '32px',
  position: 'absolute',
  top: '50%',
  left: '4px',
  transform: 'translateY(-50%)',
  borderRadius: '50%',
};

export default ToggleButton;
