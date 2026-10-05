import { View } from "react-native";
import LibroItem from "./components/LibroItemB5";

const libros = [
    { id: "1", titulo: "Drácula" },
    { id: "2", titulo: "Frankenstein" },
];

export default function App() {
    return (
        <View>
            {/* ERROR 2:
            <LibroItem nombre="Drácula" />
            */}

            {/* CORRECTO */}
            <LibroItem titulo="Drácula" />

            {/* ERROR 3: faltaba key={l.id} */}
            {libros.map((l) => (
                <LibroItem
                    key={l.id}
                    titulo={l.titulo}
                />
            ))}
        </View>
    );
}