const SearchManager = require("./SearchManager");
const Search = new SearchManager();

const YouTubeStrategy = require("./youtubeStrategy");
const youtube = new YouTubeStrategy();

const GoogleStrategy = require("./googleStrategy");
const google = new GoogleStrategy();

(async () => {
  const q = process.argv[2];
  console.log(`Query: ${q}`);
  console.log(`---------------------`);
  console.log(`youtube results`);
  console.log(`---------------------`);
  const youtubeRes = await Search.search(q, youtube);
  console.log(youtubeRes);
  console.log(`---------------------`);
  console.log(`google results`);
  console.log(`---------------------`);
  const googleRes = await Search.search(q, google);
  console.log(googleRes);
  console.log(`---------------------`);
  console.log(`Done`);
})();
