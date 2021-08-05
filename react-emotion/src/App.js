import { ThemeProvider } from '@emotion/react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component';

import WebpackLogo from './img/icon-webpack.svg';
import ReactLogo from './img/icon-react.png';
import EmotionLogo from './img/icon-emotion.png';
import LoadableLogo from './img/icon-loadable.png';
import Favicon from "./img/favicon.ico";
import theme from './theme';

import Bar from './components/Bar';
import Header from './components/Header';
import Button from './components/Button';

export const Headers = () => {
    return (
        <head>
            <meta charSet="utf-8" />
            <link rel="icon" href={ Favicon } />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created using create-react-app" />
            <title>title</title>
        </head>
    );
}

export default () => {

    const Welcome = loadable(() => import('./pages/Welcome'));
    const Posts = loadable(() => import('./pages/Posts'));
    const Users = loadable(() => import('./pages/Users'));
    const Aboutus = loadable(() => import('./pages/Aboutus'));
    const Error = loadable(() => import('./pages/Error'));

    const handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    return (
        <ThemeProvider theme={ theme }>
            <Bar className={"header"}>
                <Header>
                    <div style={ { display:"inline" } }>{"{"}Web{"}"}{"{"}Shift{"}"}{" => "}</div>
                    <img src={ WebpackLogo } style={ { "verticalAlign": "bottom" } } width="35" height="35" />
                    <div style={ { display:"inline" } }>{" + "}</div>
                    <img src={ ReactLogo } style={ { "verticalAlign": "bottom" } } width="35" height="35" />
                    <div style={ { display:"inline" } }>{" + "}</div>
                    <img src={ EmotionLogo } style={ { "verticalAlign": "bottom" } } width="35" height="35" />
                    <div style={ { display:"inline" } }>{" + "}</div>
                    <img src={ LoadableLogo } style={ { "verticalAlign": "bottom" } } width="35" height="35" />
                </Header>
            </Bar>
            <Bar className={"main-menu"} backgroundColor='white'>
                <Link to="/">
                    <Button>Home</Button>
                </Link>
                <Link to="/posts/">
                    <Button>Posts</Button>
                </Link>
                <Link to="/users/">
                    <Button>Users</Button>
                </Link>
                <Link to="/about/">
                    <Button>About Us</Button>
                </Link>
                <Button onClick={ handleClick }>Click Test</Button>
            </Bar>
            <Switch>
                <Route path={ '/' } component={ Welcome } exact/>
                <Route path={ '/posts/' } component={ Posts } />
                <Route path={ '/users/' } component={ Users } />
                <Route path={ '/about/' } component={ Aboutus } />
                <Route component={ Error } />
            </Switch>
        </ThemeProvider>
    );
}
