import OnboardingModal from "@/components/OnboardinModal";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  const posts = [
    { id: 1, text: "First post! Hello world." },
    { id: 2, text: "Another day, another post." },
    { id: 3, text: "Why is this site so AMAZING!?" },
  ];

  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <ThemedView style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/100" }}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Jane Doe</Text>
        <Text style={styles.age}>Age: 28</Text>
      </View>
      <Text style={styles.feedTitle}>POSTS FEED</Text>
      <View style={styles.feed}>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.postText}>{post.text}</Text>
          </View>
        ))}
        <OnboardingModal
          visible={showOnboarding}
          onDone={() => setShowOnboarding(false)}
        />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#ffcc00",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    alignSelf: "center",
  },
  info: {
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  age: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  feedTitle: {
    fontSize: 18,
    fontWeight: "900",
    backgroundColor: "#ffcc00",
    color: "#f00",
    textAlign: "left",
    marginVertical: 2,
    padding: 2,
    letterSpacing: 2,
  },
  feed: {
    flex: 1,
    backgroundColor: "#ffcc00",
    borderWidth: 3,
    borderColor: "#0f0",
    margin: 0,
    padding: 0,
  },
  post: {
    backgroundColor: "#f99",
    margin: 1,
    padding: 2,
    borderBottomWidth: 2,
    borderBottomColor: "#333",
    minHeight: 40,
    justifyContent: "center",
  },
  postText: {
    color: "#00f",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
});

export default Profile;
