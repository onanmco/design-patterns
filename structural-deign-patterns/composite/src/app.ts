import { File } from "./File";
import { Folder } from "./Folder";


const videos = new Folder("videos");

const actionMovie = new File("action movie.mp4");
videos.add(actionMovie);

const funnyVideos = new Folder("funny videos");
videos.add(funnyVideos);

const catVideo = new File("cute cat.mp4");
funnyVideos.add(catVideo);

const anotherCatVideo = new File("angry cat.mp4");
funnyVideos.add(anotherCatVideo);


console.log(`${videos.getName()} has ${videos.getLength()} items.`);

videos.remove();

console.log(`After removal, ${videos.getName()} has ${videos.getLength()} items.`);