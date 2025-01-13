import React from "react";
import { View, SafeAreaView, StatusBar, Text } from "react-native";
import { Stack } from "expo-router";
const Layout = ({ children }) => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="users" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" backgroundColor="#000" />
    </>
  );
};

export default Layout;
