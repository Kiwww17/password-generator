const inputRange = document.getElementById('inputRange');
const inputInp = document.getElementById('inputInp');
const generate = document.getElementById('generateBtn');
const copy = document.getElementById('copy');
const display = document.getElementById('display');
const regenerateBtn = document.getElementById('regenerateBtn');


inputRange.addEventListener('input', () => {
    inputInp.value = inputRange.value;
});

inputInp.addEventListener('input', () => {
    inputRange.value = inputInp.value;
});

generate.addEventListener('click', function(){
    inputRange.value;
    const template = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890#${}.@_'
    
    let password = []
    for(let i = 0; i < inputRange.value; i++){
        const selector  = Math.floor((Math.random()*69)-0);
        password.push(template.charAt(selector))
    }
    password = password.join("")
    display.value = password;
});


//function copy password
copy.addEventListener('click', function(){
    copy.textContent = '✅'
    navigator.clipboard.writeText(password)

})

regenerateBtn.addEventListener('click', () => {
    window.location.reload()
})


