import Cookies from 'js-cookie';

export default class Util {
  constructor() {
    this.attrKeys = {
      COOKTIME: 1,
      PREPTIME: 2,
      WORKTIME: 3,
      TOTALTIME: 4,
      RESTTIME: 5,
      SERVINGS: 6,
      DIFFICULTY: 7,
    };
  }

  getRecipeTime(attrAr, attrKey = this.attrKeys.TOTALTIME) {
    console.log('attrAr', attrAr);
    console.log('attrKey', attrKey);
    if (!attrAr) return '';

    const recipeTime = attrAr.find((attr) => attr.attributeKeyId === attrKey);

    if (recipeTime) return recipeTime.value1;
  }

  static getDiffuculty(totalTime) {
    const pre = '🍵 ';
    const total = totalTime;

    if (total.indexOf('h') >= 0) {
      return pre + 'hard';
    }

    try {
      const split = total.split(' ')[0];
      console.log('split', split);
      if (total.indexOf(' h ') < 0 && +split <= 35) {
        return pre + 'easy';
      }
    } catch (error) {
      return pre + 'medium';
    }

    return pre + 'medium';
  }

  static getDateTime(recipe) {
    if (recipe && recipe.recipeDate) {
      return (
        '📅 ' +
        new Date(recipe.recipeDate).toLocaleString('de-DE', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })
      );
    }
  }

  /**
   * Wechseln des Farb-Schemas => über JavaScript eine CSS-Datei im Dokument einbinden
   *
   * @param {*} cssFileName Dateiname der Css-Datei
   */
  static changeColor(cssFileName, reload = false) {
    console.log(`changeColor : ${cssFileName}`);

    // require(`../color-schemes/${cssFileName}.css`);

    this.loadFile(
      `${process.env.PUBLIC_URL}/static/css/color-schemes/${cssFileName}.css`,
      'css'
    );
    // this.loadFile('test', 'css');

    // merken im Cookie
    Cookies.set('colors', cssFileName);

    // if (reload) window.location.reload(); // dirty und infinite-anfaellig
  }

  /**
   * von hier kopiert: https://www.seancdavis.com/posts/dynamically-add-javascript-and-css-files-to-your-website-using-javascript/
   *
   * @param {*} path
   * @param {*} type
   */
  static loadFile(path, type) {
    if (type == 'js') {
      var fileref = document.createElement('script');
      fileref.setAttribute('type', 'text/javascript');
      fileref.setAttribute('src', path);
    } else if (type == 'css') {
      var fileref = document.createElement('link');
      fileref.setAttribute('rel', 'stylesheet');
      fileref.setAttribute('type', 'text/css');
      fileref.setAttribute('href', path);
    }
    document.getElementsByTagName('head')[0].appendChild(fileref);
  }
}
