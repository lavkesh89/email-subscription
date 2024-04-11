  const scriptURL = 'https://script.google.com/macros/s/AKfycbwO8-JxsJpWurj8JVywKspJEO_OVPj8X37gbsi6PxWVZeBCYg8IUjn40wsPWmA4bcpxgA/exec';   //give the url of google spred sheet here
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById('msg')    // new element for message

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thanks For subscribing!"          //Thsi message will show after an email subscription
        setTimeout(function(){                      
            msg.innerHTML = ""                               
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
