const imageContainer = document.querySelector(".info-image") 

function animeProfile(image, profile){
    this.image = image
    this.profile = profile
}

const profile1 = new animeProfile("./images/nino2.jpg", "this is some subtext under an illustration or image")
const profile2 = new animeProfile("./images/kaguya.jpg", "this is some subtext under an illustration or image")
const profile3 = new animeProfile("./images/nino2.jpg", "this is some subtext under an illustration or image")
const profile4 = new animeProfile("./images/nino2.jpg", "this is some subtext under an illustration or image")
const profile5 = new animeProfile("./images/nino2.jpg", "this is some subtext under an illustration or image")
const profile6 = new animeProfile("./images/nino2.jpg", "this is some subtext under an illustration or image")

const animeCharacters = [profile1,profile2,profile3,profile4,profile5,profile6];

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