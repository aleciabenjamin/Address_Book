const renderContacts = () => {
  const storage = window.localStorage
  const contacts = JSON.parse(storage.getItem('contacts'))


  let div = document.querySelector('.contact-list')

  if (contacts) {
    div.innerHTML = '' 
    const ul = document.createElement('ul')

    
    contacts.forEach(contact => {
      let li = document.createElement('li')
      li.setAttribute("class","list-reset");
      li.innerHTML = `
        <div class="card">

          <div class"max-w-md w-full lg:flex"> 
          <div class="content">
            <h1>${ contact.name }</h1>
            <h2>${ contact.company }</h2>
            <p>${ contact.notes }</p> 
            ${ contact.email } | 
            <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>

          </div>
          </div>
        </div>
        </div><br>
     `
     
      ul.appendChild(li)

    })

    div.appendChild(ul) 
     
   } else { 
      div.innerHTML = '<p class= "text-center">You have no contacts in your address book</p>' 
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderContacts() 
  const addContactForm = document.querySelector('.new-contact-form') 
    addContactForm.addEventListener('submit', event => {
      event.preventDefault()
      const storage = window.localStorage
      
      const {
        name,
        email,
        phone,
        company,
        notes,
        twitter,
      } = addContactForm.elements
  
      
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
      let contacts = JSON.parse(storage.getItem('contacts')) || []
      contacts.push(contact)
      storage.setItem('contacts', JSON.stringify(contacts))
      renderContacts() 
      addContactForm.reset()
    })
      
})

document.removeEventListener('DOMContentLoaded', (elementId) => { 
  const removeContactForm = document.querySelector('.new-contact-form') 
  removeContactForm.removeEventListener('.delete-button', event => {
    event.preventDefault()
    let element = document.getElementById(elementId)
      element.parentNode.removeChild(element)

      storage.getItem('contacts', JSON.stringify(contacts))
      removeContactForm.reset()
      
 })
}) 