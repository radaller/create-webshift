import webshift from 'webshift';
import { ThemeProvider } from '@emotion/react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component';

import Logo from './logo512.png';
import theme from './theme';

import Bar from './components/Bar';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    const Home = loadable(() => import('./pages/Home'));
    const Aboutus = loadable(() => import('./pages/Aboutus'));
    const Error = loadable(() => import('./pages/Error'));

    return (
        <ThemeProvider theme={ theme }>
            <Bar className={"header"}>
                <img src={ Logo } width="50" height="50" />
                <Header>Tech Blog</Header>
            </Bar>
            <Bar className={"main-menu"} backgroundColor='white'>
                <Link to="/">
                    <Button>Home</Button>
                </Link>
                <Link to="/about">
                    <Button>About Us</Button>
                </Link>
                <Button onClick={ handleClick }>Click Test</Button>
            </Bar>
            <Switch>
                <Route path={ '/' } component={ Home } exact/>
                <Route path={ '/about' } component={ Aboutus } />
                <Route component={ Error } />
            </Switch>
        </ThemeProvider>
    );
}

export default webshift(App);
