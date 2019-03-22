document.addEventListener("DOMContentLoaded", () => {
  //Implement Your Code Here
  const burgerMenu = document.querySelector('#burger-menu')
  const url = 'http://localhost:3000/burgers'
  const fetchData = () => {return fetch(url).then(res => res.json())}
  const orderList = document.querySelector('#order-list')
  const name = document.querySelector('#burger-name')
  const description = document.querySelector('#burger-description')
  const image = document.querySelector('#burger-image')
  const submit = document.querySelector('#submit')

  let newBurgerName;
  let newBurgerDescription;
  let newBurgerImage;

  fetchData()
  .then(data => {
    data.forEach(burger => {
      burgerMenu.innerHTML += `
      <div class="burger">
        <h3 class="burger_title">${burger.name}</h3>
        <img src=${burger.image}>
        <p class="burger_description">${burger.description}</p>
        <button id=${burger.id} class="button">Add to Order</button>
      </div>
      `
    })
  })

  const addBurger = document.addEventListener('click', (e => {
    if(e.target.innerText === 'Add to Order') {
      burgerName = e.target.parentElement.children[0].textContent
      orderList.innerHTML += `<li>${burgerName}</li>`
    }
  }))

  name.addEventListener('change', (e => {
    newBurgerName = e.target.value
    console.log(newBurgerName)
  }))

  description.addEventListener('change', (e => {
    newBurgerDescription = e.target.value
    console.log(newBurgerDescription)
  }))

  image.addEventListener('change', (e => {
    newBurgerImage = e.target.value
    console.log(newBurgerImage)
  }))

  submit.addEventListener('click', (event) => {
    event.preventDefault()
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newBurgerName,
        description: newBurgerDescription,
        image: newBurgerImage
      })
    })
    orderList.innerHTML += `<li>${newBurgerName}</li>`
  })


})
