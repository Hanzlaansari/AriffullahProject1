import React from 'react';
// import componenets
import AboutHeaderBar from './components/header/header'
import DisplayAboutFun from './components/displayAbout/displayabout'
import AddWorkPlace from './components/addInfo/addWorkplace/addWorkPlace'
import AddSchool from './components/addInfo/addSchool/addSchool'
import AddCollege from './components/addInfo/addCollege/addCollege'
import AddYour from './components/addInfo/addYour/addYour'
import store from './store/store';
import IntegrationDownshift from './components/addInfo/addYour/stateInfo/stateInfo'
import {Provider} from 'react-redux';

class App extends React.Component {
  render(){
    return (
     <Provider store={store}>
     
      <div className="App">
    {/* <AboutHeaderBar/>
    <DisplayAboutFun/> */}
     {/* <AddWorkPlace/> */}
     {/* <AddSchool/> */}
     {/* <AddCollege/> */}
     <AddYour/>
     {/* <IntegrationDownshift/> */}
      </div>
      </Provider>
    );
  }
}

export default App;
