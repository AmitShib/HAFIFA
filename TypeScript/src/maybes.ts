import { Video } from "./polymorphism";

const getRandom = (num : number = 1) => Math.random() * num;
const floorTheNum = (num : number) => Math.floor(num); //meagel at hamispar 
const makeVideo = () : Video => {
    const video: Video = {
        // math.random should be in function, also math.floor   
        name: "Random Video " + floorTheNum(getRandom(100)), // Random name
        URL: "https://example.com/randomVideo" + floorTheNum(getRandom(100)), // Random URL
        description: getRandom() < 0.5 ? "Description " + floorTheNum(getRandom(100)) : undefined, // Random description (optional)
        date: new Date(floorTheNum(getRandom() * Date.now())), // Random date
    };
    return video;
} ;

const getRandomVideo = () => (getRandom()< 0.5) ? null : makeVideo();
 
// Create an array filled with random Video objects or null
const videoArray: (Video | null)[] = Array.from({ length: 10 }, getRandomVideo);

// Display the generated array
console.log(videoArray);

// Map the array to retrieve descriptions or empty strings if the description is null or undefined
// const descriptions: string[] = videoArray.map((videoOrNull) => {
//     return videoOrNull?.description ?? ''; // Using optional chaining and nullish coalescing
// });

const descriptions = (videoArr : (Video | null)[]) : string[] => videoArr===null ? [] : (videoArr.map((video) => video?.description || ''));

// Display the resulting array of descriptions
console.log(descriptions(videoArray));
