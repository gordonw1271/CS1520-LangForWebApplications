var timeout = 5000;
window.setTimeout(sendBackToMainScreen, timeout);
function sendBackToMainScreen() { window.location = "http://127.0.0.1:5000";
}