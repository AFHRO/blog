import { PUBLIC_CLOUDINARY_CLOUD_NAME } from "$env/static/public";
import { Cloudinary } from "@cloudinary/url-gen";


const cloudinaryInstance = new Cloudinary({
    cloud: {
      cloudName: PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
  });

const getImageUrl = (imageId: string) =>{
    return cloudinaryInstance.image(imageId).format('auto').quality('auto').toURL();
}


export default getImageUrl;