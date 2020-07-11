
var date = new Date();

$("#checkIn").datetimepicker({
    format: "yyyy-mm-dd",
    todayBtn: true,
    //autoclose: true,
    startDate: new Date()
  })
  .on("changeDate", function(e) {
    var checkInDate = e.date, $checkOut = $(".checkOut");    
    checkInDate.setDate(checkInDate.getDate() + 1);
    $checkOut.datetimepicker("setStartDate", checkInDate);
    $checkOut.datetimepicker("setDate", checkInDate).focus();
  });

const newLocal = "checkOut";
$(newLocal).datetimepicker({
  format: "yyyy-mm-dd",
  todayBtn: true,
  autoclose: true
});

// var nowTemp = new Date();
// var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

// var checkin = $('#dpd1').datepicker({
//     beforeShowDay: function(date) {
//         return date.valueOf() < now.valueOf() ? 'disabled' : '';
//     }
// }).on('changeDate', function(ev) {
//     if (ev.date.valueOf() > checkout.viewDate.valueOf()){
//         var newDate = new Date(ev.date)
//         newDate.setDate(newDate.getDate() + 1);
//         checkout.setDate(newDate);		
//     }
//     else {
//         checkout.setDate(ev.date + 1);
//     }
    
//     checkin.hide();
//     $('#dpd2')[0].focus();
// }).data('datepicker');

// var checkout = $('#dpd2').datepicker({
//     beforeShowDay: function(date) {
//         return date.valueOf() <= checkin.viewDate.valueOf() ? 'disabled' : '';
//     }
// }).on('changeDate', function(ev) {
//     checkout.hide();
// }).data('datepicker');