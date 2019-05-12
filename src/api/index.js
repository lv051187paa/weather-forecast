import CryptoJS from 'crypto-js';
import axios from 'axios';

export const api = (queryParams) => {
  const url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
  const method = 'GET';
  const app_id = 'hRQ8Gy52';
  const consumer_key = 'dj0yJmk9ZTNuazJlN0hienFOJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWM3';
  const consumer_secret = '6b83f715469297ccd168e70b878ee2dbe2a54ee9';
  const concat = '&';
  const query = {
    ...queryParams,
    'format': 'json'
  };
  const oauth = {
    'oauth_consumer_key': consumer_key,
    'oauth_nonce': Math.random().toString(36).substring(2),
    'oauth_signature_method': 'HMAC-SHA1',
    'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
    'oauth_version': '1.0'
  };

  const merged = { ...query, ...oauth };
  const merged_arr = Object.keys(merged).sort().map(function (k) {
    return [k + '=' + encodeURIComponent(merged[k])];
  });

  const signature_base_str = method
    + concat + encodeURIComponent(url)
    + concat + encodeURIComponent(merged_arr.join(concat));

  const composite_key = encodeURIComponent(consumer_secret) + concat;
  const hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
  const signature = hash.toString(CryptoJS.enc.Base64);

  oauth['oauth_signature'] = signature;
  const auth_header = 'OAuth ' + Object.keys(oauth).map(function (k) {
    return [k + '="' + oauth[k] + '"'];
  }).join(',');
  const URLparams = new URLSearchParams(Object.entries(query))

  return new Promise((resolve => resolve(axios.get(`${url}?${URLparams.toString()}`, {
    headers: {
      'Authorization': auth_header,
      'X-Yahoo-App-Id': app_id
    }
  })))).then(res => res.data)
}
