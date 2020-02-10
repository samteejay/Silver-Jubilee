

<!DOCTYPE html>
<html>
<head>
<title>Silver Jubilee</title>
</head>

<body>
<script>

var msDiff = new Date("April 30, 2020").getTime() - new Date().getTime();
var daysTillThen = Math.floor(msDiff / (1000 * 60 * 60 * 24));

alert(daysTillThen);

var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var time = new Date();
var setTime = time.setMonth(00);
// var conv = Math.floor(setTime / (1000 * 60 * 60 * 24 * 7 * 4));
// var theMonthName = monthNames[conv];

alert(setTime);

</script>

</body>
</html>