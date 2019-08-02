import React from 'react'


const PropertyCard = ({card}) => {
    // console.log(card.objects)
    return (
        <div className="property-card">
            <img className="property-card__image" alt="Apartment" src={card.objects[3].data.medium.jpeg}/>
            <p className="property-card__address">{card.building.address.raw}</p>
            <p className="property-card__price">$ {card.price}</p>
        </div>
    )
}

export default PropertyCard