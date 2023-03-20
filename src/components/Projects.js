import React from "react"
import AlphaStocks from "../assets/AlphaStocks.png"
import WeatherAPI from "../assets/WeatherAPI.jpeg"

function Project() {
    const ProjectsArray = [
        { image: AlphaStocks, GitHub: "https://github.com/ArmaanZabihi/Alpha-Stocks" 
    }, { image: "https://github.com/ArmaanZabihi/updated-Weather-API" ,image: WeatherAPI}]

    return (
        <div className="App">
            <h1>
                Check out my projects on GitHub!
                https://github.com/ArmaanZabihi
            </h1>
            <div>{ProjectsArray.map(item => (
               <a href={item.GitHub}>
                <img src={item.image} />
               </a>
            ))
            }
                {/* <img src={AlphaStocks} /> */}

            </div>
        </div>
    );
}

export default Project;
// https://github.com/ArmaanZabihi/Alpha-Stocks
// // https://github.com/ArmaanZabihi/updated-Weather-API