import convertUnicodeTOString from "./htmlCodeToSymbol";

const transformWordPressPost = (post: any) => {
  const {
    title,
    content,
    excerpt,
    date,
    modified,
    slug,
    featured_media,
    jetpack_featured_media_url,
    categories,
    id,
    better_featured_image,
    _embedded,
  } = post;

  const { author } = _embedded||{};



  return {
    title: convertUnicodeTOString(title),
    content,
    excerpt,
    date: formatDate(date),
    modified,
    slug,
    categories,
    id,
    reading_time: getReadingTime(content),
    featured_media: post.featuredImage?.node.sourceUrl,
              categoryName: post.categories.nodes[0].name,
    author: `${post.author?.node.firstName} ${post.author?.node.lastName}`,
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
  const noOfWords = content.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
};

export default transformWordPressPost;
