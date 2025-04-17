function displayMessage() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello from Promise!");
      }, 1000);
    });
  }
  
  displayMessage().then((message) => {
    console.log(message);
  });