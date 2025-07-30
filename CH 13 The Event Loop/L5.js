async function processAnalytics(data) {
  let analysis = "";

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(analysis);
    }, 100);

    setTimeout(() => {
      analysis += " - Finished!";
    }, 0);

    // don't touch above this line

    // Creating a microtask so it runs before macro task setTimeout
    Promise.resolve().then(() => {
            analysis += ` - Processing: ${data}`;
        });

    // don't touch below this line

    analysis += "Analyzing...";
  });
}

// My head hurts :(
let output = await processAnalytics("Hello");
console.log(output)
