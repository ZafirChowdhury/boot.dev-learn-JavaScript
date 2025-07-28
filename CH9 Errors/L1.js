function createError(message) {
    return new Error(`Error: ${message}`);
}

console.log(createError("Connection to Textio lost").message);
