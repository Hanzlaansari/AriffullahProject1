import React from 'react';
import AboutHeaderBar from './components/header/header'
import DisplayAboutFun from './components/displayAbout/displayabout'
import Videos from './components/videos/videosModule'
import AudioHeader from './components/header/audioHeader'
import Audios from './components/audios/auidiosModule'
import store from './store/store';
import { Provider } from 'react-redux';
import DisplayImages from './components/displayImages/displayImages';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        
          <div className="App">
            {/* <AboutHeaderBar/>
            <br/>
            <DisplayAboutFun /> */}
            <Audios/>
            {/* <DisplayImages/> */}
            {/* <Videos/> */}
          </div>
      </Provider>
    );
  }
}
export default App;