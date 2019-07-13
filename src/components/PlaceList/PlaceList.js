import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

const palaceList = ({ places, onItemSelected }) => {
    return (
        <FlatList
            data={places}
            renderItem={info => (
                <ListItem placeImage={info.item.image} placeName={info.item.name} onItemPressed={() => onItemSelected(info.item.key)} />
            )}
            style={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default palaceList;
