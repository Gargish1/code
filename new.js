Date.prototype.shiftDays = function(days){    
  days = parseInt(days, 10);
  this.setDate(this.getDate() + days);
  return this;
}

$date = new Date(2014, 9, 16,0,1);
$date.shiftDays(1);
console.log($date-"");
$date.shiftDays(1);
console.log($date+"");
$date.shiftDays(1);
console.log($date-"");
