import fetchContentfulData from "src/utils/fetchContentfulData"

export const load = async () => {
    const STAFF_QUERY = `
    {
        staffCollection( limit: 10, locale: "en-US" ) {
        items {
            name
            image {
                url
                width
                height
            }
            department
    
      }
    }
    }`

    const response = await fetchContentfulData(STAFF_QUERY);


    if (!response?.data?.staffCollection?.items) {
        return {
            items: []
        }
    }

    const staff = {items: response.data.staffCollection.items}


    return staff;

}