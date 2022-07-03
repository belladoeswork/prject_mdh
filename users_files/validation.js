const input = document.querySelectorAll('input');

const patterns = {
    phone:/^\d{11}$/
};

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid'
    } else{
        field.className = 'valid'
    }
    //console.log(regex.test(field.value));
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) =>{
        //console.log(e.target.attributs.name.value);
        validate(e.target, patterns[e.target.attributs.name.value])
    });
    
});