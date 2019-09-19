// TODO: add and export your own actions
const base_url = 'https://wagon-chat.herokuapp.com';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';

export function fetchMessages(channel) {
    const url = `${base_url}/${channel}/messages`;
    const promise = fetch(url).then(response => response.json());
    return {
        type: FETCH_MESSAGES,
        payload: promise
    };
}

export function createMessage(channel, author, content) {
    const url = `${base_url}/${channel}/messages`;
    const message = { author: author, content: content};
    const promise = fetch(url, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
    }).then(r => r.json());
    return {
        type: MESSAGE_POSTED,
        payload: promise
    }
}

export function selectChannel(channel) {
    return {
      type: CHANNEL_SELECTED,
      payload: channel
    };
  }

