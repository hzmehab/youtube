export const getTrends = (videoCategoryId) => `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${videoCategoryId}&key=AIzaSyAg4ghOgmXwoP-xCgYlG1xvh-Jx86_iozk`

// https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=eg&key=AIzaSyAg4ghOgmXwoP-xCgYlG1xvh-Jx86_iozk

// https://gist.github.com/dgp/1b24bf2961521bd75d6c
