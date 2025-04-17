const fs = require('fs').promises;

async function createFile() {
  try {
    await fs.writeFile('message.txt', 'This file was created using fs module and async/await.');
    console.log('File created successfully.');
  } catch (error) {
    console.error('Error creating file:', error);
  }
}

function displayMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from Promise!");
    }, 1000);
  });
}

(async () => {
  const message = await displayMessage();
  console.log(message);

  await createFile();
})();