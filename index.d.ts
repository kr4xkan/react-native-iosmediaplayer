declare namespace _default {
    function on(eventName: any, cb: any): void;
    function off(eventName: any, cb: any): void;
    function observeNotificationChange(observe: any): void;
    function getPlaylists(params: any): Promise<any>;
    function getTracks(params: any): Promise<any>;
    function getArtists(params: any): Promise<any>;
    function getAlbums(params: any): Promise<any>;
    function getCurrentPlayTime(params: any): Promise<any>;
    function getCurrentTrack(): Promise<any>;
    function pause(): void;
    function play(): void;
    function previous(): void;
    function next(): void;
    function playTrack(trackItem: any): Promise<any>;
    function playTracks(trackItems: any): Promise<any>;
    function queueTracks(trackItems: any): Promise<any>;
    function seekTo(playingTime: any): void;
    function stop(): void;
}
export default _default;
