import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "images-carousel/image-1.jpg",
    altText: "",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "images-carousel/image-2.jpg",
    altText: "",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "images-carousel/image-3.jpg",
    altText: "",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: "images-carousel/image-4.jpg",
    altText: "",
    caption: "",
    header: "",
    key: "4",
  },
  {
    src: "images-carousel/image-5.jpg",
    altText: "",
    caption: "",
    header: "",
    key: "5",
  },
  {
    src: "images-carousel/image-6.jpg",
    altText: "",
    caption: "",
    header: "",
    key: "6",
  },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
