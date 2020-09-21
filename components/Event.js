import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { Box, Tag, Button, Flex, Image, Divider } from '@chakra-ui/core'

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
      <Box position="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} h="50%">
        <Image
          src={performers[0].image ? performers[0].image : 'https://via.placeholder.com/300/fff.png'}
          alt={title}
          w="100%"
          objectFit="cover"
          height="150px"
        />
        <Tag variantColor="maroon" position="absolute" top="8px" right="16px" size="sm">
          <Box as="span" fontSize="xs" color="white" fontWeight="semibold" textTransform="uppercase">
            {type}
          </Box>
        </Tag>
        {
          imageHoverClass &&
          <Flex position="absolute" top="0" w="100%" h="100%" justify="center" align="center"
          bg="rgba(0, 0, 0, 0.5)">
            <Button variantColor="blue" textTransform="uppercase" size="sm">Buy</Button>
          </Flex>
        }
      </Box>
      <Box p="5">
        <Box fontWeight="semibold" fontSize="sm" isTruncated>
          {title}
        </Box>
        <Box py="1">
          <Box as="span" color="gray.600" fontSize="xs">
            <Flex>
              <Box as="span">{ new Date(datetime_utc).toLocaleString('default', { month: 'long' }) }</Box>
              &nbsp;
              <Box as="span">{ new Date(datetime_utc).getDate() }</Box>
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
            <Box as="span" fontSize="sm">
              {stats.lowest_sg_base_price ? `$ ${stats.lowest_sg_base_price}` : 'free' }
            </Box>
            <Box as={ FiHeart } color="gray.600"></Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Event