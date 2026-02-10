function calculateResult() {

    const name = document.getElementById("name").value.trim();
    const m1 = Number(document.getElementById("m1").value);
    const m2 = Number(document.getElementById("m2").value);
    const m3 = Number(document.getElementById("m3").value);

    if (!name || m1 < 0 || m2 < 0 || m3 < 0 || m1 > 100 || m2 > 100 || m3 > 100) {
        alert("Please enter valid details (marks between 0–100)");
        return;
    }

    const total = m1 + m2 + m3;
    const percentage = (total / 300) * 100;

    let grade, statusClass, statusText;

    if (percentage >= 50) {
        statusText = "PASS";
        statusClass = "pass";
    } else {
        statusText = "FAIL";
        statusClass = "fail";
    }

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 50) grade = "C";
    else grade = "F";

    const resultBox = document.getElementById("result");
    resultBox.className = `result-box ${statusClass}`;
    resultBox.style.display = "block";

    resultBox.innerHTML = `
        <strong>Student:</strong> ${name}<br>
        <strong>Total:</strong> ${total} / 300<br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}%<br>
        <strong>Grade:</strong> ${grade}<br>
        <span class="badge">${statusText}</span>
    `;
}
