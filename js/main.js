function definetelyPopUp() {
    alert('Your results will be with you soon!');
}

function signUpPrompt() {
    let name = prompt('Great! Please provide your name: ');
    prompt('Please provide your email: '); // this does nothing. once the user hits enter, their input is gone

    document.getElementById('userMsg').innerText = `Your results will be with you soon, ${name}!`
}