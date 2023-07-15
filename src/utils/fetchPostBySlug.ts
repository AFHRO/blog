import fetchContentfulData from "./fetchContentfulData";
import getRichTextString from "./getRichTextString";
import transformWordPressPost from "./transformWordPressPost";


const fetchPostBySlug = async (slug: string) => {
	// const response:any= await graphqlClient.request(`{
	// 	post(id: "${slug}", idType: SLUG) {
	// 	  id
	// 	  title
	// 	  date
	// 	  content
	// 	  excerpt
	// 	  slug
	// 	  featuredImage {
	// 		node {
	// 		  sourceUrl
	// 		}
	// 	  }
	// 	  categories {
	// 		nodes {
	// 		  id
	// 		  name
	// 		  slug
	// 		}
	// 	  }
	// 	  author {
	// 		node {
	// 		  firstName
	// 		  lastName
	// 		}
	// 	  }
	// 	}
	//   }`);


	const POST_QUERY=`{
		blogPostCollection(where: {
			slug: "${slug}"
		}, limit: 1) {
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
			}
	}`;
	const response:any= await fetchContentfulData(POST_QUERY);

	let post = await response?.data?.blogPostCollection?.items?.[0];

	post.featured_media = post.featuredImage?.url;

	post.content = getRichTextString(post.content.json);


	post.categoryName=post.category?.title ?? '';

	
  
	post= transformWordPressPost(post);	

	return post;
};

export default fetchPostBySlug;
