
$("document").ready( function () {
    $("button").click( function () {
        let max = $("input").val();
        var random = Math.ceil( Math.random() * max );
        $("button").after( "<h1> "+ random + " </h1>");
    });


})


