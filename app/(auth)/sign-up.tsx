import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold">Sign Up Page</Text>
      <Link href="/" className="mt-4 text-blue-500">Go back home</Link>
    </View>
  );
};

export default SignUp;
