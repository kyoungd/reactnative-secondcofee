import React from 'react'
import { Container, Content } from 'native-base'
import { SafeAreaViewWrapper, CustomStatusBar, Separator } from 'components/ui'
import { SectionHeader } from 'components/headers'
import { SettingsListItem } from 'components/list-items'
import { AboutUsModal } from 'modals'
import { resetNavigationStack } from 'utils'

export default class SettingsScreen extends React.Component {
  state = {
    alertsEnabled: true,
    analyticsEnabled: false,
    showAboutUs: false
  }

  handleSwitchValueChange(category, value) {
    this.setState({
      [`${category}Enabled`]: value
    })
  }

  render() {
    const { alertsEnabled, analyticsEnabled, showAboutUs } = this.state
    const { navigation } = this.props

    return (
      <SafeAreaViewWrapper>
        <Container>
          <CustomStatusBar />

          <Content>
            <SectionHeader>Personalize</SectionHeader>
            <SettingsListItem
              withSwitch
              isActive={alertsEnabled}
              iconName="ios-notifications"
              text="Email Alerts"
              onSwitchValueChange={value =>
                this.handleSwitchValueChange('alerts', value)
              }
            />
            <Separator />

            <SettingsListItem
              withSwitch
              isActive={analyticsEnabled}
              iconName="ios-analytics"
              text="Share analytics info"
              onSwitchValueChange={value =>
                this.handleSwitchValueChange('analytics', value)
              }
            />

            <SectionHeader>General Settings</SectionHeader>
            <SettingsListItem
              iconName="ios-information-circle"
              text="About Us"
              onPress={() => this.setState({ showAboutUs: true })}
            />
            <Separator />

            <SettingsListItem
              iconName="ios-log-out"
              text="Sign Out"
              onPress={() => resetNavigationStack(navigation)}
            />
          </Content>

          {showAboutUs && (
            <AboutUsModal
              onDismiss={() => this.setState({ showAboutUs: false })}
            />
          )}
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
