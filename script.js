// JavaScript Boilerplate

// Run code after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    // Example variables
    const appName = "My App";
    let counter = 0;

    // Example function
    function greet(name) {
        console.log(`Hello, ${name}! Welcome to ${appName}.`);
    }

    // Example event listener
    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", () => {
            counter++;
            console.log(`Button clicked ${counter} times`);
        });
    }

    // Example API call
    async function fetchData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const data = await response.json();
            console.log("Fetched Data:", data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    fetchData();
});
