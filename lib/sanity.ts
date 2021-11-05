import sanityClient from '@sanity/client';

interface ClientOptions {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
}

const options: ClientOptions = {
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_DATASET as string,
  apiVersion: '2021-04-13',
  useCdn: false,
};

export default sanityClient(options);
