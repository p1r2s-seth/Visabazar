 $( function() {
    var availableTags = [
      "Canada",
      "France",
      "Australia",
      "New Zealand",
      "Singapore",
      "United Kingdom",
      "United States",
      "Turkey",
      "Ethiopia",
      "Kenya",
      "Thailand",
      "South Korea",
      "UAE",
      "Armenia",
      "Austria", 
      "Belgium", 
      "the Czech Republic",
      "Denmark", 
      "Estonia", 
      "Finland", 
      "Germany", 
      "Greece", 
      "Hungary", 
      "Iceland", 
      "Italy", 
      "Latvia", 
      "Liechtenstein", 
      "Lithuania", 
      "Luxembourg", 
      "Malta", 
      "Netherlands", 
      "Norway", 
      "Poland", 
      "Portugal", 
      "Slovakia", 
      "Slovenia", 
      "Spain", 
      "Sweden",
      "Switzerland"



    
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


