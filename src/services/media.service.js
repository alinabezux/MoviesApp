import axiosService from "./axios.service";

const mediaService = {
    list: (mediaType) => axiosService.get('discover/' + mediaType), //get all movie or tv
    category: (mediaType, mediaCategory) => axiosService.get(mediaType + '/' + mediaCategory), //get tv or movies by category
    details: (mediaType, mediaId) => axiosService.get(mediaType + '/' + mediaId),//get tv or movie by Id
    genres: (mediaType) => axiosService.get('genre/' + mediaType + '/list'),
    videos: (mediaType, mediaId) => axiosService.get(mediaType + '/' + mediaId + '/videos'),
    credits: (mediaType, mediaId) => axiosService.get(mediaType + '/' + mediaId + '/credits'),
    similar: (mediaType, mediaId) => axiosService.get(mediaType + '/' + mediaId + '/similar'),
    reviews: (mediaType, mediaId) => axiosService.get(mediaType + '/' + mediaId + '/reviews')
}

export
{
    mediaService
}