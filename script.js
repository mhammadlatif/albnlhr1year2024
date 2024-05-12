function searchCredentials() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    fetch('student_data.csv')
    .then(response => response.text())
    .then(data => {
        var rows = data.split('\n');
        rows.shift(); // Remove header row
        rows.forEach(row => {
            var columns = row.split(',');
            var phoneLast7Digits = columns[2].slice(-7); // Extract last 7 digits of phone number
            if (phoneLast7Digits === input) {
                resultsDiv.innerHTML += `
                    <p>Name: ${columns[1]}</p>
                    <p>Section: ${columns[3]}</p>
                    <p>Timings: ${columns[4]}</p>
                    <p>Murabbi Name: ${columns[5]}</p>
                    <hr>
                `;
            }
        });
    });
}
