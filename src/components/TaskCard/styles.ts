import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#262626",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  inProgressTaskLabel: {
    color: "#F2F2F2",
    fontSize: 14,
  },
  doneTaskLabel: {
    color: "#F2F2F2",
    textDecorationLine: "line-through",
    fontSize: 14,
  },
});
