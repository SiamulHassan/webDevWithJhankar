

// function firstBtn() {
//     console.log('hellow !!');
// }

// document.getElementById('first_btn').addEventListener('click', firstBtn);
// let sayHellow = document.getElementById('first_btn');
// sayHellow.addEventListener('click', firstBtn);

// document.getElementById('first_btn').addEventListener('click', function () {
//     console.log('someone clicked...');
// })
// function aFunction() {
//     console.log('second btn clicked...');
// }

// starting bank project

const login = document.getElementById('login_btn');
login.addEventListener('click', function () {
    const takeFullLoginForm = document.getElementById('login_form');
    takeFullLoginForm.style.display = 'none';
    const transactionArea = document.getElementById('transaction_area');
    transactionArea.style.display = 'block';

    //  deposit area 
    const deposit = document.getElementById('Deposit');
    deposit.addEventListener('click', function () {

        if (document.getElementById('deposit_money').value == 0) {
            alert('enter valid money');
            console.log(typeof (document.getElementById('deposit_money').value));
        }
        else {
            const depositMoney = document.getElementById('deposit_money').value;
            const convertDepositMoney = parseFloat(depositMoney);

            const previousDeposit = document.getElementById('previous_deposit').innerText;
            const convertPreviousDeposit = parseFloat(previousDeposit);
            const total = convertPreviousDeposit + convertDepositMoney;
            document.getElementById('previous_deposit').innerText = total;

            document.getElementById('deposit_money').value = '';
            const mainBalance = document.getElementById('previous_balance').innerText;
            const convertedMainBalance = parseFloat(mainBalance);
            const currentMainBalance = convertedMainBalance + convertDepositMoney;
            document.getElementById('previous_balance').innerText = currentMainBalance;
        }



    })
    // withdraw area
    const withDrawBtn = document.getElementById('withdrawBtn');
    withDrawBtn.addEventListener('click', function () {
        const withdrawInput = document.getElementById('withdrawInput').value;
        const convertWithdrawInput = parseFloat(withdrawInput);
        const withdrawH2 = document.getElementById('withdrawH2').innerText;
        const convertWithdrawH2 = parseFloat(withdrawH2);
        const totalWithdraw = convertWithdrawInput + convertWithdrawH2;
        document.getElementById('withdrawH2').innerText = totalWithdraw;
        document.getElementById('withdrawInput').value = '';
        const mainBalance = document.getElementById('previous_balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        const withdrawMainBalance = convertedMainBalance - convertWithdrawInput;
        document.getElementById('previous_balance').innerText = withdrawMainBalance;
    })

});


