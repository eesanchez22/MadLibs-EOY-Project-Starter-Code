 
$("button").click(function() {
     let storiesCreated =0;
    let name = $(".name-input").val();
    let time = $(".number-input").val();
    let adjective = $(".adjective-input").val();
    let transport = $(".transport-input").val();
    let place = $(".place-input").val();
    console.log(name,adjective,transport,time);
    $(".story").append( "<p>"+ "One day my friend "+name+" and I decided to take a trip to the beach, so we packed our bags and took the "+transport+" over.It was a "+adjective+" day at the "+place+"! We ended up staying for "+time+" hours!" + "</p>" );
    
});