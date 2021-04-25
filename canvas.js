window.addEventListener('load', () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    const freqRange = document.getElementById("freq-range");
    const freqOutput = document.getElementById("freq-output");
    const makeStars = document.getElementById("make-stars");
    freqOutput.innerHTML = freqRange.value;
    let stars = false;

    // Resizing
    canvas.height = 400;
    canvas.width = 400;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const noise = new WhiteNoise(freqOutput.innerHTML, ctx, canvas);
    
    noise.generate();
    // Frequency change
    freqRange.addEventListener('input', (e) => {
        console.log(e.target.value);
        freqOutput.innerHTML = e.target.value;
        noise.regenerate(e.target.value, stars);
    })
    
    makeStars.addEventListener('click', () => {
        stars = !stars; 
        noise.regenerate(freqOutput.innerHTML, stars);
    })
    
})
