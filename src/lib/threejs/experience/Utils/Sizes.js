import EventEmitter from '@johnkegd/utils/EventEmitter';
export default class Sizes extends EventEmitter {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;

        if (!window) {
            console.warn("Experience class Sizes: consider to start the experience in onMount method, window is: ", window);
        } else {
            this.pixelRatio = window.devicePixelRatio;
            window.addEventListener('resize', () => {
                this.trigger("resize");
            });
        }
    }
}