import React from "react";
import { FlatList } from "react-native";
import useScrollInfo from "./useScrollInfo";

const CustomFlatList = (props) => {
  const { onScroll } = useScrollInfo(props?.onScroll);

  return (
    <FlatList
      {...props}
      // We don't want to handle the onScroll event if onScroll is not passed
      // to our HOC
      {...(props?.onScroll ? { onScroll } : {})}
    />
  );
};

CustomFlatList.propTypes = {
  ...FlatList.propTypes,
};

export default CustomFlatList;
