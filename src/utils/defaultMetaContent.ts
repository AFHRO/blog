import { PUBLIC_SITE_NAME } from "$env/static/public";

const isPublishingSite= PUBLIC_SITE_NAME==='AHRO Scientific Publishing'

export default {
  title: PUBLIC_SITE_NAME,
  description: isPublishingSite? "Join our mission to advance scientific knowledge, facilitate collaboration, and promote breakthrough research. Our innovative publishing platform empowers researchers, academics, and experts worldwide to share their findings and contribute to the advancement of science. Together, let's shape the future of scientific publishing and drive meaningful progress in the pursuit of knowledge."
    :
    "Health research institute that aims to improve global health through high-quality research and capacity building",
    
  image: "https://afhro.org/wp-content/uploads/2023/06/Publishing-logo.png",

  url: "https://ahroscientific.com",
};
