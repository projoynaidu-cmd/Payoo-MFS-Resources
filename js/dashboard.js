
const vaildPin = 1234; // this is the valid pin number


document.getElementById('addMoney-btn')// this will get the add money button
    .addEventListener('click', (e) => { // this will add an event listener

        const bankName = document.getElementById('bank-select').value.trim(); // this will get the bank name
        const accountNumber = document.getElementById('account-number').value; // this will get the account number
        const addMoney = Number(document.getElementById('addAmount').value); // this will get the amount to add
        const pinNumber = document.getElementById('pin').value.trim(); // this will get the pin number
        const balanceEl = document.getElementById('balance'); // this will get the balance

        //console.log(bankName, accountNumber, addMoney, pinNumber, balanceEl);

        // validation
        if (!bankName || !accountNumber || !pinNumber) {
            alert('Please fill all the fields!');
            return;
        }
        // account number length check (must be 10 digits)
        if (accountNumber.length !== 10) {
            alert('Account number must be 10 digits!');
            return;
        }

        // pin number length check (must be 4 digits)
        if (pinNumber.length !== 4) {
            alert('PIN must be 4 digits!');
            return;
        }

        // pin number check
        if (Number(pinNumber) !== vaildPin) {
            alert('Invalid PIN!');
            return;
        }

        // validation
        if (addMoney <= 0) {
            alert('Please enter a valid amount!');
            return;
        }

        // update balance 
        const currentBalance = Number(balanceEl.innerText); // this will get the current balance
        const newBalance = currentBalance + addMoney; // this will add the amount to the current balance
        balanceEl.innerText = newBalance; // this will update the balance
        alert('Money added successfully!');

    })


// Withdraw function
function withdrawMoney() {
    const agentNumber = document.getElementById('Agent_Number').value.trim();
    const withdrawAmount = Number(document.getElementById('withdrawAmount').value.trim());
    const pin = document.getElementById('withdrawPin').value.trim();
    const balanceEl = document.getElementById('balance');
    const currentBalance = Number(balanceEl.innerText);

    // 1️⃣ Check if fields are empty
    if (!agentNumber || !withdrawAmount || !pin) {
        alert("Please fill all the fields!");
        return;
    }

    // 2️⃣ Agent number must be exactly 10 digits
    if (agentNumber.length !== 10 || isNaN(agentNumber)) {
        alert("Agent number must be 10 digits!");
        return;
    }

    // 3️⃣ PIN must be exactly 4 digits
    if (pin.length !== 4 || isNaN(pin)) {
        alert("PIN must be 4 digits!");
        return;
    }

    // 4️⃣ Check PIN correctness
    if (Number(pin) !== validPin) {
        alert("Invalid PIN!");
        return;
    }

    // 5️⃣ Withdraw amount validation
    if (withdrawAmount <= 10) {
        alert("Please enter a valid amount greater than 10!");
        return;
    }
    // 3. Balance check
    if (withdrawAmount > currentBalance) {
        alert("Balance কম আছে!");
        return false;
    }
    // ✅ All validations passed, update balance
    const newBalance = currentBalance - withdrawAmount;
    balanceEl.innerText = newBalance;
    alert("Money withdrawn successfully!");
}

// Attach the function to the button
document.getElementById('withdraw-btn').addEventListener('click', withdrawMoney);


// Function to show form based on the clicked card
const showForm = (formToShow) => {
    // Hide all forms
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.classList.add('hidden'));

    // Show the selected form
    formToShow.classList.remove('hidden');
}

// Event listener setup for each card
const cards = document.querySelectorAll('.card');  // Select all cards
cards.forEach(card => {
    card.addEventListener('click', (e) => {

        // Remove active class from all cards
        cards.forEach(c => c.classList.remove('bg-gray-200', 'border-2', 'border-blue-500 '.trim()));
        // Add active class to the clicked card
        e.target.classList.add('border-2', 'border-blue-500');

        // Get the target form ID from the data-target attribute
        const targetForm = document.getElementById(e.target.closest('.card').dataset.target);
        // Show the corresponding form
        showForm(targetForm);
    });
    // console.log(card);
});

document.addEventListener('DOMContentLoaded', () => {
    // Show the default form (Add Money) when page loads
    const defaultForm = document.getElementById('add-money-form');
    showForm(defaultForm);  // Show the default form
    const defaultTab = document.querySelector('.card[data-target="add-money-form"]');
    defaultTab.classList.add('bg-gray-200'); // Highlight the default tab
})