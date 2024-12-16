//Generate Prefix
function genPrefix (firstName){
    if (firstName.length > 4){
        return 'Blubbicous'
    }
    else if (firstName.length < 10) {
        return 'Poppable'
    }
    else if (firstName.length > 10 && firstName.length < 13) {
        return 'Skibidi Sigma' /* Help */
    }
    else {
        return 'Bubblimous'
    }
}

//Generate First Name
function genFirstName (firstName){
    const firstLetter = firstName.charAt(0).toLowerCase()

    if (firstLetter === 'a'){
        return 'Fishy'
    } 
    else if (firstLetter === 'b'){
        return 'Octa'
    }
    else if (firstLetter === 'c'){
        return 'Finn'
    }
    else if (firstLetter === 'd'){
        return 'Phineas'
    }
    else if (firstLetter === 'e'){
        return 'Globbious'
    }
    else if (firstLetter === 'f'){
        return 'Waterwall'
    }
    else if (firstLetter === 'g'){
        return 'Bubbles'
    }
    else if (firstLetter === 'h'){
        return 'Gravel'
    }
    else if (firstLetter === 'i'){
        return 'Sandy'
    }
    else if (firstLetter === 'j'){
        return 'Therma'
    }
    else if (firstLetter === 'k'){
        return 'Jimmy'
    }
    else if (firstLetter === 'l'){
        return 'Scaley'
    }
    else if (firstLetter === 'm'){
        return 'Whirly'
    }
    else if (firstLetter === 'n'){
        return 'Wavers'
    }
    else if (firstLetter === 'o'){
        return 'Anchy'
    }
    else if (firstLetter === 'p'){
        return 'Cici'
    }
    else if (firstLetter === 'q'){
        return 'Gobbles'
    }
    else if (firstLetter === 'r'){
        return 'Puffy'
    }
    else if (firstLetter === 's'){
        return 'Nurse'
    }
    else if (firstLetter === 't'){
        return 'Zeeby'
    }
    else if (firstLetter === 'u'){
        return 'Rab'
    }
    else if (firstLetter === 'v'){
        return 'Ghost'
    }
    else if (firstLetter === 'w'){
        return 'Flopper'
    }
    else if (firstLetter === 'x'){
        return 'Harry'
    }
    else if (firstLetter === 'y'){
        return 'Eel'
    }
    else if (firstLetter === 'z'){
        return 'Tide'
    }
    else {
        return 'Kyle'
    }
}

//Generate Middle Name
function genMiddleName (roadType, favColor){
    if (roadType === 'road'){
        return `${favColor}stone`
    } 
    else if (roadType === 'street'){
        return `${favColor}ble`
    }
    else if (roadType === 'avenue'){
        return `${favColor}waters`
    }
    else {
        return `${favColor}kelp`
    }
}

//Generate Last Name
function genLastName (lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()

    if (lastLetter === 'a'){
        return 'Shade'
    } 
    else if (lastLetter === 'b'){
        return 'Kelper'
    }
    else if (lastLetter === 'c'){
        return 'Waterson'
    }
    else if (lastLetter === 'd'){
        return 'Bubbler'
    }
    else if (lastLetter === 'e'){
        return 'Storm'
    }
    else if (lastLetter === 'f'){
        return 'Jumper'
    }
    else if (lastLetter === 'g'){
        return 'Goobuloius'
    }
    else if (lastLetter === 'h'){
        return 'Tidefarer'
    }
    else if (lastLetter === 'i'){
        return 'Crashion'
    }
    else if (lastLetter === 'j'){
        return 'Sandson'
    }
    else if (lastLetter === 'k'){
        return 'Squid'
    }
    else if (lastLetter === 'l'){
        return 'Trencher'
    }
    else if (lastLetter === 'm'){
        return 'Seafarer'
    }
    else if (lastLetter === 'n'){
        return 'Shelldon'
    }
    else if (lastLetter === 'o'){
        return 'Hoppas'
    }
    else if (lastLetter === 'p'){
        return 'Moonshine'
    }
    else if (lastLetter === 'q'){
        return 'Grazer'
    }
    else if (lastLetter === 'r'){
        return 'Blubblimon'
    }
    else if (lastLetter === 's'){
        return 'Coral'
    }
    else if (lastLetter === 't'){
        return 'Caven'
    }
    else if (lastLetter === 'u'){
        return 'Shark'
    }
    else if (lastLetter === 'v'){
        return 'Raythen'
    }
    else if (lastLetter === 'w'){
        return 'Chompas'
    }
    else if (lastLetter === 'x'){
        return 'Dashale'
    }
    else if (lastLetter === 'y'){
        return 'Glider'
    }
    else if (lastLetter === 'z'){
        return 'Golpur'
    }
    else {
        return 'Moon'
    }
}

//Generate Suffix
function genSuffix (favAnimal){
    return `the ${favAnimal}fish`
}

//Master Function to Assemble Full Name
function genFullName(){
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
    const suffix = genSuffix(favAnimal) /* yuh not exactly useful anymore */

    //function to capitalize words
    //const capitalizedPrefix = toCapitalize(prefix) [Not needed atm]
    const capitalizedFirstName = toCapitalize(newFirstName)
    const capitalizedMiddleName = toCapitalize(middleName)
    const capitalizedLastName = toCapitalize(newLastName)
    const capitalizedSuffix = toCapitalize(favAnimal)

    //Combine 
    const fullName = `${prefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} the ${capitalizedSuffix}fish`

    document.getElementById('results').textContent = fullName
}

//Function Capitalizer
function toCapitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

// :(