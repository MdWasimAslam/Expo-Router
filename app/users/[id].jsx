import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const UserPage = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>UserPage {id ? id : ""}</Text>
    </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({});
