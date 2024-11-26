const country1Select = document.getElementById('country1');
const country2Select = document.getElementById('country2');
const timeDifferenceElement = document.getElementById('time-difference');

function calculateTimeDifference() {
  const country1 = country1Select.value;
  const country2 = country2Select.value;

  const now = new Date();

  const country1Time = new Date(now.toLocaleString("en-US", { timeZone: country1 }));
  const country2Time = new Date(now.toLocaleString("en-US", { timeZone: country2 }));

  const differenceInHours = (country2Time - country1Time) / (1000 * 60 * 60);

  timeDifferenceElement.textContent = `La diferencia horaria entre ${country1} y ${country2} es de ${Math.abs(differenceInHours)} hora(s).`;
}

country1Select.addEventListener('change', calculateTimeDifference);
country2Select.addEventListener('change', calculateTimeDifference);
