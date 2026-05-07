import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fdf8e8",
        paddingHorizontal: 24,
        gap: 16,
      }}
    >
      <Text
        style={{ color: "#4ade80", fontSize: 24, fontWeight: "bold" }}
      >
        Welcome to Nativewind!
      </Text>

      <View
        style={{
          backgroundColor: "#0a0f24",
          borderRadius: 10,
          paddingVertical: 14,
          paddingHorizontal: 24,
          width: 200,
          marginTop: 8,
        }}
      >
        <Link href="/onboarding">
          <Text style={{ color: "#ffffff", textAlign: "center", fontWeight: "500" }}>
            Go to Onboarding
          </Text>
        </Link>
      </View>

      <View
        style={{
          backgroundColor: "#0a0f24",
          borderRadius: 10,
          paddingVertical: 14,
          paddingHorizontal: 24,
          width: 200,
        }}
      >
        <Link href="/(auth)/sign-in">
          <Text style={{ color: "#ffffff", textAlign: "center", fontWeight: "500" }}>
            Go to Sign in
          </Text>
        </Link>
      </View>

      <View
        style={{
          backgroundColor: "#0a0f24",
          borderRadius: 10,
          paddingVertical: 14,
          paddingHorizontal: 24,
          width: 200,
        }}
      >
        <Link href="/(auth)/sign-up">
          <Text style={{ color: "#ffffff", textAlign: "center", fontWeight: "500" }}>
            Go to Sign up
          </Text>
        </Link>
      </View>

      <View style={{ alignItems: "center", marginTop: 4, gap: 6 }}>
        <Link href="/subscriptions/spotify">
          <Text style={{ color: "#1f2937" }}>Spotify Subscription</Text>
        </Link>
        <Link
          href={{
            pathname: "/subscriptions/[id]",
            params: { id: "claude" },
          }}
        >
          <Text style={{ color: "#1f2937" }}>Claude Max Subscription</Text>
        </Link>
      </View>
    </View>
  );
}
