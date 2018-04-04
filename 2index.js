

$(document).ready(function(){
  $.ajax({
    url:"https://swapi.co/api/people",
    dataType: "json"
  }).done((result) => {
    result.results.forEach((person) => {
        $('#character').append(`<option value="${person.name}">${person.name}"<option>`);

      //attach to the form submit
      $('#sw-form').submit(function(evt){
        evt.preventDefault();
        let char = $('#character').val();

        result.results.forEach((person) => {
          if(person.name == char){
            let profile = "";
            Object.keys(person).forEach((item) => {
              profile += `<strong>${item}:</strong>`;
              profile += `<span>${person[item]}</span><br>`
            })
            $('.results').html(profile);
          }
        })
      })
    });
  });
});
