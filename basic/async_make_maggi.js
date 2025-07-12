async function makeMaggi() {
    console.log("Starting to make maggi...\n");

    await openPacket();
    await boilWater();
    await cutVeggies();
    await boilVeggies();
    await boilMaggi();
    await serveMaggi();

    console.log("\nMaggi making process completed!");
}

makeMaggi();

function openPacket() {
    return new Promise((resolve) => {
        console.log("Step 1: Opening maggi packet...");
        setTimeout(resolve, 1000);
    });
}
function boilWater() {
    return new Promise((resolve) => {
        console.log("Step 2: Boiling water...");
        setTimeout(resolve, 1500);
    });
}
function cutVeggies() {
    return new Promise((resolve) => {
        console.log("Step 3: Cutting vegetables...");
        setTimeout(resolve, 1200);
    });
}
function boilVeggies() {
    return new Promise((resolve) => {
        console.log("Step 4: Boiling vegetables...");
        setTimeout(resolve, 1300);
    });
}
function boilMaggi() {
    return new Promise((resolve) => {
        console.log("Step 5: Boiling maggi...");
        setTimeout(resolve, 2000);
    });
}
function serveMaggi() {
    return new Promise((resolve) => {
        console.log("Step 6: Serving maggi...");
        setTimeout(() => {
            console.log("Delicious maggi is ready to eat!");
            resolve();
        }, 700);
    });
}