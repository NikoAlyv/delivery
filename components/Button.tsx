import {
  Text,
  StyleProp,
  ViewStyle,
  Pressable,
  TextStyle,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React from "react";
import { colors } from "@/theme/colors";
import { normalize } from "@/theme/metrics";

interface IButton {
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  textStyle?: StyleProp<TextStyle>;
}
export const Button: React.FC<IButton> = ({
  title,
  loading,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <Pressable style={[styles.root, style]} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.blue,
    paddingVertical: normalize("vertical", 15),
    justifyContent: "center",
    borderRadius: 30,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontSize:15
    
  },
});
