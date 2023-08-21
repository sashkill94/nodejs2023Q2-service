export class Favorite {
  artists: string[] = []; // favorite artists ids
  albums: string[] = []; // favorite albums ids
  tracks: string[] = []; // favorite tracks ids

  addArtist(artistId: string) {
    this.artists.push(artistId);
  }

  addAlbum(albumId: string) {
    this.albums.push(albumId);
  }

  addTrack(trackId: string) {
    this.tracks.push(trackId);
  }

  removeArtist(artistId: string) {
    const index = this.artists.findIndex((id) => id === artistId);
    if (index !== -1) this.artists.splice(index, 1);
    return index;
  }

  removeAlbum(albumId: string) {
    const index = this.albums.findIndex((id) => id === albumId);
    if (index !== -1) this.albums.splice(index, 1);
    return index;
  }
  removeTrack(trackId: string) {
    const index = this.tracks.findIndex((id) => id === trackId);
    if (index !== -1) this.tracks.splice(index, 1);
    return index;
  }
}
