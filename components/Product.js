import { Box, Image } from '@chakra-ui/core'

const Product = ({ image, title, date, time, price }) => (
  <Box w="100%" borderWidth="1px" rounded="md" overflow="hidden">
    <Image src={image} alt={title} />
    <Box p="6">
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {title}
      </Box>
      <Box>
        {date}
        <Box as="span" color="gray.600" fontSize="sm">
          {time}
        </Box>
      </Box>
    </Box>
  </Box>
)

export default Product