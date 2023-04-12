import React from 'react';

function ToggleButton() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginRight: '12px' }}
    >
      <input type="checkbox" id="toggle" hidden />

      <label for="toggle" class="toggleSwitch" style={toggleSwitchStyle}>
        <span class="toggleButton" style={toggleButtonStyle}></span>
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
  backgroundColor: '#fff',
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
  background: '#FFCC33',
};

export default ToggleButton;
