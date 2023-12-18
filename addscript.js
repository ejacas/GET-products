const API_URL = "https://sophisticated-humane-dandelion.glitch.me/"
const form = document.getElementById("form")
const imageInput = document.querySelector(".image")
const titleInput = document.querySelector(".title")
const priceInput = document.querySelector(".price")
const submit = document.querySelector(".submit")

const submitData = (e) => {
    e.preventDefault()

    if(!imageInput.value || !titleInput.value || !priceInput.value) return alert("Please fill the fields")

    const newProduct = {
        image: imageInput.value,
        title: titleInput.value,
        price: parseFloat(priceInput.value)
    }

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify([newProduct])
        })

        .then(resp => {
            console.log('Response: ', resp)
            return resp.json()
        } )
        .then(data =>  {
            console.log(data) 

            // Clear input
            imageInput.value = ""
            titleInput.value = ""
            priceInput.value = ""

            alert("Data sent successfully :)")
        })
        .catch(e => alert(e.message))
    }
    
form.addEventListener("submit", submitData)