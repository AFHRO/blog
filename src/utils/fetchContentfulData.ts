import { PUBLIC_CONTENTFUL_ACCESS_TOKEN, PUBLIC_CONTENTFUL_ENV, PUBLIC_CONTENTFUL_SPACE_ID } from "$env/static/public";

const fetchContentfulData = async (query:string) => {
    const url = `https://graphql.contentful.com/content/v1/spaces/${PUBLIC_CONTENTFUL_SPACE_ID}/environments/${PUBLIC_CONTENTFUL_ENV}`;
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
      }),
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
  
      return result;
    } catch (error:any) {
      console.log(error);
      throw Error('Error in processing request', error);
    }
  };
  

  export default fetchContentfulData;