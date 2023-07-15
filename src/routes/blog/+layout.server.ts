import fetchContentfulData from 'src/utils/fetchContentfulData.js';

export async function load ()  {
    const CATEGORIES_QUERY = `
    {
        postCategoryCollection(locale: "en-US", order: [title_ASC]) {
            items {
                title
                slug
            }
        }
    }
    `;

    const response = await fetchContentfulData(CATEGORIES_QUERY);

    if (!response?.data?.postCategoryCollection?.items) {
        return {
            categories: []
        }
    }
    return {
        categories: response.data.postCategoryCollection.items
    }
};