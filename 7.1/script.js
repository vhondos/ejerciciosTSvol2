function startCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');
  
    function updateCountdown() {
      const now = new Date();
      const difference = targetDate - now;
  
      if (difference <= 0) {
        countdownElement.textContent = '¡Feliz Año Nuevo!';
        clearInterval(interval);
        return;
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); 
  }
  
  const targetDate = new Date('2025-01-01T00:00:00');
  startCountdown(targetDate);
  