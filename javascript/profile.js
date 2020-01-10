    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250) {
        document.getElementById("leftContainer").style.position = "fixed";
        document.getElementById("leftContainer").style.top = "120px";
        document.getElementById("leftContainer").style.opacity = "1";
        document.getElementById("rightContainer").style.width = "80%";
        document.getElementById("rightContainer").style.float = "right";
        
    } else {
        document.getElementById("leftContainer").style.position = "relative";
        document.getElementById("leftContainer").style.top = "auto";
        document.getElementById("leftContainer").style.left = "8px";
        document.getElementById("leftContainer").style.opacity = "0";
        document.getElementById("rightContainer").style.width = "80%";
        document.getElementById("rightContainer").style.float = "none";
    }
    }

    $(document).ready(function() 
    {
        $("#lista1").als({
            visible_items: 4,
            orientation: "horizontal",
            circular: "yes",
            autoscroll: "no",
            interval: 3000,
            speed: 800,
            easing: "linear",
            direction: "left",
            start_from: 0
        });
        
        
    });

    $( ".skillCardEdit" ).click(function() {
        $( this ).toggleClass( "text-white bg-info" );
    })