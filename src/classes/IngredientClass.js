export default class IngredientClass {
    constructor(hit) {
      this.description = hit.fields.description;
      this.amount = hit.fields.amount;
      this.unit = hit.fields.unit;
    }
  }