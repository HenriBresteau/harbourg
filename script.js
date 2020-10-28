function getInputValue(){
    let choice = document.getElementById('choice').value;

    if ( isNaN(choice)) {
        alert ('Entrez un nombre');
    } else {
        let startingMinutes = choice;
        this.choice.value = "";

        let time = startingMinutes * 60;

        const countDownEl = document.getElementById('countdown');

        setInterval(updateCountdown,1000);

        function updateCountdown() {
            const minutes = Math.floor( time / 60);
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;

            countDownEl.innerHTML = `${minutes} : ${seconds}`;

            if (time > 0 ) {
                time--;
            } else {
                countDownEl.innerHTML = ` IT'S OVER !`
                countDownEl.style.color = '#dc3545';
            }
        }
        }
    
    
}
setInterval(changeBG, 2000);
function changeBG() {
    const col1 = getRandomRGB();
    const col2 = getRandomRGB();
    const col3 = getRandomRGB();

    const colorString = `rgb( ${col1}, ${col2}, ${col3} )`;
    document.body.style.background = colorString;
    document.getElementById('color').innerHTML= colorString;
}
function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}