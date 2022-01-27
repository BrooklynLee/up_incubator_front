import { Dispatch } from "react";
import { connect } from "react-redux";
import { getFeatures } from "../../redux/featuresSlice";
import { Features } from "./features";
import ExploreContainer from "./ExploreContainer";

function mapDispatchToProps(dispatch) {
    return {
        getFeatures: () => dispatch(getFeatures())
        // getFeatures: dispatch(getFeatures())
    };
}

function mapStateToProps(state) {
    return state.featuresReducer.explore;
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);  