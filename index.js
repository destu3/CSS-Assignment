const imageContainer = document.querySelector(".info-image") 

function animeProfile(image, profile){
    this.image = image
    this.profile = profile
}

const shinobu = new animeProfile("https://i.pinimg.com/originals/c8/02/fc/c802fc2b8836ed22e293df7c4ec1b17e.jpg", "Shinobu Kochō : Demon Slayer")
const kaguya = new animeProfile("./images/kaguya.jpg",  "Kaguya Shinomiya : Kaguya-sama, Love is War")
const hinata = new animeProfile("https://i.pinimg.com/originals/c4/8a/98/c48a989c9cdba4704c34518503d0e91d.jpg", "Hinata Hyuga : Naruto Shippuden")
const lucy = new animeProfile("https://i.pinimg.com/736x/2b/28/41/2b2841fd51b04ba564403965601e2b92.jpg", "Lucy Heartfilia : Fairy tail")
const chizuru = new animeProfile("https://i.pinimg.com/originals/15/18/e5/1518e5c5507e02af17184cd1b9934bce.jpg", "Chizuru Ichinose : Rent a Girlfriend")
const mai = new animeProfile("https://i.pinimg.com/originals/12/01/84/12018463bbf253b1e402122a0babd25d.jpg", "Mai Sakurajima : Bunny Girl Senpai")

const animeCharacters = [shinobu,kaguya,hinata,lucy,chizuru,mai];

animeCharacters.forEach(animeCharacter => {
    const newDiv = document.createElement("div")
    const characterImg = document.createElement("img")
    const characterParagraph = document.createElement("p")

    newDiv.classList.add("info-images")
    characterImg.classList.add("wives")
    characterImg.src = animeCharacter.image
    characterParagraph.textContent = animeCharacter.profile
    newDiv.append(characterImg)
    newDiv.append(characterParagraph)
    imageContainer.append(newDiv)
})