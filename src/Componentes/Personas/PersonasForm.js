import React from "react";
import axios from 'axios';

class PersonasForm extends React.Component{

    constructor( props ){
        super(props)
        this.state={}
    }
    
    submitNuevaPersona(event){
        event.preventDefault();
        //hacer la peticion via axios
        axios.post('http://localhost:5000/personas/',{

        nombre:this.refs.nombre.value,
        generos:this.refs.generos.value,
        estudio:this.refs.estudio.value,
        episodios:this.refs.episodios.value
        
        }).then(respuesta => console.log(respuesta.data))
        .catch(error => console.log(error))
    }

    render(){
        return(
      
  <div className="center ">
      <h3 className="center #00897b teal darken-1">Nuevo Anime</h3>
    <form className="col s12 " onSubmit={this.submitNuevaPersona.bind(this)}>
      <div className="row">
        <div className="input-field col s6">
          <input  id="nombre" ref="nombre" type="text"  />
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="input-field col s6">
          <input  id="generos" ref="generos" type="text"  />
          <label htmlFor="generos">Generos</label>
        </div>
        <div className="input-field col s6">
          <input  id="estudio" ref="estudio" type="text"  />
          <label htmlFor="estudio">Estudio</label>
        </div>
        <div className="input-field col s6">
          <input  id="episodios" ref="episodios" type="text"  />
          <label htmlFor="episodios">Episodios</label>
        </div>
        
        <div className="input-field col s12">          
            <button class="btn waves-effect waves-light #00897b teal darken-1" type="submit" name="action">
                Registrar
            </button>
        </div>
      </div>
    </form>
  </div>
        )
    }
}

export default PersonasForm