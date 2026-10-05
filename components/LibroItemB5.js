import { Text, StyleSheet } from "react-native";

// MAL:
// export default function LibroItemB5([titulo]) {

// BIEN:
export default function LibroItemB5({ titulo }) {
  return <Text style={styles.libro}>{titulo}</Text>;
}

const styles = StyleSheet.create({
  libro: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});