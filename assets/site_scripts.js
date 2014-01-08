$(function() {
  $( "#button" ).click(function() {
    $( ".mobile_menu_list" ).toggle( "blind", 1000 );
    return false;
  });
});

$(function() {
  $( "#dialog" ).dialog({
    autoOpen: false,
    modal: true,
    title: "Purchasing Methods",
    width: 500,
    show: {
      effect: "fade",
      duration: 500
    },
    hide: {
      effect: "fade",
      duration: 500
    }
  });

  $( "#opener" ).click(function() {
    $( "#dialog" ).dialog( "open" );
  });
});

