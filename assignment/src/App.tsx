import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Outlay from "./views/Outlay/Outlay";
import Dashboard from "./views/Dashboard/Dashboard";
import E_Routes from "./types/routes";
import Teams from "./views/Teams/Teams";
import Settings from "./views/Settings/Settings";
import Billing from "./views/Billing/Billing";
import Contact from "./views/Contact/Contact";

function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={E_Routes.home}
            element={<Outlay children={<Dashboard></Dashboard>} />}
          />
          <Route
            path={E_Routes.teams}
            element={<Outlay children={<Teams></Teams>} />}
          />
          <Route
            path={E_Routes.settings}
            element={<Outlay children={<Settings></Settings>} />}
          />
          <Route
            path={E_Routes.billing}
            element={<Outlay children={<Billing></Billing>} />}    
          />
          <Route
            path={E_Routes.contact}
            element={<Outlay children={<Contact></Contact>} />}
          />
          
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
