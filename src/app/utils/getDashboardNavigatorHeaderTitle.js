export default function getDashboardNavigatorHeaderTitle(navigation) {
  const { routeName } = navigation.state.routes[navigation.state.index]
  let headerTitle

  if (routeName === 'Search') {
    headerTitle = 'Find Jobs'
  } else {
    headerTitle = routeName
  }

  return headerTitle
}
