var r = document.querySelector(':root');

function myFunction_get() {
  var rs = getComputedStyle(r);
}

function purple(){
    r.style.setProperty('--logo', 'purple');
    setTimeout(lime, 500)
}
function lime(){
    r.style.setProperty('--logo', 'lime');
    setTimeout(purple, 500)
}

lime();