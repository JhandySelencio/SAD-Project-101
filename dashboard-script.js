const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");

const buttonA = document.getElementById("button-a");
const displayA = document.getElementById("dashboard-page");
 
const buttonB = document.getElementById("button-b");
const displayB = document.getElementById("ticket-page");

const buttonC = document.getElementById("button-c");
const displayC = document.getElementById("account-page");

const createTicket = document.getElementById("create-button");
const displayCreateTicket = document.getElementById("create-ticket-ui");

const showTicket = document.getElementById("display-ticket");
const headingText = document.getElementById("heading");

const submitBTN = document.getElementById("submit-button");
const cancelBTN = document.getElementById("cancel-button");
const closeBTN = document.getElementById("close-button");
const showTicketBTN = document.getElementById("show-ticket-btn");

const displayTicketBox = document.getElementById("show-to-dashboard");
const displayToDefaultBox = document.getElementById("default-display");
const displayToMainBox = document.getElementById("main-display-ticket");
const headingNoticeText = document.getElementById("notice-text");

const displayType = document.getElementById("displayType");
const displayPlate = document.getElementById("displayPlate");
const displayModel = document.getElementById("displayModel");

const typeInput = document.getElementById("type");
const plateInput = document.getElementById("plate");
const modelInput = document.getElementById("model");

const submitBTN2 = document.getElementById("submit-vehicle-info");
const updateBTN2 = document.getElementById("update-vehicle-info");
const cancelBTN2 = document.getElementById("cancel-vehicle-info");

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

buttonA.addEventListener("click", () => {
    displayA.style.display = "block";
    displayB.style.display = "none";
    displayC.style.display = "none";
});

buttonB.addEventListener("click", () => {
    displayA.style.display = "none";
    displayB.style.display = "block";
    displayC.style.display = "none";
});

buttonC.addEventListener("click", () => {
    displayA.style.display = "none";
    displayB.style.display = "none";
    displayC.style.display = "block";
});

createTicket.addEventListener("click", () => {
    headingText.textContent = "Creating Ticket";
    displayCreateTicket.style.display = "block";
    submitBTN.style.display = "block";
    cancelBTN.style.display = "block";
    closeBTN.style.display = "none";
});

cancelBTN.addEventListener("click", () => {
    displayCreateTicket.style.display = "none";
});

submitBTN.addEventListener("click", () =>{
    displayCreateTicket.style.display = "none";
    showTicket.style.display = "block"; 
    headingNoticeText.textContent = "";
    createTicket.disabled = true;
});

showTicketBTN.addEventListener("click", () =>{
    headingText.textContent = "Ticket #01";
    displayCreateTicket.style.display = "block";
    submitBTN.style.display = "none"; 
    cancelBTN.style.display = "none"; 
    closeBTN.style.display = "block";
});

closeBTN.addEventListener("click", () =>{
    displayCreateTicket.style.display = "none";
});

typeInput.addEventListener("input", () =>{
    displayType.textContent = typeInput.value;
});
plateInput.addEventListener("input", () =>{
    displayPlate.textContent = plateInput.value;
});
modelInput.addEventListener("input", () =>{
    displayModel.textContent = modelInput.value;
});

submitBTN2.addEventListener("click", () =>{
    typeInput.style.display = "none";
    plateInput.style.display = "none";
    modelInput.style.display = "none";

    displayType.style.display = "block";
    displayPlate.style.display = "block";
    displayModel.style.display = "block";

    submitBTN2.style.display = "none";
    updateBTN2.style.display = "block";
    cancelBTN2.style.display = "none";
});

updateBTN2.addEventListener("click", () =>{
    updateBTN2.style.display = "none";
    submitBTN2.style.display = "block";
    cancelBTN2.style.display = "block";

    typeInput.style.display = "block";
    plateInput.style.display = "block";
    modelInput.style.display = "block";

    displayType.style.display = "none";
    displayPlate.style.display = "none";
    displayModel.style.display = "none";
});

cancelBTN2.addEventListener("click", () =>{
    updateBTN2.style.display = "block";
    submitBTN2.style.display = "none";
    cancelBTN2.style.display = "none";

    typeInput.style.display = "none";
    plateInput.style.display = "none";
    modelInput.style.display = "none";

    displayType.style.display = "block";
    displayPlate.style.display = "block";
    displayModel.style.display = "block";
});
