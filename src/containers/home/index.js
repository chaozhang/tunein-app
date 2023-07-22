import React, { useState, useEffect } from 'react'
import stationsStore from '../../data/stationsStore'
import {StationDetails, StationsGrid} from '../../components/'


const Home = (props) => {
    const initalState = {
        stationsList: [],
        stationDetailsMap: null,
        selectedId: null
    };

    const [state, setState] = useState(initalState);

    const onStationSelect = (id) => {
        setState({
            ...state,
            selectedId: id
        });
    }

    useEffect(() => {
        if(!state.stationsList.length) {
            stationsStore.getData().then(({stationsList, stationDetailsMap}) => {
                setState({
                    stationsList,
                    stationDetailsMap,
                    selectedId: stationsList[0].id
                });
            });
        }
    });

    let loadingView = <div className="loading">Loading...</div>;
    let selectedView = null;
    let stationsGridView = null;

    if(state.stationsList.length && state.stationDetailsMap) {
        const allStations = state.stationsList;
        const selectedStationId = state.selectedId;
        const selectedStation = state.stationDetailsMap.get(selectedStationId);

        if(selectedStation) {
            selectedView = <StationDetails {...selectedStation} />
        }
        
        stationsGridView = <StationsGrid
            stations={allStations}
            selectedId={selectedStationId}
            onSelect={onStationSelect.bind(this)}
        />;

        loadingView = null;
    }

    return (
        <div>
            {loadingView}
            {selectedView}
            {stationsGridView}
        </div>
    );
}


export default Home


