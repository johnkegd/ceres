import EventEmitter from "@johnkegd/utils/EventEmitter";

export default class Time extends EventEmitter {
    static animationStopped = false;
    constructor() {
        super();
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;
        //this.animation();

        // to have delta equal to 0
        this.animationStartId = window.requestAnimationFrame(this.animation.bind(this));

    }

    animation() {
        if (this.animationId && Time.animationStopped) {
            window.cancelAnimationFrame(this.animationId);
            return;
        }
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.elapsed = this.current - this.start;

        this.trigger('animation');
        this.animationId = window.requestAnimationFrame(this.animation.bind(this));
    }
}