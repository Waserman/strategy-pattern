const puppeteer = require("puppeteer");
const scrapeStrategy = require("./scrapeStrategy");
const ScrapeManger = require("../common/ScrapeManager");

class GoogleStrategy {
  async search(query) {
    const Scraper = new ScrapeManger(scrapeStrategy);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${query}`);
    await page.waitForSelector(`#center_col`);
    const events = await Scraper.scrape(page);
    await browser.close();
    return events;
  }
}

module.exports = GoogleStrategy;
