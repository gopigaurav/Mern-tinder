import React, { useState, useEffect} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from './axios';


function TinderCards() {

    const [people,setPeople] = useState([ {
        name: 'Tom cruise',
        url :"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/500px-Tom_Cruise_by_Gage_Skidmore_2.jpg"
    },
    {
        name: 'Robert Downey Jr',
        url :"https://i.pinimg.com/474x/fa/73/27/fa73277ad0cdf34d7049731dcb774a12.jpg"
    },
    {
        name: 'Dwayne Johnson',
        url :"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/500px-Dwayne_Johnson_2%2C_2013.jpg"
    },
    {
        name: 'Gal Gadot',
        url :"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gal_Gadot_2016_lighting_corrected.jpg/500px-Gal_Gadot_2016_lighting_corrected.jpg"
    },
    {
        name: 'Ryan Reynolds',
        url :"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/500px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg"
    },
    {
        name: 'Sophie Turner',
        url :"https://i.pinimg.com/474x/76/19/95/761995fee95bc44ff24a526da52abcae.jpg"
    },
    {
        name: 'Tom Hardy',
        url :"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/500px-Tom_Hardy_by_Gage_Skidmore.jpg"
    },
    {
        name: 'Angalina jolie',
        url :"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/500px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg"
    },
    {
        name: 'Chris Hemsworth',
        url :"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/500px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg"
    }]);

    useEffect(() =>{
        async function fetchData() {
            const req = await axios.get('./tinder/cards')
            setPeople(req.data);
        }
        fetchData();
    }, [])

    const swiped =(direction,nameToDelete) =>{
        console.log("removing" , nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }

    return (
        <div className="tindercards">
            <div className="tindercards__cardcontainer">
            {people.map((person) => (
                <TinderCard
                  className="swipe"
                  key={person.name}
                  preventSwipe={["up","down"]}
                  onSwipe={(dir) => swiped(dir,person.name)}
                  onCardLeftScreen = {() => outOfFrame(person.name)}>

                <div
                style={{background: `url(${person.url})`}}
                className="card">
                    <h3> {person.name}</h3>

                </div>
                </TinderCard>
            ))}
             
            </div>
           
        </div>
    )
}
export default TinderCards
