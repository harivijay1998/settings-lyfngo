import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Appointments from './Components/Appointments';
import Patients from './Components/Patients';
import DashboardAI from './Components/DashboardAI';
import Profile from './Components/Profile';
import Pharmarcy from './Components/Pharmarcy';
import Channels from './Components/Channels';
import Leads from './Components/Leads';
import Inventory from './Components/Inventory';
import Products from './Components/Products';
import Expenses from './Components/Expenses';
import Events from './Components/Events';
import Consults from './Components/Consults';
import Settings from './Settings';
import { TemplateContext, TemplateProvider } from './Settings/TemplateContext';

const theme = createTheme({
  palette: {
    primary: {
      main: "#125fbf",
    },
    secondary: {
      main: "#f0ffff",
    },
    background: {
      default: "#f6f7f9",
    },
  },
  typography: {
    fontFamily: "Poppins, serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TemplateProvider>
      <Router>
      <Routes>
  <Route path="/" element={<Signin />} />
  <Route path="/home" element={<Home />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="appointments" element={<Appointments />} />
    <Route path="patients" element={<Patients />} />
    <Route path="leads" element={<Leads />} />
    <Route path="pharmacy" element={<Pharmarcy />} />
    <Route path="channels" element={<Channels />} />
    <Route path="inventory" element={<Inventory />} />
    <Route path="products" element={<Products />} />
    <Route path="expenses" element={<Expenses />} />
    <Route path="events" element={<Events />} />
    <Route path="consults" element={<Consults />} />
    <Route path="dashboard-ai" element={<DashboardAI />} />
    <Route path="settings" element={<Settings />} />
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>

      </Router>
      </TemplateProvider>
    </ThemeProvider>
  );
}

export default App;
