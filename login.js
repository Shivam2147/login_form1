let check = document.getElementById('check');
check.onclick = toglepass;
function toglepass() {
    if (check.checked) {
        pass.type = 'text'
    }
    else {
        pass.type = 'password'
    }
}
var userDetails = []
var form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    var btn = document.getElementById("btn")
    var Email = document.getElementById("Email").value
    var pass = document.getElementById("pass").value
    var age = document.getElementById("age").value
    if (Email == "" || pass == "" || age == "") {
        btn.style.backgroundColor = "red"
        btn.textContent = "please enter details"
    } else {
        var inputValues = {
            Email,
            pass,
            age
        }
        btn.style.backgroundColor = "";
        btn.textContent = "Login";
        userDetails.push(inputValues);
        form.reset();
        sortByAge(userDetails);
    }

})

function sortByAge(arr){
    const newArr = arr.sort((a,b)=> a.age - b.age);
    
    return newArr;
}