import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <PlaceList places={this.props.places} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    places: state.places.places
});

export default connect(mapStateToProps)(FindPlaceScreen);
