// src/App.jsx

import './App.css';
import Button1 from './components/example-1-normal-css/Button';
import Button2 from './components/example-2-inline-css/Button';
// Later on, we'll import button components here

const App = () => {
  return (
    <div className="App">
      {
        <>
        
        <Button1 buttonText="Example 1" />
        <Button2 buttonText="Example 1" />
        
        </>
      }
    </div>
  );
};

export default App;
