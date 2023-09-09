import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  AmountTaskInfoContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  allTasksLabel: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#4EA8DE",
  },
  doneTasksLabel: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#8284FA",
  },
  amountBox: {
    backgroundColor: "#333333",
    borderRadius: 1000,
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingRight: 10,
  },
  amountValue: {
    color: "#FFF",
    fontSize: 14,
  },
});
