let currentUserName = prompt("who are you?","");
if(currentUserName == "" || currentUserName == null) {
    alert("cancelled");
} else if(currentUserName == "Admin") {
    let password = prompt("enter password","");
    if(password == "TheMaster") {
        alert("welcome");
    } else if(password == null) {
        alert("cancelled");
    } else {
        alert("wrong password");
    }
} else {
    alert("i don't know you");
}