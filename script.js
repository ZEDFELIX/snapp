document.addEventListener('DOMContentLoaded', () => {
    const profileButtons = document.querySelectorAll('.talent-card button');

    profileButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Profile feature coming soon!');
        });
    });

    const signUpForm = document.querySelector('.form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = document.getElementById('signup-username');
            const email = document.getElementById('signup-email');
            const password = document.getElementById('signup-password');
            const confirm = document.getElementById('signup-confirm-password');

            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!username.value.trim()) {
                alert('Please enter a username.');
                return;
            }
            if (!emailPattern.test(email.value.trim())) {
                alert('Please enter a valid email address.');
                return;
            }
            if (password.value.length < 6) {
                alert('Password must be at least 6 characters.');
                return;
            }
            if (password.value !== confirm.value) {
                alert('Passwords do not match.');
                return;
            }

            signUpForm.reset();
            alert('Account created successfully! Welcome to SnapNet.');
        });
    }
});