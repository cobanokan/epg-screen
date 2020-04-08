
export function formatTime(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(navigator.language, {
      hour: 'numeric', minute: 'numeric', hour12: false
    }).format(date);
}

export function getTimeArray() {
  const timeArray = [];
  for(let x = 0; x < 24; x++) {
      timeArray.push(`${zeroPadding(x)}:00`);
  }
  return timeArray;
}

export function getDateArray() {
  
  let currentDate = new Date();
  const currentTime = currentDate.getTime();
  currentDate.setDate(currentDate.getDate() - 7);

  let lastDate = new Date();
  lastDate.setDate(lastDate.getDate() + 7);

  const dateArray = [];
   
  while (currentDate <= lastDate) {
      dateArray.push({
        "day": currentDate.toLocaleDateString(navigator.language, {weekday: 'short'}),
        "date": `${zeroPadding(currentDate.getDate())}.${zeroPadding(currentDate.getMonth() + 1)}.`,
        "current": currentDate.getTime() === currentTime
      });
      currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
}

function zeroPadding(x) {
  return x < 10 ? `0${x}` : `${x}`;
}