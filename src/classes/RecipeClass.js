export default class RecipeClass {
    constructor(hit) {
      this.title = hit.fields.title;
      this.rating = hit.fields.rating;
      this.id = hit.sys.id;
      //this.img = hit.img;
      this.description = hit.fields.description.content[0].content[0].value;
    }
  }
  