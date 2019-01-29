document.addEventListener('DOMContentLoaded', () => {
    // Select form object from the DOM
    const addContactForm = document.querySelector('.new-contact-form')
  
    // Register an event to listen for form submission
    addContactForm.addEventListener('submit', event => {
      event.preventDefault()
      const storage = window.localStorage
      
      console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
      storage.setItem('contacts', JSON.stringify([contact]))
    })
  
      // Get all inputs elements from the form
      const {
        name,
        email,
        phone,
        company,
        notes,
        twitter,
      } = addContactForm.elements
  
      // Create contact object
      const contact = {
        id: Date.now(),
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        notes: notes.value,
        twitter: twitter.value,
      }
  
      console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
  })