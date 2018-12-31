import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components

import ContactComponent from "../screen/Contact/ContactComponent";
import HomepageComponent from "../screen/Home/HomepageComponent";
import LoginComponent from "../screen/Login/LoginComponent";
import SignupComponent from "../screen/SignUp/SignupComponent";
import ResetComponent from '../screen/Reset/ResetComponent';
import MangaTextComponent from "../screen/MangaText/MangaTextComponent";
import MangaListComponents from "../screen/MangaList/MangaListComponents";
import MangaBioComponent from "../screen/MangaBio/MangaBioComponent";
import MangaReadComponent from "../screen/MangaRead/MangaReadComponent";
import NotFoundComponent from "../components/404/notFound";
import ForgetPasswordModal from "../components/login/forgetPasswordModal";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={HomepageComponent} exact />
          <Route path="/home" component={HomepageComponent} exact />
          <Route path="/login" component={LoginComponent} exact />
          <Route path="/forgot" component={ForgetPasswordModal} exact />
          <Route path="/sign up" component={SignupComponent} exact />
          <Route path="/reset" component={ResetComponent} exact />
          <Route path="/contact" component={ContactComponent} exact />
          <Route path="/text list" component={MangaTextComponent} exact />
          <Route path="/image list" component={MangaListComponents} exact />
          <Route path="/mangabio" component={MangaBioComponent} exact />
          <Route path="/mangareads" component={MangaReadComponent} exact />
          <Route path='/notfound' component={NotFoundComponent} exact />
        </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
