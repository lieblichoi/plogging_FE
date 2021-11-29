import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';
// import { ConnectedRouter } from 'connected-react-router';
// import { history } from './redux/configureStore';
import { ThemeProvider } from 'styled-components';
import theme from './elements/theme';
import GlobalStyle from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <GlobalStyle> */}
        {/* <ConnectedRouter history={history}> */}
        <App />
        {/* </ConnectedRouter> */}
        {/* </GlobalStyle> */}
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
