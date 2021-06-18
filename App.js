import './App.css';
import { IconContext } from 'react-icons';
import { GrNetwork} from "react-icons/gr";
import {FaHandshake} from "react-icons/fa";
import {GoListUnordered} from "react-icons/go";

 export class App extends React.Component{
   render() {
   return (
    <div className="Oppurtunities">
       <IconContext.Provider
           value={{color: '#OF1D34', size:'20%'}}
      >
            <div className="oppurtunitiesContainer">
            <GrNetwork />
            <h4>
              Network Globally
            </h4>
            <p>
              Describe a key benefit that your product provides for
              your customer- and explain the impact it can have.
            </p>
            </div>
            <div classname="oppurtunitiesContainer">
            <GoListUnordered/>
            <h4>
              Enter new markets and buisness segemnts
            </h4>
            <p>
              Describe a key benefit that your product provides for
              your customer- and explain the impact it can have.
            </p>
            </div>
            <div className="oppurtunitiesContainer">
            <FaHandshake />
            <h4>
              Find best partners and suppliers
            </h4>
            <p>
              Describe a key benefit that your product provides for
              your customer- and explain the impact it can have.
            </p>
            </div>
      </IconContext.Provider>
    </div>
   );
   }
  }
export default App;
