import { useState } from "react";
import Direction from "./Direction";

const useScrollInfo = (onScrollCallback) => {
  const [prevContentOffsetY, setPrevContentOffsetY] = useState(0);
  const [prevContentOffsetX, setPrevContentOffsetX] = useState(0);

  const handleScroll = (event) => {
    const maxOffsetY = Math.floor(
      event?.nativeEvent?.contentSize?.height -
        event?.nativeEvent?.layoutMeasurement?.height
    );

    const maxOffsetX = Math.floor(
      event?.nativeEvent?.contentSize?.width -
        event?.nativeEvent?.layoutMeasurement?.width
    );
    const currContentOffsetY = event?.nativeEvent?.contentOffset?.y;
    const currContentOffsetX = event?.nativeEvent?.contentOffset?.x;

    let verticalDirection = null;
    if (currContentOffsetY < maxOffsetY) {
      verticalDirection =
        currContentOffsetY > prevContentOffsetY ? Direction.DOWN : Direction.UP;
    }

    let horizontalDirection = null;
    if (currContentOffsetX < maxOffsetX) {
      horizontalDirection =
        currContentOffsetX > prevContentOffsetX
          ? Direction.RIGHT
          : Direction.LEFT;
    }

    console.log("useScrollInfo contentOffset contentSize", {
      contentOffset: event?.nativeEvent?.contentOffset,
      contentSize: event?.nativeEvent?.contentSize,
      layoutMeasurement: event?.nativeEvent?.layoutMeasurement,
      verticalDirection,
      horizontalDirection,
      currContentOffsetY,
      currContentOffsetX,
    });

    setPrevContentOffsetY(currContentOffsetY);
    setPrevContentOffsetX(currContentOffsetX);
    onScrollCallback(event, { verticalDirection, horizontalDirection });
  };

  return { onScroll: handleScroll };
};

export default useScrollInfo;
