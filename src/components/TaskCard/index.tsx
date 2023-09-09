import { Image, Text, TouchableOpacity, View } from "react-native";
import inProgressIcon from "../../../assets/images/check.png";
import doneIcon from "../../../assets/images/checkedIcon.png";
import trashIcon from "../../../assets/images/trashIcon.png";
import { styles } from "./styles";
import { useMemo } from "react";

type TaskCardType = {
  task: {
    description: string;
    isDone: boolean;
  };
  handleChangeStatus: () => void;
  onRemove: () => void;
};

export function TaskCard({ task, handleChangeStatus, onRemove }: TaskCardType) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChangeStatus}>
        <Image source={task.isDone ? doneIcon : inProgressIcon} />
      </TouchableOpacity>

      <Text
        style={task.isDone ? styles.doneTaskLabel : styles.inProgressTaskLabel}
      >
        {task.description}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  );
}
