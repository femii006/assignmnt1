var user=document.getElementById("user")
var pass=document.getElementById("pass")
var btn=document.getElementById("btn")
var err1=document.getElementById("err1")
function validate()
{
    if(user.value. trim()=="" || pass.value.trim()=="")
    {
        alert("enter the fields");
        return false;
    }
    else if(pass.value.length<5)
    {
        pass.style.border="2px solid red"
        err1.textContent="password should be greater than 5";
        return false;
    }
    else
    {
        pass.style.border="2px solid green"
        err1.textContent=""
        return true;
    } }
    function validate()
    {
        let regex = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]
        {2,3})?$/
        if(regex.test.user.value)
    }

