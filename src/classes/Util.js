import Cookies from 'js-cookie';

export default class Util {
  static getTotalTime(attrAr, str = 'gesamtzeit') {
    if (!attrAr) return '';

    let ret = '5 min.';
    attrAr.forEach((attr) => {
      const index = attr?.toLowerCase().indexOf(str.toLocaleLowerCase());
      if (index >= 0) {
        // console.log(attr.substring(index + str.length + 4));
        ret = attr
          .substring(index + str.length + 4)
          .replaceAll('Minuten', 'min')
          .replaceAll('Stunden', 'h')
          .replaceAll('Stunde', 'h');
      }
    });

    return ret;
  }

  static getDiffuculty(attrAr) {
    const pre = '🍵 ';
    if (
      attrAr.some(
        (attr) =>
          attr.toLowerCase().indexOf('gesamtzeit') >= 0 &&
          attr.toLowerCase().indexOf('stunde') >= 0
      )
    ) {
      return pre + 'hard';
    } else {
      const total = this.getTotalTime(attrAr);

      try {
        const split1 = total.split(' ')[1];
        // console.log('split1', split1);
        if (total.indexOf(' h ') < 0 && +split1 <= 35) {
          return pre + 'easy';
        }
      } catch (error) {
        return pre + 'medium';
      }

      return pre + 'medium';
    }
  }

  static getDateTime(recipe) {
    if (recipe && recipe.fields.dateCreated) {
      return (
        '📅 ' +
        new Date(recipe.fields.dateCreated).toLocaleString('de-DE', {
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
  static changeColor(cssFileName) {
    console.log(`changeColor : ${cssFileName}`);

    require(`../color-schemes/${cssFileName}.css`);

    // this.loadFile(`../color-schemes/${cssFileName}.css`, 'css');

    // merken im Cookie
    Cookies.set('colors', cssFileName);
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
