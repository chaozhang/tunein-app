// API configuration to get TuneIn statinos data

const STATIONS_REQUEST_URL = "https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json"; 

const Api = {
  getStations: async () => {
    return fetch(STATIONS_REQUEST_URL).then((response) => response.json());
  }
}

export default Api