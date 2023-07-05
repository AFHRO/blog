import {createClient} from "@sanity/client";
import { PUBLIC_SANITY_PROJECT_ID } from "$env/static/public";

const sanityClient = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  apiVersion: new Date().toISOString().slice(0, 10),
  useCdn: false,
  dataset: "production",
});

export default sanityClient;