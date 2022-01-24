import { Dispatch } from "react";
import { connect } from "react-redux";
import { getFeatures } from "../../redux/featuresSlice";
import { Features } from "./features";

function mapDispatchToProps(dispatch: any) {
    return {
        getFeatures: () => dispatch(getFeatures())
    };
}

function mapStateToProps(state: any) {
    return state.featuresReducer.explore;
}

export default connect(mapStateToProps, mapDispatchToProps)(Features);