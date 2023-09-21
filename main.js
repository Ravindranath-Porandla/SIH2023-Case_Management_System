var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//CONTACT US

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(contactForm);

  // Send the form data to the server
  fetch('/contact', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server
      if (data.success) {
        // The form was submitted successfully
        alert('Your message has been sent successfully!');
      } else {
        // There was an error submitting the form
        alert('There was an error submitting the form. Please try again later.');
      }
    })
    .catch((error) => {
      // There was an error connecting to the server
      alert('There was an error connecting to the server. Please try again later.');
    });
});


//CASE FILING SECTION
const caseFilingForm = document.querySelector('#case-filing-form');

caseFilingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(caseFilingForm);

  // Send the form data to the server
  fetch('/case-filing', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server
      if (data.success) {
        // The case was filed successfully
        alert('Your case has been filed successfully!');
      } else {
        // There was an error filing the case
        alert('There was an error filing your case. Please try again later.');
      }
    })
    .catch((error) => {
      // There was an error connecting to the server
      alert('There was an error connecting to the server. Please try again later.');
    });
});


//case statistics

// Get the case statistics data from the server
fetch('/case-statistics')
  .then((response) => response.json())
  .then((data) => {
    // Update the case statistics blocks with the data from the server
    document.querySelector('#total-cases').textContent = data.totalCases;
    document.querySelector('#hearings-next-week').textContent = data.hearingsNextWeek;
    document.querySelector('#hearings-this-week').textContent = data.hearingsThisWeek;
    document.querySelector('#pending-cases').textContent = data.pendingCases;
    document.querySelector('#cases-in-favor').textContent = data.casesInFavor;
    document.querySelector('#cases-against').textContent = data.casesAgainst;
    document.querySelector('#closed-cases').textContent = data.closedCases;
  })
  .catch((error) => {
    // Handle the error
  });

