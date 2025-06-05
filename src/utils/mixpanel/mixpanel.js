import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;
console.log(MIXPANEL_TOKEN, "this is token");
console.log("hi")
mixpanel.init(MIXPANEL_TOKEN, {
    track_pageview: true,
    debug: true,
    persistence: 'localStorage',
    ip: true,
    autocapture: true
});

export default mixpanel