// enter hours of sleep you got per weekday
function getSleepHours(day){
  day = day.toLowerCase();
  switch (day){
    case 'monday':
    return 6.5;
    break
    case 'tuesday':
    return 7;
    break
    case 'wednesday':
    return 8;
    break
    case 'thursday':
    return 8.5;
    break
    case 'friday':
    return 6.5;
    break
    case 'saturday':
    return 7;
    break
    case 'sunday':
    return 9.5;
    break
    default:
    return 8;
    break
  }
}

function getActualSleepHours(){
  let total = 0;
  total += getSleepHours('Monday');
  total += getSleepHours('Tuesday');
  total += getSleepHours('Wednesday');
  total += getSleepHours('Thursday');
  total += getSleepHours('Friday');
  total += getSleepHours('Saturday');
  total += getSleepHours('Sunday');
  return total;
}

const getIdealSleepHours = idealHours => idealHours * 7;

function calculateSleepDebt(idealHours){
  let actuaSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(idealHours);
  if (actuaSleepHours > idealSleepHours) {
    return console.log(`You have slept ${actuaSleepHours - idealSleepHours} hours more than required. Go get up!`);
  }
  if (actuaSleepHours < idealSleepHours) {
    return console.log(`You have slept ${idealSleepHours - actuaSleepHours} hours less than required. Get some rest!`);
  }
  if (actuaSleepHours === idealSleepHours) {
    return console.log(`You got the perfect amount of sleep of ${idealSleepHours} hours!`);
  }
}

// enter how many hours of sleep you need per day
calculateSleepDebt(8);