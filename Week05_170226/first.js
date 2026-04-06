// Complete Example: try + catch + throw + finally

function checkNumber(num) {
    try {
        console.log("Checking number...");
        // THROW (custom error)
        if (num < 0) {
            throw new Error("Number cannot be negative!");
        }
        if (num === 0) {
            throw new Error("Number cannot be zero!");
        }
        console.log("Valid number:", num);
    } catch (error) {
        // CATCH handles error
        console.log("Error caught:", error.message);
    } finally {
        // FINALLY always runs
        console.log("Execution finished.\n");
    }
}
// Calling function
checkNumber(10);   // valid
checkNumber(0);    // error
checkNumber(-5);   // error
