import React from 'react';
import CustomDrawer from './components/CustomDrawer'
import NavbarList from './components/NavbarList'
import MalisAppBar from './components/MalisAppBar'
import MalisDisplayPage from './components/MalisDisplayPage'
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688'
    }
  },
}) 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page1State: true,
      page2State: false,
      page3State: false
    }
  }

  setPage1State = () => {
    this.setState( state => ({page1State: true, page2State: false, page3State: false}));
  }
  setPage2State = () => {
    this.setState( state => ({page1State: false, page2State: true, page3State: false}));
  }
  setPage3State = () => {
    this.setState( state => ({page1State: false, page2State: false, page3State: true}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <ThemeProvider theme={theme}>
          <NavbarList
            setPage1State={this.setPage1State}
            setPage2State={this.setPage2State}
            setPage3State={this.setPage3State}>
          </NavbarList>
          <MalisAppBar/>
          <MalisDisplayPage
            page1State={this.state.page1State}
            page2State={this.state.page2State}
            page3State={this.state.page3State}
            setPage1State={this.setPage1State}
            setPage2State={this.setPage2State}
            setPage3State={this.setPage3State}>
          </MalisDisplayPage>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
