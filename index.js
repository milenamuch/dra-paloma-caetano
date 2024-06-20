var fields = ['skin', 'location', 'ink', 'layering', 'scarring', 'colors'];
var form;

$(function() {
  form = document.forms[0];

  $('input').change(onChange);
  render(true);
});


function onChange(e) {
  if (ga != null) {
    ga('send', 'event', 'input', 'click', e.target.name);
  }
  render(false);
}

function render(isOnLoad) {
  var scale = {};
  var field_count = 0;
  for (var i = 0; i < fields.length; ++i) {
    var field = fields[i];
    if (form[field].value) {
      scale[field] = form[field].value;
      ++field_count;
    }
  }
  
  var total_points = 0;
  for (var field in scale) {
    $('.' + field + '-points').text(scale[field]);
    total_points += parseInt(scale[field]);
  }

  if (field_count == fields.length) {
    $('.total-points').text(total_points);
    if (!isOnLoad && ga != null) {
      ga('send', 'event', 'input', 'compute', 'score');
    }
  }
}

// document.querySelectorAll('.radio-toggle').forEach(radio => {
//   radio.addEventListener('click', function() {
//       if (this.checked) {
//           setTimeout(() => {
//               this.checked = false;
//           }, 0);
//       }
//   });
// });

