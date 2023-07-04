import Tool from "./Tool";

export class Eraser extends Tool {
    constructor(strokeColor) {
        super(strokeColor)
        this.listen()
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }

    mouseUpHandler(e) {
        this.mouseDown = false
    }

    mouseMoveHandler(e) {
        if(this.mouseDown) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }

    draw(x, y) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
        this.ctx.strokeStyle = 'white'
    }
}