var button = document.getElementsByClassName('.incr');
var button = document.qgetElementsByClassName('.decr');
var p = document.getElementsById('#counter');
var cpt = parseInt (p.innertext);
incr.addEventListener('click', function(){
    cpt =cpt+1; 
    p.innerHtml=cpt;
});




























var p = document.getElementsbyId('#counter')
var button = document.querySelectorAll('button');
var cpt = parseInt (counter.innerext);
incr.addEventListener ('click', function(){
    cpt=cpt+1;
    counter.innerHtml=cpt;
});
