const parseResults = (element) => {
  const articles = element.querySelectorAll(".g");
  return Array.from(articles).map((e) => {
    const a = e.querySelector("a");
    return {
      title: a.title,
      href: a.href
    };
  });
};

module.exports = async (page) => {
  const results = await page.$eval("#center_col", parseResults);
  return results.map((res) => {
    return {
      type: "document",
      title: res.title,
      href: res.href
    };
  });
};
