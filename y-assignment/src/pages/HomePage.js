import React, {Component} from 'react';
import Layout from '../components/Layout'
import QueryForm from './QueryForm'


class HomePage extends Component {
    render(){
        return (
            <Layout>
                <div className="container">
                    <div className="intro">
                        <h1 className="intro__title">Best ever camp for your child</h1>  
                        { this.props.location.pathname === "/" ? < QueryForm /> : null }  
                    </div>
                    <div className="content">
                        
                    </div>
                </div>
            </Layout>
        )
    }
}

export default HomePage;