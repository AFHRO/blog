import sanityClient from "./sanityCient";

const fetchPostsFromSanity = async (page: number = 1, size = 9, search?:string) => {

let response = await sanityClient.fetch(
    `*[_type == "post"] | ${search? `score(
        pt::text(body) match "${search}"
        || boost(pt::text(body) match "${search}*" + "*", 0.5)
        || boost(pt::text(body) match "${search}", 0.5)
      )
    |`:''} order(dateTime(publishedAt) desc) [${(page - 1) * size}...${page * size}]
    {
      title,
      slug,
      publishedAt,
      mainImage,
      body,
    }`

    // `*[_type == "post" && ${search?`[title, body] match ["${search}*", "${search}"]`:''}] | order(dateTime(publishedAt) desc) [${(page - 1) * size}...${page * size}]
    // {
    //   title,
    //   slug,
    //   publishedAt,
    //   mainImage,
    // }`
  );

  return response;
}

export default fetchPostsFromSanity;