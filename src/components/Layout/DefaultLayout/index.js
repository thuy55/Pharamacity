import React from 'react';

import Header from './Header';
import TabBar from './TabBar';

class DefaultLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <TabBar />
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}

export default DefaultLayout;
