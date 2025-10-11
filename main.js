$(document).ready(function(){

    $("form").on("submit", function(e){
        e.preventDefault(e)
        let adicionar = $("#entrada").val();
        const criarlista = `<li>${adicionar}</li>`;
        $("ul").append(criarlista)
        $("#entrada").val("");
    })
    
    $("ul").on("click", "li" ,function(){
        $(this).toggleClass("lista")
    })


})

