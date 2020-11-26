import React from "react";
import ApiContext from "../../ApiContext";
// import { Nome } from "./AgenteCardStyles";

const AgenteCard = () => {
  // const dataApi = React.useContext(ApiContext);
  // console.log("AgenteCard ", dataApi);


  return ( 
    <ApiContext.Consumer>
      {value => (
          <div style={{backgroundColor: "green"}}>value {value.operator.name}</div>
        )}
    </ApiContext.Consumer>
  );
};

export default AgenteCard
