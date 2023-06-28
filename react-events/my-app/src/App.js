import './App.css';
import CustomButton from './CustomButton';

export default function App() {
  function handleCustomClick(text) {
    alert(`Clicked ${text}`);
  }
  return (
    <div>
      <CustomButton
        text="Fancy"
        color="red"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Fancier"
        color="green"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Fanciest"
        color="blue"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}
