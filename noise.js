class Static {
    rand_unit_vector(){
        // Generate a random gradient vector of unit length where x^2 + y^2 = 1, so use sin and cos
        let theta = Math.random() * 2 * Math.PI;
        return {
            x: Math.cos(theta),
            y: Math.sin(theta)
        };
    }
}


class WhiteNoise {
    constructor(_freq, _ctx, _canvas){
        this.freq = _freq;
        this.ctx = _ctx;
        this.canvas = _canvas;
        this.x = 0;
        this.y = 0;
    }

    generate(stars=undefined) {
        const hexVals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        for(let i = 0; i < this.freq; i++){
            for(let j = 0; j < this.freq; j++){
                const isStar = Math.floor(Math.random() * 500);
                const randInd1 = Math.floor(Math.random() * 32);
                const randInd2 = Math.floor(Math.random() * 32);
                
                if(stars){
                    if(randInd1 == 15 && randInd1 == 15){
                        this.ctx.fillStyle = "#fff7d2";
                        this.ctx.fillRect(this.x, this.y, this.canvas.width / this.freq, this.canvas.height / this.freq);
                    }
                    if(randInd1 == 14 && randInd2 == 14){
                        this.ctx.fillStyle = "#5e9fff";
                        this.ctx.fillRect(this.x, this.y, this.canvas.width / this.freq, this.canvas.height / this.freq);
                    }
                    
                }
                else{
                    const rand1Col = hexVals[randInd1];
                    const rand2Col = hexVals[randInd2];
                    this.ctx.fillStyle = `#${rand1Col}${rand2Col}${rand1Col}${rand2Col}${rand1Col}${rand2Col}`;
                    this.ctx.fillRect(this.x, this.y, this.canvas.width / this.freq, this.canvas.height / this.freq);
                }

                this.x += this.canvas.width / this.freq;
                
                if(j == this.freq - 1){
                    this.y += this.canvas.height / this.freq;
                    this.x = 0;
                }
            }
        }
    }

    regenerate(_freq, _stars=undefined){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.x = 0;
        this.y = 0;
        this.freq = _freq;
        this.generate(_stars);
    }
}