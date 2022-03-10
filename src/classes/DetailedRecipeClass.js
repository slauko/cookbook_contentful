import IngredientClass from '../classes/IngredientClass';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default class DetailedRecipeClass {
    constructor(hit) {
      this.title = hit.fields.title;
      this.rating = hit.fields.rating;
      this.ingrediens = this.setIngrediens(hit.fields.ingridients);
      this.preparation = documentToHtmlString(hit.fields.preparation);
      this.picture = hit.fields.image[0].fields.file.url;
      this.description = documentToHtmlString(hit.fields.description);
    }
    setIngrediens(list){
        let listIngrediens = [];
        list.forEach(element => {
            listIngrediens.push(new IngredientClass(element));
        });
        return listIngrediens;
    }
  }
  