
var simpleRSSPlugin = (function () {

    // get all the feed containers
    var feedsNodes = document.querySelectorAll('[data-rss-feed]');

    // Convert to array
    var feeds = [].slice.call(feedsNodes);

    for (var i = 0; i < feeds.length; i++) {

        var container = feedsNodes[i];
        var url = container.getAttribute('data-rss-feed');
        var titleWrapper = container.getAttribute('data-rss-title-wrapper') || 'h2';
        var max = container.getAttribute('data-rss-max') || 10;
        var script = document.createElement('script');

        script.src = document.location.protocol + '//api.rss2json.com/v1/api.json?callback=simpleRSSPlugin.handleJSON&api_key=5kj7sddhdkizegl8snqvuouaedel0vreavi6kprn&rss_url=' + encodeURIComponent(url);

        document.querySelector('head').appendChild(script);
        script.parentNode.removeChild(script);
    }

    function handleJSON(data) {

        const months = {
            0: 'Jan',
            1: 'Feb',
            2: 'Mar',
            3: 'Apr',
            4: 'May',
            5: 'Jun',
            6: 'Jul',
            7: 'Aug',
            8: 'Sep',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec'
        }

        if (data.feed && data.items) {

            var docFrag = document.createDocumentFragment();

            for (var i = 0; i < data.items.length; i++) {

                var e = data.items[i];

                var tempNode = document.createElement('div');

                var d = new Date(e.pubDate.replace(/-/g, "/"));
                var formattedDate = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

                var template = `
                 <${titleWrapper}>
                    <p>
                        <a href="${e.link}">${e.title}</a>
                        <time datetime="${e.pubDate}">${formattedDate}</time>
                        <span class="post__description">${e.content}</span>
                    </p>
                    </${titleWrapper}>
                `;

                if (i < max) {
                    tempNode.innerHTML = template;
                    docFrag.appendChild(tempNode);
                }

            }

            container.appendChild(docFrag);

        }
    }

    return {
        handleJSON: handleJSON
    }

})();
