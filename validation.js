document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إرسال الـ Form

    let isValid = true;

    // مسح رسائل الخطأ القديمة
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = '');

    // 1. Validation Name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    // 2. Validation Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // 3. Validation Password (على الأقل 8 أحرف)
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passError').innerText = 'Password must be at least 8 characters.';
        isValid = false;
    }

    // 4. Validation Confirm Password (تطابق كلمتي المرور)
    const confirmPass = document.getElementById('confirmPass').value;
    if (confirmPass !== password || confirmPass === '') {
        document.getElementById('confirmError').innerText = 'Passwords do not match.';
        isValid = false;
    }

    // 5. Validation Age
    const age = document.getElementById('age').value;
    if (age === '' || age <= 0) {
        document.getElementById('ageError').innerText = 'Please enter a valid age.';
        isValid = false;
    }

    // في حالة صحة جميع البيانات
    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});