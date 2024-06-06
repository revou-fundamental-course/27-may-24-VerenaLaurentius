// Ini Javascript

function formValidation() {
    let nameInput = document.getElementById('name-input').value;
    if (nameInput == null || nameInput == '') {
        alert('Inputan Kosong');
    } else {
        console.log(nameInput);
    }
}

function replaceName(){
    let name = prompt("Siapakah nama anda?","");
    document.getElementById("name").innerHTML=name
    }
    
    replaceName();

let indexSlide = 1;
showBanner(1)

function nextSlide(n) {
    showBanner (indexSlide += n);
}

function showBanner (indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage [index].style.display = 'none';
        index++;
    }
    
    listImage[indexSlide - 1].style.display = 'block'
    console.log('index' + [indexSlide - 1] + ' Ini adalah Index Image Yang di tampilkan')
}

setInterval(() => nextSlide(1), 3000)

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const email = document.forms["message-form"]["email"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name =="" || email =="" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUi(name, email, birthDate, gender, messages);

    return false;

}

function setSenderUi(name, email, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}