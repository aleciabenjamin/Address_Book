const renderContacts = () => {
  const storage = window.localStorage
  const contacts = JSON.parse(storage.getItem('contacts'))


  let div = document.querySelector('.contact-list')

  if (contacts) {
    div.innerHTML = '' 
    const ul = document.createElement('ul')

    
    contacts.forEach(contact => {
      let li = document.createElement('li')
      li.id = contact.id
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
    </div>
     
   
    `
    let button = document.createElement('button');
      button.classList += "delete-contact";
      button.innerHTML ='Delete';
      li.appendChild(button) 
      
      ul.appendChild(li)
     
      
    })

    div.appendChild(ul) 
     
   } else { 
      div.innerHTML = '<p class= "text-center">You have no contacts in your address book</p>' 
  }
}






document.addEventListener('DOMContentLoaded', () => {
  renderContacts()


  let delete_button = document.querySelector('.contact-list')
  const storage = window.localStorage

  

   delete_button.addEventListener('click',event => {
    let id = event.target.parentNode.id
    let contacts = JSON.parse(storage.getItem('contacts')) || []
    console.log(contacts)
    contacts.forEach(contact => {
      
      contact.id == id ? contacts.splice(contacts.indexOf(contact),1)  : false
    
    })
    
    console.log(contacts)
    
    storage.setItem('contacts', JSON.stringify(contacts))
    renderContacts()
    
    
  }) 
  
  const addContactForm = document.querySelector('.new-contact-form')

  
  addContactForm.addEventListener('submit', event => {
    
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
