import { Flex, Divider } from '@chakra-ui/core'

import Category from './Category'

const CategoriesList = ({ categories }) => {
  return (
    <Flex>
      {categories.map((category, index) => {
        <Flex key={index}>
          <Category category={category} />
          <Divider />
        </Flex>
      })}
    </Flex>
  )
}

export default CategoriesList