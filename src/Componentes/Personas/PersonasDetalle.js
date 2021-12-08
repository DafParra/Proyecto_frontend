import React, { useState } from "react";
import axios from 'axios';


const PersonasDetalle=(props)=>{

    return(
        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              
            </div>
            <div className="card-content">
            
            <span className="card-title card-panel collection-header #00897b teal darken-1 text-lighten-1">
                {props.personita.nombre} </span>
              <p>Generos:{props.personita.generos}</p>
              <p>Estudio:{props.personita.estudio}</p>
              <p>Episodios:{props.personita.episodios}</p>
            </div>
            <div className="card-action ">
             
            </div>
          </div>
        </div>
      </div>
    )
}

export default PersonasDetalle