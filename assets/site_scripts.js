$(function() {
  $( "#button" ).click(function() {
    $( ".mobile_menu_list" ).toggle( "blind", 1000 );
    return false;
  });
});

$(function() {
  $( "#contact_dialog" ).dialog({
    autoOpen: false,
    modal: true,
    title: "Contact Us",
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
    $( "#contact_dialog" ).dialog( "open" );
  });
});

$(function() {
  $( "#accordion" ).accordion({
    active: false,
    collapsible: true,
  });
});

$(function() {
  $(".side_menu").accordion({
    header: "> h3:not(.item)",
    heightStyle: "content",
    active: false,
    collapsible: true
  });
});
