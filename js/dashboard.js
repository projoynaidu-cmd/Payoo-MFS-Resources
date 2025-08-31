
const vaildPin = 1234; // this is the valid pin number

// Event listener setup for the add money button in add money form
document.getElementById('addMoney-btn')// this will get the add money button
    .addEventListener('click', (e) => { // this will add an event listener


        const bankName = document.getElementById('bank-select').value.trim(); // this will get the bank name
        const accountNumber = document.getElementById('account-number').value; // this will get the account number
        const addMoney = Number(document.getElementById('addAmount').value); // this will get the amount to add
        const pinNumber = document.getElementById('pin').value.trim(); // this will get the pin number
        const balanceEl = document.getElementById('balance'); // this will get the balance

        //console.log(bankName, accountNumber, addMoney, pinNumber, balanceEl);

        // validation
        if (!bankName || !accountNumber || !pinNumber) { // this will check if the bank name, account number and pin number are empty
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
        addTransaction("Add Money", addMoney);

    })


// Withdraw function setup in withdraw money form
function withdrawMoney() {
    const agentNumber = document.getElementById('Agent_Number').value.trim();
    const withdrawAmount = Number(document.getElementById('withdrawAmount').value.trim());
    const pin = document.getElementById('withdrawPin').value.trim();
    const balanceEl = document.getElementById('balance');
    const currentBalance = Number(balanceEl.innerText);

    const validPin = 1234; // Example valid PIN


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
    addTransaction("Withdraw", withdrawAmount);
}

// Attach the function to the button
document.getElementById('withdraw-btn').addEventListener('click', withdrawMoney);

// Transfer function
function transferMoney() {
    const agentNumber = document.getElementById('user-account-number').value.trim();
    const transferAmount = Number(document.getElementById('transferAmount').value.trim());
    const pin = document.getElementById('teansferPin').value.trim();
    const balanceEl = document.getElementById('balance');
    const currentBalance = Number(balanceEl.innerText);
    const vaildPin = 1234;


    // 1️⃣ Check if fields are empty
    if (!agentNumber || !transferAmount || !pin) {
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
    if (Number(pin) !== vaildPin) {
        alert("Invalid PIN!");
        return;
    }

    // 5️⃣ Withdraw amount validation
    if (transferAmount <= 10) {
        alert("Please enter a valid amount greater than 10!");
        return;
    }
    // 3. Balance check
    if (transferAmount > currentBalance) {
        alert("Balance কম আছে!");
        return false;
    }
    // ✅ All validations passed, update balance
    const newBalance = currentBalance - transferAmount;
    balanceEl.innerText = newBalance;
    alert("Money transferred successfully!");
    addTransaction("Transfer", transferAmount);
}

// Attach the function to the button
document.getElementById('transfer-btn').addEventListener('click', transferMoney);



// get bonus function
// get bonus function
function getBonus() {
    const getBonusCoupon = document.getElementById('get-bonus-coupon').value.trim();
    const balanceEl = document.getElementById('balance');
    let currentBalance = Number(balanceEl.innerText);

    // Predefined coupons
    const coupons = {
        "BONUS100": 100,
        "SAVE50": 50,
        "EXTRA200": 200
    };

    // 1️⃣ Check if fields are empty
    if (!getBonusCoupon) {
        alert("Please enter a coupon code!");
        return;
    }

    // 2️⃣ Check if coupon is valid
    if (coupons[getBonusCoupon]) {
        currentBalance += coupons[getBonusCoupon];
        balanceEl.innerText = currentBalance;
        alert(`🎉 Coupon applied! You got ${coupons[getBonusCoupon]} bonus.`);
    } else {
        alert("❌ Invalid coupon! Please try again.");
    }
    addTransaction("Bonus", coupons[getBonusCoupon]);
}


// Attach the function to the button

document.getElementById('get-bonus-btn').addEventListener('click', getBonus);






function payBill() {
    const billName = document.getElementById('pay-bill-name').value.trim();
    const billNumber = document.getElementById('billing-account-number').value.trim();
    const billAmount = Number(document.getElementById('billing-amount').value.trim());
    const pin = Number(document.getElementById('billing-pin').value.trim());
    const balanceEl = document.getElementById('balance');
    const currentBalance = Number(balanceEl.innerText);

    console.log(billName, billNumber, billAmount, pin);
    const validPin = 1234; // Example valid PIN


    if (billName && billNumber && billAmount && pin) {
        if (Number(pin) === validPin) {
            const newBalance = currentBalance - billAmount;
            balanceEl.innerText = newBalance;
            alert('Bill paid successfully!');
        } else {
            alert('Invalid PIN!');
        }
    } else {
        alert('Please fill all the fields!');
    }

    addTransaction("Bill", billAmount);

}

document.getElementById('pay-bill-btn').addEventListener('click', payBill);





// 📝 Transaction add funcation learning code 
/**
 function addTransaction(type, amount) {
     const historyTable = document.getElementById("transaction-history");
     const row = document.createElement("tr");
     // আজকের তারিখ নাও
     const date = new Date().toLocaleString();

     row.innerHTML = `
         <td>${type}</td>
         <td>${amount}</td>
         <td>${date}</td>
     `;
         historyTable.prepend(row); // নতুনটা উপরে দেখানোর জন্য prepend ব্যবহার করা হলো

     const latestDiv = document.getElementById("latest-transaction-list");
     const latestItem = document.createElement("div");
     latestItem.innerHTML =`
         <div class="latest-transaction border-b py-2">
            <p><strong>${type}</strong></p>
             <p>Amount: ${amount}</p>
             <p class="text-sm text-gray-500">${date}</p>
         </div>
     `;
 latestDiv.prepend(latestItem);

 const latestItems = latestDiv.querySelectorAll(".latest-transaction");
 if (latestItems.length > 5) {
     latestItems[latestItems.length - 1].remove();


 }

}

 */


// 📝 transation history function ai code 
function addTransaction(type, amount) {
    const date = new Date().toLocaleString();
    const transaction = { type, amount, date }; // transaction object

    // localStorage থেকে transactions নাও
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    // নতুন transaction add করো
    transactions.push(transaction); // history এর জন্য push, newest at last

    // Save to localStorage
    localStorage.setItem("transactions", JSON.stringify(transactions));

    // DOM update
    const historyTable = document.getElementById("transaction-history");
    const latestDiv = document.getElementById("latest-transaction-list");

    // Clear current content
    historyTable.innerHTML = "";
    latestDiv.innerHTML = "";

    // ১️⃣ Transaction History → সব দেখাবে
    transactions.forEach(tx => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${tx.type}</td>
            <td>${tx.amount}</td>
            <td>${tx.date}</td>
        `;
        historyTable.appendChild(row);
    });

    // ২️⃣ Latest Transactions → শুধু 5টা দেখাবে (নতুনগুলো উপরে)
    transactions.slice(-5).reverse().forEach(tx => {
        const latestItem = document.createElement("div");
        latestItem.classList.add("latest-transaction", "border-b", "py-2");
        latestItem.innerHTML = `
            <p><strong>${tx.type}</strong></p>
            <p>Amount: ${tx.amount}</p>
            <p class="text-sm text-gray-500">${tx.date}</p>
        `;
        latestDiv.appendChild(latestItem);
    });
}

// Page load এ old transactions দেখানোর জন্য
document.addEventListener("DOMContentLoaded", () => {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.forEach(tx => addTransaction(tx.type, tx.amount));
});









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
        const latestEl = document.getElementById('latest-transaction-form');
        latestEl.classList.add('hidden');
    });
    // console.log(card);
});

