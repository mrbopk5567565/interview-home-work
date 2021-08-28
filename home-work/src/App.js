// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from 'redux/store.jsx'
import Routes from 'routers'

function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
