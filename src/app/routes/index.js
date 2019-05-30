import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import Screens from 'screens'
import { defaultStackNavigatorHeaderStyle, tabBarOptions } from 'styles/common'
import {
  getDashboardNavigatorHeaderTitle,
  getDashboardNavigatorTabIconName,
  getNavigationHeaderRight
} from 'utils'

const MainStackNavigator = createStackNavigator(
  {
    Landing: Screens.LandingScreen,
    SignIn: Screens.SignInScreen,
    SignUp: Screens.SignUpScreen,
    ResetPassword: Screens.ResetPasswordScreen
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
      ...defaultStackNavigatorHeaderStyle
    }
  }
)

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Jobs: Screens.JobsScreen,
    Search: Screens.SearchScreen,
    Saved: Screens.SavedJobsScreen,
    Profile: Screens.ProfileScreen,
    Settings: Screens.SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) =>
          getDashboardNavigatorTabIconName(navigation, tintColor)
      }
    },
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: getDashboardNavigatorHeaderTitle(navigation),
        headerRight: getNavigationHeaderRight(navigation),
        gesturesEnabled: false,
        headerBackTitle: null,
        ...defaultStackNavigatorHeaderStyle
      }
    },
    tabBarOptions
  }
)

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator,
  SearchResults: Screens.SearchResultsScreen,
  EditProfile: Screens.EditProfileScreen,
  JobDetail: Screens.JobDetailScreen
})

const AppNavigator = createSwitchNavigator({
  MainStackNavigator,
  Dashboard: DashboardStackNavigator
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
