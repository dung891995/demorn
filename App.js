/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import { View, Text, } from 'react-native';

import { Stack, Router, Scene } from 'react-native-router-flux';
import Login from './screens/login';
import Register from './screens/register';
import Home from './screens/home';
// import { Button, ThemeProvider } from 'react-native-elements';

class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" initial />
          <Scene key="register" component={Register} title="Register" />
          <Scene key="home" component={Home} />
        </Stack>
      </Router>
    );
  }
}
export default App;

// const App = () => (
//   <Router>
//     <Stack key="root">
//       <Scene key="login" component={Login} title="Login" initial />
//       <Scene key="register" component={Register} title="Register" />
//       <Scene key="home" component={Home} />
//     </Stack>
//   </Router>
// )





// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//  render () {
//    return (
//     <ThemeProvider>
//       <Button title ='HI'/>
//     </ThemeProvider>
//     )
//   }

// }



// export default App;





