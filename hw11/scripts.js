const customerArray =[];
while(true) {
    const getElement = prompt('Enter number for array (If you want to stop, click on cancel):');

    if (getElement === null) {
        break;
    }

    if (getElement.trim() === '') {
        alert("You entered not a number, please try again!");
    } else if (!isNaN(+getElement)) {
        customerArray.push(+getElement);
    } else {
        alert("You entered not a number, please try again!");
    }
}

if (customerArray.length === 0) {
    alert(`You didn't enter any elements.`);
} else {
    // User's array
    alert(`Your array: ${customerArray}`);
// Sort array
    customerArray.sort((a, b) => a - b);
    alert(`Sorted array: ${customerArray}`);
// Delete elements 2 through 4 inclusive
    if (customerArray.length < 4) {
        alert(`Elements in the array are less than 41`);
    } else {
        const deletedElements = customerArray.splice(1,3);
        alert(`Deleted elements: ${deletedElements}
Result: ${customerArray}`);
    }
}