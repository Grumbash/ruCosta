import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random() + "",
                    name: action.payload,
                    image: {
                        uri: "https://iknowyourmeme.files.wordpress.com/2016/04/14280761127830.jpg?w=616"
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                }),
                selectedPlace: null
            };

        default:
            return state;
    }
};

export default reducer;
