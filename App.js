import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// [ items ] => {id, url, nombre}
/*
Elelemtos => Array => []
const elementos = [1, 'asdasd', {}, []]
item => {id, url,nombre}
const respuesta = Elementos.map(item => item)

setTimeout => funcion, tiempo
*/

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const App = () => {
  const Elementos = [
    {
      id: 0,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 1,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 2,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 3,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 4,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 5,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 6,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 7,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 8,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 9,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 10,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 11,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 12,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 13,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 14,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
    {
      id: 15,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
    },
  ];

  const [opcionUno, setOpcionUno] = useState(null);
  const [opcionDos, setOpcionDos] = useState(null);
  const [puntaje, setPuntaje] = useState(0);

  function Tarjeta({uri, onPress, estaActivo}) {
    console.log({estaActivo});

    return (
      <TouchableOpacity style={styles.containerTarjeta} onPress={onPress}>
        {estaActivo === true ? (
           <Image
           style={styles.tarjetas}
           source={{
             uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9srttB_BxaSh8klXEoggeUV1rP4bNwMNVWD8Ql124DvTH0aJebAGxHFLxxMMLrzHb94k&usqp=CAU',
           }}
         />
        ) : (
          <Image
            style={styles.tarjetas}
            source={{
              uri,
            }}
          />
        )}
      </TouchableOpacity>
    );
  }

  function vaidarSeleccionados(opcUno, opcDos) {
    console.log('vaidarSeleccionados', opcUno, opcDos);
    if (opcionUno !== opcionDos) {
      setTimeout(() => {
        setOpcionUno(null);
        setOpcionDos(null);
      }, 1000);
      return;
    }
    console.log('Coincidencia!!!');
    setPuntaje(puntaje + 1);
  }

  async function manejarSeleccion(elementoSeleccionado) {
    if (opcionUno === null) {
      console.log('vamos a guardar', elementoSeleccionado.id);
      setOpcionUno(elementoSeleccionado.id);
    } else if (opcionDos === null) {
      console.log('opcionDosEsNull');
      setOpcionDos(elementoSeleccionado.id);
      vaidarSeleccionados(opcionUno, elementoSeleccionado.id);
    } else {
      console.log('Terminado');
    }
  }

  function estaActivo(id) {
    return id === opcionUno || id === opcionDos;
  }

  function reiniciarJuego() {
    setOpcionUno(null);
    setOpcionDos(null);
    setPuntaje(0);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.fila}>
          {Elementos.map(item => {
            return (
              <Tarjeta
                key={item.id}
                uri={item.url}
                onPress={() => manejarSeleccion(item)}
                estaActivo={estaActivo(item.id)}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.contenedorPuntaje}>
        <Text style={styles.txtPuntaje}>{puntaje}</Text>
      </View>
      <TouchableOpacity
        style={styles.btnReiniciar}
        onPress={() => reiniciarJuego()}>
        <Text style={styles.txtReiniciar}>Reiniciar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnReiniciar: {
    backgroundColor: 'blue',
    height: 50,
    width: '60%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '20%',
    marginTop: 20,
    marginBottom: 20,
    position: 'absolute',
    top: height - 250,
  },
  txtReiniciar: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  fila: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerTarjeta: {
    width: 80,
    height: 80,
    margin: 5,
  },
  tarjetas: {
    width: 80,
    height: 80,
  },
  contenedorPuntaje: {
    flex: 1,
    position: 'absolute',
    top: height - 300,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  txtPuntaje: {
    fontSize: 50,
    fontWeight: '900',
  },
});

export default App;
