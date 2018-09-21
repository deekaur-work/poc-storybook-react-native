import { Colors, TextStyles } from "../../styles";

export default {
  containerPill: {
    backgroundColor: "transparent",
    borderRadius: 18,
    backgroundColor: Colors.grey,
    opacity: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  containerLarge: {
    height: 120,
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30
  },
  themeMango: {
    backgroundColor: Colors.mango,
    color: Colors.black
  },
  themeBlack: {
    backgroundColor: Colors.black,
    color: Colors.white
  },
  disabled: {
    backgroundColor: Colors.lightGrey
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    // ...textStyles.futuraBook14,
    // color: "currentColor" not working?
  },
  textRight: {
    // ...textStyles.futuraBook14,
  }
};
