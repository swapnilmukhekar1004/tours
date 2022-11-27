$(document).ready(function(){
    $(window).on('scroll',function(){

        var scroll=$(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }
        else{

            $(".sticky").removeClass("stickyadd");

        }

    })
})


var typed = new Typed('.element', {
    strings: [' In Europe', 'In Asia','In Africa','In America'],
    smartBackspace: true, // Default value
    typeSpeed:100,
    backSpeed:200,
    loop:true,
    loopCount:Infinity,
    startDelay:1000
  });
   

 
  var i=0;
 function read(){
 
     if(!i){
         document.getElementById("more").style.display="inline";
         document.getElementById("dots").style.display="none";
         document.getElementById("read").innerHTML="Read less";
         i=1;
     }

     else{
        document.getElementById("more").style.display="none";
        document.getElementById("dots").style.display="inline";
        document.getElementById("read").innerHTML="Read More";
        i=0;
    }
 }

 var i=0;
 function read2(){
 
     if(!i){
         document.getElementById("more2").style.display="inline";
         document.getElementById("dots2").style.display="none";
         document.getElementById("read2").innerHTML="Read less";
         i=1;
     }

     else{
        document.getElementById("more2").style.display="none";
        document.getElementById("dots2").style.display="inline";
        document.getElementById("read2").innerHTML="Read More";
        i=0;
    }
 }


 
 





    

 

