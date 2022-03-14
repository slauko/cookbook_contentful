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
