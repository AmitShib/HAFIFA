export interface Video {
    name: string;
    URL: string;
    description?: string;
    date: Date;
}

function createVideo(name: string, URL: string, date: Date, description?: string): Video {
    return {
        name,
        URL,
        description,
        date
    };
}

//videos which must contains description
type VideoWithDescription = {
    description: string;
};

type FullVideo = Video & VideoWithDescription;


// Example usage:
const newVideo: Video = createVideo('Sample Video', 'http://example.com/sample', new Date(), 'This is a sample video');
console.log(newVideo);

//CLASS 1

interface halfVideo {
    name :string,
    URL: string
} 
export class IllegalVideoLibrary<video extends halfVideo> {
    illegalVideos: video[];

    constructor() {
        this.illegalVideos = [];
    }

    public addVideo(video: video): video[] {
        this.illegalVideos.push(video);
        return this.illegalVideos;
    }
}

class VideoLibrary<video extends halfVideo> {
    legalVideos: video[];

    constructor() {
        this.legalVideos = [];
    }

    videoExists(name: string): boolean {
        return this.legalVideos.some(video => video.name === name);
    }

    @measurePerformance
    public addVideo(video: video): video[] {
        if (!this.videoExists(video.name)) {
            this.legalVideos.push(video);
            return this.legalVideos;
        } else {
            const existsVideos = new IllegalVideoLibrary<video>();
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



