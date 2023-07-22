import Api from './api'

const _data = {
  stationsList: [],
  stationDetailsMap: new Map()
}

const generateStationsList = (data) => {
  data.sort((a,b) => {
    return b.reliability - a.reliability;
  });

  _data.stationsList = data.map(({id, imgUrl, name}) => {
    return {id, imgUrl, name};
  });
}

const generateStationsDetailsMap = (data) => {
  for(const station of data) {
    _data.stationDetailsMap.set(station.id, station);
  }
}

const StationsStore = {
  getData: async () => {
    if(!_data.stationsList.length) {
      const data = await Api.getStations();

      generateStationsList(data.data);
      generateStationsDetailsMap(data.data);
    }

    return _data;
  }
}

export default StationsStore