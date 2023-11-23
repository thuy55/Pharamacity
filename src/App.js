import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';

class App extends React.Component {
    state = {};
    render() {
        return (
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        );
    }
}

export default App;
