import IngredientClass from '../classes/IngredientClass';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default class DetailedRecipeClass {
  constructor(hit) {
    this.title = hit.fields.title;
    this.rating = hit.fields.rating;
    // this.ingrediens = this.setIngrediens(hit.fields.ingridients);
    this.ingrediens = hit.fields.ingridientsJson;
    // this.preparation = documentToHtmlString(hit.fields.preparation);
    this.preparation = hit.fields.preparationNonrich;
    // this.picture = hit.fields.image[0].fields.file.url;
    this.picture = hit.fields.imageUrl;
    // this.description = documentToHtmlString(hit.fields.description);
    this.description = hit.fields.descriptionNonrich;
  }
  setIngrediens(list) {
    let listIngrediens = [];
    list.forEach((element) => {
      listIngrediens.push(new IngredientClass(element));
    });
    return listIngrediens;
  }
}
