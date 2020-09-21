import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid, Stack, Heading, Divider, Skeleton, Flex } from '@chakra-ui/core'

import { fetchEvents } from '../store/actions'
import PageLayout from '../layouts/PageLayout'
import EventsList from '../components/EventsList'
import Pagination from '../components/Pagination'

const Home = ({ dispatch, events, loading, meta, error }) => {

  const [ currentPage, setCurrentPage ] = useState(1)

  useEffect(() => {
    dispatch(fetchEvents(2))
  }, [dispatch])

  const renderEvents = () => {
    if (loading) {
      const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
     return (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {data.map(item => (
            <div key="item">
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
        <Heading as="h5" size="lg">SEINET CLONE</Heading>
        <Divider />
      </Stack>
      {renderEvents()}

      <Stack align="center">
        <Flex align="center">
          <Pagination totalPages={Math.ceil(meta.total / 25)} currentPage={currentPage} />
        </Flex>
      </Stack>
    </PageLayout>
  )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.events.loading,
  events: state.events.events,
  meta: state.events.meta,
  error: state.events.error,
})
// Connect Redux to React
export default connect(mapStateToProps)(Home)
