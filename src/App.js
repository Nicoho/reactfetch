import React, { Component } from 'react';
import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      citations:  {}
    };
    
  };
  getEmployee() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          citations:  data[0],
        });
    });
}
  
  render() {
    return (
      <div className="App">
      <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />
      <DisplayEmployee  citations={this.state.citations}  />
      </div>
    );
  }
}

export default App;
