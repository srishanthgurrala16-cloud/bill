document.addEventListener('DOMContentLoaded', function () {
    const unitsInput = document.getElementById('units');
    const calculateBtn = document.getElementById('calculate');
    const result = document.getElementById('result');

    function calc() {
        const u = Number(unitsInput.value);
        if (!Number.isFinite(u) || u < 0) {
            alert('Please enter a valid non-negative number of units.');
            unitsInput.focus();
            return;
        }

        let bill = 0;
        if (u <= 100) bill = u * 5;
        else if (u <= 200) bill = 100 * 5 + (u - 100) * 7;
        else bill = 100 * 5 + 100 * 7 + (u - 200) * 10;

        result.textContent = 'Your electricity bill is: ₹' + bill.toFixed(2);
    }

    calculateBtn.addEventListener('click', calc);
});
