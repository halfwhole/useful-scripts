javascript:(
    function() {
        /* Adapted from https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string/10420404 */
        function humanFileSize(size) {
            const i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
            return i > 4 ? "insanely large" : (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
        };

        /* Parse possible download formats for description and URL */
        const player_response = JSON.parse(ytplayer.config.args.player_response);
        const formats = player_response.streamingData.formats.concat(player_response.streamingData.adaptiveFormats);
        const parsed_formats = formats.map(f => ({
            description: f.mimeType.split(";")[0] + (f.qualityLabel === undefined ? "" : " " + f.qualityLabel) +  " (" + humanFileSize(f.contentLength) + ")",
            url: f.url
        }));

        const prompt_text = parsed_formats.map((f, i) => i + ": " + f.description).join("\n");
        const user_choice = parseInt(prompt(prompt_text));

        if (!(user_choice >= 0 && user_choice < parsed_formats.length)) {
            alert("Invalid selection.");
            return;
        }

        const url = parsed_formats[user_choice].url;
        window.location.href = url;
    }
)();
