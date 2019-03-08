

$(document).ready(function(){
    $("#info").click(function() {
        $('#personales').show(3000); //muestro mediante id
        $('#jugadores').hide(3000);
        $('#juegos').hide(3000);
        $('#nuevo_juego').hide(300); //muestro mediante id
        $('#logueo').hide(3000); //muestro mediante id

        $('#nuevo_jugador').hide(3000); //muestro mediante id
        $('#column1').show();
     
     });
    
});

$(document).ready(function(){
    $(".cerrar").click(function() {
        window.location.reload(true);
     });
    
});

$(document).ready(function(){
    $("#lista_jugadores").click(function() {
        $('#jugadores').show(3000); //muestro mediante id
        $('#personales').hide(3000); //muestro mediante id
        $('#juegos').hide(3000);
        $('#nuevo_juego').hide(300); //muestro mediante id
        $('#logueo').hide(3000); //muestro mediante id

        $('#nuevo_jugador').hide(3000); //muestro mediante id
        $('#column1').show()
     
     });
    
});


$(document).ready(function(){
    $("#n_juegos").click(function() {
        $('#nuevo_juego').show(300); //muestro mediante id
        $('#jugadores').hide(300); //muestro mediante id
        $('#personales').hide(3000); //muestro mediante id
        $('#juegos').hide(3000); //muestro mediante id
        $('#logueo').hide(3000); //muestro mediante id

        $('#nuevo_jugador').hide(3000); //muestro mediante id
     
     });
    
});



$(document).ready(function(){
    $("#lista_juegos").click(function() {
        $('#juegos').show(3000); //muestro mediante id
        $('#nuevo_juego').hide(300); //muestro mediante id
        $('#jugadores').hide(300); //muestro mediante id
        $('#personales').hide(3000); //muestro mediante id
        $('#logueo').hide(3000); //muestro mediante id

        $('#nuevo_jugador').hide(3000); //muestro mediante id
     
     });
    
});


$(document).ready(function(){
    $("#n_jugador").click(function() {
        $('#nuevo_jugador').show(3000); //muestro mediante id

        $('#logueo').hide(3000); //muestro mediante id
        $('#personales').hide(3000); //muestro mediante id
        $('#jugadores').hide(3000);
        $('#juegos').hide(3000);
        $('#nuevo_juego').hide(300); //muestro mediante id

     
     });
    
});


$(document).ready(function(){
    $("#login").click(function() {
        $('#logueo').show(3000); //muestro mediante id
        $('#personales').hide(3000); //muestro mediante id
        $('#jugadores').hide(3000);
        $('#juegos').hide(3000);
        $('#nuevo_juego').hide(300); //muestro mediante id

        $('#nuevo_jugador').hide(3000); //muestro mediante id
        

     
     });
    
});
