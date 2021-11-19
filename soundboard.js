document.getElementById('air_raid').addEventListener('click', function(){
    document.getElementById('siren').play();
})

document.getElementById('pause1').addEventListener('click', function(){
    document.getElementById('siren').pause();
})

document.getElementById('bomb_b').addEventListener('click', function(){
    document.getElementById('bomb').play();
})
document.getElementById('pause2').addEventListener('click', function(){
    document.getElementById('bomb').pause();
})


document.getElementById('boo_b').addEventListener('click', function(){
    document.getElementById('boo').play();
})
document.getElementById('pause3').addEventListener('click', function(){
    document.getElementById('boo').pause();
})
