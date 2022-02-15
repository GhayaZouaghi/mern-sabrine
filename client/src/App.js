import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import LandPage from "./pages/LandPage/LandPage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/profile";
import Profileview from "./pages/profileview/profileview";
import DevelopersList from "./pages/DevelopersList/DevelopersList";
import News from "./pages/News/News";
import Error from "./pages/Error/Error";

import PrivateRoute from "./Router/PrivateRoute";
import { currentUser } from "./JS/Actions/user";

function App() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    token && dispatch(currentUser());
  }, [dispatch, token]);
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/developers" component={DevelopersList} />
        {/* <PrivateRoute path="/news" component={News} /> */}
        <Route path="/news" component={News} />

        <PrivateRoute path="/profileview" component={Profileview} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

console.clear();
export default App;
