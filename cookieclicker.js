var num = 0;

var cookie = document.getElementById('cookie');
var number = document.getElementById('number');
document.getElementById('powerup').onclick = powerUp;
number.innerText = num;
var d = 1;
var powernumber = 10;
document.getElementById('dpowernum').innerText = powernumber;
var k = 1;

function cookieClick(){
    num += d;
    
    number.innerText = num;
}

function powerUp(){
    console.log('yes');
    if(num >= powernumber){
        num -= powernumber;

        k+=1
        
        powernumber = (10*k);
        document.getElementById('dpowernum').innerText = powernumber;
        
        d += 1;
        number.innerText = num;
    }
}