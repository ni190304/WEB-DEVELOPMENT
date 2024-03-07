import '../App.css';
import Login from './Login';

var is_Registered = false;

function App() {
  return (
    <div className="container">
      <Login isRegistered = {is_Registered}/>
    </div>
  );
}

export default App;
