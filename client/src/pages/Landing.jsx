import ComingSoonLanding from '../components/ComingSoonLanding';
import LaunchLanding from '../components/LaunchLanding';
import { isComingSoonMode } from '../config/site';

const Landing = () => {
    // Switch VITE_APP_SITE_MODE from "coming_soon" to "live" or "grand_opening" to restore the full launch homepage.
    return isComingSoonMode ? <ComingSoonLanding /> : <LaunchLanding />;
};

export default Landing;
