import '../assets/App.css';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import Routes from './Routes';
import store from '../store/store';

const App = () => (

  <Provider store={store}>
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  </Provider>

);

export default App;
