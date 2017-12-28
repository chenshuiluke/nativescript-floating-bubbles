import { Common } from './floating-bubbles.common';
import * as app from "tns-core-modules/application";
import { BubbleService } from './services/bubble.service';
declare var com:any;
export class FloatingBubbles extends Common {
    constructor(){
        super();
        let context = app.android.context;
        var intent = new android.content.Intent();
        intent.setClassName(context, "com.somepackage.BubbleService")
        context.startService(intent);
        console.log("In android section");
    }
}
