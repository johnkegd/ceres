import EventEmitter from "@johnkegd/utils/EventEmitter";

export default class Time extends EventEmitter {
    constructor() {
        super();
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16
    }

    animation() {
        console.log("animation");
        window.requestAnimationFrame(this.animation.bind(this));
    }
}