// 'slug': value.current,import { NextApiRequest, NextApiResponse } from 'next';
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchProducts } from '../../lib/server-api';

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const industries = await fetchProducts();
  res.status(200).json(industries);
};

export default getProducts;
