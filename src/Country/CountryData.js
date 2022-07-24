import React, { useEffect, useState } from 'react';
import Countries from './Countries';
import Search from './Search';
import './Style/country.css';
const url = 'https://restcountries.com/v2/all';
console.log('urllll', url)

const CountryData = () => {
const [isLoading, setIsLoading] = useState(null);
const [error, setError] = useState(null);
const [countries, setCountries] = useState([]);
const [filteredCountries, setFilteredCountries] = useState(countries);

const fetchData = async (url) =>{
    setIsLoading(true);

    try{
        const response = await fetch (url);
        const data = await response.json(url);
        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false);
        setError(null);
        console.log('country', countries);
        }catch(error){
        setIsLoading(false);
        setError(error);
    }
}

useEffect(() => {
 fetchData(url)
}, [])

const handleRemoveCountry = (name)=>{
    const filter = filteredCountries.filter((country) => country.name !== name);
    setFilteredCountries(filter);
}

const handleSearch = (searchValue)=>{
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country)=> {
        const countryName = country.name.toLowerCase();
        return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
};
    return (
        <div>
            <h1>Country App</h1>
            <Search onSearch ={handleSearch}/>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error.message}</h2>}
            {countries && <Countries countries ={filteredCountries} 
            onRemoveCountry = {handleRemoveCountry}/>}
        </div>
    );
};

export default CountryData;