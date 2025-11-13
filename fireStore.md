📌 1. Sintaxis correcta para CRUD usando Web Modular API

✔️ Crear (addDoc)
import { addDoc, collection } from "firebase/firestore";

await addDoc(collection(db, "productos"), {
  name: "Producto X",
  price: 100
});

✔️ Crear/editar por ID específico (setDoc)
import { doc, setDoc } from "firebase/firestore";

await setDoc(doc(db, "productos", "123"), {
  name: "Producto A",
  price: 100
});

👉 Reemplaza completamente al set() del SDK viejo.

✔️ Actualizar parcialmente (updateDoc)
import { doc, updateDoc } from "firebase/firestore";

await updateDoc(doc(db, "productos", "123"), {
  price: 150
});

✔️ Borrar
import { deleteDoc, doc } from "firebase/firestore";

await deleteDoc(doc(db, "productos", "123"));

✔️ Leer TODOS
import { collection, getDocs } from "firebase/firestore";

const snapshot = await getDocs(collection(db, "productos"));

const productos = snapshot.docs.map(doc => ({
  id: doc.id,
  ...doc.data()
}));

✔️ Leer UNO por ID
import { doc, getDoc } from "firebase/firestore";

const snap = await getDoc(doc(db, "productos", "123"));

if (snap.exists()) {
  console.log(snap.data());
}

✔️ Consultar por campo
import { collection, query, where, getDocs } from "firebase/firestore";

const q = query(
  collection(db, "productos"),
  where("id", "==", 1)
);

const snapshot = await getDocs(q);

🎯 2. Entonces… qué método usar según la tarea?

| Acción                            | Método correcto (Modular v9+) |
| --------------------------------- | ----------------------------- |
| Crear documento con ID automático | `addDoc()`                    |
| Crear documento con ID específico | `setDoc()`                    |
| Editar documento                  | `updateDoc()`                 |
| Leer documento                    | `getDoc()`                    |
| Leer todos                        | `getDocs()`                   |
| Consultar por campo               | `query() + where()`           |
| Eliminar documento                | `deleteDoc()`                 |
