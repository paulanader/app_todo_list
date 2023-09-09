import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import imgPlusButton from "../../../assets/images/plus.png";
import { AmountTaskInfo } from "../../components/AmountTaskInfo";
import { EmptyTask } from "../../components/EmptyTask";
import { TaskCard } from "../../components/TaskCard";
import { useMemo, useState } from "react";

type TasksType = {
  description: string;
  isDone: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<TasksType[] | []>([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (tasks.find((task) => task.description === newTask)) {
      return Alert.alert(
        "Atividade já listada",
        "Já existe uma atividade na lista com essa descrição"
      );
    }

    const taskToAdd: TasksType = {
      description: newTask,
      isDone: false,
    };

    newTask !== "" && setTasks((prevState) => [...prevState, taskToAdd]);
    setNewTask("");
  }

  function handleChangeStatus(description: string) {
    const editTasks = tasks.map((task) => {
      if (task.description === description) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }
      return task;
    });

    console.log({ editTasks });

    setTasks(editTasks);
  }

  function handleRemoveTask(description: string) {
    Alert.alert("Remover", "Deseja remover a tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.description !== description)
          ),
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  }

  const isDoneTasks = useMemo(
    () => tasks.filter((task) => task.isDone === true),
    [tasks]
  );

  return (
    <View>
      <Header />
      <View style={styles.homeContainer}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#FDFCFE"
            onChangeText={setNewTask}
            value={newTask}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Image source={imgPlusButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <AmountTaskInfo label="Criadas" value={tasks.length} />
          <AmountTaskInfo label="Concluídas" value={isDoneTasks.length} />
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.description}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              key={item.description}
              handleChangeStatus={() => handleChangeStatus(item.description)}
              onRemove={() => handleRemoveTask(item.description)}
            />
          )}
          ListEmptyComponent={() => <EmptyTask />}
        />
      </View>
    </View>
  );
}
