import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';
import style from './Style/countries.module.css'

const Countries = (props) => {
    const countries = props.countries;
    return (
        <div className={style.countries}>
            {
                countries.map((country) => {
                    const countrynew = {country, id: uuidv4()}
                    return <Country {...countrynew} key = {countrynew.id} onRemoveCountry ={props.onRemoveCountry}/>
                })
            }
        </div>
    );
};

export default Countries;