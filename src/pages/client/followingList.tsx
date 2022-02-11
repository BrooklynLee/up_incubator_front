import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getFeatures, increasePage } from "../../redux/featuresSlice";
import { getFavs } from "../../redux/usersSlice";
import { FeatureItem } from "../../components/featureItem";

interface IFavFeatureProp {
  features: any;
  getFavs: any;
}

const FeatureList = ({ getFavs, features }: IFavFeatureProp) => {
  useEffect(() => {
    getFavs();
    // console.log(features);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mt-8">
      <div className="px-12">
        <div className="relative">
          {/* Search Component */}
          <div className="relative">{/* 검색 API 일반:  활용 시 */}</div>

          <ul className="rounded-md shadow-md bg-white absolute left-0 right-0 -bottom-18 mt-3 p-3">
            <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              내가 사용하고 있는 UP
            </li>
            {features.map((c: any) => {
              return (
                <FeatureItem
                  key={c.id}
                  id={c.id}
                  name={c.name}
                  desc={c.desc}
                  feature_type={c.feature_type}
                  key_type={c.key_type}
                  status_type={c.status_type}
                  tag={c.tag}
                  database_name={c.database_name}
                  table_name={c.table_name}
                  isFav={c.is_fav}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state: any) {
  return { features: state.featuresReducer.favs };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getFavs: () => dispatch(getFavs()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureList);
// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(ExploreContainer)
// );
