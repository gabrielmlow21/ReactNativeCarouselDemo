import React from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  ITEM_HEIGHT,
  SLIDER_HEIGHT,
} from "./CarouselCardItem";
import data from "./data";

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout={"default"}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderHeight={SLIDER_HEIGHT}
        itemHeight={ITEM_HEIGHT}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        vertical={true}
      />
    </View>
  );
};

export default CarouselCards;
