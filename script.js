function openSignIn() {
    document.getElementById('signInModal').style.display = 'flex';
}

function closeSignIn() {
    document.getElementById('signInModal').style.display = 'none';
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

// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById('signInModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
