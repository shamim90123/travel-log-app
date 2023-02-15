import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
 
import store from './redux/store';

import App from './App';
import './assets/css/index.css';

// import AuthRoutes from './routes';

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
);