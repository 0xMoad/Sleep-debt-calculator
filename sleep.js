const getSleepHours = day => {
  switch (day){
  case "monday":
  return 8
  break;
  case "tuesday":
  return 7
  break;
  case "wednesday":
  return 6
  break;
  case "thursday":
  return 7
  break;
  case "friday":
  return 5
  break;
  case "satuday":
  return 10
  break;
  case "saturday": 
  return 8
  break;
  default: 
  return ""
}
};

const getActualSleepHours = ()  => {
  return getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
}



const getIdealSleepHours = () => {
  var idealHours = 8;
  return idealHours * 7;
}


var actualSleepHours = getActualSleepHours();
var idealSleepHours = getIdealSleepHours();

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  return idealSleepHours - actualSleepHours;

  if(actualSleepHours === idealSleepHours){
    console.log("Perfect amount of sleep fam!");
  }else if (actualSleep > idealSleepHours){
    console.log("You sleeping more than needed???");
  } else {
    console.log("You should get some rest :)")
  }
}


const conclusion = () => {
  if(actualSleepHours === idealSleepHours){
    return "You've been sleeping well enough";
  } else if(actualSleepHours > idealSleepHours) {
    return "You're sleeping too much!";
  } else {
    return "You need some rest!"
  }
}
console.log("Actual hours: " + getActualSleepHours())
console.log("Ideal hours: " + getIdealSleepHours())
console.log("Sleep debt: " + calculateSleepDebt())
console.log(conclusion())







