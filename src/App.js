import React from 'react';
import AboutHeaderBar from './components/header/header'
import DisplayAboutFun from './components/displayAbout/displayabout'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import store from './store/store';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <div className="App">
            <AboutHeaderBar />
            <DisplayAboutFun />
          </div>
        </Container>
      </Provider>
    );
  }
}

export default App;
