document.getElementById('careersForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    
    // Validate Required Fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const position = document.getElementById('position').value;

    if (!name || !email || !phone || !position) {
        alert('Please fill in all required fields');
        return;
    }

    // Simulate Submitting State
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

    setTimeout(() => {
        alert('Application submitted successfully! We\'ll review and get back to you.');
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Application';
        this.reset();
    }, 1500);
});