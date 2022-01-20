$(function ModificarTabla() {
    $("#btnGustos").click(function () {

        $("#ocultar").show();
        $("form").css({ "height": "600px" })


        $("#tablagustos")
            .append
            (
                $('<tr>')
                    .append
                    (
                        $('<td>')
                            .append
                            (
                                $('<input>').attr('type', 'text').attr('id', 'textotabla')
                            )
                    )
                    .append
                    (
                        $('<td>')
                            .append
                            (
                                $('<input>').attr('type', 'text').attr('id', 'textotabla')
                            )
                    )
                    .append
                    (
                        $('<td>')
                            .append
                            (
                                $('<p>').attr('id', 'modificar').text('Editar')
                            )
                    )
            );
var cont =1;

document.getElementById("textotabla[cont]").value = document.getElementById("GustosC").value;


    });
});

cont=cont+1;

$(function copiar() {
    
});