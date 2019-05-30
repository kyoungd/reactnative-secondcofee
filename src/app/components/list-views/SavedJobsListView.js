import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, RefreshControl } from 'react-native'
import styled from 'styled-components/native'
import { ListLoadingComponent, ListEmptyComponent, Separator } from '../ui'
import { SavedJobListItem } from '../list-items'

const Wrapper = styled.View`
  flex: 1;
`

export default class SavedJobsListView extends React.Component {
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
    const { loading, items, onItemPress, onItemRemovePress } = this.props
    const { refreshing } = this.state

    return (
      <Wrapper>
        {loading && <ListLoadingComponent text="Loading saved jobs" />}

        {!loading && items.length === 0 && (
          <ListEmptyComponent text="You have not saved any jobs yet." />
        )}

        {!loading && items.length > 0 && (
          <FlatList
            style={{ flex: 1 }}
            data={items}
            keyExtractor={item => items.indexOf(item).toString()}
            ItemSeparatorComponent={() => <Separator />}
            renderItem={({ item }) => (
              <SavedJobListItem
                {...item}
                onPress={() => onItemPress(item)}
                onRemovePress={() =>
                  items.length > 1 && onItemRemovePress(item)
                }
              />
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

SavedJobsListView.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onItemPress: PropTypes.func.isRequired,
  onItemRemovePress: PropTypes.func.isRequired
}
