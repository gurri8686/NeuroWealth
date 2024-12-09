import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes"; 

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
