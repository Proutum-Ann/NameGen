//Generate Prefix
function genPrefix (firstName){
    if (firstName.length > 4){
        return 'The Great'
    }
    else {
        return 'Master'
    }
}

//Generate First Name
function genFirstName (firstName){
    const firstLetter = firstName.charAt(0).toLowerCase()

    if (firstLetter === 'a'){
        return 'Jeff'
    } 
    else if (firstLetter === 'b'){
        return 'John'
    }
    else if (firstLetter === 'c'){
        return 'Bob'
    }
    else if (firstLetter === 'd'){
        return 'Fort'
    }
    else {
        return 'Kyle'
    }
}

//Generate Middle Name
function genMiddleName (roadType, favColor){
    if (roadType === 'road'){
        return `${favColor}ridge`
    } 
    else if (roadType === 'street'){
        return `${favColor}son`
    }
    else if (roadType === 'avenue'){
        return `${favColor}field`
    }
    else {
        return `${favColor}stone`
    }
}

//Generate Last Name
function genLastName (lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()

    if (lastLetter === 'a'){
        return 'Shadow'
    } 
    else if (lastLetter === 'e'){
        return 'Storm'
    }
    else if (lastLetter === 'i'){
        return 'Blaze'
    }
    else if (lastLetter === 'o'){
        return 'Thorn'
    }
    else if (lastLetter === 'u'){
        return 'Forest'
    }
    else {
        return 'Moon'
    }
}

//Generate Suffix
function genSuffix (favAnimal){
    return `of the ${favAnimal}`
}

//Master Function to Assemble Full Name
function genFullName (){
    //Define variables from inputs
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favColor = document.getElementById('favColor').value.trim()
    const favAnimal = document.getElementById('favAnimal').value.trim()

    //Generate each part of name using helper functions
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(favAnimal)
}