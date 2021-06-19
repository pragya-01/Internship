import './Opportunities.css';
import { GrNetwork} from "react-icons/gr";
import {FaHandshake} from "react-icons/fa";
import {GoListUnordered} from "react-icons/go";
import React, {Component} from 'react';

 export class Opportunities extends Component{
   render() {
   return (
    <div className="opportunities">
             <div className="opportunitiesContainer">
             <GrNetwork className="iconOpportunitiesContainer"/>
                  <p className="titleOpportunitiesContainer">
                   <b>Network Globally</b>
                 </p>
                    <p className="descriptionOpportunitiesContainer">
                    Describe a key benefit that your product provides for
                    your customer- and explain the impact it can have.
                    </p>
             </div>
             <div className="opportunitiesContainer">
             <GoListUnordered className="iconOpportunitiesContainer"/>
                    <p className="titleOpportunitiesContainer">
                    <b>Enter new markets and buisness segments</b>
                    </p>
                    <p className="descriptionOpportunitiesContainer">
                    Describe a key benefit that your product provides for
                    your customer- and explain the impact it can have.
                    </p>
             </div>
             <div className="opportunitiesContainer">
             <FaHandshake className="iconOpportunitiesContainer"/>
                    <p className="titleOpportunitiesContainer">
                    <b>Find best partners and suppliers</b>
                    </p>
                    <p className="descriptionOpportunitiesContainer">
                    Describe a key benefit that your product provides for
                    your customer- and explain the impact it can have.
                    </p>
             </div>
    </div>
   );
   }
  }
export default Opportunities;
