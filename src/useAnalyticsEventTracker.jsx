import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category="Test Category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

export default useAnalyticsEventTracker;
