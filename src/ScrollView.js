import React from "react";
import { ScrollView } from "react-native";
import useScrollInfo from "./useScrollInfo";

const CustomScrollView = (props) => {
  const { onScroll } = useScrollInfo(props?.onScroll);

  return (
    <ScrollView
      {...props}
      // We don't want to handle the onScroll event if onScroll is not passed
      // to our HOC
      {...(props?.onScroll ? { onScroll } : {})}
    />
  );
};

CustomScrollView.propTypes = {
  ...ScrollView.propTypes,
};

export default CustomScrollView;
