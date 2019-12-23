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
            description: f.mimeType.split(";")[0] + (f.qualityLabel === undefined ? "" : " " + f.qualityLabel),
            file_size: humanFileSize(f.contentLength),
            url: f.url
        }));

        /* Prepare HTML table for download formats */
        const html_table_header = "<tr><th>Format</th><th>Size</th></tr>\n";
        const html_table_rows = parsed_formats
            .map(f => "<tr><td><a href=" + f.url + ">" + f.description + "</td><td>" + f.file_size + "</td></tr>")
            .join("\n");
        const html_table =
            "<table style=\"font-size:large; margin-left:auto; margin-right:auto; margin-top:20px\" cellspacing=\"10\">" +
            html_table_header +
            html_table_rows +
            "</table>";

        document.body.innerHTML = html_table;
    }
)();
