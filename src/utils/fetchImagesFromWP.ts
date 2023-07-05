import graphqlClient from "./graphqlClient";

const fetchImagesFromWP = async (page=1, size=9, search?: string) => {
    const response:any= await graphqlClient.request(`{
        posts(where:{
            ${search?`search: "${search}"`:''}
          offsetPagination:{
            size: ${size}
            offset: ${(page - 1) * size}
          }
        }) {
          nodes {
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            
          }
        }
      }`);
      const images= await response?.posts?.nodes.reduce((acc:any, curr:any) => {
        acc[curr.slug] = curr.featuredImage?.node.sourceUrl;
        return acc;
      }, {});

      return images;

      
}


export default fetchImagesFromWP;