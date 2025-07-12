function openPacket(callback) {
    console.log("Step 1: Opening maggi packet...");
    setTimeout(() => {
        console.log("Maggi packet opened!");
        callback(); 
    }, 1000);
}

function boilWater(callback) {
    console.log("Step 2: Boiling water...");
    setTimeout(() => {
        console.log("Water is boiling!");
        callback();
    }, 2000);
}

function cutVeggies(callback) {
    console.log("Step 3: Cutting vegetables...");
    setTimeout(() => {
        console.log("Vegetables cut!");
        callback();
    }, 1500);
}

function boilVeggies(callback) {
    console.log("Step 4: Boiling vegetables...");
    setTimeout(() => {
        console.log("Vegetables cooked!");
        callback();
    }, 2000);
}

function boilMaggi(callback) {
    console.log("Step 5: Boiling maggi...");
    setTimeout(() => {
        console.log("Maggi cooked!");
        callback();
    }, 3000);
}

function serveMaggi() {
    console.log("Step 6: Serving maggi...");
    setTimeout(() => {
        console.log("Delicious maggi is ready to eat!");
    }, 500);
}

console.log("Starting to make maggi...\n");

openPacket(() => {
    boilWater(() => {
        cutVeggies(() => {
            boilVeggies(() => {
                boilMaggi(() => {
                    serveMaggi();
                });
            });
        });
    });
});