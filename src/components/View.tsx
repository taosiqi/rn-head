import React, {FC} from 'react';
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface ViewInterface extends ViewProps, TextProps {
  children?: React.ReactNode | React.ReactText;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
}

const CustomView: FC<ViewInterface> = props => {
  let {children, ...restProps} = props;
  if (['number', 'string'].includes(typeof children)) {
    return <Text {...restProps} children={children} />;
  }

  if (Array.isArray(children)) {
    if (children.some(React.isValidElement)) {
      return (
        <View {...restProps}>
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return child;
            }
            return <CustomView>{child}</CustomView>;
          })}
        </View>
      );
    } else {
      return (
        <Text
          {...restProps}
          children={children.reduce((a, b) => (a || '') + '' + (b || ''))}
        />
      );
    }
  }
  return <View {...props} />;
};
export default CustomView;
