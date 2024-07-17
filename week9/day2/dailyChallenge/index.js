// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.
const videoData = [

]
class Video {
    constructor(title, uploader, time){
        this.title = title,
        this.uploader = uploader,
        this.time = time
    }
    watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}`
    }
}

const video1 = new Video ("my tytle 1", "Daniel", 10)
addToDataBsae(video1)
const video2 = new Video ("my tytle 2", "Mike", 23)
addToDataBsae(video2)

console.log(video1, video2)
console.log(video1.watch() + " and " + video2.watch())

function addToDataBsae(video){
    videoData.push({
        id: videoData.length+1,
        title: video.title,
        time: video.time,
        uploader: video.uploader
    })
}

console.log(videoData)