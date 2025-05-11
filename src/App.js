import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh' }}>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </div>
  );
}

export default App;