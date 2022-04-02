import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
export default class Experience {
    self = this;
    constructor(canvas) {
        console.log("Here starting experience", canvas);
        this.canvas = canvas;

        console.log(canvas.width, canvas.height);
        this.sizes = new Sizes(canvas.width, canvas.height);
        this.time = new Time();

        this.sizes.on("resize", this.resizeHandler.bind(this));
        window.experience = this;
    }

    resizeHandler(ev) {
        console.log("resize handler ", ev);
        if (ev && ev.currentTarget) {
            this.width = ev.currentTarget.innerWidth;
            this.height = ev.currentTarget.innerHeight;
            this.pixelRatio = Math.min(ev.currentTarget.devicePixelRatio);
        } else {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.pixelRatio = window.devicePixelRatio;
            console.warn("Sizes resizeHandler: not ev detected");
        }
    }

}