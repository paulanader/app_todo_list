import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#1A1A1A",
    height: "100%",
  },
  input: {
    width: "100%",
    flex: 1,
    backgroundColor: "#262626",
    height: 56,
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 10,
    fontSize: 16,
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15,
    marginTop: -30,
  },
  info: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 30,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskContainer: {
    gap: 15,
  },
});
