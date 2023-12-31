import graphqlClient from "./graphqlClient";
import transformWordPressPost from "./transformWordPressPost";

const fetchPostsFromWP = async (page=1, size=9, search?: string) => {
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
            title
            content
            featuredImage {
              node {
                sourceUrl

              }
            }
            categories {
                nodes {
                    name
                }
            }
            author {
                node {
                    firstName
                    lastName
                }
            }
            date
          }
        }
      }`);
      const posts = response?.posts.nodes.map((post:any) => {
         return {...transformWordPressPost(post)}

    });


    return posts;
      
}


export default fetchPostsFromWP;