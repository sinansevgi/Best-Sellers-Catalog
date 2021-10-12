import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import appStyles from '../assets/App.module.css';
import Navbar from './Navbar';
import Routes from './Routes';
import store from '../store/store';

const App = () => (

  <Provider store={store}>
    <BrowserRouter>
      <div className={appStyles.app}>
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  </Provider>

);

export default App;
