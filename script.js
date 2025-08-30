// Global user object
const user = {
    mobile: '01709437619',
    password: '1234',
};

//console.log(mobile, password)


// login btn
const loginBtn = document.getElementById('login-btn')
    .addEventListener('click', (e) => {
        const mobile = document.getElementById('mobile-number').value.trim();
        const password = document.getElementById('pin-number').value.trim();

        if (mobile === user.mobile && password === user.password) {
            localStorage.setItem('user', JSON.stringify(user)) //this will store the data in the local storage
            console.log(localStorage.getItem('user')); // this will print the data in the local storage
            window.location.href = 'dashboard.html'; // this will redirect to the dashboard page
        } else {
            alert('Invalid credentials!'); // this will show an alert
        }

    })
// singup btn 
const signupBtn = document.getElementById('signup-btn')
    .addEventListener('click', function () {
        // window.location.href = 'signup.html'; // this will redirect to the signup page
        alert('Signup button clicked!');

    })

// forget btn 

document.getElementById('forgot-pin-btn')
    .addEventListener('click', function () {
        // window.location.href = 'forgot-pin.html'; // this will redirect to the forgot pin page
        //console.log('Forget PIN button clicked!');
        const forgotModal = document.getElementById('forgot_modal'); // this will get the forgot modal
        forgotModal.showModal(); // this will show the forgot modal

    })
//reset btn inside model 
document.getElementById('reset-btn')
    .addEventListener('click', function () {
        const mobileInput = document.getElementById('forgot-pin-input').value.trim(); // this will get the mobile input

        if (!mobileInput) {
            alert('Please enter your mobile number!');
            return;
        }
        if (mobileInput === user.mobile) {
            alert('Your pin number is ' + user.password); // this will show an alert
        } else {
            alert('Invalid mobile number!'); // this will show an alert
        }

    })