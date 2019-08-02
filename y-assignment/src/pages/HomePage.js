import React, { Component } from 'react';
import Layout from '../components/Layout'
import QueryForm from '../components/QueryForm'
import PropertyCard from '../components/PropertyCard'

import { connect } from 'react-redux'
import { getCards } from '../actions/CardsActions'


class HomePage extends Component {
    
    componentDidMount(){
        this.props.onGetCards();
        // console.log(this.props.cards)
    }

    render(){  
        const { cards } = this.props
        let allCards
        try {
            console.log(cards.results)
            allCards = cards.results.map(c => (
                <PropertyCard card={c} key={c.id} />
                )
            )
        } catch {
            allCards = null
        }

        return (
            <Layout>
                <div className="container">
                    <div className="intro">
                        <h1 className="intro__title">Best ever camp for your child</h1>  
                        { this.props.location.pathname === "/" ? < QueryForm /> : null }  
                    </div>
                    <div className="content content__cards">
                        {
                            allCards
                        }
                    </div>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    cards: state.cards.cards
  });
  
  const mapDispatchToProps = dispatch => ({
    onGetCards: () => dispatch(getCards())
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);