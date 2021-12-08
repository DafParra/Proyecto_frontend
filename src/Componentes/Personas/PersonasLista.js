import React from "react";

const PersonasLista=(props)=>{
    return(
        <ul className="collection with-header ">
        <li className="collection-header #00897b teal darken-1"><h4>Anime</h4></li>
        {
            props.lista.map((elemento)=>{
                return(
                    <div>
                    <li className="collection-item" key={elemento._id} onClick={props.actualizarPersonaActual.bind(this,elemento)}>{elemento.nombre} {elemento.episodios}
                    <a href="#!" className="secondary-content " onClick={ props.borrarPersona.bind(this,elemento)}>
                    Eliminar</a>
                    </li>
                    
                    </div>
                    
                )
            })
        }       
      </ul>
    );
}

export default PersonasLista 