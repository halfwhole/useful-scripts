javascript:(
    function() {
        /* Converts an image or video node to HTML */
        function htmlize_image_video_node(node) {
            return node.is_video
                ? "<video controls><source src=" + node.video_url + "></video>"
                : "<img src=" + node.display_url + ">";
        }

        /* Converts a sidecar node to HTML */
        function htmlize_sidecar_node(node) {
            const child_nodes = node.edge_sidecar_to_children.edges.map(x => x.node);
            const html_images_videos = child_nodes.map(node => htmlize_image_video_node(node));
            return html_images_videos.join("\n");
        }

        const parent = window._sharedData.entry_data.PostPage[0].graphql.shortcode_media;
        document.body.innerHTML = parent.__typename === "GraphSidecar"
            ? htmlize_sidecar_node(parent)
            : htmlize_image_video_node(parent);
    }
)();
