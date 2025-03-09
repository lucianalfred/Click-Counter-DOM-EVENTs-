let count = 0;

document.getElementById("btnIn").addEventListener("click", function(){
    count++;
    document.getElementById('counter').innerHTML = count;
});

document.getElementById('btnReset').addEventListener('click', function(){
    count = 0;
    document.getElementById('counter').innerHTML = count;  
})