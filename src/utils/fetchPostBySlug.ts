import graphqlClient from "./graphqlClient";


const fetchPostBySlug = async (slug: string) => {
	const response:any= await graphqlClient.request(`{
		post(id: "${slug}", idType: SLUG) {
		  id
		  title
		  date
		  content
		  excerpt
		  slug
		  featuredImage {
			node {
			  sourceUrl
			}
		  }
		  categories {
			nodes {
			  id
			  name
			  slug
			}
		  }
		  author {
			node {
			  firstName
			  lastName
			}
		  }
		}
	  }`);

	let post = response?.post;

	

	return post;
};

export default fetchPostBySlug;
