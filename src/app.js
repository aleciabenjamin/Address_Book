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
      <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div class="sm:flex sm:items-center px-6 py-4">
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="content">
            <h3 class="" >${ contact.name }</h3>
            <h4 class="">${ contact.company }</h4>
            <P class="">${ contact.phone }</P>
            <p class="">${ contact.notes }</p> 
            <p class="">${ contact.email }</p> | 
            <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
          </div>
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

let delete_button = document.querySelector('.contact-list')

    

     delete_button.getElementById(delete_contact).addEventListener('click',event => {
      let id = event.target.parentNode.id
      console.log(contacts)
      let contacts = JSON.parse(storage.getItem('contacts')) || []
      
      contacts.forEach(contact => {
        
        contact.id == id ? contacts.splice(contacts.indexOf(contact),1)  : false
      
      })
})