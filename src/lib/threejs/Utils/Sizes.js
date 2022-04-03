import EventEmitter from '@johnkegd/utils/EventEmitter';
export default class Sizes extends EventEmitter {
    constructor() {
        super();

        if (!window) {
            console.warn("Experience class Sizes: consider to start the experience in onMount method, window is: ", window);
        } else {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            window.addEventListener('resize', () => {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
                this.pixelRatio = Math.min(window.devicePixelRatio, 2);
                this.trigger("resize");
            });
        }
    }
}