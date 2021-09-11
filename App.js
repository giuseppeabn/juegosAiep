import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';

const height = Dimensions.get('window').height;

const App = () => {
  const Elementos = [
    {
      id: 0,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeUno',
    },
    {
      id: 1,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeUno',
    },
    {
      id: 2,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeDos',
    },
    {
      id: 3,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeDos',
    },
    {
      id: 4,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeTres',
    },
    {
      id: 5,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeTres',
    },
    {
      id: 6,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeCuatro',
    },
    {
      id: 7,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeCuatro',
    },
    {
      id: 8,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeCinco',
    },
    {
      id: 9,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeCinco',
    },
    {
      id: 10,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeSeis',
    },
    {
      id: 11,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeSeis',
    },
    {
      id: 12,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeSiete',
    },
    {
      id: 13,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeSiete',
    },
    {
      id: 14,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeOcho',
    },
    {
      id: 15,
      url: 'https://reactnative.dev/img/tiny_logo.png',
      nombre: 'elementoUno',
      value: 'personajeOcho',
    },
  ];

  const [opcionUno, setOpcionUno] = useState(null);
  const [opcionDos, setOpcionDos] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [resueltos, setResueltos] = useState([]);

  useEffect(() => {
    if (puntaje === 8) {
      Alert.alert('Felicitaciones!!!! Eres un crack');
      setTimeout(() => {
        reiniciarJuego();
      }, 3000);
    }
  }, [puntaje]);

  function Tarjeta({uri, onPress, estaActivo}) {
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
    const resultado = Elementos.filter(item => {
      if (item.id === opcUno || item.id === opcDos) {
        return item;
      }
    });

    if (resultado[0]?.value !== resultado[1]?.value) {
      setTimeout(() => {
        setOpcionUno(null);
        setOpcionDos(null);
      }, 1000);
      return;
    }
    setPuntaje(puntaje + 1);
    setResueltos([...resueltos, ...resultado]);
  }

  function manejarSeleccion(elementoSeleccionado) {
    if (opcionUno === null) {
      setOpcionUno(elementoSeleccionado.id);
    } else if (opcionDos === null) {
      setOpcionDos(elementoSeleccionado.id);
      vaidarSeleccionados(opcionUno, elementoSeleccionado.id);
    } else {
      setOpcionUno(elementoSeleccionado.id);
      setOpcionDos(null);
    }
  }

  function estaActivo(id) {
    const activos = resueltos.filter(e => e.id === id);
    if (activos && activos?.length > 0) {
      return true;
    }
    return id === opcionUno || id === opcionDos;
  }

  function reiniciarJuego() {
    setOpcionUno(null);
    setOpcionDos(null);
    setResueltos([]);
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
