import ToggleSwitch from './ToggleSwitch';
import { useState } from 'react';

const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <ToggleSwitch
        rounded={true}
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
    </div>
  );
};

export default App;
