import logo from './logo.svg';
import './App.css';
import Form from './Components/form';
import Skeletons from './Components/Skeletons';

function App() {
  return (
    <>
      <div className="container">
        <h1>Form Components</h1>
        <Form />
      </div>
      <div className="container">
        <h1>Skeletons</h1>
        <Skeletons />
      </div>
    </>
  );
}

export default App;
