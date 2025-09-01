const VALID_PIN = 1234;

// Generic field validator
function validateField(value, message) {
    if (!value) {
        alert(message);
        return false;
    }
    return true;
}

// PIN validator
function validatePin(pin) {
    if (pin.length !== 4 || isNaN(pin)) {
        alert("PIN must be 4 digits!");
        return false;
    }
    if (Number(pin) !== VALID_PIN) {
        alert("Invalid PIN!"); return false;
    }
    return true;
}

// Update balance and save to localStorage
function updateBalance(amount) {
    const balanceEl = document.getElementById("balance");
    let currentBalance = Number(balanceEl.innerText);
    currentBalance += amount;
    balanceEl.innerText = currentBalance;
    localStorage.setItem("balance", currentBalance);
    return currentBalance;
}

// Add transaction to history and latest
function addTransaction(type, amount) { // transaction object 
    const date = new Date().toLocaleString();
    const transaction = { type, amount, date }; // transaction object

    let transactions = JSON.parse(localStorage.getItem("transactions")) || []; // localStorage থেকে transactions নাও
    transactions.push(transaction); // history এর জন্য push, newest at last
    localStorage.setItem("transactions", JSON.stringify(transactions)); // Save to localStorage

    renderTransactions();
}

// Render all transactions and last 5 latest
function renderTransactions() {
    const historyTable = document.getElementById("transaction-history");
    const latestDiv = document.getElementById("latest-transaction-list");

    historyTable.innerHTML = "";
    latestDiv.innerHTML = "";

    let transactions = JSON.parse(localStorage.getItem("transactions")) || []; // localStorage থেকে transactions নাও

    // All transactions
    transactions.forEach(tx => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${tx.type}</td>
        <td>${tx.amount}</td>
        <td>${tx.date}</td>
        `;

        historyTable.appendChild(row);
        row.className = "transaction-item";
        row.classList.add(tx.type === "Add Money" ? "text-green-600" : "text-red-600");
    });

    // Last 5 latest
    transactions.slice(-5).reverse().forEach(tx => {
        const latestItem = document.createElement("div");
        latestItem.className = "latest-transaction border-b py-2";
        latestItem.innerHTML = `
        <p><strong>${tx.type}</strong></p>
        <p>Amount: ${tx.amount}</p>
        <p class="text-sm text-gray-500">${tx.date}</p>`;
        latestDiv.appendChild(latestItem);
    });
}

// Load balance and transactions on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedBalance = localStorage.getItem("balance") || 0;
    document.getElementById("balance").innerText = savedBalance;
    renderTransactions();
});

function addMoney() {
    const bankName = document.getElementById("bank-select").value.trim();
    const accountNumber = document.getElementById("account-number").value.trim();
    const amount = Number(document.getElementById("addAmount").value.trim());
    const pin = document.getElementById("pin").value.trim();

    if (!validateField(bankName, "Select bank!") ||
        !validateField(accountNumber, "Enter account number!") ||
        accountNumber.length !== 10 ||
        !validateField(amount, "Enter valid amount!") ||
        !validatePin(pin)) return;

    updateBalance(amount);
    addTransaction("Add Money", amount);
    alert("Money added successfully!");
}

function withdrawMoney() {
    const agentNumber = document.getElementById("Agent_Number").value.trim();
    const amount = Number(document.getElementById("withdrawAmount").value.trim());
    const pin = document.getElementById("withdrawPin").value.trim();
    const currentBalance = Number(document.getElementById("balance").innerText);

    if (!validateField(agentNumber, "Enter agent number!") ||
        agentNumber.length !== 10 ||
        amount <= 10 ||
        !validatePin(pin)) return;

    if (amount > currentBalance) { alert("Insufficient balance!"); return; }

    updateBalance(-amount);
    addTransaction("Withdraw", amount);
    alert("Money withdrawn successfully!");
}

function transferMoney() {
    const agentNumber = document.getElementById("user-account-number").value.trim();
    const amount = Number(document.getElementById("transferAmount").value.trim());
    const pin = document.getElementById("teansferPin").value.trim();
    const currentBalance = Number(document.getElementById("balance").innerText);

    if (!validateField(agentNumber, "Enter user account!") ||
        agentNumber.length !== 10 ||
        amount <= 10 ||
        !validatePin(pin)) return;

    if (amount > currentBalance) { alert("Insufficient balance!"); return; }

    updateBalance(-amount);
    addTransaction("Transfer", amount);
    alert("Money transferred successfully!");
}

function getBonus() {
    const coupon = document.getElementById("get-bonus-coupon").value.trim();
    const coupons = { BONUS100: 100, SAVE50: 50, EXTRA200: 200 };
    if (!validateField(coupon, "Enter coupon!")) return;

    if (!coupons[coupon]) { alert("Invalid coupon!"); return; }
    updateBalance(coupons[coupon]);
    addTransaction("Bonus", coupons[coupon]);
    alert(`🎉 You got ${coupons[coupon]} bonus!`);
}

function payBill() {
    const name = document.getElementById("pay-bill-name").value.trim();
    const number = document.getElementById("billing-account-number").value.trim();
    const amount = Number(document.getElementById("billing-amount").value.trim());
    const pin = document.getElementById("billing-pin").value.trim();

    if (!validateField(name, "Enter bill name!") ||
        !validateField(number, "Enter bill number!") ||
        amount <= 0 ||
        !validatePin(pin)) return;

    updateBalance(-amount);
    addTransaction("Bill", amount);
    alert("Bill paid successfully!");
}

// Event listeners
document.getElementById("addMoney-btn").addEventListener("click", addMoney);
document.getElementById("withdraw-btn").addEventListener("click", withdrawMoney);
document.getElementById("transfer-btn").addEventListener("click", transferMoney);
document.getElementById("get-bonus-btn").addEventListener("click", getBonus);
document.getElementById("pay-bill-btn").addEventListener("click", payBill);





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
        // alert(e.target.closest('.card').dataset.target);
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
    //  console.log(card);
});

