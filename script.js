let count = 0;
let heighstValue = 0;
let display = document.getElementById('displayValue');

// Time manage Function
const timeManage = () => {
    var startTime = setTimeout(() => {
        click.style.display = 'none';
        if (count >= heighstValue) {
            heighstValue = count;
            console.log(heighstValue);
            display.innerHTML = `WINE`;
            // stopTime();
        }
        else{
            display.innerHTML = `LOSS`;
            console.log(heighstValue);
            // stopTime();
        }
    }, 5000);
    console.log(startTime);
}


// Click button scripts 
const click = document.getElementById('clickButton');
click.addEventListener('click', () => {
    count++;
    display.innerHTML = count;
    timeManage();
})

// ReStart Button Scripts
const restart = document.getElementById('startButton')
    restart.addEventListener('click', () => {
    display.innerHTML = 0;
    count = 0;
    click.style.display = 'block';  

// clear time out 
    () => clearTimeout(startTime);
    
})
