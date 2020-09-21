import { SimpleGrid } from '@chakra-ui/core'

import Event from './Event'

const EventsList = ({ events }) => {
  return (
    <SimpleGrid columns={{sm: 2, md: 3}} spacing={10}>
      {events.map(event => (
        <Event key={event.id} {...event}/>
      ))}
    </SimpleGrid>
  )
}

export default EventsList