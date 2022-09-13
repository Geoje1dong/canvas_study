"use strict"

let c = {
    canvas: null,
    cts: null,
    x:undefined,
    y:undefined,
    amt:10,
    colors: [],

    init() {
        this.canvas = document.getElementById("canvas1");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.paint();
        
        /**
         * fillRect 사각형 채우기
         * fillStyle 색상 지정
         * strokeRect 사각형 라인만
         * strokeStyle 색상 지정
         * x, y, width, height
         */
        // this.ctx.fillRect(100, 200, 200, 20);
        // this.ctx.strokeRect(100, 200, 200, 20);
        console.log(this.ctx);
        this.canvas.addEventListener('mousemove', function(e) {
            c.ctx.fillStyle = 'hsla(0, 0%, 0%, 0.05)';
            c.ctx.fillRect(0, 0, c.canvas.width, c.canvas.height);
            c.x = e.pageX;
            c.y = e.pageY;
            for (let i=0; i<c.amt; i++) {
                c.array.push(new Sprite({x: c.x, y: c.y, l:20, color:c.colors[i]}));
                c.ctx.fillStyle = c.colors[i];
                c.ctx.fillRect(c.x + c.x * Math.cos(i*36*Math.PI/180),
                               c.y + c.y * Math.sin(i*36*Math.PI/180), 20, 20);
            }
        }, false);
        this.rendering();
    },

    paint() {
        for(let i=0; i<this.amt; i++) {
            this.colors.push(`hsla(${i * 360 / this.amt}, 100%, 50%, 1)`)
        }
    },

    rendering() {
        for(let i=0; i<c.array.length; i++) {
            c.array[i].update(i)
            console.log('i => ', i, ', array => ', c.array);
        }
        requestAnimationFrame(c.rendering);
    }
}

c.init();