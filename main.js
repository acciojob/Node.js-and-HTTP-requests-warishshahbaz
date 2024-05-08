const https = require("https");

// URL to make the GET request
const url = "https://jsonplaceholder.typicode.com/todos/1";

// Make a GET request
const request = https.get(url, (response) => {
  let data = "";

  // Accumulate data as it comes in
  response.on("data", (chunk) => {
    data += chunk;
  });

  // Parse JSON data when all chunks have been received
  response.on("end", () => {
    try {
      // Parse JSON data
      const todo = JSON.parse(data);

      // Output the title of the first todo item
      console.log("Title of the first todo:", todo.title);
    } catch (error) {
      console.error("Error parsing JSON:", error.message);
    }
  });
});

// Handle errors with the request
request.on("error", (error) => {
  console.error("Request error:", error.message);
});
