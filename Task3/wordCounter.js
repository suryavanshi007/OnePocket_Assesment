const fs = require("fs");

function countWordsInFile(filename) {
  // Read the content of the file asynchronously
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    // Remove any leading/trailing white spaces and line breaks
    data = data.trim();

    // Split the content into words based on white spaces
    const words = data.split(/\s+/);

    // Count the number of words
    const wordCount = words.length;

    // Print the total word count to the console
    console.log("Total word count:", wordCount);
  });
}

// Call the function with the file name "data.txt"
countWordsInFile("data.txt");
