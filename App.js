import './App.css';
import { GrNetwork} from "react-icons/gr";
import {FaHandshake} from "react-icons/fa";
import {GoListUnordered} from "react-icons/go";
import React, {Component} from 'react';

 export class App extends Component{
   render() {
   return (
   <div className="oppurtunities">
             <div className="oppurtunitiesContainer">
             <GrNetwork className="iconOppurtunitiesContainer"/>
                  <p className="titleOppurtunitiesContainer">
                   <b>Network Globally</b>
                 </p>
                    <p className="descriptionOppurtunitiesContainer">
                    Describe a key benefit that your product provides for
                    your customer- and explain the impact it can have.
                    </p>
             </div>
             <div className="oppurtunitiesContainer">
             <GoListUnordered className="iconOppurtunitiesContainer"/>
                    <p className="titleOppurtunitiesContainer">
                    <b>Enter new markets and buisness segments</b>
                    </p>
                    <p className="descriptionOppurtunitiesContainer">
                    Describe a key benefit that your product provides for
                    your customer- and explain the impact it can have.
                    </p>
             </div>
             <div className="oppurtunitiesContainer">
             <FaHandshake className="iconOppurtunitiesContainer"/>
                    <p className="titleOppurtunitiesContainer">
                    <b>Find best partners and suppliers</b>
                    </p>
                    <p className="descriptionOppurtunitiesContainer">
                    Describe a key benefit that your product provides for
                    your customer- and explain the impact it can have.
                    </p>
             </div>
    </div>
   );
   }
  }
export default App;
