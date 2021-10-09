import { ChakraProvider } from "@chakra-ui/react"
import FacultyLogin from "./Views/Login/facultyLogin.jsx"
import StudentLogin from "./Views/Login/studentLogin.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import StudentDashboard from "./Views/Dashboard/studentDashboard.jsx";
import FacultyDashboard from "./Views/Dashboard/facultyDashboard.jsx";
import Classroom from "./Views/Dashboard/Classroom/Classroom.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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

          <PrivateRoute exact path="/student-dashboard" component={StudentDashboard} />
          <PrivateRoute exact path="/faculty-dashboard" component={FacultyDashboard} />
          <PrivateRoute exact path="/:id/classroom" component={Classroom} />

        </Switch>

      </ChakraProvider>
    </Router>
  );
}

export default App;
