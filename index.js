  const nameSpan = document.querySelector('.dropdown button .UserIDName');

  function updateName() {
    const fullName = nameSpan.getAttribute('data-fullname') || nameSpan.textContent;

    nameSpan.setAttribute('data-fullname', fullName);

    if (window.innerWidth <= 575.9) {
      nameSpan.textContent = fullName.trim().charAt(0); 
    } else {
      nameSpan.textContent = fullName; 
    }
  }

  updateName();

  window.addEventListener('resize', updateName);

  // Time and Date Script

  function updateDateTime() {
    const now = new Date();

    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; 
    hours = String(hours).padStart(2, '0'); 

    const formatted = `${day} ${month} ${year}  ${hours}:${minutes} ${ampm}`;

    document.getElementById('datetime').textContent = formatted;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();