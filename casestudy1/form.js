function validate()
{
	var v1=emailvalidate();
	var v2=passvalidate();
	if(v1&&v2)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function emailvalidate()
{
	let user =document.getElementById("user");
	let error =document.getElementById("error");
	if(user.value=="")
	{
		error.innerHTML="please enter something!";
		error.style.color="red";
		return false;
	}
	else
	{
    if(user.value=="admin")
	{
		error.innerHTML="Valid";
		error.style.color="green";
		return true;
	}
	else
	{
		error.innerHTML="Invalid";
		error.style.color="red";
		return false;
	}
	
		
	}
}
function passvalidate()
{

	let error1 =document.getElementById("error1");
	let pass =document.getElementById("pass");
	
	if(pass.value =="12345")
	{ 
	   error1.innerHTML="valid";
		error1.style.color="green";
	   return true;
	}
	else
	{
	
		error1.innerHTML="Invalid";
		error1.style.color="red";
		return false;
	}
}