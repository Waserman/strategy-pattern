const parseResults = (element) => {
  const articles = element.querySelectorAll("ytd-video-renderer");
  return Array.from(articles).map((e) => {
    const a = e.querySelector("#video-title");
    return {
      title: a.title,
      href: a.href
    };
  });
};

module.exports = async (page) => {
  const results = await page.$eval("#contents", parseResults);
  return results.map((res) => {
    return {
      type: "video",
      title: res.title,
      href: res.href
    };
  });
};
