

import CustomDrawer from './components/CustomDrawer';
import NavbarList from './components/NavbarList';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688'
    }
  },
}) 

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <ThemeProvider theme={theme}>
        <NavbarList/>
        <CustomDrawer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
