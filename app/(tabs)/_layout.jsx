import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const _layout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="About"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="infocirlceo" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Contact"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="contacts" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
