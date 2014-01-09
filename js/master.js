$(function() {

  $(document).on('click','.submit',function() {
    var val = $('.input').val();
    var val = val.replace(/[^a-zA-Z 0-9]+/g,'');
    var val = val.split(' ');
    
    var arr = ['ass','jerk'];

    for(var x = 0; x < arr.length; x++) {
      console.log(arr[x]);
    }
    
    for(var i = 0; i < val.length; i++) {
      if(val[i] === 'ass') {
        var bad = true;
      }

      if (bad) {
        $('body').css('background-color', 'red');
      } else {
        $('body').css('background-color', 'green');
      }
    }
  });

});