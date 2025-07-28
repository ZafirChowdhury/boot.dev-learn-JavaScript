function splitLogs(logs, slug) {
    let index = 0;
    let slugFlag = false;
    for (let log of logs) {
        if (log.includes(slug)) {
            slugFlag = true;
            break;
        }

        index++;
    }

    let before = logs.slice(0, index);
    let after = logs.slice(index + 1);

    if (!slugFlag) {
        return {
            before: [],
            index: -1,
            after: []
        }
    }

    return {
        before, 
        index, 
        after
    }
}

console.log(splitLogs([
        "error at line 10",
        "warning at line 15",
        "the dev who wrote line 21 should be fired",
        "debug info",
        "error at line 20",
        "user login",
      ], "debug"));

console.log(splitLogs([
        "start",
        "process 1: WARMING",
        "this is the end",
        "wait some more stuff happened here",
      ], "process 1"));

console.log(splitLogs([], "not found"));

console.log(splitLogs(["only log"], "nonexistent"));
