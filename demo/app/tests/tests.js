var FloatingBubbles = require("nativescript-floating-bubbles").FloatingBubbles;
var floatingBubbles = new FloatingBubbles();

describe("greet function", function() {
    it("exists", function() {
        expect(floatingBubbles.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(floatingBubbles.greet()).toEqual("Hello, NS");
    });
});