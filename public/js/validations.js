//VALIDATION FUNCTION FOR BLOGGER SIGN UP FORM
const registerBlogger = (event) => {
  event.preventDefault(); // prevent button from posting/submitting
  event.stopPropagation(); // stop propagation of teh click event to the rest of the form

  // make a request once to the server to get the document, instead of calling it everytime for each input
  const form = document.signupForm;
  const firstName = form.firstName;
  const lastName = form.lastName;
  const userName = form.username;
  const dob = form.dob;
  const password = form.password;


  //Validate First Name.
  let fnameRegex = /^[A-Za-z]{2,50}$/;
  let fnameErr = document.getElementById("fnameErr");
  if (fnameRegex.test(firstName.value) == false) {
    fnameErr.innerHTML = "* First Name must be at least 5 letters";
    fnameErr.style.color = "red";
    firstName.style.border = "2px solid red";
    return false;
  } 

  //Validate Last Name.
  let lnameRegex = /^[A-Za-z]\w{2,50}$/;
  //  /^[A-Za-z]+$/;
  let lnameErr = document.getElementById("lnameErr");
  if (lnameRegex.test(lastName.value) == false) {
    lnameErr.innerHTML = "* Last Name is required";
    lnameErr.style.color = "red";
    lastName.style.border = "2px solid red";
    return false;
  } 

  //Validate Urban Farmer User Name.
  let unameRegex = /^[a-z]+$/;
  let unamErr = document.getElementById("unameErr");
  if (unameRegex.test(userName.value) == false) {
    unamErr.innerHTML = "* User Name is required";
    unamErr.style.color = "red";
    userName.style.border = "2px solid red";
    return false;
  } 

  // //Validate Urban Farmer Date of Birth, Date input must be filled, must be 10 years and above
  let dobErr = document.getElementById("dobErr");
  let date = new Date(dob.value),
    birthYear = date.getFullYear(),
    currentYear = new Date().getFullYear();
  if (dob.value == "" || currentYear - birthYear < 10) {
    dobErr.innerHTML = "* Enter Date of Birth";
    dobErr.style.color = "red";
    dob.style.border = "2px solid red";
    return false;
  } 
 

  //Validate Password 
  let pwdRegex = /^[0-9]{3}$/;
  let pwdErr = document.getElementById("pwdErr");
  if (pwdRegex.test(password.value) == false) {
    pwdErr.innerHTML = "* Enter valid password";
    pwdErr.style.color = "red";
    password.style.border = "2px solid red";
    return false;
  } 

  let anchor = document.getElementById("registerBlogger");
  let regbutton = anchor.getElementsByTagName("input")[0];
  regbutton.disabled = true;
  form.requestSubmit();
};


if (document.getElementById("registerBlogger")) {
  let anchor = document.getElementById("registerUF");
  anchor.addEventListener("click", registerUFform);
}
