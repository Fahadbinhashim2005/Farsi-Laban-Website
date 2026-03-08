document.getElementById('franchiseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    
    // Simulate Submission
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

    setTimeout(() => {
        alert('Franchise enquiry submitted successfully! We\'ll contact you soon.');
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Franchise Enquiry';
        this.reset();
    }, 1500);
});