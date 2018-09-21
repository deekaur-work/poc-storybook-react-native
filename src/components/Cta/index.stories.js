import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import CenterView from "../CenterView";
import Cta from "./";

const stories = storiesOf("Cta", module);
stories.addDecorator(withKnobs);

stories
  .add("default", () => (
    <Cta
      accessibilityLabel={text("accessibilityLabel", "click to rename")}
      onPress={action("clicked-cta")}
      title={text("title", "Rename")}
    />
  ))
  .add("pill", () => (
    <Cta
      accessibilityLabel={text("accessibilityLabel", "click to rename")}
      buttonType="pill"
      onPress={action("clicked-cta")}
      title={text("title", "Rename")}
    />
  ))
  .add("main theme mango", () => (
    <Cta
      accessibilityLabel={text("accessibilityLabel", "click to send to Annie")}
      buttonType="large"
      onPress={action("clicked-cta")}
      textRight={12.87}
      theme="mango"
      title={text("title", "Send to Annie")}
    />
  ))
  .add("main theme black", () => (
    <Cta
      accessibilityLabel={text("accessibilityLabel", "click to send to Annie")}
      buttonType="large"
      onPress={action("clicked-cta")}
      textRight={12.87}
      theme="black"
      title={text("title", "Send to Annie")}
    />
  ))
  .add("main disabled", () => (
    <Cta
      accessibilityLabel={text("accessibilityLabel", "click to send to Annie")}
      buttonType="large"
      disabled={true}
      onPress={action("clicked-cta")}
      textRight={12.87}
      title={text("title", "Send to Annie")}
    />
  ));
