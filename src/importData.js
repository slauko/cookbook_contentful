// import { createClient } from 'contentful';
import * as Contentful from 'contentful-management';
// const contentful = require('contentful-management');

export default class CMApi {
  constructor() {}

  async getEnv() {
    const REACT_APP_SPACE_ID = process.env.REACT_APP_SPACE_ID;
    const REACT_APP_AUTH_TOKEN_MNGMT = process.env.REACT_APP_AUTH_TOKEN_MNGMT;

    // const _client = contentful.createClient({accessToken: REACT_APP_AUTH_TOKEN});
    const client = Contentful.createClient({
      accessToken: REACT_APP_AUTH_TOKEN_MNGMT,
      space: REACT_APP_SPACE_ID,
    });
    const space = await client.getSpace(REACT_APP_SPACE_ID);
    // console.log('space', space);
    const env = await space.getEnvironment('master');
    return env;
  }

  async getContentTypesFromDistributionApi() {
    const env = await this.getEnv();
    const types = await env.getContentTypes();
    console.log('types', types);
    return types;
  }

  async createIngridient() {
    const env = await this.getEnv();
    const entry = await env.createEntry('ingridient', {
      fields: {
        id: { 'en-US': 7 },
        description: { 'en-US': 'Kurkuma' },
        amount: { 'en-US': 3 },
        unit: { 'en-US': 'g' },
      },
    });
    entry.publish();
  }

  async getAssets() {
    const env = await this.getEnv();
    const assets = await env.getAssets();
    console.log('assets', assets);
  }
}

function importChristoph() {
  // const cm = require('contentful-management');
  // const fs = require('fs');
  // const { setTimeout } = require('timers');
  // const client = cm.createClient({
  //   accessToken: 'CFPAT-sC7awhtT2aVpLiOaxg_65wLLycHqMzoTqZ98M1YGyZs',
  //   space: 'h5pc0o4cj51n',
  // });
  // client.getSpace('h5pc0o4cj51n').then((space) => {
  //   space.getEnvironment('master').then((env) => {
  //     fs.readFile('recipes.json', 'utf8', (err, data) => {
  //       const recipes = JSON.parse(data);
  //       recipes.forEach((recipe, index) => {
  //         env
  //           .createEntry('recipe', {
  //             fields: {
  //               id: { 'en-US': index + 1 },
  //               title: { 'en-US': recipe.title },
  //               imageUrl: { 'en-US': recipe.picture },
  //               rating: { 'en-US': parseFloat(recipe.rating) },
  //               ingridientsJson: { 'en-US': recipe.ingredients },
  //               descriptionNonrich: { 'en-US': recipe.description },
  //               preparationNonrich: { 'en-US': recipe.preparation },
  //               dateCreated: { 'en-US': new Date() },
  //               attributes: { 'en-US': recipe.tags },
  //             },
  //           })
  //           .then((entry) => {
  //             entry.publish();
  //           });
  //       });
  //     });
  //   });
  // });
}
