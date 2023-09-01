const widthenavber = $(".navber").outerWidth();
$(".fa-xmark").click(function () {
  $(".navber").animate({left : -widthenavber} , 2000)
});
$('.fa-bars').click(function(){
  $('.navber').animate({left:'0px'} , 2000)
})

$('#one').click(function(){
  $('#loremone').slideToggle(500)
  $('#Duration p').not($(this).next()).slideUp()
})
$('#two').click(function(){
  $('#loremtwo').slideToggle(500)
  $('#Duration p').not($(this).next()).slideUp()
})
$('#three').click(function(){
  $('#loremthree').slideToggle(500)
  $('#Duration p').not($(this).next()).slideUp()
})
$('#four').click(function(){
  $('#loremfour').slideToggle(500)
  $('#Duration p').not($(this).next()).slideUp()
})

$("textarea").keyup(function(){
  let mylegth = $(this).val().length;
  $("#change").text(100-mylegth <=0 ? "your available character finished" : 100-mylegth)

});

window.onload = function() {

  CountDownTime("31 october 2023 11:22:00");
}

function CountDownTime(countTo) {

    let futureDate = new Date(countTo);
  futureDate = (futureDate.getTime()/1000);

  let now = new Date();
  now = (now.getTime()/1000);

  timeDifference = ( futureDate - now );
      
let days = Math.floor( timeDifference / (24*60*60));
 let hours = Math.floor(( timeDifference - ( days * (24*60*60))) / 3600);
 let mints = Math.floor(( timeDifference  -  ( days * (24*60*60)) - (hours * 3600 )) / 60);
 let secends = Math.floor(( timeDifference  -  ( days * (24*60*60)) - (hours * 3600) - (mints * 60)));
  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${ mints } m`);
  $('.seconds').html(`${ secends} s`)

  setInterval(function() {  CountDownTime(countTo); }, 1000);
}