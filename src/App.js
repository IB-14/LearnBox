import { ChakraProvider } from "@chakra-ui/react"
import FacultyLogin from "./Views/Login/facultyLogin.jsx"
import StudentLogin from "./Views/Login/studentLogin.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import { Dashboard } from "./Views/Dashboard/dashboard.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ChakraProvider>
        
        <Switch>

          <Route exact path="/">
            <Redirect to="/student-login" />
          </Route>
          
          <Route exact path="/faculty-login">
            <FacultyLogin />
          </Route>

          <Route exact path="/student-login">
            <StudentLogin />
          </Route>

          <PrivateRoute exact path="/dashboard" component={Dashboard} />

        </Switch>

      </ChakraProvider>
    </Router>
  );
}

export default App;
