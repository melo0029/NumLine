$( "#slider" ).slider({
    min: -5,
    max: 5,
    step: 1,
    range: true,
    values: [ -5, 5]
})
.each(function() {
  var opt = $(this).data().uiSlider.options;
  var vals = opt.max - opt.min;
  for (var i = 0; i <= vals; i++) {
    var label = $('<label>'+(i - 5)+'</label>').css('left',(i/vals*100)+'%');
    $( "#slider" ).append(label);
  }
  for (var i = 0; i <= vals; i++) {
    var ticks = $('<ticks>'+("|")+'</ticks>').css('left',(i/vals*100)+'%');
    $( "#slider" ).append(ticks);
  }
})