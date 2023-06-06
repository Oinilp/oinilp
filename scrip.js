function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
  
    if (username === "") {
      error.innerHTML = "Please enter your username";
      return false;
    }
  
    if (password === "") {
      error.innerHTML = "Please enter your password";
      return false;
    }
  
    return true;
  }
  