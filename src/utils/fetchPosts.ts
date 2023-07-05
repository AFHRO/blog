
import fetchPostsFromWP from "./fetchPostsFromWP";

const fetchPosts = async (page: number = 1, size = 9) => {

  

  // const response = await Promise.all([
  //   fetchImagesFromWP(page, size),
  //   fetchPostsFromSanity(page, size),
  // ]);

  // const [imagesObject, sanityPosts] = response;
  // const posts= await sanityPosts.map((post:any) => {
  //   post.featured_media = imagesObject[post.slug?.current];
    
  //   post.slug = post.slug?.current;
  //   return post;
  // });


  // return posts;
const posts= await fetchPostsFromWP(page, size);

  return posts;
};

export default fetchPosts;
