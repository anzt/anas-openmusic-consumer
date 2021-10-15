class Listener {
    constructor(playlistsongsService, mailSender) {
      this.playlistsongsService = playlistsongsService;
      this._mailSender = mailSender;
      
      this.listen = this.listen.bind(this);
    }

    async listen(message) {
        try {
            const { userId, targetEmail } = JSON.parse(message.content.toString());
            const playlists = await this._playlistsongsService.getPlaylists(userId);
            const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(notes));
            console.log(result);
        } catch (error) {
          console.error(error);
        }
    }
}