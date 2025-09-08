function send(){
    var input1 = document.getElementById("fullName").value;
    var input2 = document.getElementById("email").value;
    var input3 = document.getElementById("detailed-enquiry").value;

    if(input1== "" || input2== "" || input3== ""){
        alert("PLEASE ENTER THE VALUES!");
        return;
    }

    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var event = document.getElementById("event").value;
    var categories = [];
    var detailedEnquiry = document.getElementById("detailed-enquiry").value;
    

    var checkboxes = document.querySelectorAll('input[name="join"]:checked, input[name="activities"]:checked, input[name="fees"]:checked, input[name="rules"]:checked');
        for (var i = 0; i < checkboxes.length; i++) {
            categories.push(checkboxes[i].value);
        }
        alert("Congratulation....!!!\nFull Name:" + fullName + "\nEmail: " + email + "\nInterested Event: " + event + "\nCategories of Inquiry: " + categories.join(", ") + "\nDetailed Enquiry: " + detailedEnquiry);
}
