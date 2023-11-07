export interface Video {
    name: string;
    URL: string;
    description?: string;
    date: Date;
  }

  function createVideo(name: string, URL: string, date: Date, description?: string): Video {
    return {
        name: name,
        URL: URL,
        description: description,
        date: date
    };
}

//videos which must contains description
type VideoWithDescription = {
    description: string;
};

type VideosWithDescription = Video & VideoWithDescription;


// Example usage:
const newVideo: Video = createVideo('Sample Video', 'http://example.com/sample', new Date(), 'This is a sample video');
console.log(newVideo);

//abstract class
// abstract class VideoLibaries{
//     videos : Video[];
//     constructor() {
//         this.videos = [];
//     }
//      abstract addVideo(video:Video):Video[];

//      getPlaylist(): string[] {
//         return this.videos.map(video => video.URL);
//     }
// }

//CLASS 1

export class IllegalVideoLibrary<T extends { name: string, URL: string }> {
    illegalVideos: T[];

    constructor() {
        this.illegalVideos = [];
    }

    public addVideo(video: T): T[] {
        this.illegalVideos.push(video);
        return this.illegalVideos;
    }
}

class VideoLibrary<T extends { name: string, URL: string }> {
    legalVideos: T[];

    constructor() {
        this.legalVideos = [];
    }

    videoExists(name: string): boolean {
        return this.legalVideos.some(video => video.name === name);
    }

    @measurePerformance
    public addVideo(video: T): T[] {
        if (!this.videoExists(video.name)) {
            this.legalVideos.push(video);
            return this.legalVideos;
        } else {
            const existsVideos = new IllegalVideoLibrary<T>();
            existsVideos.addVideo(video);
            return existsVideos.illegalVideos;
        }
    }

    deleteVideoByName(videoName: string): void {
        this.legalVideos = this.legalVideos.filter(video => video.name !== videoName);
    }

    @logArgumentsAndResult
    getPlaylist(): string[] {
        return this.legalVideos.map(video => video.URL);
    }
}



