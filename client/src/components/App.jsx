import React from 'react';
import VecDisplay from './VecDisplay';
import Engine from '../engine';
import * as math from 'mathjs';

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
    /*this.engine = new Engine();
    this.state = {
      environment: this.engine.getEnvironment(),
    }*/
  }

  componentWillMount(){
    fetch(window.env.rootPath + 'density')
      .then(res => res.json())
      .then((res) => {
        this.setState({ environment: math.matrix(res)})
      });
  }

  render(){
    /*const handleClick = () => {
      this.engine.tick();
      this.setState({
        environment: this.engine.getEnvironment()
      });
    }*/
    return(
      <div>
        <h1>yo dawg</h1>
        {this.state.environment && (
          <VecDisplay field={this.state.environment} />
        )}
      </div>
    );
  }
}

export default App;
