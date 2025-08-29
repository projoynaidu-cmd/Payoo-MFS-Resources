// Global user object
const user = {
    mobile: '01709437619',
    password: '1234',
};

const loginBtn = document.getElementById('login-btn')
    .addEventListener('click', (e) => {
        //  console.log('Login button clicked!');
        const mobile = document.getElementById('mobile-number').value;
        const password = document.getElementById('pin-number').value;
        //console.log(mobile, password)

        if (mobile === user.mobile && password === user.password) {
            localStorage.setItem('user', JSON.stringify(user)) //this will store the data in the local storage
            console.log(localStorage.getItem('user')); // this will print the data in the local storage
            // window.location.href = 'dashboard.html'; // this will redirect to the dashboard page
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

        const resetBtn = document.getElementById('reset-btn'); // this will get the reset button
        resetBtn.addEventListener('click', function () {
            // explain how to get code/password from the user
            alert('Your pin number is ' + user.password); // this will show an alert
        })
    })
