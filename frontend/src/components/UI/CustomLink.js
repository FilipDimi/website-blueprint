import React from "react";
import { Link } from "react-router-dom";

import { colors } from '../../common/companySpecific';


const CustomLink = (props) => {
  return (
    <Link
      style={{
        color: "inherit",
        textDecoration: "inherit",
      }}
      to={props.path}
      onClick={() => {
        props.setActivePage(props.title);
      }}
    >
      {props.title}
    </Link>
  );
};

export default CustomLink;
