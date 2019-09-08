import React, { Component } from 'react';
import Navbar from 'components/Navbar/Navbar';

class Layout extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Navbar/>
                </div>
                <div className="container-fluid">
                    {this.props.main}
                </div>
          </div>
        );
    }
}

export default Layout;