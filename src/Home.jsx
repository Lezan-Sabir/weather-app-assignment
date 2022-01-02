import { Link } from "react-router-dom";
import { useState } from "react";
import Weather from "./Weather";
import cities from "./cities";

const Home = props=>{
    
    return(
        <div className="weather">
             {
                cities.map(c=>{
                    <Link to={`/cities/${c.cityName}`}>
                        <div className='city-names'>
                            <h1>{c.cityName},{c.country}</h1>
                        </div>
                    </Link>
                })
            }
            
            <Link to="/Weather">Erbil</Link> 
            <Link to="/Weather">Sulaymaniyah</Link>
            <Link to="/Weather">Duhok</Link>
           
        </div>
    )
};
export default Home;
//value={location} onClick={e => {
//setLocation(e.target.value)