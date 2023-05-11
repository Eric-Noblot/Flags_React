import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]); //[] on itialise par defaut un tableau vide
  const [rangeValue, setRangeValue] = useState(36); //on veut un minimum de 36 dans notre value
  const [selectedRadio, setSelectedRadio] = useState("");

  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  //le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data)); //Avec axios au lieu de fetch, on a plus besoin de .json car il transofrme automtiquement un json en objet exploitable
  }, []); // au dessus on veut ajouter res.data à notre State, on met la valeur qu'on veut ajouter entre paranthèses /le tableau apres la virgule est un callback
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {/* e.target.value est la BASE pour aller recuper la valeur d'une élément  */}
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked = {continent === selectedRadio} //lorsqu'on clique sur le bouton annuler la recherche, la coche ne s'enleve pas. Il faut donc préciser dans les paramètres qu'on veut que la case soit cochée seulement si elle égale à la valeur de notre State Radio
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
            {/* le fait de donner un name à notre input permet de ne pouvoir sélectionner qu'un pays à la fois */}
          </li> // HtmlFor est le for de HTML mais en React
        ))}
      </ul>
      {selectedRadio && <button onClick = {() => setSelectedRadio("")}>Annuler la recherche</button>} 
      {/* on dit si selectedRadio est TRUE alors tu m'affiches un bouton(si un continent radio est selectionné donc) */}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio)) //gere l'input radio qui choisit le pays
          .sort((a, b) => b.population - a.population) //classe les pays du plus peuplé au moins peuplé, on let met apres filter pour soulager le tri (sinon il devrait le faire a chaque fois sur 250)
          .slice(0, rangeValue) //gere les drapeaux selon la barre range
          .map(
            (
              country,
              index //si on ne sait pas quoi donner d'unique pour une key, on peut choisir d'ajouoter une variable index dans la methode map, react va se charger de l'incrémenter tout seul
            ) => (
              // <li key = {index}>{country.translations.fra.common}</li>
              <Card key={index} country={country} /> //ici le 1er counrty est une props. on veut passer les donner du parent(Countries) à l'enfant (Card).
            )
          )}
      </ul>
    </div>
  );
};

export default Countries;
