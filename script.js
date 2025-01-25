function openSignIn() {
    document.getElementById('signInModal').style.display = 'flex';
    document.getElementById('signUpModal').style.display = 'none';
}

function closeSignIn() {
    document.getElementById('signInModal').style.display = 'none';
}

function openSignUp() {
    document.getElementById('signUpModal').style.display = 'flex';
    document.getElementById('signInModal').style.display = 'none';
}

function closeSignUp() {
    document.getElementById('signUpModal').style.display = 'none';
}

function toggleUserType(type) {
    if (type === 'patient') {
        document.getElementById('patientBtn').classList.add('active');
        document.getElementById('providerBtn').classList.remove('active');
    } else {
        document.getElementById('providerBtn').classList.add('active');
        document.getElementById('patientBtn').classList.remove('active');
    }
}

function toggleSignUpUserType(type) {
    if (type === 'patient') {
        document.getElementById('patientSignUpBtn').classList.add('active');
        document.getElementById('providerSignUpBtn').classList.remove('active');
    } else {
        document.getElementById('providerSignUpBtn').classList.add('active');
        document.getElementById('patientSignUpBtn').classList.remove('active');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    let signInModal = document.getElementById('signInModal');
    let signUpModal = document.getElementById('signUpModal');
    
    if (event.target === signInModal) {
        signInModal.style.display = "none";
    }
    
    if (event.target === signUpModal) {
        signUpModal.style.display = "none";
    }
};
