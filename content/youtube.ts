//defining the class

class Youtube {

    //initializing the cnstructure
    constructor(public videoId:number,public videotitle: string,private videoStreamingUrl: string, private videoViews: number, private videoDislikes: number,
         private videoLikes: number,
        public videoSubscriptionCount: number,public videoDescription: string,private videoUploadedTime: Date,
        public videoCategory: string,public videoLicense: string,
        public videoAlbum ? : string,public videoArtist ? : string, public videoComments  ? : Array<Comments> ){
            this.videoId= videoId;
            this.videotitle= videotitle;
            this.videoViews =videoViews;
            this.videoDislikes =videoDislikes;
            this.videoLikes = videoLikes;
            this.videoSubscriptionCount= videoSubscriptionCount;
            this.videoDescription =videoDescription;
            this.videoUploadedTime =videoUploadedTime;
            this.videoCategory= videoCategory;
            this.videoLicense= videoLicense;
            this.videoAlbum= videoAlbum;
            this.videoArtist =videoArtist;
            this.videoComments= videoComments;


        }

     // getters and setters properties for Video Url

        getVideoStreamingUrl(){
            return this.videoStreamingUrl;
        }

       

    //getters and setters properties for video Views

        getVideoView(){
            return this.videoViews;
        }

        setVideoView(newViewCount:number){
            this.videoViews =newViewCount;
        }

        
    //getters and setters properties for video Likes

        getVideoLikes(){
            return this.videoLikes;
        }

        setVideoLikese(newLikeCount: number){
            this.videoLikes =newLikeCount;
        }

        
         //getters and setters properties for video Dislikes

        getVideoDislikes(){
            return this.videoDislikes;
        }

        setVideoDislikes(newDislikeCount: number){
            this.videoDislikes =newDislikeCount;
        }

        
        //getters and setters properties for video uploaded Time

        getVideoUploadedTime(){
            return this.videoUploadedTime;
        }

        setVideoUploadedTime(newVideoUploadedTime: Date){
            this.videoUploadedTime =newVideoUploadedTime;
        }
        

        //methods

        //method to increase views count

        addViewCount= () =>{
            let currentViewCount= this.getVideoView();
            this.setVideoView(currentViewCount++);    

        }

        //method to increase like

        addLike= () =>{
            let currentLikeCount= this.getVideoLikes();
            this.setVideoLikese(currentLikeCount++);
        }

        //method to increase Dislike

        addDislike= () =>{
            let currentDislike = this.getVideoDislikes();
            this.setVideoDislikes(currentDislike++);
        }

        // get video timespan

        getVideoTimeSpan = () => Date;

        // get realted videos

        getRelatedVideos =() => Youtube;
}

// end of class

class Comments{

    constructor(public commentby:string,public comment: string,public commentForVideoId:number, public commentdate: Date,public commmentLikes? : number,
    public commentDisLikes?  : number, public listOfComments? :Array<Comments>)
    {
        this.commentForVideoId=commentForVideoId;
        this.comment=comment;
        this.commentby=commentby;
        this.commentdate=commentdate;
        this.commmentLikes= commmentLikes;
        this.commentDisLikes= commentDisLikes;
        this.listOfComments = listOfComments;

    }


    listOfCommentById= (videoId: number) => Array<Comments>();
}

//click event

var bttnclick = <HTMLButtonElement>document.getElementById("youtubeId");  
bttnclick.addEventListener("click",(e:Event) => objectYouTubeStart());
let objectYouTubeStart= () =>{
let comment1:Comments= new Comments("Venkat","Testing",1,new Date());


let youtube= new Youtube(1,"Sample","Test Url",3,1,2,2,"Main Content of video is testing", new Date(),
"music","Youtube",",",",",comment1.listOfCommentById(1));

console.clear();
console.log("Youtube class");
console.log("Title:"+youtube.videotitle);
console.log("Url:"+youtube.getVideoStreamingUrl());
console.log("Views:"+youtube.getVideoView());
console.log("Likes:"+youtube.getVideoLikes());
console.log("DisLikes:"+youtube.getVideoDislikes());
console.log("Descption: "+youtube.videoDescription);
}


