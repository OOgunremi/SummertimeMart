import React from 'react';
import { client, urlFor } from '../../lib/client';
import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Product } from '../../components.js';

const ProductDetails = ({product, products}) => {
  const { image, name, description, price } = product;
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img src={urlFor(image && image[0])
            } height={500}/>
          </div>
          {/* <div className='small-images-container'>
            {image?.map((item, i) => (
              <img src={urlFor(item)}
              className=''
              onMouseEnter=''
              height={200}
              />
            ))}
          </div> */}
          <div className='product-detail-desc'>           
              <h1>{name}</h1>
              <div className='reviews'>
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <p>(20)</p>
              </div>
              <h4>Details</h4>
              <p>{description}</p>
              <p className='price'> ${price} </p>
              <div className='quantity'>

              <h3>Quantity</h3>
              <p className='quantity-desc'>
                <span className='minus' onClick=''><AiOutlineMinus/></span>
                <span className='num' onClick=''>2</span>
                <span className='plus' onClick=''><AiOutlinePlus/></span>
              </p>
              </div>
              <div className='buttons'>
                <button className='add-to-cart' type= 'button' onClick=''> Add to Cart</button>
                <button className='buy-now' type= 'button' onClick=''> Buy Now</button>
              </div>
          </div>
        </div>

      </div>
      <div className='maylike-products-wrapper'>
          <h2>You may also like</h2>
          <div className='marquee'>
            <div className='maylike-products-container track'>
              {products.map((item) => (<Product key={item._id} product={item}
              />
              ))}
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