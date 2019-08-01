import React, {Component} from 'react';
import Layout from '../components/Layout';


class AboutPage extends Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="intro">
                        <h1 className="intro__title">Best ever camp for your child</h1>  
                    </div>
                    <div className="content">
                        <h1 className="content__title">About us</h1>
                        <p className="content__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default AboutPage;