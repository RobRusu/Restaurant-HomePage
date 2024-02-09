export function description(){
  const heading = document.createElement('div');

  const titleHome = document.createElement('p');
  titleHome.textContent = 'A few words for our customers'
  titleHome.classList.add('titleHome');

  const description = document.createElement('p');
  description.textContent = "Come and enjoy the most delicious fries you have ever eaten. After this experience, we promise that you will want to come back here every day. Our potatoes are grown by ourselves and are considered a world's wonder."
  description.classList.add('description');
  
  heading.append(titleHome, description);
  heading.classList.add('heading', 'home');

  return heading;
}

export function hours(){
  const hours = document.createElement('div');

  const schedule = document.createElement('p');
  schedule.textContent = 'Opening hours';
  schedule.classList.add('schedule');

  const mondayFriday = document.createElement('p');
  mondayFriday.textContent = 'Monday - Friday: 8AM - 8PM'
  mondayFriday.classList.add('weekDays');

  const saturday = document.createElement('p');
  saturday.textContent = 'Saturday: 7AM - 11PM'
  saturday.classList.add('weekend');

  const sunday = document.createElement('p');
  sunday.textContent = 'Sunday: 10AM - 8PM';
  sunday.classList.add('weekend');

  hours.append(schedule, mondayFriday, saturday, sunday);
  hours.classList.add('hours', 'home');
  
  return hours;
}