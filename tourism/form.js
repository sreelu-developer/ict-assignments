function validate()
{
	var v1=emailvalidate();
	var v2=phonevalidate();
	var v3=passvalidate();
	if(v1&&v2&&v3)
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
	let email =document.getElementById("mail");
	let error =document.getElementById("error");
	let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).([a-z]{2,3}).(.[a-z]{2,3})?$/;
	if(email.value=="")
	{
		error.innerHTML="please enter something!";
		error.style.color="red";
		return false;
	}
	else
	{
	if(regexp.test(mail.value))
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
function phonevalidate()
{

	let error2 =document.getElementById("error2");
	let phone =document.getElementById("phoneno");
	let ph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(phone.value=="")
	{
		error2.innerHTML="please enter something!";
		error2.style.color="red";
		return false;
	}
	else
	{
	if((ph.test(phone.value)))
	{
		  error2.innerHTML="Valid";
		error2.style.color="green";
		return true;
	}
	else
	{
		error2.innerHTML="Invalid";
		error2.style.color="red";
		return false;
	}
	}
}
function passvalidate()
{

	let error1 =document.getElementById("error1");
	let pass =document.getElementById("pass");
	
	let medium=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
	let strong=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{14,}$/;
	if(pass.value=="")
	{
		error1.innerHTML="please enter something!";
		error1.style.color="red";
		return false;
	}
	else
	{
	
	if((strong.test(pass.value)))
	{
		  error1.innerHTML="Strong!";
		error1.style.color="Green";
		return true;
	}
	else if((medium.test(pass.value)))
	{
		  error1.innerHTML="medium!";
		error1.style.color="orange";
		return true;
	}
	
	else
	{
		error1.innerHTML="Week and Invalid";
		error1.style.color="red";
		return false;
	}
	}
}

	

