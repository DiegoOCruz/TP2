import { router } from "expo-router";
import * as React from "react";
import { Appbar, Text } from "react-native-paper";

export default function EsqueciMinhaSenhaScreen() {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            router.push("/");
          }}
        />
        <Appbar.Content title="Esqueci Minha Senha" />
      </Appbar.Header>
    </>
  );
}
