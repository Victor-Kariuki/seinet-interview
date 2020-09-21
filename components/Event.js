import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { Box, Button, Flex, Tag, TagLabel, Image, Divider } from '@chakra-ui/core'

const Event = ({ title, datetime_utc, type, stats, performers, venue }) => {

  const [ imageHoverClass, setImageHoverClass ] = useState(false)

  const handleMouseEnter = () => {
    return setImageHoverClass(true)
  }

  const handleMouseLeave = () => {
    return setImageHoverClass(false)
  }

  return (
    <Box boxShadow="md" w="100%" borderWidth="0" rounded="md" overflow="hidden">
      <Box position="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={performers[0].image} alt={title} w="100%"/>
        <Tag position="absolute" top="8px" right="16px" variantColor="red" size="sm">
          <TagLabel color="white" fontSize="xs" fontWeight="semibold" textTransform="uppercase">
            {type}
          </TagLabel>
        </Tag>
        {
          imageHoverClass &&
          <Flex position="absolute" top="0" w="100%" h="100%" justify="center" align="center"
          backgroundColor="rgba(0, 0, 0, 0.5)">
            <Button variantColor="blue" textTransform="uppercase" size="sm">Buy</Button>
          </Flex>
        }
      </Box>
      <Box p="5">
        <Box mt="1" fontWeight="semibold" isTruncated>
          {title}
        </Box>
        <Box py="1">
          <Box as="span" color="gray.600" fontSize="sm">
            <Flex>
              { new Date(datetime_utc).toLocaleString('default', { month: 'long' }) }
              <Divider orientation="vertical"/>
              { new Date(datetime_utc).toLocaleString('en-US', { hour: 'numeric', hour12: true }) }
            </Flex>
          </Box>
        </Box>
        <Box as="span" fontSize="xs" color="gray.600">
          Watch on {venue.name}
        </Box>
        <Box py="2">
          <Flex justify="space-between" align="center">
            <Box as="span" color="gray.600" fontSize="sm">{stats.lowest_sg_base_price}</Box>
            <Box as={ FiHeart } color="gray.600"></Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Event