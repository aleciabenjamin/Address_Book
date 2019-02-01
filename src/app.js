const renderContacts = () => {
  const storage = window.localStorage
  const contacts = JSON.parse(storage.getItem('contacts'))

  let div = document.querySelector('.contact-list')

  if (contacts) {
    div.innerHTML = '' 
    let ul = document.createElement('ul');
    ul.class = "flex";

    
    contacts.forEach(contact => {
      let li = document.createElement('li');
      li.id = contact.id;
      li.classList += "list-reset";
      li.innerHTML = `
            
          <div class="content text-center sm:text-left sm:flex-growbg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden sm:flex sm:items-center px-6 py-4">
                <h3 class="" >${ contact.name }</h3>
                <h4 class="">${ contact.company }</h4>
                <P class="">${ contact.phone }</P>
                <p class="">${ contact.notes }</p> 
                <p class="">${ contact.email }</p> | 
                <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
          </div>
        
    `
   li.appendChild(ul)
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
    const storage = window.localStorage
    event.preventDefault()
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

    let contacts = JSON.parse(storage.getItem('contacts')) || []
    contacts.push(contact)
    storage.setItem('contacts', JSON.stringify(contacts)) 
    renderContacts()
    addContactForm.reset()
  })
})
