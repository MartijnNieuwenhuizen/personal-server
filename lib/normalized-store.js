module.exports = class Store {
  constructor() {
    this.byId = {}
    this.allIds = []

    this.getById = this.getById.bind(this)
    this.getAllIds = this.getAllIds.bind(this)
    this.set = this.set.bind(this)
  }

  /**
   * @param {string} id
   * @returns {object}
   */
  getById(id) {
    return this.byId[id]
  }

  /**
   * @returns {array}
   */
  // get getAllIds() {
  getAllIds() {
    return this.allIds
  }

  /**
   * @param {object} storeItem
   */
  // set set(storeItem) {
  set(storeItem) {
    this.allIds = [...this.allIds, storeItem.id]
    this.byId = {
      ...this.byId,
      ...{
        [storeItem.id]: storeItem,
      },
    }
  }
}
