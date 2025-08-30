
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
        if(!bankName || !accountNumber || !pinNumber){
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
        if (pinNumber !== vaildPin) {
            alert('Invalid PIN!');
            return;
        }

        // validation
        if(addMoney <= 0){
            alert('Please enter a valid amount!');
            return;
        }

        // update balance 
        const currentBalance = Number(balanceEl.innerText); // this will get the current balance
        const newBalance = currentBalance + addMoney; // this will add the amount to the current balance
        balanceEl.innerText = newBalance; // this will update the balance
        alert('Money added successfully!');
        
    })