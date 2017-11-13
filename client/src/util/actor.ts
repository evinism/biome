export interface Message {
  type: string,
  data: any,
};

type Listener = (this: void, msg: Message) => void;

export default class Actor {
  postHandler: Listener;
  listeners: Listener[];

  constructor( postHandler : Listener ) {
    let listeners : Listener[] = [];
    this.listeners = listeners;
    this.postHandler = postHandler;
  }

  listen(fn : Listener){
    this.listeners.push(fn);
  }

  post(msg : Message){

  }

  broadcast(msg : Message){
    this.listeners.forEach(listener => listener(msg));
  }
}
