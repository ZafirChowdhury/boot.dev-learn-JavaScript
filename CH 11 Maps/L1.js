function addToPhonebook(phoneNumber, name, phoneBook) {
    const newPhoneBook = new Map(phoneBook);

    newPhoneBook.set(name, phoneNumber);

    return newPhoneBook;
}
