'use script'
$(document).ready(function()　{
$('#searchName').on('input',function(event){
    var searchWord = $('#searchName').val();
    if(searchWord !== "") {
      $('#target li').each(function() {
        var targetWord = $(this).text().toLowerCase();
        if(targetWord.indexOf(searchWord) !== -1) {
          $(this).show();
        }else{
          $(this).hide();
        }
      })
    }else{
      $('#target li').show();
    }S
 });

}) 
    

