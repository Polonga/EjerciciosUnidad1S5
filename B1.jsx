import { View, Text, StyleSheet } from "react-native";

export default function App() {
    return (
        <View>
            <Text style={styles.libro}>Cien años de soledad</Text>
            <Text style={styles.libro}>1984</Text>
            <Text style={styles.libro}>El Hobbit</Text>
        </View>
    );
}

// 2: Solo lo tengo que hacer 1 vez

const styles = StyleSheet.create({
    libro: { padding: 14, borderBottomWidth: 1, borderBottomColor: "#eee" },
});

// 3: que no es eficiente