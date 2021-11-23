import React, {useState} from 'react';

import {SafeAreaView, TouchableOpacity, StyleSheet, Text} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(10);

  function handleNumero() {
    const novoNumero = Math.floor(Math.random() * 100);

    //setNumero (novoNumero)  //Desse modo apenas apresenta um valor aleatório a cada vez que aperta o botão
    setNumero(novoNumero + numero); //Assim somaria os valores
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero}>
        <Text>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'FF0000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 30,
    color: '#000777',
  },
  botao: {
    background: '#FFFF00',
    winth: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

export default App;
