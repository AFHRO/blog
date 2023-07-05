import fetchPostsFromWP from "./fetchPostsFromWP";


const searchPosts = async (searchQuery?: string, page: number = 1) => {

  // const response = await Promise.all([
  //   fetchImagesFromWP(page, 9, searchQuery),
  //   fetchPostsFromSanity(page, 9, searchQuery),

  // ]);

  // const [imagesObject, sanityPosts] = response;

  // const posts= await sanityPosts.map((post:any) => {
  //   post.featured_media = imagesObject[post.slug?.current];
    
  //   post.slug = post.slug?.current;
  //   return post;
  // });

  // return posts;
  
  const posts= await fetchPostsFromWP(page, 9, searchQuery);

  return posts;
};

export default searchPosts;
