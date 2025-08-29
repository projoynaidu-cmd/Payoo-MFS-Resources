// console.log('Hello, World!');//this is a comment


document.getElementById('login-btn')
    .addEventListener('click', (e) => {
        //  console.log('Login button clicked!');
        const mobile = document.getElementById('mobile-number').value;
        const password = document.getElementById('pin-number').value;
        //console.log(mobile, password)
        const user = {
            mobile: '01709437619',
            password: '1234',
        }
        if (mobile === user.mobile && password === user.password) {
            localStorage.setItem('user', JSON.stringify(user)) //this will store the data in the local storage
            console.log(localStorage.getItem('user')); // this will print the data in the local storage
            // window.location.href = 'dashboard.html'; // this will redirect to the dashboard page
        } else {
            alert('Invalid credentials!'); // this will show an alert
        }

    })


    // forget btn 