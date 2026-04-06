document.getElementById("registerForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    clearErrors();

    try {

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let age = document.getElementById("age").value;
        let password = document.getElementById("password").value;
        let department = document.getElementById("department").value;

        // NAME
        if(name === ""){
            throw {field:"name", message:"Name is required"};
        }

        // EMAIL
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)){
            throw {field:"email", message:"Invalid email format"};
        }

        // AGE
        if(age < 18 || age > 60){
            throw {field:"age", message:"Age must be between 18-60"};
        }

        // PASSWORD
        if(password.length < 6){
            throw {field:"password", message:"Password must be 6+ characters"};
        }

        // DEPARTMENT
        if(department === ""){
            throw {field:"department", message:"Select a department"};
        }

        document.getElementById("successMsg").innerText =
        "Registration Successful!";

    } catch(error){

        document.getElementById(error.field + "Error").innerText =
        error.message;

        document.getElementById(error.field)
        .classList.add("invalid");

    } finally {
        console.log("Validation completed");
    }

});

function clearErrors(){
    document.querySelectorAll(".error")
    .forEach(el => el.innerText="");

    document.querySelectorAll("input,select")
    .forEach(el => {
        el.classList.remove("invalid","valid");
    });

    document.getElementById("successMsg").innerText="";
}
