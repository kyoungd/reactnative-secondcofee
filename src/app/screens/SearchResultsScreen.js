import React from 'react'
import { Container } from 'native-base'
import { SafeAreaViewWrapper, CustomStatusBar } from 'components/ui'
import { JobsListView } from 'components/list-views'
import { defaultStackNavigatorHeaderStyle } from 'styles/common'

export default class SearchResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'Results',
    headerBackTitle: null,
    ...defaultStackNavigatorHeaderStyle
  }

  render() {
    const { navigation } = this.props
    const resultsPayload = navigation.getParam('results', '')
    const jobs = JSON.parse(resultsPayload)

    return (
      <SafeAreaViewWrapper>
        <Container>
          <CustomStatusBar />
          <JobsListView
            loading={false}
            items={jobs}
            onItemPress={item =>
              navigation.navigate('JobDetail', {
                result: JSON.stringify(item)
              })
            }
          />
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
