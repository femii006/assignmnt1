var btn1 = document.getElementById("btn1")
var err1 = document.getElementById("err1")

function display()
{
    try
    {
      alart("btn clicked")
    }
    catch(error)
    {
        err1.innerText=error.message
    }
}
function check()
{
  var fem = document.getElementById("femi").value;
  var eld = document.getElementById("eldho")
  try
  {
    if(fem=="")throw "box cannot be empty";
    if(isNaN(fem))throw "value is not a number";
    if(fem<10)throw "value should be greater than 10";
    if(fem>20)throw "value should be lesser than 20";
  }
  catch (error)
  {
    eld.innerText=error
  }
  finally
  {
    document.getElementById("femi").value=""
  }
}
    

    
