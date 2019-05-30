import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { FilterOptionListItem } from '../list-items'

const Wrapper = styled.View`
  padding: 16px 16px 0px;
`

const ListWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

export default function FilterOptionsListView({
  items,
  activeItems,
  onItemPress
}) {
  return (
    <Wrapper>
      <ListWrapper>
        {items.map((item, index) => (
          <FilterOptionListItem
            key={index}
            label={item}
            active={activeItems.includes(item)}
            onPress={() => onItemPress(item)}
          />
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

FilterOptionsListView.propTypes = {
  items: PropTypes.array.isRequired,
  activeItems: PropTypes.array.isRequired,
  onItemPress: PropTypes.func.isRequired
}
