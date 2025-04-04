
// mobile menu

$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".canva_expander" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".canva_expander" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".canva_expander" ).show();
    });
    });
    
    });
  
   // Close out sub menu
   $('.sub__close').click(function(e) {
    e.preventDefault();
    
    $(this).parent().parent().removeClass('is-active');
  });
  
  // Trigger sub menu
  $('.menu ul .nav__submenu').click(function(e) {
    e.preventDefault();
    
    $(this).siblings().addClass('is-active');
  });



  $(".logo i.fas.fa-bars").click(function () {
    $(".sidebar").toggle(); //Show/hide sidebar

    if ($(".sidebar").is(":visible")) {
    $(".main-content").css("grid-template-columns", "3fr 9fr"); 
    }
    else {
    $(".main-content").css("grid-template-columns", "1fr"); // Sidebar hidden, dashboard takes width
    $(".dashboard").css("padding", "20px"); // Sidebar hidden, dashboard takes width
    $(".dashboard h1").css("padding-bottom", "20px"); // Sidebar hidden, dashboard takes width
    $(".dashboard-inner").css("padding", "0px"); // Sidebar hidden, dashboard takes width
    }
    });