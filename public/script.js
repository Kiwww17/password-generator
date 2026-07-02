const inputRange = document.getElementById('inputRange');
const inputInp = document.getElementById('inputInp');
const generate = document.getElementById('generateBtn');
const copy = document.getElementById('copy');
const display = document.getElementById('display');
const regenerateBtn = document.getElementById('regenerateBtn');
const notification = document.getElementById('notification');


inputRange.addEventListener('input', () => {
    inputInp.value = inputRange.value;
});

inputInp.addEventListener('input', () => {
    inputRange.value = inputInp.value;
});

let password = []
generate.addEventListener('click', function(){
    inputRange.value;
    const template = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890#${}.@_'
    
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
    notification.style.visibility = 'visible'
    notification.style.transition = 'all 300ms'
    
    setTimeout(() => {
        notification.style.visibility = 'hidden'
    }, 2000)


})

regenerateBtn.addEventListener('click', () => {
    window.location.reload()
})


