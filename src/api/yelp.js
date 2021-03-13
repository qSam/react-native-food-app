import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 1KEC3q4KWdojID8UrNk9mUP09idHtJSTI8StGltKNLr9coecUQAfyYONrLlW9oiVDuiILoyDQyl7dsOpwf6Q-NNMoAOrK1KA_uaYArktSeFfXhj-jRXGdRMljKxKYHYx'
  }
});

/*
Client ID
nXH3jIdH8J2ejjCYJPMT9Q

API Key
1KEC3q4KWdojID8UrNk9mUP09idHtJSTI8StGltKNLr9coecUQAfyYONrLlW9oiVDuiILoyDQyl7dsOpwf6Q-NNMoAOrK1KA_uaYArktSeFfXhj-jRXGdRMljKxKYHYx



*/
