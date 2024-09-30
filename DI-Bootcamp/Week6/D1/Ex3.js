const promiseResolved = Promise.resolve(3);

// To rest the resolved promise
promiseResolved.then((value)) => console.log(value)); // Output: 3

const promuseRejected = Promise.reject("Boo!");

// To test the rejected promise
promiseRejected.catch((error)) => console.log(error)); // Output: "Boo!"