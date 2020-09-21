import { Grid } from '@chakra-ui/core'

import Event from './Event'

const EventsList = ({ events }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={10}>
      {events.map(event => (
        <Event key={event.id} {...event}/>
      ))}
    </Grid>
  )
}

export default EventsList