import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { Grid, Stack, Heading, Divider, Skeleton, Flex } from '@chakra-ui/core'

import { fetchEvents } from '../store/actions'
import PageLayout from '../layouts/PageLayout'
import EventsList from '../components/EventsList'

const Home = () => {
  const dispatch = useDispatch()

  const events = useSelector(state => state.events.events)
  const meta = useSelector(state => state.events.meta)
  const loading = useSelector(state => state.events.loading)
  const error = useSelector(state => state.events.error)

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected)
  }

  useEffect(() => {
    dispatch(fetchEvents(currentPage))
  }, [currentPage])

  const renderEvents = () => {
    if (loading) {
      const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
     return (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {data.map(item => (
            <div key={item}>
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

      <Stack align="center" p="6">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.ceil(meta.total / 25)}
          marginPagesDisplayed={5}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
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
