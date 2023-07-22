import React, { Component } from 'react'
import stationsStore from '../../data/stationsStore'
import {StationDetails, StationsGrid} from '../../components/'


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stationsList: [],
            stationDetailsMap: null,
            selectedId: null
        };

        stationsStore.getData().then(({stationsList, stationDetailsMap}) => {
            this.setState({
                stationsList,
                stationDetailsMap,
                selectedId: stationsList[5].id
            });
        });
    }

    onStationSelect(id) {
        this.setState({
            ...this.state,
            selectedId: id
        });
    }

    render() {
        let loadingView = <div className="loading">Loading...</div>;
        let selectedView = null;
        let stationsGridView = null;

        if(this.state.stationsList.length && this.state.stationDetailsMap) {
            const allStations = this.state.stationsList;
            const selectedStationId = this.state.selectedId;
            const selectedStation = this.state.stationDetailsMap.get(selectedStationId);

            if(selectedStation) {
                selectedView = <StationDetails {...selectedStation} />
            }
            
            stationsGridView = <StationsGrid
                stations={allStations}
                selectedId={selectedStationId}
                onSelect={this.onStationSelect.bind(this)}
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
}


export default Home


