import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, RefreshControl } from 'react-native'
import styled from 'styled-components/native'
import { ListLoadingComponent, ListEmptyComponent } from '../ui'
import { JobListItem } from '../list-items'

const Wrapper = styled.View`
  flex: 1;
`

export default class JobsListView extends React.Component {
  state = {
    refreshing: false
  }

  onListRefresh() {
    this.setState({ refreshing: true })

    setTimeout(() => {
      this.setState({ refreshing: false })
    }, 2000)
  }

  render() {
    const { loading, items, onItemPress } = this.props
    const { refreshing } = this.state

    return (
      <Wrapper>
        {loading && <ListLoadingComponent text="Loading jobs" />}

        {!loading && items.length === 0 && (
          <ListEmptyComponent text="No job listings available at the moment." />
        )}

        {!loading && items.length > 0 && (
          <FlatList
            style={{ flex: 1 }}
            data={items}
            keyExtractor={item => items.indexOf(item).toString()}
            renderItem={({ item }) => (
              <JobListItem {...item} onPress={() => onItemPress(item)} />
            )}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => this.onListRefresh()}
              />
            }
          />
        )}
      </Wrapper>
    )
  }
}

JobsListView.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onItemPress: PropTypes.func.isRequired
}
