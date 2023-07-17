import fetchContentfulData from "./fetchContentfulData";
import getRichTextString from "./getRichTextString";
import transformWordPressPost from "./transformWordPressPost";

export const fetchPostsFromContentful = async (page = 1, size = 9, search?: string, category?: string) => {
    const POSTS_QUERY = `
    {
        blogPostCollection( locale: "en-US", order: [originalPublishDate_DESC],
        ${search ? `where: {
            OR: [
                {title_contains: "${search}"},
                {content_contains: "${search}"}
                
                ]
            }`: ''
        }
        ${category ? `where: {
            category: {
                slug_contains: "${category}"
            }
        }`: ''}
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
                    slug
                    category {
                        title
                    }
                    author {
                        name
                    }
            }
            total
    }
    }`

    const response = await fetchContentfulData(POSTS_QUERY);


    if (!response?.data?.blogPostCollection?.items) {
        return {
            items: []
        }
    }

    const posts = response.data.blogPostCollection.items?.map((post: any) => {

        post.featured_media = post.featuredImage?.url;

        post.content = getRichTextString(post.content?.json || "");

        post.categoryName =  post.category?.title ?? '';

        post = transformWordPressPost(post);

        return post;
    });

    const total = response.data.blogPostCollection.total;




    return {posts, total};

}