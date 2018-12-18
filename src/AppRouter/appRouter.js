import React,{ Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Components
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
// Screens
import Home from  '../Screens/Home/home';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path='/mangalist'  exact />
                    <Route path='/login'  exact />
                    <Route path='/signup'  exact />
                    <Route path='/contact' exact />
                </Switch>
                <Footer />
            </Fragment>
        </BrowserRouter>
    )
};

export default AppRouter;