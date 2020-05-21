const minut = document.querySelector('#Minutar');
const ora = document.querySelector('#Orar');

setInterval(() => {
    const d = new Date();
const m = d.getMinutes();
let o = d.getHours();

if(o > 12)
    o = o - 12;

//360deg for 60min  -> 1min = 6deg;
//5min = 30deg;
minut.style.transform = 'rotateZ(' + 6 * m + 'deg)';
minut.style.transformOrigin = '231.5px 231.5px'; 

//360deg for 12h  -> 1h = 30deg
ora.style.transform = 'rotateZ(' + 30 * o + 'deg)';

if( m >= 15 && m < 30 )
    ora.style.transform = 'rotateZ(' + (30 * o + 5)  + 'deg)';
else if( m >= 30 && m < 45 )
    ora.style.transform = 'rotateZ(' + (30 * o + 15)  + 'deg)';
else if( m >= 45 && m < 60 )
    ora.style.transform = 'rotateZ(' + (30 * o + 25)  + 'deg)';

ora.style.transformOrigin = '231.5px 231.5px';
}, 1000);
