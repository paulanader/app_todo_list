import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import imgLogo from "../../../assets/images/logo.png";

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={imgLogo} />
    </View>
  );
}
