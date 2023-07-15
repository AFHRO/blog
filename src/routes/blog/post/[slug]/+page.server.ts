
/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        // TODO log the user in

        const formData= await request?.formData();

        
        const email=formData.get('email');
        
        if(email){
            return {
                subscribed:true,
            }
        }
    }
};



