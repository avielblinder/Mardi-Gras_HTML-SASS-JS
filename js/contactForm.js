let contactPage = document.querySelector("#sendButton").addEventListener('click', () => {
    let userName = document.querySelector('#firstName'),
        userLastName = document.querySelector('#lastName'),
        userEmailAddress = document.querySelector('#emailAddress'),
        userComments = document.querySelector('#textArea'),
        nameError = document.querySelector('.fnError'),
        lnameError = document.querySelector('.lnError'),
        emailError = document.querySelector('.eError'),
        textError = document.querySelector('.taError');
    let counter = 0;


    if (userComments.value == "") {
        userComments.focus();
        textError.innerHTML = '*Please write us something!';
    } else {
        textError.innerHTML = '';
        counter++;
    }

    if (userEmailAddress.value == "" || userEmailAddress.value.indexOf(".") == -1 || userEmailAddress.value.indexOf("@") == -1 || userEmailAddress.value == "#") {
        userEmailAddress.focus();
        emailError.innerHTML = '*Please write valid Last Email Address!';
    } else {
        emailError.innerHTML = '';
        counter++;

    }

    if (userEmailAddress.value == "" || userEmailAddress.value.indexOf(".") == -1 || userEmailAddress.value.indexOf("@") == -1 || userEmailAddress.value == "#") {
        userEmailAddress.focus();
        emailError.innerHTML = '*Please write valid Last Email Address!';
    } else {
        emailError.innerHTML = '';
        counter++;

    }

    if (userLastName.value == "" || userLastName.value == "." || userLastName.value == "@" || userLastName.value == "#") {
        userLastName.focus();
        lnameError.innerHTML = '*Please write valid Last Name!';
    } else {
        lnameError.innerHTML = '';
        counter++;

    }

    if (userName.value == "" || userName.value == "." || userName.value == "@" || userName.value == "#") {
        userName.focus();
        nameError.innerHTML = '*Please write valid Name!';
    } else {
        nameError.innerHTML = '';
        counter++;

    }
    if (counter == 5) {
        location.reload()
    }

});

export default contactPage;