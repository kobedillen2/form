const header = document.querySelector("h1")
const fullName = document.querySelector("#full_name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const secret = document.querySelector(".cat_secret")
const type = document.querySelector(".cat_type")
const footer = document.querySelector("a")

function setTheme(theme) {
    const root = document.documentElement;
    /*const newTheme = root.className === 'dark' ? 'light' : 'dark';*/
    root.className = theme
    if(theme == "cowboy") {
      header.textContent = "Cow Lover passport"
      fullName.placeholder = "Howdy Howdyson"
      email.placeholder = "cow@boy.com"
      password.placeholder = "I like cow titties"
      secret.textContent = "Favorite cowboy secret?"
      type.textContent = "What is your favorite cow type?"
      options.forEach(function(i) {
        i.textContent = i.textContent.replace("cat", "cow")
        i.textContent = i.textContent.replace("Meowwww", "Mooo")
      })
      footer.textContent = "made by Kobe image by Laurens"
      footer.href = "https://www.instagram.com/laurens.onaroll/"
    }
    else {
      header.textContent = "Cat lover passport"
      fullName.placeholder = "Meow Meowerson"
      email.placeholder = "cat@catmail.meow"
      secret.textContent = "Favorite cat secret:"
      password.placeholder = "I like kitty titties"
      type.textContent = "What is your favorite cat type?"
      footer.textContent = "made by Kobe image by Anja"
      footer.href = "https://www.instagram.com/malinebiseri/"
      options.forEach(function(i) {
        i.textContent = i.textContent.replace("cow", "cat")
        i.textContent = i.textContent.replace("Mooo", "Meowwww")
      })
    }
    
  }

btns = document.querySelectorAll('.theme-toggle')

function removeClass() {
  btns.forEach(function(i) {
    i.classList.remove("active")
  })
}

btns.forEach(function(i) {
  i.addEventListener('click', () => {
  removeClass()
  setTheme(i.textContent)
  i.className = "active"
  })
})

options = document.querySelectorAll("option")


