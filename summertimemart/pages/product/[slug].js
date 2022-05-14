import React from 'react';
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({product, products}) => {
  const { image, name, description, price } = product;
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img src={urlFor(image && image[0])
            } height={700}/>
          </div>
          <div className='small-images-container'>
            {image?.map((item, i) => (
              <img src={urlFor(item)}
              className=''
              onMouseEnter=''
              height={200}
              />
            ))}
          </div>
          <div className='product-details-desc'>

          </div>
        </div>
      </div>
    </div>
  )
}
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({params:{ slug }}) => {
  const queryProduct = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const queryProducts = `*[_type == "product"]`;

  const products = await client.fetch(queryProducts);
  const product = await client.fetch(queryProduct);

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, product }
  }
}



export default ProductDetails