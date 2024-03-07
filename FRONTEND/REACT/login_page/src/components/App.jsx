import '../App.css';
import Login from './Login';

var is_loggedin = false;

function render_cond() {
  if (is_loggedin) {
    return <p>Hello</p>
  }
  else {
   return <Login/>
  }
}

function App() {
  return (
    <div className="container">
      {render_cond()}
    </div>
  );
}

export default App;
