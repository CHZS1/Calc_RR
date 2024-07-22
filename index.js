document.getElementById('calc').addEventListener('click', calculateResults);

function calculateResults() {
    const credit = parseInt(document.getElementById('credit').value);
    const months = parseInt(document.getElementById('months').value);
    
    if (credit < 50 || credit > 10000000 || isNaN(credit)) {
        alert('Введите корректную сумму кредита (от 50 до 10,000,000)');
        return;
    }
    
    // Рассчет комиссии
    const commission = credit < 50000 ? 9 : 5;
    document.getElementById('commission').value = commission;

    let commissionPerc = commission/100

    // Рассчет суммы, которая поступит на счет клиента
    let clientSum = credit - credit*commissionPerc;
    document.getElementById('clientSum').value = clientSum;

    // Определение среднего банковского процента по сроку
    const bankRates = {
        6: 7,
        12: 12,
        18: 16,
        24: 20,
        36: 26
    };
    const averBankPerc = bankRates[months];
    document.getElementById('averBankPerc').value = averBankPerc;

    // Рассчет средней переплаты по кредиту
    const averCredOverPay = credit + credit * (averBankPerc / 100.0);
    document.getElementById('averCredOverPay').value = averCredOverPay.toFixed(2);

    // Рассчет среднего ежемесячного платежа
    const averMonthPay = averCredOverPay / months;
    document.getElementById('averMonthPay').value = averMonthPay.toFixed(2);
}
