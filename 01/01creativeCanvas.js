"use strict"

let c = {
    canvas: null,
    cts: null,
    init() {
        this.canvas = document.getElementById("canvas1");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        console.log(this.ctx);

        
        /**
         * fillRect 사각형 채우기
         * fillStyle 색상 지정
         * strokeRect 사각형 라인만
         * strokeStyle 색상 지정
         * x, y, width, height
         */
        // this.ctx.fillRect(100, 200, 200, 20);
        // this.ctx.strokeRect(100, 200, 200, 20);

        this.canvas.addEventListener('mousemove', function(e) {
            c.ctx.fillStyle = 'hsla(0, 0%, 0%, 0.05)';
            c.ctx.fillRect(0, 0, c.canvas.width, c.canvas.height);
            c.ctx.strokeStyle = "red";
            c.ctx.lineWidth = "5";
            c.ctx.strokeRect(e.pageX, e.pageY, 200, 20);
        });
        
    }
}

c.init();