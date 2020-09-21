import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid, Stack, Heading, Divider, Skeleton } from '@chakra-ui/core'

import { fetchEvents } from '../store/actions'
import PageLayout from '../layouts/PageLayout'
import EventsList from '../components/EventsList'

const Home = ({ dispatch, events, loading, error }) => {

  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch])

  const renderEvents = () => {
    if (loading) {
      const data = [0, 1, 2, 3, 4, 5, 6];
     return (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {data.map(item => (
            <div>
              <Skeleton height="20px" my="10px" />
              <Skeleton height="20px" my="10px" />
              <Skeleton height="20px" my="10px" />
            </div>
          ))}
        </Grid>
      )
    }
    return <EventsList events={events} />
  }

  return (
    <PageLayout title="Home">
      <Stack align="center">
        <Heading>SEINET CLONE</Heading>
        <Divider />
      </Stack>
      {renderEvents()}
    </PageLayout>
  )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.events.loading,
  events: state.events.events,
  error: state.events.error,
})
// Connect Redux to React
export default connect(mapStateToProps)(Home)
