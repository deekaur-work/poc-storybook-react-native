import React from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

export default function Cta({
  accessibilityLabel,
  buttonType,
  disabled,
  onPress,
  style,
  textRight,
  theme,
  title
}) {
  const buttonStyles = [
    styles.container,
    buttonType === "pill" && styles.containerPill,
    buttonType === "large" && styles.containerLarge,
    theme === "mango" && styles.themeMango,
    theme === "black" && styles.themeBlack,
    disabled && styles.disabled,
    style
  ];

  return (
    <TouchableOpacity
      activeOpacity={30}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      style={buttonStyles}
      onPress={onPress}
    >
      <View style={styles.content}>
        {/* {icon && <SVGImag svgXmlData={ICONS.PLUS} />} */}
        <Text style={styles.title}>{title}</Text>
        {textRight && <Text style={styles.textRight}>{`$ ${textRight}`}</Text>}
      </View>
    </TouchableOpacity>
  );
}

Cta.propTypes = {
  accessibilityLabel: PropTypes.string,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.object,
  textRight: PropTypes.number,
  theme: PropTypes.string,
  title: PropTypes.string
};
