import {
  isNavigationFailure,
  NavigationFailureType,
  type Router,
} from "vue-router"

export function globalNavFailure(router: Router) {
  router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
      console.error("Navigation aborted:", to, from, failure)
    } else if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
      console.error("Navigation duplicated:", to, failure, failure)
    }
  })
}
