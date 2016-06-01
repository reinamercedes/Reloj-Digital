function horarioNormal() {
	var horaActual = new Date();
	var minuto = horaActual.getMinutes();
	var segundo = horaActual.getSeconds();
	var hora = horaActual.getHours();
	if(minuto<10){
		minuto = "0" + minuto
	}
	if(segundo<10){
		segundo = "0" + segundo
	}
	$("#reloj").html(hora + " : " + minuto + " : " + segundo)
           $("#reloj").css({ 'fontSize' : '30px', 'color' : 'white', 'fontFamily' : '"Poiret One', 'textAlign' : 'center' })
	var horaCambio = setTimeout("horarioNormal()", 1000)
}
horarioNormal();

function diaActual() {
	var fecha = new Date();
	var diaSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado")
	var mesAño = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre")
	var dia = diaSemana[fecha.getDay()];
	var mes = mesAño[fecha.getMonth()];
	var año = fecha.getFullYear();
	$("#fecha").html(dia + " " + fecha.getDate() + " de " + mes + " del " + año )
           $("#fecha").css({ 'fontSize' : '30px', 'color' : 'white', 'fontFamily' : '"Poiret One', 'textAlign' : 'center' })
}
diaActual();

var lugares=[
    {
        ciudad: "Chicago",
        hora: 0
    },
    {
        ciudad: "Sau Paulo",
        hora: 2
    },
    {
        ciudad: "Santiago",
        hora: 1
    },
    {
        ciudad: "México D.F.",
        hora: -1
    },
    {
        ciudad: "Caracas",
        hora: 1
    },
    {
        ciudad: "Brasilia",
        hora: 2
    },
    {
        ciudad: "Quito",
        hora: 0
    },
    {
        ciudad: "Guayaquil",
        hora: 0
    },
    {
        ciudad: "Santa Marta",
        hora: 1
    },
    {
        ciudad: "Bogota",
        hora: 1
    }
]

function horasLugares() {
	var horaLugar = new Date();
	var minuto = horaLugar.getMinutes();
	var segundo = horaLugar.getSeconds();
	var hora = horaLugar.getHours();
	var id = $(this).val();
	if(minuto<10){
		minuto = "0" + minuto
	}
	if(segundo<10){
		segundo = "0" + segundo
	}
	if($(this).is(":checked")){
		$("#place").append("<span id='" + id + "'>" + parseInt(hora+lugares[id].hora) + " : " + minuto + " : " + segundo + " " + lugares[id].ciudad + " " + "</span></br>" )
                      $("#place").css({ 'fontSize' : '30px', 'color' : 'white', 'fontFamily' : '"Poiret One', 'textAlign' : 'center' })
	} else {
		$("#" + id).remove();
	}
}
$(document).ready(function() {
	$(".pais").click(horasLugares);
});

