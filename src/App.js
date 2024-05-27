
import './App.css';
//import signupForm from './components/signupForm';
import SignupForm from './components/SignupForm';

import img from './image.jpg'
function App() {
  return (
    <div className="App">
      <div className='image'>
        <img src = {img} />
      </div>
      <div className='form-control'><SignupForm/></div>
     
    </div>
  );
}

export default App;
