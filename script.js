/* =========================
   MEDICARE AI
   MAIN JAVASCRIPT
========================= */


/* =========================
   SCREEN NAVIGATION
========================= */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }
}


/* =========================
   SPLASH SCREEN
========================= */

window.addEventListener("load", function() {

    showScreen("splash");

    setTimeout(function() {
        showScreen("login");
    }, 2500);

});


/* =========================
   LOGIN
========================= */

function loginUser() {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {
        alert("Please enter your email and password. ⚠️");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address. ⚠️");
        return;
    }

    alert("Login successful! 🎉");

    showScreen("home");
}


/* =========================
   SIGN UP
========================= */

function createAccount() {

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields. ⚠️");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address. ⚠️");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters. ⚠️");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match. ⚠️");
        return;
    }

    alert("Account created successfully! 🎉");

    document.getElementById("loginEmail").value = email;

    document.getElementById("loginPassword").value = "";

    document.getElementById("signupEmail").value = "";

    document.getElementById("signupPassword").value = "";

    document.getElementById("confirmPassword").value = "";

    showScreen("login");
}


/* =========================
   AI ASSISTANT
========================= */

function sendMessage() {

    const input = document.getElementById("chatMessage");
    const chatMessages = document.getElementById("chatMessages");

    if (!input || !chatMessages) {
        return;
    }

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const userMessage = document.createElement("div");

    userMessage.className = "user-bubble";

    userMessage.textContent = message;

    chatMessages.appendChild(userMessage);

    input.value = "";

    setTimeout(function() {

        const aiMessage = document.createElement("div");

        aiMessage.className = "ai-bubble";

        aiMessage.textContent = getAIResponse(message);

        chatMessages.appendChild(aiMessage);

        chatMessages.scrollTop = chatMessages.scrollHeight;

    }, 600);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


/* =========================
   ENTER KEY
========================= */

function handleChatKey(event) {

    if (event.key === "Enter") {
        sendMessage();
    }
}


/* =========================
   AI RESPONSE
========================= */

function getAIResponse(message) {

    const text = message.toLowerCase();

    if (text.includes("headache") || text.includes("head pain")) {

        return "For a headache, try to rest, drink enough water, and avoid excessive screen time. If the pain is severe or persistent, please consult a doctor.";
    }

    if (text.includes("fever") || text.includes("temperature")) {

        return "For fever, stay hydrated and get enough rest. If the fever is high or continues, please consult a healthcare professional.";
    }

    if (text.includes("cold") || text.includes("cough")) {

        return "For a cold or cough, rest well, drink warm fluids, and stay hydrated. If symptoms become severe, consult a doctor.";
    }

    if (text.includes("stomach") || text.includes("abdominal")) {

        return "For mild stomach discomfort, stay hydrated and eat light meals. If you have severe or persistent pain, consult a doctor.";
    }

    if (text.includes("sleep") || text.includes("insomnia")) {

        return "Try maintaining a regular sleep schedule, reducing screen time before bed, and keeping your room comfortable.";
    }

    if (text.includes("stress") || text.includes("anxiety")) {

        return "Try taking slow breaths, getting enough rest, and taking short breaks. If you feel overwhelmed, consider talking to a healthcare professional.";
    }

    if (text.includes("medicine") || text.includes("tablet")) {

        return "Please avoid taking medicines without proper medical advice. A doctor or pharmacist can recommend the appropriate treatment.";
    }

    if (text.includes("doctor") || text.includes("hospital")) {

        return "You can use the Find Doctors section to explore available doctors and book an appointment.";
    }

    return "I understand your concern. Please provide more details about your symptoms, or consider consulting a qualified healthcare professional.";
}


/* =========================
   DOCTOR SEARCH
========================= */

function searchDoctors() {

    const input = document.querySelector(".doctor-search");

    if (!input) {
        return;
    }

    const searchValue = input.value.toLowerCase().trim();

    const doctorCards = document.querySelectorAll(".doctor-card");

    doctorCards.forEach(function(card) {

        const doctorText = card.innerText.toLowerCase();

        if (doctorText.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


/* =========================
   SELECT DOCTOR
========================= */

function selectDoctor(doctorName) {

    const selectedDoctor = document.getElementById("selectedDoctor");

    if (selectedDoctor) {
        selectedDoctor.textContent = doctorName;
    }

    showScreen("appointment");
}


/* =========================
   CONFIRM APPOINTMENT
========================= */

function confirmAppointment() {

    const doctorElement = document.getElementById("selectedDoctor");

    let doctorName = "Dr. Sarah Johnson";

    if (doctorElement) {
        doctorName = doctorElement.textContent;
    }

    alert(
        "Appointment confirmed successfully! ✅\n\n" +
        doctorName +
        "\n10:30 AM"
    );

    showScreen("home");
}


/* =========================
   MEDICAL REPORTS
========================= */

function viewReport(reportName) {

    alert(
        reportName +
        "\n\nReport opened successfully! 📋"
    );
}


/* =========================
   SETTINGS
========================= */

function openSettings() {

    alert(
        "Settings opened ⚙️\n\n" +
        "Your application settings are available here."
    );
}


/* =========================
   NOTIFICATIONS
========================= */

function openNotifications() {

    alert(
        "Notifications 🔔\n\n" +
        "You have no new notifications."
    );
}


/* =========================
   PRIVACY
========================= */

function openPrivacy() {

    alert(
        "Privacy & Security 🔒\n\n" +
        "Your personal information is protected."
    );
}


/* =========================
   EDIT PROFILE
========================= */

function editProfile() {

    const newName = prompt(
        "Enter your name:",
        "User"
    );

    if (newName === null) {
        return;
    }

    if (newName.trim() === "") {

        alert("Name cannot be empty. ⚠️");

        return;
    }

    const profileName =
        document.querySelector(".profile-card strong");

    if (profileName) {

        profileName.textContent =
            newName.trim();
    }

    alert("Profile updated successfully! 👤");
}


/* =========================
   LOGOUT
========================= */

function logoutUser() {

    alert("Logged out successfully! 👋");

    showScreen("login");
}