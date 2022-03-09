import IngredientClass from '../classes/IngredientClass';

export default class DetailedRecipeClass {
    constructor(hit) {
      this.title = hit.fields.title;
      this.rating = hit.fields.rating;
      this.ingrediens = this.setIngrediens(hit.fields.ingridients);
      this.preparation = hit.fields.preparation.content[0].content[0].value;
      this.picture = hit.fields.image[0].fields.file.url;
      this.description = hit.fields.description.content[0].content[0].value;
    }
    setIngrediens(list){
        let listIngrediens = [];
        list.forEach(element => {
            listIngrediens.push(new IngredientClass(element));
        });
        return listIngrediens;
    }
  }
  