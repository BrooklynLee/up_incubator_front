import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getFeatures, increasePage } from "../../redux/featuresSlice";
import { FeatureItem } from "../../components/featureItem";
import { useSelector, useDispatch } from "react-redux";

import { SearchInput } from "../../components/search-input";

interface RootState {
  featuresReducer: any;
}

const FeatureList2 = () => {
  const featureObject = useSelector(
    (state: RootState) => state.featuresReducer.explore
  );

  const dispatch = useDispatch();
  const getFeaturesWith = (page: any) => dispatch(getFeatures(page));
  // const increasePageWith = () => dispatch(increasePage(1));

  const fetchData = async () => {
    getFeaturesWith(featureObject.page);
    // console.log(featureObject);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mt-8">
      <div className="px-12">
        <div className="relative">
          <SearchInput />

          <ul className="rounded-md shadow-md bg-white absolute left-0 right-0 -bottom-18 mt-3 p-3">
            <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              추천
            </li>
            {featureObject.features.map((c: any) => {
              if (c.is_recommend === true && c.is_active === true) {
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
              }
            })}
            <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              일반
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// function mapStateToProps(state: any) {
//   // return { featureObject: state.featuresReducer.explore };
// }

// function mapDispatchToProps(dispatch: any) {
//   return {
//     getFeaturesWith: (page: any) => dispatch(getFeatures(page)),
//     increasePageWith: () => dispatch(increasePage(1)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FeatureList2);
export default FeatureList2;
