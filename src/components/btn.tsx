import React from "react";
// import styled from "styled-components";
import PropTypes from "prop-types";
// import colors from "../../colors";

// const Button = styled.button`
//   margin-bottom: 25px;
//   border-radius: 30px;
//   padding: 12.5px 0px;
//   align-items: center;
// `;

// const Text = styled.text`
//   font-weight: 600;
//   font-size: 14px;
// `;

interface IProps {
  loading?: any;
  onClick: any;
  text: any;
  // any other props that come into the component
}

const Btn = ({ loading = false, onClick, text }: IProps) => (
  <button onClick={loading ? null : onClick}>
    {/* <Button> */}
    {loading ? <p>???????????????????????</p> : <p>{text}</p>}
    {/* </Button> */}
  </button>
);

// Btn.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     text: PropTypes.string.isRequired,
//     accent: PropTypes.bool,
//     loading: PropTypes.bool
// };

export default Btn;
