
var y=0;
var intro='Hello, my name is Ani. I am a Web Developer.'
var speed=70;

function typeWriting(){
    (y<intro.length){
        document.getElementsByClassName('main-intro').innerHTML+=intro.charAt(i);
        i++;
        setTimeout(typeWriting(), speed);
    }
}


var htmlBar=document.querySelector('.bar-html');
var cssBar=document.querySelector('.bar-css');
var jsBar=document.querySelector('.bar-javascript');
var jqBar=document.querySelector('.bar-jquery');
var bootstrBar=document.querySelector('.bar-bootstrap');

var tml=new TimelineLite();

tml.fromTo(htmlBar, .75, {width: 'calc(0%-6px)'}, {width: 'calc(90%-6px)', ease:Power4.easout})
    .fromTo(cssBar, .75, {width: 'calc(0%-6px)'}, {width: 'calc(95%-6px)', ease:Power4.easout})
    .fromTo(jsBar, .75, {width: 'calc(0%-6px)'}, {width: 'calc(85%-6px)', ease:Power4.easout})
    .fromTo(jqBar, .75, {width: 'calc(0%-6px)'}, {width: 'calc(70%-6px)', ease:Power4.easout})
    .fromTo(bootstrBar, .75, {width: 'calc(0%-6px)'}, {width: 'calc(60%-6px)', ease:Power4.easout})

var controller= new ScrollMagic.Controller();
var scene= new ScrollMagic.Scene({
    triggerElement:'.skills',
    triggerHook: 0,
})

.setTween(tml)
.addTo(controller)


function move(){
    document.getElementById('pr-bar').classList.add('practive');
    
}
