let check = document.getElementById('check');
check.onclick = toglepass;
function toglepass(){
    if(check.checked)
    {
        pass.type = 'text'
    }
    else{
        pass.type = 'password'
    }
}
