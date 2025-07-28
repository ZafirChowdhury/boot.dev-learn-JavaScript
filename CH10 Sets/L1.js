function deduplicateEmails(emails) {
    const emailsSet = new Set(emails);
    return [...emailsSet];
}

console.log(deduplicateEmails([
        "wayne.lagner@dev.boot",
        "heckmann@what.de",
        "heckmann@what.de",
        "a.liar@pants.fire",
      ]));
