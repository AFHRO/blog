import convertUnicodeTOString from "./htmlCodeToSymbol";




  

const transformWordPressPost = (post: any) => {
  const {
    title,
    content,
    originalPublishDate,
    date,
    modified,
    slug,
    categories,
    categoryName,
    id,
    author
  } = post;


  return {
    title: convertUnicodeTOString(title),
    content,
    date: formatDate(originalPublishDate?originalPublishDate:date),
    modified,
    slug,
    categories,
    categoryName,
    id,
    reading_time: getReadingTime(content),
   

    featured_media: post.featured_media,
    // featured_media: post.featuredImage?.node.sourceUrl,
    //           categoryName: post.categories.nodes[0].name,
    author:author?.name || author ||'Admin',
    excerpt:post.excerpt? convertUnicodeTOString(post.excerpt): undefined,
  };
};

// convert date to readable format
export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return newDate.toLocaleDateString("en-US", options);
};

// get reading time
export const getReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const noOfWords = content?.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
};

export default transformWordPressPost;
