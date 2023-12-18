/* Base URL = https://sophisticated-humane-dandelion.glitch.me

1. Pasirašykite GET, kuris atsisiųs visus produktus ir atvaizduos vieną šalia kito po keturis eilutėje
2. Kitame puslapyje pasirašykite formą, kuri pridės produktą. Pridėjus, išmes alert'ą, kad sėkmingai pridėtas ir nukreips (redirect) į pirminį produktų atvaizdavimo puslapį.
3. Padarykite, kad paspaudus delete mygtuką - back-end'ui būtų išsiunčiamas Fetch Delete Request (baseURL + /:id). T.y. į url turėsite paduoti produkto ID parametrą (pvz.: DELETE baseURL/1 ištrins pirmą įrašą).
4. Padarykite, kad ištrynus produktą - puslapis persikrautų. Taip nėra labai efektyvu - pagalvokite, kokiais kitais būdais galima būtų pasiekti šį rezultatą? Hint: gavus success message iš back-end'o filtruoti duomenis ir ištrinti su front-end'u irgi.
*/

const API_URL = "https://sophisticated-humane-dandelion.glitch.me/"
const main = document.querySelector("main")
const submit = document.querySelector(".submit")

fetch(API_URL)
.then(res => res.json())
.then(data => {
      data.forEach(product => {
        const newProduct = document.createElement("div")
        newProduct.classList.add("product")

        newProduct.innerHTML = 
        `
        <img src=${product.image} alt="">
            <p>${product.title}</p>
            <h2>€${product.price}</h2>
            <button>Ištrinti</button>
        `
        main.append(newProduct)
      })

        
})
.catch(e => console.log(e.message))
