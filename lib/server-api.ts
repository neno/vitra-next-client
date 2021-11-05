import sanityClient from './sanity';

interface ITitleSlug {
  title: string;
  slug: string;
}

export async function fetchProducts(): Promise<ITitleSlug[]> {
  const products: ITitleSlug[] = await sanityClient.fetch(`
    *[_type=="product"]
    {
      title,
      'slug': value.current
    }
  `);

  return products;
}
