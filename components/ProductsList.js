import { Grid } from '@chakra-ui/core'

import Product from './Product'

const ProductsList = ({ products }) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {products.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
    </Grid>
  )
}

export default ProductsList