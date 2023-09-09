import { View, Text } from "react-native";
import { styles } from "./styles";

type AmountTaskInfoType = {
  label: string;
  value: number;
};

export function AmountTaskInfo({ label, value }: AmountTaskInfoType) {
  return (
    <View style={styles.AmountTaskInfoContainer}>
      <Text
        style={
          label === "Criadas" ? styles.allTasksLabel : styles.doneTasksLabel
        }
      >
        {label}
      </Text>
      <View style={styles.amountBox}>
        <Text style={styles.amountValue}>{value}</Text>
      </View>
    </View>
  );
}
