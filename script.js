function getResult() {
    // Declare variables
    let fet, bet, data, rct, tot, avg, grd;

    // Data collection
    fet = +document.getElementById('frt').value;
    bet = +document.getElementById('bck').value;
    data = +document.getElementById('db').value;
    rct = +document.getElementById('react').value;

    // Calculation
    tot = fet + bet + data + rct;
    avg = tot / 4;

    // Pass or fail
    if (fet > 39 && bet > 39 && data > 39 && rct > 39) {
        // Pass
        grd = avg >= 90 ? "A+" : avg >= 80 ? "A" : avg >= 70 ? "B+" : avg >= 60 ? "B" : avg >= 50 ? "C" : "D";
    } else {
        grd = "Fail";
    }
    //Displaying result
    document.getElementById('total').innerText = "Total Marks: " + tot;
    document.getElementById('average').innerText = "Average Marks: " + avg.toFixed(2);  // Display with 2 decimal places
    document.getElementById('grade').innerText = "Grade: " + grd;
}

function resetForm() {
    // Clear all input fields
    document.getElementById('name').value = '';
    document.getElementById('enroll').value = '';
    document.getElementById('frt').value = '';
    document.getElementById('bck').value = '';
    document.getElementById('db').value = '';
    document.getElementById('react').value = '';

    // Clear all output fields
    document.getElementById('total').innerText = '';
    document.getElementById('average').innerText = '';
    document.getElementById('grade').innerText = '';
}
// Attach resetForm function to the reset button
document.getElementById('resetButton').onclick = resetForm;