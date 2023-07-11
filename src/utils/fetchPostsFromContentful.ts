import fetchContentfulData from "./fetchContentfulData";
import getRichTextString from "./getRichTextString";
import transformWordPressPost from "./transformWordPressPost";

export const fetchPostsFromContentful = async (page=1, size=9, search?: string) => {
    const POSTS_QUERY = `
    {
        blogPostCollection( locale: "en-US", order: [originalPublishDate_DESC],
        ${search?`where: {
            OR: [
                {title_contains: "${search}"},
                {content_contains: "${search}"}
                
                ]
                }`:''}
                limit: ${size}, skip: ${(page - 1) * size}) {
                items {
                    title
                    featuredImage {
                        url
                        width
                        height
                    
                    }
                    originalPublishDate
                    content{
                        json

                    }
                    categoryName: category
            }
    }
    }`

    const response = await fetchContentfulData(POSTS_QUERY);


    if (!response?.data?.blogPostCollection?.items) {
        return {
            items: []
        }
    }

    const posts = response.data.blogPostCollection.items?.map((post:any) => {
      
        post.featured_media = post.featuredImage?.url;

        post.content = getRichTextString(post.content.json);
      
        post= transformWordPressPost(post);

        return post;
    })



    return posts;

}