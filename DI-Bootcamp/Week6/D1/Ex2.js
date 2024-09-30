const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("sucess");
    }, 4000);
});


// To test the promise
promise.then((message) => console.log(message.log(message)); // Output after 4 seconds: "success"


