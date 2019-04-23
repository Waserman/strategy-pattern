class ScraperManager {
  constructor(strategy) {
    this.strategy = strategy;
  }

  async scrape(page) {
    return await this.strategy(page);
  }
}

module.exports = ScraperManager;
