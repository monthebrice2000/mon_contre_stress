

$("document").ready( function() {
    $("a").click(function () {
        $("nav > ul > li > a").removeClass("active");
        $(this).toggleClass("active");

    });



    // $("main > div > ul > li").click(function () {
    //     if( ! $(this).is("main > div > ul > li:last-child") ){
    //         $("main > div > ul > li").removeClass("active");
    //         $(this).toggleClass("active");
    //         $("main .main_description").text( $(this).text() );
    //     }
    // });



})

