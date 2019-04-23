const puppeteer = require("puppeteer");
const scrapeStrategy = require("./scrapeStrategy");
const ScrapeManger = require("../common/ScrapeManager");

class YouTubeStrategy {
  async search(query) {
    const Scraper = new ScrapeManger(scrapeStrategy);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.youtube.com/results?search_query=${query}`);
    await page.waitForSelector(`#contents`);
    const events = await Scraper.scrape(page);
    await browser.close();
    return events;
  }
}

module.exports = YouTubeStrategy;
