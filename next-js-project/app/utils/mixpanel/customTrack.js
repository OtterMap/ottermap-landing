import mixpanel from './mixpanel.js';

export const customTrack = (eventName, properties={}) => {
    mixpanel.track(eventName, properties);
}
