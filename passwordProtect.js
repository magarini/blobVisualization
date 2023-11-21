function protectpasscode() {
    const result = document.getElementById("tutorial").value;
    let passcode = 12345;
    let space = '';
    if (result == space) {
       alert("Type passcode")
    } else {
       if (result == passcode) {
          document.write("<center><h1>TP, The Best E-Learning </h1></center>");
       } else {
          alert("Incorrect Passcode");
          location.reload();
       }
    }
 }