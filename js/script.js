
function popUpSuccess(){ //Gives a success pop up
    function success(){ document.getElementById('successNotification').style.display='block';}
    setTimeout(success, 500); 
    function closeSuccess(){ document.getElementById('successNotification').style.display='none'; } //The success pop-up should only appear after the share popup is closed
    setTimeout(closeSuccess,4000);
}

function validateFileUpload(){
    var uploaded = document.getElementById("myFile").value;
    if(uploaded == ""){
    alert("You haven't chosen a file to upload");
    }else{
    document.getElementById('id02').style.display='none'; 
    uploadSuccessful();
    resetUploadForm('myFile', 'upload_text')
    }
}

function uploadSuccessful(){
    function success(){ document.getElementById('successfulUpload').style.display='block';}
    setTimeout(success, 500); 
    function closeSuccess(){ document.getElementById('successfulUpload').style.display='none'; } //The success pop-up should only appear after the share popup is closed
    setTimeout(closeSuccess,4000);
}



// The functions in this script block are provided in the base model
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function myFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show"; 
    x.previousElementSibling.className += " w3-red";
    } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-red", "");
    }
}

doShare("HomePage");
function doShare(fileName) {
    var i;
    var x = document.getElementsByClassName("file");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    x = document.getElementsByClassName("test");
    for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" w3-light-grey", "");
    }
    document.getElementById(fileName).style.display = "block";
    //event.currentTarget.className += " w3-light-grey";
}




var openTab = document.getElementById("firstTab"); //display the home page when load
openTab.click();


    

//dropdown
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openDropDown(dropdown) {
document.getElementById(dropdown).classList.toggle("show");
}

function closeDropDown(dropdown){
document.getElementById(dropdown).classList.remove("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}





//Sticky top navigation bar
window.onscroll = function() {stickyFun();};

var navbar = document.getElementById("topNavBar");
var sticky = navbar.offsetTop;

function stickyFun() {
if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
} else {
    navbar.classList.remove("sticky");
}
}


//Clear Search Box when submit
function resetSearch(){
document.getElementById("searchBox").reset();
}

function resetShareForm(targetEmail, targetTextArea, targetDropDown){
//Reset share form upon closeing of the form

document.getElementById(targetEmail).value = "";
document.getElementById(targetTextArea).value = "";
document.getElementById(targetDropDown).selectedIndex = 0;

var allCheckBox = document.getElementsByClassName("checkbox");

for(var i = 0; i < allCheckBox.length; i++) {
    allCheckBox[i].checked = false;
}

}

function resetUploadForm(targetFile, targetTextArea){ 
//Reset the messsage area in the upload form upon closing the form
document.getElementById(targetFile).value = "";
document.getElementById(targetTextArea).value = "";
}


function preventEmptyForm(multipleFiles, fileID, targetEmail, targetTextArea, targetDropDown){
//Ensure valid data has been entered to the share form
var hasRecipient = false;
var hasFile = false;

var email = document.getElementById(targetEmail).value.replace(/\s/g,'');  ;
var emailLength = email.length;
if(emailLength != 0){hasRecipient = true;}

var shareCheckBox = document.getElementsByClassName("share-checkbox");
for(let x = 0; x<shareCheckBox.length; x++){
    if(shareCheckBox[x].checked == true){
    hasRecipient = true;
    }

}
var fileCheckBox = document.getElementsByClassName("file-checkbox");
for(let x = 0; x<fileCheckBox.length; x++){
    if(fileCheckBox[x].checked == true){
    hasFile = true;
    }
}
if(multipleFiles){
    if(hasRecipient == false){
    alert("Please provide at least one recipient");
    }else if(hasFile == false){
    alert("Please select at least one file to share")
    }else{
    document.getElementById(fileID).style.display='none'; 
    resetShareForm(targetEmail, targetTextArea, targetDropDown); 
    popUpSuccess();
    }
}else{
    if(hasRecipient == false){
    alert("Please provide at least one recipient");
    }else{
    document.getElementById(fileID).style.display='none'; 
    resetShareForm(targetEmail, targetTextArea, targetDropDown); 
    popUpSuccess();
    }
}
}

function selectedFile(){
    var hasFile = false;
    var fileCheckBox = document.getElementsByClassName("file-checkbox");
    for(let x = 0; x<fileCheckBox.length; x++){
    if(fileCheckBox[x].checked == true){
        hasFile = true;
    }
    }
    return hasFile;
}
function getLink(multipleFile){
//Create an arbitary link and copy it to the clipboard for the "Get Sharable link Feature"
if(multipleFile){
    let valid = selectedFile();
    if(valid){
    copyLink()
    alert("The shareable link is copied to clipboard. The Share File popup will be closed in 3 seconds after you click OK.");
    function closeShare(){ document.getElementById('id01').style.display='none'; resetShareForm('email1','textArea1', 'dropdown-list1');}
    setTimeout(closeShare,3000);
    
    }else{
    alert("Please select at least one file to share");
    }
}else{
    copyLink()
    alert("The shareable link is copied to clipboard. The Share File popup will be closed in 3 seconds after you click OK.");
    function closeShare(){ document.getElementById('id03').style.display='none'; resetShareForm('email2','textArea2', 'dropdown-list2');}
    setTimeout(closeShare,3000);
    
}
}

function copyLink () { //reference: https://techoverflow.net/2018/03/30/copying-strings-to-the-clipboard-using-pure-javascript/
// Create new element
var el = document.createElement('textarea');
// Set value (string to be copied)
el.value = "file.myShare.com/document/d/1hH9uf4Nurc8d4PgrOAic3pGsYwPFM/"; //an arbitary link
// Set non-editable to avoid focus and move outside of view
el.setAttribute('readonly', '');
el.style = {position: 'absolute', left: '-999999px'};
document.body.appendChild(el);
// Select text inside element
el.select();
// Copy text to clipboard
document.execCommand('copy');
// Remove temporary element
document.body.removeChild(el);
}





//Email Validation
function ValidateEmail(inputText){
//Ensure no invalid character is in the email address
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat)){
    document.email.text1.focus();
    return true;
}else{
    alert("You have entered an invalid email address!");
    document.email.text1.focus();
    return false;
}
}

function withinOrganisation(targetEmail){
//Varify if recipients' email addresses are within UoA
var inputEmails = document.getElementById(targetEmail).value;
var invalidSyntax = ["?","/","\\", ",", "[", "]", "{","}","(", ")", "*", "&", "^", "%", "%", "'", "#", "!","<", ">"];
for(let x = 0; x < invalidSyntax.length; x++){
    if(inputEmails.includes(invalidSyntax[x])){
    alert("Your email address(es) contain(s) invalid syntax");
    }
}
var result = inputEmails.split(';');

for(let i = 0; i<result.length; i++){
    
    if(result[i].indexOf('@') == -1 && result[i].length >= 2){
    alert("One of your email addresses is invalid");
    }else if(result[i].length >= 2 && result[i].indexOf('@aucklanduni.ac.nz') == -1 && result[i].indexOf('@auckland.ac.nz') == -1){
    alert("Reminder: You are sharing files outside of your organization");
    }
}

}




/*
************************************************************************
This function append file elements to each group page on the fly!!!!!!!!
************************************************************************
*/
function createFiles(targetFiles, targetDivID){
var targetLocation = document.getElementById(targetDivID);

for(let i = 0; i<targetFiles.length; i++){
    targetFile = document.getElementById(targetFiles[i]).cloneNode(true);
    if(targetLocation.childElementCount < targetFiles.length){
    targetLocation.appendChild(targetFile);
    }

    
}


}

