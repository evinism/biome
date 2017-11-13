import Actor from '../util/actor';
import { makeRandomField } from '../util/graveyard';
import { tick } from './environment';

class Engine extends Actor {
  private env;
  constructor () {
    super((msg) => console.log(msg));
    this.env = makeRandomField([50, 50]);
  }

  tick() {
    this.env = tick(this.env);
  }

  getEnvironment(){
    return this.env;
  }
}

export default Engine;
