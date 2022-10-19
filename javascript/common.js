window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 0";
    document.getElementById("navbar").style.boxShadow = "0 0 4px 4px #00000033";
    } 
    
    else {
    document.getElementById("navbar").style.padding = "16px 0";
    document.getElementById("navbar").style.boxShadow = "0 0 1px #0000000b";
    }
}