// import React, { useState } from "react";
// import ExplorePresenter from "./ExplorePresenter";
// import { connect } from "react-redux";
// import { getFeatures, increasePage } from "../../redux/featuresSlice";
// import { withRouter } from "react-router-dom";
// import { add } from "./toDoSlice";
// import ToDo from "./ToDo";

// // export const ExploreContainer = ({ store, addText, plusCount }) => {
// //   const dispatch = useDispatch();
// //   const onSubmit = () => {
// //     dispatch(getFeatures(1));
// //   };
// //   return (
// //     <div className="h-screen flex items-center justify-center bg-gray-800">
// //       <div className="bg-white w-full max-w-lg pt-10 pb-7 rounded-lg text-center">
// //         <h3 className="text-2xl text-gray-800">Log In</h3>
// //         {/* <button className="mt-3 btn" onClick={}>Log In</button> */}
// //         <button onClick={() => onSubmit()}>sdf</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export const ExploreContainer = props =>
// //   //     {
// //   //   getFeaturesWith,
// //   //   features,
// //   //   increasePageWith,
// //   // }
// //   {
// //     // useEffect(() => {
// //     //   getFeaturesWith();
// //     // }, []);
// //     console.log(props);
// //     return (
// //       <div className="h-screen flex items-center justify-center bg-gray-800">
// //         <div className="bg-white w-full max-w-lg pt-10 pb-7 rounded-lg text-center">
// //           <h3 className="text-2xl text-gray-800">Log In</h3>
// //         </div>
// //       </div>
// //     );
// //   };

// // export default ({ getFeatures, features, page }) => {
// // export default () => {
// //   useEffect(() => {
// //     getFeatures();
// //   }, []);
// //   return <ExplorePresenter />;
// // };

// const ExploreContainer = ({ toDos, addToDo }) => {
//   const [text, setText] = useState("");
//   function onChange(e) {
//     setText(e.target.value);
//   }
//   function onSubmit(e) {
//     e.preventDefault();
//     addToDo(text);
//     // console.log(text);
//     // console.log(toDos.todosReducer);
//     setText("");
//   }
//   return (
//     <>
//       <h1>To Do</h1>
//       <form onSubmit={onSubmit}>
//         <input type="text" value={text} onChange={onChange} />
//         <button>Add</button>
//       </form>
//       <ul>
//         {toDos.todosReducer.map(toDo => (
//           <ToDo {...toDo} key={toDo.id} />
//         ))}
//       </ul>
//     </>
//   );
// };

// function mapStateToProps(state) {
//   return { toDos: state };
// }

// // function mapStateToProps(state) {
// //   return state.featuresReducer.explore;
// // }

// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: text => dispatch(add(text)),
//   };
// }

// // function mapDispatchToProps(dispatch) {
// //   return {
// //     getFeaturesWith: page => dispatch(getFeatures(page)),
// //     increasePageWith: () => dispatch(increasePage()),
// //   };
// // }

// export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);
// // expor default connect(mapStateToProps)(ExploreContainer);
// // export default connect(getCurrentState)(ExploreContainer);

// // function mapDispatchToProps(dispatch) {
// //   return {
// //     getFeaturesWith: page => dispatch(getFeatures(page)),
// //     increasePageWith: () => dispatch(increasePage()),
// //   };
// // }

// // export default withRouter(
// //   connect(mapStateToProps, mapDispatchToProps)(ExploreContainer)
// // );
