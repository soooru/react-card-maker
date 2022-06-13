import './app.css';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Login authService={authService} />
    </div>
  );
}

export default App;
