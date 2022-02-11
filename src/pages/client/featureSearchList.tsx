import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getFeatures, increasePage } from "../../redux/featuresSlice";
import { FeatureItem } from "../../components/featureItem";
import { useSelector } from "react-redux";
import { SearchInput } from "../../components/search-input";
import { useLocation, useNavigate } from "react-router-dom";

interface IFeatureProp {
  featureObject: any;
  getFeaturesWithKeywords: any;
}

const FeatureSearchList = ({
  featureObject,
  getFeaturesWithKeywords,
}: // page,
IFeatureProp) => {
  const location = useLocation();
  const history = useNavigate();
  const searchKeyword = location.search.split("?keyword=")[1];

  const fetchData = async () => {
    getFeaturesWithKeywords(featureObject.page, searchKeyword);
  };

  useEffect(() => {
    console.log();
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mt-8">
      <div className="px-12">
        <div className="relative">
          <ul className="rounded-md shadow-md bg-white absolute left-0 right-0 -bottom-18 mt-3 p-3">
            <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              추천
            </li>

            <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              일반
            </li>
            {featureObject.features.map((c: any) => {
              return (
                <FeatureItem
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
  return { featureObject: state.featuresReducer.explore };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getFeaturesWithKeywords: (page: any) => dispatch(getFeatures(page)),
    increasePageWith: () => dispatch(increasePage(1)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureSearchList);
