function press(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let expr = document.getElementById("display").value;

        expr = expr.replace(/sin\(/g, "Math.sin(")
                   .replace(/cos\(/g, "Math.cos(")
                   .replace(/tan\(/g, "Math.tan(")
                   .replace(/sqrt\(/g, "Math.sqrt(")
                   .replace(/\^/g, "**");

        document.getElementById("display").value = eval(expr);
    }
    catch {
        document.getElementById("display").value = "Error";
    }
}



