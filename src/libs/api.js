import { API_HOSTNAME } from '../constants';

export function fetchChannels() {
    return fetch(API_HOSTNAME + '/epg')
      .then(res => {
            if(res.ok) {
                return res.json()
            }
            return Promise.reject(new Error('Channels cannot be loaded'));
        }).then(json => json.channels);
}
  