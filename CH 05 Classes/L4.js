class Contact {
    #_phoneNumber;
    constructor(name, phoneNumber) {
        this.name = name;
        this.#_phoneNumber = phoneNumber;
    }

    set phoneNumber(value) { 
        if (value.length !== 10) {
            throw new Error("Invalid phone number");
        }

        this.#_phoneNumber = value;
    }

    get phoneNumber() {
        return `(${this.#_phoneNumber.slice(0, 3)}) ${this.#_phoneNumber.slice(3, 6)}-${this.#_phoneNumber.slice(6)}`
    }

}

const c = new Contact("Zafir", "");

c.phoneNumber = "1234567890";

console.log(c.phoneNumber);
