import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Header from './components/Header';
import Home from './pages/Home';
import Background from './assets/bro.svg';
import { appStyles } from './styles';

function App() {
  return (
    <Router>
      <Box sx={appStyles.root}>
        {/* SVG de fundo - Desktop apenas */}
        <Box sx={appStyles.backgroundContainer}>
          <Background />
        </Box>

        {/* Header Fixo */}
        <Header />

        {/* Conteúdo Principal */}
        <Box component="main" sx={appStyles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;