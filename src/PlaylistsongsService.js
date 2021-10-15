const { Pool } = require('pg');
 
class PlaylistsongsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylists(playlistId) {
    const query = {
      text: `SELECT ps.id, s.title, s.performer 
      FROM playlistsongs ps LEFT JOIN songs s ON ps.song_id = s.id 
      WHERE ps.playlist_id = $1`,
      values: [playlistId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}
module.exports = PlaylistsongsService;
