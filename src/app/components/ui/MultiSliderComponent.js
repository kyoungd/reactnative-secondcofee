import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const Wrapper = styled.View`
  padding: 16px;
`

const Slider = styled(MultiSlider).attrs({
  snapped: true,
  allowOverlap: true,
  containerStyle: {
    alignItems: 'center',
    height: 25
  },
  trackStyle: {
    height: 3,
    backgroundColor: '#dee3ea'
  },
  selectedStyle: {
    backgroundColor: '#4d001f'
  },
  markerStyle: {
    height: 24,
    width: 24,
    backgroundColor: '#000',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 12
  }
})``

export default function MultiSliderComponent({ range, onSliderValuesChange }) {
  return (
    <Wrapper>
      <Slider
        min={1000}
        max={10000}
        step={10}
        values={range}
        onValuesChange={values => onSliderValuesChange(values)}
      />
    </Wrapper>
  )
}

MultiSliderComponent.propTypes = {
  range: PropTypes.array.isRequired,
  onSliderValuesChange: PropTypes.func.isRequired
}
