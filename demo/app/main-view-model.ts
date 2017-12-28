import { Observable } from 'tns-core-modules/data/observable';
import { FloatingBubbles } from 'nativescript-floating-bubbles';

export class HelloWorldModel extends Observable {
  public message: string;
  private floatingBubbles: FloatingBubbles;

  constructor() {
    super();

    this.floatingBubbles = new FloatingBubbles();
    this.message = this.floatingBubbles.message;
  }
}
