import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  // 1. Estados: Aquí guardamos los números que escribe el usuario y el resultado
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  // 2. Funciones para realizar las operaciones matemáticas
  const calcular = (operacion) => {
    // Convertimos el texto ingresado a números decimales
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    // Validamos que se hayan ingresado números válidos
    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Por favor, ingresa ambos números');
      return;
    }

    // Evaluamos qué botón se presionó
    switch (operacion) {
      case 'suma':
        setResultado(n1 + n2);
        break;
      case 'resta':
        setResultado(n1 - n2);
        break;
      case 'multi':
        setResultado(n1 * n2);
        break;
      case 'divi':
        if (n2 === 0) {
          setResultado('No se puede dividir entre cero');
        } else {
          setResultado(n1 / n2);
        }
        break;
      default:
        break;
    }
  };

  // Función para limpiar los campos
  const limpiar = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
  };

  // 3. Diseño de la pantalla (Interfaz de usuario)
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Básica</Text>

      {/* Entradas de texto para los números */}
      <TextInput
        style={styles.input}
        placeholder="Primer número"
        keyboardType="numeric" // Muestra el teclado numérico en el celular
        value={numero1}
        onChangeText={setNumero1} // Guarda el texto en el estado 'numero1'
      />

      <TextInput
        style={styles.input}
        placeholder="Segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2} // Guarda el texto en el estado 'numero2'
      />

      {/* Contenedor de los botones de operaciones */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.boton} onPress={() => calcular('suma')}>
          <Text style={styles.textoBoton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => calcular('resta')}>
          <Text style={styles.textoBoton}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => calcular('multi')}>
          <Text style={styles.textoBoton}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => calcular('divi')}>
          <Text style={styles.textoBoton}>/</Text>
        </TouchableOpacity>
      </View>

      {/* Botón para limpiar */}
      <TouchableOpacity style={[styles.boton, styles.botonLimpiar]} onPress={limpiar}>
        <Text style={styles.textoBoton}>Limpiar</Text>
      </TouchableOpacity>

      {/* Sección donde se muestra el resultado */}
      {resultado !== null && (
        <View style={styles.contenedorResultado}>
          <Text style={styles.textoResultado}>Resultado:</Text>
          <Text style={styles.valorResultado}>{resultado}</Text>
        </View>
      )}
    </View>
  );
}

// 4. Estilos (CSS para React Native)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 55,
    alignItems: 'center',
  },
  botonLimpiar: {
    backgroundColor: '#FF3B30',
    width: '80%',
    marginTop: 10,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contenedorResultado: {
    marginTop: 30,
    alignItems: 'center',
  },
  textoResultado: {
    fontSize: 18,
    color: '#666',
  },
  valorResultado: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
});