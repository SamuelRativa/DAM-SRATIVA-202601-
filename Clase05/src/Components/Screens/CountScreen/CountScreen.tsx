import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { stylesCountScreen } from "./CountScreen.style";

type countScreenProps = {
  label: string;
  OnPress: () => void;
};

export const CountScreen: React.FC<countScreenProps> = ({ label }) => {

  const [numero, setNumero] = useState("0");
  const [numeroAnterior, setNumeroAnterior] = useState("");
  const [operacion, setOperacion] = useState("");

  const agregarNumero = (num: string) => {
    if (numero === "0") setNumero(num);
    else setNumero(numero + num);
  };

  const seleccionarOperacion = (op: string) => {
    setNumeroAnterior(numero);
    setNumero("0");
    setOperacion(op);
  };

  const calcular = () => {
    const n1 = parseInt(numeroAnterior);
    const n2 = parseInt(numero);

    let resultado = 0;

    if (operacion === "+") resultado = n1 + n2;
    if (operacion === "-") resultado = n1 - n2;

    setNumero(resultado.toString());
    setNumeroAnterior("");
    setOperacion("");
  };

  return (
    <View style={stylesCountScreen.container}>

      <Text style={stylesCountScreen.title}>{label}</Text>
      <Text style={stylesCountScreen.display}>{numero}</Text>

      <View style={stylesCountScreen.row}>
        <Boton texto="1" onPress={() => agregarNumero("1")} />
        <Boton texto="2" onPress={() => agregarNumero("2")} />
        <Boton texto="3" onPress={() => agregarNumero("3")} />
      </View>

      <View style={stylesCountScreen.row}>
        <Boton texto="4" onPress={() => agregarNumero("4")} />
        <Boton texto="5" onPress={() => agregarNumero("5")} />
        <Boton texto="6" onPress={() => agregarNumero("6")} />
      </View>

      <View style={stylesCountScreen.row}>
        <Boton texto="7" onPress={() => agregarNumero("7")} />
        <Boton texto="8" onPress={() => agregarNumero("8")} />
        <Boton texto="9" onPress={() => agregarNumero("9")} />
      </View>

      <View style={stylesCountScreen.row}>
        <Boton texto="0" onPress={() => agregarNumero("0")} />
        <Boton texto="+" onPress={() => seleccionarOperacion("+")} />
        <Boton texto="-" onPress={() => seleccionarOperacion("-")} />
        <Boton texto="=" onPress={calcular} />
      </View>

    </View>
  );
};

const Boton = ({ texto, onPress }: any) => {
  return (
    <Pressable style={stylesCountScreen.button} onPress={onPress}>
      <Text style={stylesCountScreen.buttonText}>{texto}</Text>
    </Pressable>
  );
};