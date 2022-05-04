import { colors } from "@mui/material";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/styles";
import React from "react";
import { useIconDictionary } from "../icon-dictionary.js";
import { iconMapping } from "../icon-mapping.js";
var theme = createTheme();
var defaultNameIconMapping = iconMapping;

var getIcon = function getIcon(name, customIconMapping) {
  var Icon = customIconMapping[name.toLowerCase()] || defaultNameIconMapping[name.toLowerCase()] || defaultNameIconMapping.help;
  return /*#__PURE__*/React.createElement(Icon, null);
};

var StyledButton = styled(Button)(function (_ref) {
  var theme = _ref.theme;
  return {
    textTransform: "none",
    width: 60,
    paddingTop: 8,
    paddingBottom: 4,
    marginLeft: 1,
    marginRight: 1
  };
});
var ButtonInnerContent = styled("div")(function (_ref2) {
  var theme = _ref2.theme;
  return {
    display: "flex",
    flexDirection: "column"
  };
});
var IconContainer = styled("div")(function (_ref3) {
  var textHidden = _ref3.textHidden;
  return {
    color: colors.grey[700],
    height: textHidden ? 32 : 20,
    paddingTop: textHidden ? 8 : 0,
    "& .MuiSvgIcon-root": {
      width: 18,
      height: 18
    }
  };
});
var Text = styled("div")(function (_ref4) {
  var theme = _ref4.theme;
  return {
    fontWeight: "bold",
    fontSize: 11,
    color: colors.grey[800],
    display: "flex",
    alignItems: "center",
    lineHeight: 1,
    justifyContent: "center"
  };
});
export var HeaderButton = function HeaderButton(_ref5) {
  var name = _ref5.name,
      icon = _ref5.icon,
      disabled = _ref5.disabled,
      onClick = _ref5.onClick,
      _ref5$hideText = _ref5.hideText,
      hideText = _ref5$hideText === void 0 ? false : _ref5$hideText,
      className = _ref5.className;
  var customIconMapping = useIconDictionary();
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(StyledButton, {
    onClick: onClick,
    disabled: disabled
  }, /*#__PURE__*/React.createElement(ButtonInnerContent, {
    className: className
  }, /*#__PURE__*/React.createElement(IconContainer, {
    textHidden: hideText
  }, icon || getIcon(name, customIconMapping)), !hideText && /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement("div", null, name)))));
};
export default HeaderButton;