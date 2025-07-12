let openpacket = (price) => new Promise(
    (resolve, reject) => {
        if(price >= 15){
            resolve("Step 1: Opening maggi packet");
        } else {
            reject(new Error("Insufficient funds to open maggi packet"));
        }
    }
);

let boilWater = (degree) => new Promise(
    (resolve, reject) => {
        if(degree >= 120){
            resolve("Step 2: Boiling water");
        } else {
            reject(new Error("Insufficient temperature to boil water"));
        }
    }
);

let cutVeggies = () => new Promise(
    (resolve, reject) => {
        console.log("Step 3: Cutting vegetables");
        setTimeout(() => {
            resolve("Vegetables are cut and ready!");
        }, 1500);
    }
);

let boilVeggies = () => new Promise(
    (resolve, reject) => {
        console.log("Step 4: Boiling vegetables...");
        setTimeout(() => {
            resolve("Vegetables are cooked!");
        }, 2000);
    }
);

let boilMaggi = () => new Promise(
    (resolve, reject) => {
        console.log("Step 5: Adding maggi to boiling water");
        setTimeout(() => {
            resolve("Maggi is cooked perfectly!");
        }, 3000);
    }
);

let serveMaggi = () => new Promise(
    (resolve, reject) => {
        console.log("Step 6: Serving hot maggi");
        setTimeout(() => {
            resolve("Delicious maggi is ready to eat!");
        }, 500);
    }
);

console.log("Starting to make maggi...\n");

openpacket(15)
.then((result) => {
    console.log(result);
    return boilWater(324);
})
.then((result) => {
    console.log(result);
    return cutVeggies();
})
.then((result) => {
    console.log(result);
    return boilVeggies();
})
.then((result) => {
    console.log(result);
    return boilMaggi();
})
.then((result) => {
    console.log(result);
    return serveMaggi();
})
.then((result) => {
    console.log(result);
    console.log("Maggi making process completed successfully!");
})
.catch((error) => {
    console.error("Error while making maggi:", error.message);
});