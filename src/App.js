
import './App.css';
import Chat from './components/Chat';
import Signin from './components/Signin';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      {user ? <Chat /> : <Signin />}
    </div>
  );
}

export default App;
