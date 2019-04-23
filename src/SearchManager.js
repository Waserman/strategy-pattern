class SearchManager {
  escapeQuery(query) {
    return encodeURIComponent(query);
  }
  async search(query, strategy) {
    return await strategy.search(this.escapeQuery(query));
  }
}

module.exports = SearchManager;
