let prioPerson = 'Ami';
prioPerson = 'Ami ikra';
const hubby = 'janina';

// default parameter:---------------
//function calcualtion(x,y,z=0){..};  // z=0 or z="" or z=[] or z-1 etc as you wish u can let.
function getName(firstName, lastName = "bollam to janina") {
    return firstName+ " "+lastName;
}

// templete string
const myPeople = `My lovely persone is are ${hubby} and his full name is ${getName('janina')}. My name is ${prioPerson}.`
console.log(myPeople);