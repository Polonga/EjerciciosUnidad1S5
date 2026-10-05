import { Text, StyleSheet, View } from "react-native";

export default function LibroItemB4({ titulo, autor, leido }) {
  return (
    <View style={styles.libro}>
      <Text style={[styles.titulo, leido && styles.leido]}>
        {titulo}
      </Text>

      <Text style={styles.autor}>
        {autor}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  libro: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },

  autor: {
    fontSize: 14,
    color: "#666",
  },

  leido: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});