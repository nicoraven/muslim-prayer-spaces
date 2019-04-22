function required() {
    console.log('function triggered!');
    let field = document.forms.deleteForm.reason.value;
    if (field == "") {
        console.log("Please provide a reason for deletion");
        alert("Please provide a reason for deletion");
        return false;
    }
    else {
        console.log("Deletion form submitted");
    }
}