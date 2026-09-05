/**
 * Interactive Garden Advice Generator
 */

const ADVICE_DATABASE = {
  seasons: {
    summer: "Water your plants regularly and provide some shade.\n",
    winter: "Protect your plants from frost with covers.\n",
    spring: "Prepare your soil and start planting seeds for summer bloom.\n",
    autumn: "Clear fallen leaves and prune perennial branches.\n"
  },
  plants: {
    flower: "Use fertiliser to encourage blooms.",
    vegetable: "Keep an eye out for pests!",
    herb: "Ensure plenty of sunlight and harvest regularly."
  }
};

/**
 * Retrieves advice based on user inputs
 * @param {string} season 
 * @param {string} plantType 
 * @returns {string} Combined advice string
 */
function getGardeningAdvice(season, plantType) {
  const normalizedSeason = season ? season.toLowerCase().trim() : "";
  const normalizedPlant = plantType ? plantType.toLowerCase().trim() : "";

  let advice = "";

  advice += ADVICE_DATABASE.seasons[normalizedSeason] || "No advice for this season.\n";
  advice += ADVICE_DATABASE.plants[normalizedPlant] || "No advice for this type of plant.";

  return advice;
}

const userSeason = prompt("Enter a season (e.g., summer, winter, spring, autumn):") || "summer";
const userPlantType = prompt("Enter a plant type (e.g., flower, vegetable, herb):") || "flower";

console.log(getGardeningAdvice(userSeason, userPlantType));