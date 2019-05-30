import React from 'react'
import { Container } from 'native-base'
import { SafeAreaViewWrapper, CustomStatusBar } from 'components/ui'
import { JobsListView } from 'components/list-views'
import { SAMPLE_JOB_LISTINGS, SAMPLE_JOB_DETAIL } from 'data/sampleData'

export default class JobsScreen extends React.Component {
  state = {
    loading: false,
    jobs: []
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({
        jobs: SAMPLE_JOB_LISTINGS,
        loading: false
      })
    }, 1500)
  }

  render() {
    const { loading, jobs } = this.state
    const { navigation } = this.props

    return (
      <SafeAreaViewWrapper>
        <Container>
          <CustomStatusBar />
          <JobsListView
            loading={loading}
            items={jobs}
            onItemPress={item =>
              navigation.navigate('JobDetail', {
                result: JSON.stringify(SAMPLE_JOB_DETAIL)
              })
            }
          />
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
