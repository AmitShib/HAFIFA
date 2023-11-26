import { Video } from "./polymorphism";

function getRandomVideo(): Video | null {
    const random = Math.random();

    // Probability distribution for null and video object (adjust as needed)
    if (random < 0.5) {
        return null; // Return null with a 50% chance
    } else {
        // Return a video object with the remaining 50% chance
        const video: Video = {
            // math.random should be in function, also math.floor   
            name: "Random Video " + Math.floor(Math.random() * 100), // Random name
            URL: "https://example.com/randomVideo" + Math.floor(Math.random() * 100), // Random URL
            description: Math.random() < 0.5 ? "Description " + Math.floor(Math.random() * 100) : undefined, // Random description (optional)
            date: new Date(Math.floor(Math.random() * Date.now())), // Random date
        };
        return video;
    }
}

// Example usage
// const randomItem = getRandomVideo();
// if (randomItem === null) {
//     console.log("Received null");
// } else {
//     console.log("Received video:", randomItem);
// }

// Create an array filled with random Video objects or null
const videoArray: (Video | null)[] = Array.from({ length: 10 }, getRandomVideo);

// Display the generated array
console.log(videoArray);

// Map the array to retrieve descriptions or empty strings if the description is null or undefined
const descriptions: string[] = videoArray.map((videoOrNull) => {
    return videoOrNull?.description ?? ''; // Using optional chaining and nullish coalescing
});

// Display the resulting array of descriptions
console.log(descriptions);
