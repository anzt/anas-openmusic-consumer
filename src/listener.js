class Listener {
    constructor(playlistsongsService, mailSender) {
      this._playlistsongsService = playlistsongsService;
      this._mailSender = mailSender;
      
      this.listen = this.listen.bind(this);
    }

    async listen(message) {
        try {
            const { playlistId, targetEmail } = JSON.parse(message.content.toString());
            const playlist = await this._playlistsongsService.getPlaylists(playlistId);
            const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(playlist));
            console.log(result);
        } catch (error) {
          console.error(error);
        }
    }
}
module.exports = Listener;