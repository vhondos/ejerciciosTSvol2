function createCalendar(month, year, events) {
  const calendar = document.getElementById('calendar');
  calendar.innerHTML = ''; // Limpia el calendario antes de generar uno nuevo

  // Días de la semana
  const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  daysOfWeek.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    dayElement.style.fontWeight = 'bold';
    calendar.appendChild(dayElement);
  });

  // Obtiene el primer día del mes
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Ajusta el índice del primer día de la semana (donde el domingo es 0)
  const adjustedFirstDay = (firstDay === 0) ? 6 : firstDay - 1;

  // Rellena días vacíos antes del primer día del mes
  for (let i = 0; i < adjustedFirstDay; i++) {
    const emptyCell = document.createElement('div');
    calendar.appendChild(emptyCell);
  }

  // Genera los días del mes
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('calendar-day');

    // Número del día
    const dayNumber = document.createElement('div');
    dayNumber.classList.add('day-number');
    dayNumber.textContent = day;
    dayElement.appendChild(dayNumber);

    // Eventos
    const eventsForDay = events[day] || [];
    const eventsContainer = document.createElement('div');
    eventsContainer.classList.add('events');
    eventsForDay.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      eventElement.textContent = event;
      eventsContainer.appendChild(eventElement);
    });
    dayElement.appendChild(eventsContainer);

    calendar.appendChild(dayElement);
  }
}

// Datos: mes, año y eventos
const month = 10; // Noviembre (los meses comienzan en 0, es decir, 0 = Enero, 11 = Diciembre)
const year = 2024;
const events = {
  1: ['Evento A'],
  5: ['Evento B', 'Evento C'],
  12: ['Evento D'],
  20: ['Evento E', 'Evento F', 'Evento G'],
  30: ['Evento H']
};

// Crea el calendario
createCalendar(month, year, events);
