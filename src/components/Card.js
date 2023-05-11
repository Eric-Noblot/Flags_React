import React from 'react';
//const Card = ({ country }) => { //meme methode qu'en dessous mais en applicant la destructuration
const Card = (props) => {
    //console.log(props.country)
    return (
        
        <li className = "card">
            <img src = {props.country.flags.svg} alt ={"le drapeau " + props.country.translations.fra.common} />
            <div className ="infos">
                <h2>{props.country.translations.fra.common}</h2>
                <h4>{props.country.capital}</h4>
                <p>Pop.  {props.country.population.toLocaleString()}</p> 
            </div>
        </li>
    );//ToLocaleString permet de séparer les milliers à l'affichage
};

export default Card;