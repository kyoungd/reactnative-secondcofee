import React from 'react'
import { Container } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components/native'
import {
  SafeAreaViewWrapper,
  CustomStatusBar,
  CustomActivityIndicator,
  ImageOverlayComponent,
  MultiSliderComponent,
  RegularButton,
  FormField
} from 'components/ui'
import { SectionHeader } from 'components/headers'
import { FilterOptionsListView } from 'components/list-views'
import { SAMPLE_FILTER_OPTIONS, SAMPLE_SEARCH_RESULTS } from 'data/sampleData'
import { DescriptionText } from './LandingScreen'

const SearchAreaBackground = styled.ImageBackground.attrs({
  source: require('assets/images/search_bg.jpeg')
})`
  width: null;
  height: 200;
`

const PriceText = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  color: #4d001f;
`

const ButtonWrapper = styled.View`
  margin: 0px 16px;
`

export default class SearchScreen extends React.Component {
  state = {
    loading: false,
    filterOptions: SAMPLE_FILTER_OPTIONS,
    activeFilterOptions: [],
    salaryRange: [3500, 8000],
    searchTerm: ''
  }

  handleFilterItemPress(item) {
    const { activeFilterOptions: oldValues } = this.state

    if (oldValues.includes(item)) {
      const before = oldValues.slice(0, oldValues.indexOf(item))
      const after = oldValues.slice(oldValues.indexOf(item) + 1)

      this.setState({
        activeFilterOptions: [...before, ...after]
      })
    } else {
      this.setState({
        activeFilterOptions: [...oldValues, item]
      })
    }
  }

  search() {
    const { navigation } = this.props

    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
      navigation.navigate('SearchResults', {
        results: JSON.stringify(SAMPLE_SEARCH_RESULTS)
      })
    }, 1500)
  }

  render() {
    const {
      loading,
      filterOptions,
      activeFilterOptions,
      salaryRange,
      searchTerm
    } = this.state

    return (
      <SafeAreaViewWrapper>
        <Container>
          <CustomStatusBar />

          {loading && <CustomActivityIndicator />}

          <KeyboardAwareScrollView>
            <SearchAreaBackground>
              <ImageOverlayComponent>
                <DescriptionText>
                  Search and filter jobs to find the perfect match for you.
                </DescriptionText>

                <FormField
                  regular
                  disabled={loading}
                  returnKeyType="search"
                  label="Search jobs"
                  value={searchTerm}
                  onChangeText={text => this.setState({ searchTerm: text })}
                  onSubmitEditing={() => this.search()}
                />
              </ImageOverlayComponent>
            </SearchAreaBackground>

            {filterOptions.map((item, index) => (
              <React.Fragment key={index}>
                <SectionHeader>{item.title}</SectionHeader>
                <FilterOptionsListView
                  items={item.options}
                  activeItems={activeFilterOptions}
                  onItemPress={item => this.handleFilterItemPress(item)}
                />
              </React.Fragment>
            ))}

            <SectionHeader>
              Salary Range: {`   `}
              <PriceText>{`$${salaryRange[0]} - $${salaryRange[1]}`}</PriceText>
            </SectionHeader>
            <MultiSliderComponent
              range={salaryRange}
              onSliderValuesChange={values =>
                this.setState({ salaryRange: values })
              }
            />

            <ButtonWrapper>
              <RegularButton text="SEARCH" onPress={() => this.search()} />
            </ButtonWrapper>
          </KeyboardAwareScrollView>
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
