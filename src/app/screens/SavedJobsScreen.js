import React from 'react'
import { Container } from 'native-base'
import Toast from 'react-native-easy-toast'
import { SafeAreaViewWrapper, CustomStatusBar } from 'components/ui'
import { SavedJobsListView } from 'components/list-views'
import { SAMPLE_JOB_LISTINGS, SAMPLE_JOB_DETAIL } from 'data/sampleData'

export default class SavedJobsScreen extends React.Component {
  state = {
    loading: false,
    refreshing: false,
    savedJobs: []
  }

  handleSavedJobListItemRemovePress(item) {
    const { savedJobs: oldValues } = this.state

    if (oldValues.includes(item)) {
      const before = oldValues.slice(0, oldValues.indexOf(item))
      const after = oldValues.slice(oldValues.indexOf(item) + 1)

      this.setState({
        savedJobs: [...before, ...after]
      })
    } else {
      this.setState({
        savedJobs: [...oldValues, item]
      })
    }

    this.refs.toast.show('Job has been removed from your list', 2000)
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({
        savedJobs: SAMPLE_JOB_LISTINGS,
        loading: false
      })
    }, 1500)
  }

  render() {
    const { loading, savedJobs } = this.state
    const { navigation } = this.props

    return (
      <SafeAreaViewWrapper>
        <Container>
          <CustomStatusBar />

          <SavedJobsListView
            loading={loading}
            items={savedJobs}
            onItemPress={item =>
              navigation.navigate('JobDetail', {
                result: JSON.stringify(SAMPLE_JOB_DETAIL)
              })
            }
            onItemRemovePress={item =>
              this.handleSavedJobListItemRemovePress(item)
            }
          />

          <Toast
            ref="toast"
            positionValue={220}
            textStyle={{
              fontFamily: 'SourceSansProRegular',
              fontSize: 14,
              color: '#fff'
            }}
          />
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
