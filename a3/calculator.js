let x, y; // Make x and y accessible to all functions

// Define the table style
function defineTbStyle() {
    var style = document.createElement('style');  // Create a style element

    // Set the style of the table
    style.innerHTML = `
        table {
            border: 1px solid black;
            width: 25%;
            table-layout: fixed;
            text-align: center;
            background-color: orange;
        }
        
        th, td {
            border: 1px solid black;
            padding: auto;
        }
        
        th { 
            background-color: #87CEEB;
        }
        
        .colorOp {
            background-color: #E4F6F8;
        }
        
        td {
            background-color: #cefad0;
        }
    `;

    // Append the style to the head of the calculator
    document.head.appendChild(style);
}

// Handle the calculation of the numbers x and y based on the operator
function handleCalcuation(x, op, y) {
    // Convert x and y to a float
    x = parseFloat(x);
    y = parseFloat(y);

    // Check if the inputs for x and y are a number
    if ((isNaN(x) && !isFinite(x)) || (isNaN(y) && !isFinite(y))) return "wrong input number";

    // Use a switch statement to perform the calculation based on the operator
    switch (op) {
        // Add the numbers
        case "+": return x + y;  // Add x and y

        // Subtract the numbers
        case "-": return x - y;  // Subtract y from x

        // Multiply the numbers
        case "*": return x * y;  // Multiply x by y

        // Divide the numbers
        case "/":
            if (y === 0) {
                // Show an error message if the user tries to divide by zero
                return "divide by zero error";
            }
            else {
                return x / y;  // Divide x by y
            }
        
        // Find the remainder of the numbers
        case "%": 
            if (y === 0) {
                // Show an error message if the user tries to mod by zero
                return "modulus by zero error";
            }
            else return x % y;  // Return the remainder of x divided by y
        default:
            // Show an error message if the operator is invalid
            return "computation error";
    }
}

// Summarize the results in a table using the min, max, avg, and total
function summarizeTable(resArr) {
    defineTbStyle();
    let avg, approxAvg, res, min, max, total;
    
    // Filter out the invalid results
    res = resArr.filter(result => typeof result === "number");

    // Calculate the min, max, and total
    min = Math.min(...res);
    max = Math.max(...res);
    total = res.reduce((num1, num2) => num1 + num2, 0);

    // Calculate the average
    if (!res.length) avg = NaN;  // Set avg to NaN if there are no valid results
    else avg = total / res.length;

    // Round the average based on its value
    if (avg >= 100) approxAvg = Math.round(avg);
    else if (Number.isInteger(avg)) approxAvg = avg;
    else approxAvg = avg.toFixed(2);

    // Display the summary table
    document.write("<table>");
    document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + approxAvg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}

// Build the table to display the results
function buildTable() {
    let resArr = []; // Create an array to store the results
    defineTbStyle(); // Call the function to define the table style

    // Create a table to display the results
    document.write("<table>");

    // Display the table headers
    document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

    // Get the numbers and operator from the user until they choose to stop
    while (true) {
        x = prompt("Enter a number, x: ");
        const op = prompt("Enter an operator (+, -, *, /, %): ");
        y = prompt("Enter another number, y: ");
        const res = handleCalcuation(x, op, y);

        resArr.push(res); // Add the result to the array
        document.write("<tr><td>" + x + "</td><td class='colorOp'>" + op + "</td><td>" + y + "</td><td>" + res + "</td></tr>");

        // Ask the user if they want to continue
        const continueInput = confirm("Do you want to continue (ok = yes, cancel = no)?");
        
        // Exit if the user clicks "Cancel"
        if (!continueInput) break;
    }
    document.write("</table>");
    
    // Summarize the results in a table
    summarizeTable(resArr);
}

buildTable();