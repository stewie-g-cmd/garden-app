function getGardeningAdvice(season, plantType) {
    let advice = "";

    if (season === "summer") {
        advice += "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        advice += "Protect your plants from frost with covers.\n";
    } else {
        advice += "No advice for this season.\n";
    }

    if (plantType === "flower") {
        advice += "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        advice += "Keep an eye out for pests!";
    } else {
        advice += "No advice for this type of plant.";
    }

    return advice;
}

const season = prompt("Enter season:") || "summer";
const plantType = prompt("Enter plant type:") || "flower";

console.log(getGardeningAdvice(season, plantType));