var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning';
  
else if (hrs >= 12 && hrs <= 15)
  greet = 'Good Afternoon';

else if (hrs >=15 && hrs <= 18)
  greet= ' Good Evening';

else if (hrs >= 18 && hrs <= 24)
  greet = 'Good Night';

console.log(greet);