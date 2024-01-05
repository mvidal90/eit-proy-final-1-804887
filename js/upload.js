
// Nombre *
// Marca 
// Categoría *
// Descripcion corta *

const validateStrings = (string) => {
    const regex = new RegExp("^[A-Za-z Ññ]+$")
    return regex.test(string)
}

const validateStgLength = (stg, minLength, maxLength) => {
    if (stg.length < minLength) {
        return `El valor debe tener al menos ${minLength} caracteres.`
    } else if (stg.length > maxLength) {
        return `El valor debe tener no más de ${maxLength} caracteres.`
    } else {
        return true
    }
}

// Precio *
// Stock *
// Edad desde y hasta

const validatePostiveNumber = num => num >= 0

const validateInt = num => Number.isInteger(num)

// Foto *


const saveGame = game => {
    const initialValue = localStorage.getItem("games")
    if (initialValue) {
        let values = JSON.parse(initialValue)
        values.push(game)
        const newValStg = JSON.stringify(values)
        console.log(newValStg)
        localStorage.setItem("games", newValStg)
    } else {
        const initialGames = JSON.stringify([game])
        localStorage.setItem("games", initialGames)
    }
    alert("El juego ha sido guardado correctamente")
}

const onSubmitProduct = e => {
    e.preventDefault()
    let validForm = true
    const nameInput = document.getElementById("name")
    const priceInput = document.getElementById("price")
    const stockInput = document.getElementById("stock")
    const brandInput = document.getElementById("brand")
    const categoryInput = document.getElementById("category")
    const shortDescriptionInput = document.getElementById("shortDescription")
    const longDescriptionInput = document.getElementById("longDescription")
    const freeDeliverInput = document.getElementById("freeDeliver")
    const ageFromInput = document.getElementById("ageFrom")
    const ageToInput = document.getElementById("ageTo")
    const photoInput = document.getElementById("photo")

    const nameError = document.getElementById("nameError")
    const priceError = document.getElementById("priceError")
    const stockError = document.getElementById("stockError")
    const brandError = document.getElementById("brandError")
    const categoryError = document.getElementById("categoryError")
    const shortDescriptionError = document.getElementById("shortDescriptionError")
    const ageFromError = document.getElementById("ageFromError")
    const ageToError = document.getElementById("ageToError")
    
    // Nombre *
    if (validateStrings(nameInput.value)) {
        const validStg = validateStgLength(nameInput.value, 2, 30)
        if (validStg === true) {
            nameInput.ariaInvalid = false
            nameError.innerText = ""
            nameError.style.display = "none"
        } else {
            nameInput.ariaInvalid = true
            nameError.innerText = validStg
            nameError.style.display = "block"
            validForm = false
        }
    } else {
        nameInput.ariaInvalid = true
        nameError.innerText = "Debe colocar caracteres alfabéticos."
        nameError.style.display = "block"
        validForm = false
    }
    // Marca 
    if (brandInput.value.length > 0) {
        if (validateStrings(brandInput.value)) {
            const validStgBrand = validateStgLength(brandInput.value, 2, 30)
            if (validStgBrand === true) {
                brandInput.ariaInvalid = false
                brandError.innerText = ""
                brandError.style.display = "none"
            } else {
                brandInput.ariaInvalid = true
                brandError.innerText = validStgBrand
                brandError.style.display = "block"
                validForm = false
            }
        } else {
            brandInput.ariaInvalid = true
            brandError.innerText = "Debe colocar caracteres alfabéticos."
            brandError.style.display = "block"
            validForm = false
        }
    }
    // Categoría *
    if (validateStrings(categoryInput.value)) {
        const validStgCat = validateStgLength(categoryInput.value, 2, 15)
        if (validStgCat === true) {
            categoryInput.ariaInvalid = false
            categoryError.innerText = ""
            categoryError.style.display = "none"
        } else {
            categoryInput.ariaInvalid = true
            categoryError.innerText = validStgCat
            categoryError.style.display = "block"
            validForm = false
        }
    } else {
        categoryInput.ariaInvalid = true
        categoryError.innerText = "Debe colocar caracteres alfabéticos."
        categoryError.style.display = "block"
        validForm = false
    }
    
    // Descripcion corta *
    if (validateStrings(shortDescriptionInput.value)) {
        const validStgDesc = validateStgLength(shortDescriptionInput.value, 10, 140)
        if (validStgDesc === true) {
            shortDescriptionInput.ariaInvalid = false
            shortDescriptionError.innerText = ""
            shortDescriptionError.style.display = "none"
        } else {
            shortDescriptionInput.ariaInvalid = true
            shortDescriptionError.innerText = validStgDesc
            shortDescriptionError.style.display = "block"
            validForm = false
        }
    } else {
        shortDescriptionInput.ariaInvalid = true
        shortDescriptionError.innerText = "Debe colocar caracteres alfabéticos."
        shortDescriptionError.style.display = "block"
        validForm = false
    }

    // Precio *
    if (!validatePostiveNumber(priceInput.value)) {
        priceInput.ariaInvalid = true
        priceError.innerText = "Debe ser un número positivo"
        priceError.style.display = "block"
        validForm = false
    } else {
        priceInput.ariaInvalid = false
        priceError.innerText = ""
        priceError.style.display = "none"
    }
    // Stock *
    if (!validatePostiveNumber(stockInput.value)) {
        stockInput.ariaInvalid = true
        stockError.innerText = "Debe ser un número positivo"
        stockError.style.display = "block"
        validForm = false
    } else if (!validateInt(parseInt(stockInput.value))) {
        stockInput.ariaInvalid = true
        stockError.innerText = "Debe ser un número entero"
        stockError.style.display = "block"
        validForm = false
    } else {
        stockInput.ariaInvalid = false
        stockError.innerText = ""
        stockError.style.display = "none"
    }
    // Edad desde y hasta
    if (ageFromInput.value.length || ageToInput.value.length) { 
        if (!validatePostiveNumber(ageFromInput.value)) {
            ageFromInput.ariaInvalid = true
            ageFromError.innerText = "Debe ser un número positivo"
            ageFromError.style.display = "block"
            validForm = false
        } else if (!validateInt(parseInt(ageFromInput.value))) {
            ageFromInput.ariaInvalid = true
            ageFromError.innerText = "Debe ser un número entero"
            ageFromError.style.display = "block"
            validForm = false
        } else {
            ageFromInput.ariaInvalid = false
            ageFromError.innerText = ""
            ageFromError.style.display = "none"
        }
        if (!validatePostiveNumber(ageToInput.value)) {
            ageToInput.ariaInvalid = true
            ageToError.innerText = "Debe ser un número positivo"
            ageToError.style.display = "block"
            validForm = false
        } else if (!validateInt(parseInt(ageToInput.value))) {
            ageToInput.ariaInvalid = true
            ageToError.innerText = "Debe ser un número entero"
            ageToError.style.display = "block"
            validForm = false
        } else if (parseInt(ageFromInput.value) >= parseInt(ageToInput.value)) {
            ageToInput.ariaInvalid = true
            ageToError.innerText = "La edad hasta no debe ser menor a edad desde."
            ageToError.style.display = "block"
            validForm = false
        } else {
            ageToInput.ariaInvalid = false
            ageToError.innerText = ""
            ageToError.style.display = "none"
        }
    }
    
    if (validForm) {
        const game = {
            name: nameInput.value,
            price: parseFloat(priceInput.value),
            stock: parseInt(stockInput.value),
            brand: brandInput.value,
            category: categoryInput.value,
            shortDescription: shortDescriptionInput.value,
            description: longDescriptionInput.value,
            freeDeliver: freeDeliverInput.checked,
            ageFrom: ageFromInput.value === "" ? "" : parseInt(ageFromInput.value),
            ageTo: ageToInput.value === "" ? "" : parseInt(ageToInput.value),
            photo: photoInput.value,
        }
        saveGame(game)
    }

}
