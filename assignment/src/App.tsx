import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Outlay from "./views/Outlay/Outlay";
import Dashboard from "./views/Dashboard/Dashboard";
import E_Routes from "./types/routes";

function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={E_Routes.home}
            element={<Outlay children={<Dashboard></Dashboard>} />}
          />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
