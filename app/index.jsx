import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const index = () => {
  return (
    <SafeAreaView>
      <Text className="text-3xl text-black">index</Text>
      <Link style={styles.linkBtn} href="/users/1">
        User 1
      </Link>

      <Pressable
        onPress={() => {
          router.push("/users/2");
        }}
      >
        <Text style={styles.linkBtn}>User 2</Text>
      </Pressable>

      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "/users/[id]",
            params: { id: 3 },
          });
        }}
      >
        <Text style={styles.linkBtn}>User 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.push("(tabs)/Home");
        }}
      >
        <Text style={styles.linkBtn}>Tabs</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  linkBtn: {
    backgroundColor: "#155E95",
    color: "white",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    textAlign: "center",
  },
});
