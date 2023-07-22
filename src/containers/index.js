// react
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import { Nav, Footer, Header } from '../components/'
import headerProps from '../components/Header/data'
import navProps from '../components/Nav/data'
import footerProps from '../components/Footer/data'

// containers
import Home from './home/'
import Colors from './colors/'
import Icons from './icons/'
import Invalid from './invalid/'

 
const App = () => {
    return (
        <BrowserRouter basename="/tunein-app">
            <div className='bodywrap'>
                {/* render header */}
                <Header {...headerProps} />

                {/* render navigation */}
                <Nav {...navProps} />

                {/* render center content */}
                <div id='center'>
                    <Switch>
                        <Route exact path={navProps.navItems[0].url} component={Home} />
                        <Route path={navProps.navItems[1].url} component={Colors} />
                        <Route path={navProps.navItems[2].url} component={Icons} />
                        <Route component={Invalid} />
                    </Switch>
                </div>

                {/* render footer */}
                <Footer {...footerProps} />
            </div>
        </BrowserRouter>
    );
}


export default App;