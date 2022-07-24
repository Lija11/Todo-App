import React from 'react';

import style from './Style/country.module.css'

const Country = (props) => {
    const {name, flags, capital, population, area} = props.country;
    const handleRemove = (name)=>{
        props.onRemoveCountry(name)
    }
    return (
        <div>
            <article className={style.country}>
                <div>
                    <img src={flags.png} alt={name.common} className={style.flag}/>
                    <h3>Name : {name}</h3>
                    <h3>population : {population}</h3>
                    <h3>Capital : {capital}</h3>
                    <h3>Area : {area}</h3>
                    <button className={style.btn} onClick={()=> {handleRemove(name)}}>Remove Country</button>
                </div>
            </article>
        </div>
    );
};

export default Country;