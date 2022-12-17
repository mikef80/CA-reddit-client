# Reddit API

For this project, we will be using the [Reddit JSON API](https://github.com/reddit-archive/reddit/wiki/JSON). There is no maintained documentation but the API is simple enough to use. We will provide you with some pointers on how to use it.

Note that Reddit has 2 APIs: the [official API](https://www.reddit.com/dev/api/) and an [undocumented JSON API](https://github.com/reddit-archive/reddit/wiki/JSON). You are welcome to use either APIs but we recommend using the JSON API because it doesn’t require an OAuth workflow. Using the JSON API does have limitations such as no write operations. For the purposes of this project, we find the JSON API adequate.

You can take any Reddit URL, add .json at the end of it, and get JSON. For example, if you want to get the Popular page data in JSON:
- Original URL: https://www.reddit.com/r/popular/
- JSON URL: https://www.reddit.com/r/popular.json

If you want to search for “cake recipes”:
- Original URL: https://www.reddit.com/search?q=cake%20recipes
- JSON URL: https://www.reddit.com/search.json?q=cake%20recipes

Notice here you didn’t add `.json` at the end of the URL. You actually added it before the start of the query string. Refer to [this article](https://www.quora.com/What-are-the-parts-of-a-URL) for a breakdown of the structure of a URL.

The Reddit API will return some user content (comments) in Markdown. You should find a way to display the Markdown in your application.