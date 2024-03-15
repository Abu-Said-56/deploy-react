import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries,setCountries] = useState([]);

    const [visitedcountries,setVisitedCountries] = useState([]);

    const [visitedFlag,setvisitedFlag] = useState([])

    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data =>setCountries(data))
    },[])

    // handle country name
    const handleVisitedCountry = country =>{
        //console.log('add visited country');
        //console.log(country);
        const newvisitedCountry = [...visitedcountries,country];
        setVisitedCountries(newvisitedCountry);
    }
    // handle country flag
    const handlevisitedflag = flag =>{
        //console.log('visited flag');
        const newvisitedFlag = [...visitedFlag,flag];
        setvisitedFlag(newvisitedFlag);
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3> 
           {/* handle country name */}
           <div>
               <h5>Visited Countries:{visitedcountries.length}</h5>
               <ol>
                    {
                        visitedcountries.map(country=> <li key={country.cca3}>{country.name.common}</li> )
                    }
               </ol>
           </div>

                {/* display flag image*/}
            <div className="flag-container">
                {
                    visitedFlag.map((flag,idx)=> <img key={idx} src={flag} /> )
                }
            </div>

            {/* dispaly country */}
          <div className="country_container">
          {
            countries.map(country=> <Country 
               key={country.cca3} 
               handleVisitedCountry={handleVisitedCountry}
               handlevisitedflag={handlevisitedflag}
               country={country}></Country>)
          }
            
       </div>
        </div>
    );
};

export default Countries;