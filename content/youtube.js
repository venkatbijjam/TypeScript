//defining the class
var Youtube = /** @class */ (function () {
    //initializing the cnstructure
    function Youtube(videoId, videotitle, videoStreamingUrl, videoViews, videoDislikes, videoLikes, videoSubscriptionCount, videoDescription, videoUploadedTime, videoCategory, videoLicense, videoAlbum, videoArtist, videoComments) {
        var _this = this;
        this.videoId = videoId;
        this.videotitle = videotitle;
        this.videoStreamingUrl = videoStreamingUrl;
        this.videoViews = videoViews;
        this.videoDislikes = videoDislikes;
        this.videoLikes = videoLikes;
        this.videoSubscriptionCount = videoSubscriptionCount;
        this.videoDescription = videoDescription;
        this.videoUploadedTime = videoUploadedTime;
        this.videoCategory = videoCategory;
        this.videoLicense = videoLicense;
        this.videoAlbum = videoAlbum;
        this.videoArtist = videoArtist;
        this.videoComments = videoComments;
        //methods
        //method to increase views count
        this.addViewCount = function () {
            var currentViewCount = _this.getVideoView();
            _this.setVideoView(currentViewCount++);
        };
        //method to increase like
        this.addLike = function () {
            var currentLikeCount = _this.getVideoLikes();
            _this.setVideoLikese(currentLikeCount++);
        };
        //method to increase Dislike
        this.addDislike = function () {
            var currentDislike = _this.getVideoDislikes();
            _this.setVideoDislikes(currentDislike++);
        };
        // get video timespan
        this.getVideoTimeSpan = function () { return Date; };
        // get realted videos
        this.getRelatedVideos = function () { return Youtube; };
        this.videoId = videoId;
        this.videotitle = videotitle;
        this.videoViews = videoViews;
        this.videoDislikes = videoDislikes;
        this.videoLikes = videoLikes;
        this.videoSubscriptionCount = videoSubscriptionCount;
        this.videoDescription = videoDescription;
        this.videoUploadedTime = videoUploadedTime;
        this.videoCategory = videoCategory;
        this.videoLicense = videoLicense;
        this.videoAlbum = videoAlbum;
        this.videoArtist = videoArtist;
        this.videoComments = videoComments;
    }
    // getters and setters properties for Video Url
    Youtube.prototype.getVideoStreamingUrl = function () {
        return this.videoStreamingUrl;
    };
    //getters and setters properties for video Views
    Youtube.prototype.getVideoView = function () {
        return this.videoViews;
    };
    Youtube.prototype.setVideoView = function (newViewCount) {
        this.videoViews = newViewCount;
    };
    //getters and setters properties for video Likes
    Youtube.prototype.getVideoLikes = function () {
        return this.videoLikes;
    };
    Youtube.prototype.setVideoLikese = function (newLikeCount) {
        this.videoLikes = newLikeCount;
    };
    //getters and setters properties for video Dislikes
    Youtube.prototype.getVideoDislikes = function () {
        return this.videoDislikes;
    };
    Youtube.prototype.setVideoDislikes = function (newDislikeCount) {
        this.videoDislikes = newDislikeCount;
    };
    //getters and setters properties for video uploaded Time
    Youtube.prototype.getVideoUploadedTime = function () {
        return this.videoUploadedTime;
    };
    Youtube.prototype.setVideoUploadedTime = function (newVideoUploadedTime) {
        this.videoUploadedTime = newVideoUploadedTime;
    };
    return Youtube;
}());
// end of class
var Comments = /** @class */ (function () {
    function Comments(commentby, comment, commentForVideoId, commentdate, commmentLikes, commentDisLikes, listOfComments) {
        this.commentby = commentby;
        this.comment = comment;
        this.commentForVideoId = commentForVideoId;
        this.commentdate = commentdate;
        this.commmentLikes = commmentLikes;
        this.commentDisLikes = commentDisLikes;
        this.listOfComments = listOfComments;
        this.listOfCommentById = function (videoId) { return Array(); };
        this.commentForVideoId = commentForVideoId;
        this.comment = comment;
        this.commentby = commentby;
        this.commentdate = commentdate;
        this.commmentLikes = commmentLikes;
        this.commentDisLikes = commentDisLikes;
        this.listOfComments = listOfComments;
    }
    return Comments;
}());
//click event
var bttnclick = document.getElementById("youtubeId");
bttnclick.addEventListener("click", function (e) { return objectYouTubeStart(); });
var objectYouTubeStart = function () {
    var comment1 = new Comments("Venkat", "Testing", 1, new Date());
    var youtube = new Youtube(1, "Sample", "Test Url", 3, 1, 2, 2, "Main Content of video is testing", new Date(), "music", "Youtube", ",", ",", comment1.listOfCommentById(1));
    console.clear();
    console.log("Youtube class");
    console.log("Title:" + youtube.videotitle);
    console.log("Url:" + youtube.getVideoStreamingUrl());
    console.log("Views:" + youtube.getVideoView());
    console.log("Likes:" + youtube.getVideoLikes());
    console.log("DisLikes:" + youtube.getVideoDislikes());
    console.log("Descption: " + youtube.videoDescription);
};
