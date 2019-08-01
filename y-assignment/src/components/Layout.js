import React, {Component, Fragment} from 'react';
import Header from "./Header";

class Layout extends Component {
    render(){
        return (
            <Fragment>
                <Header />
                <div>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Layout;