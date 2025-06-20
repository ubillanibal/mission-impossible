import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  { id: "1", title: "Welcome!", color: "#FF6347" },
  { id: "2", title: "Explore", color: "#6A5ACD" },
  { id: "3", title: "Connect", color: "#3CB371" },
];

type OnboardingModalProps = {
  visible: boolean;
  onDone?: () => void;
};

export default function OnboardingModal({
  visible,
  onDone,
}: OnboardingModalProps) {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (index < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: index + 1 });
    }
  };

  const handleDone = () => {
    if (onDone) onDone();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <FlatList
            ref={flatListRef}
            data={slides}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.slide, { backgroundColor: item.color }]}>
                <Text style={styles.title}>{item.title}</Text>
                {index === 0 && (
                  <TouchableOpacity style={styles.exitBtn} onPress={handleDone}>
                    <Text style={styles.exitBtnText}>Exit Onboarding</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
            onMomentumScrollEnd={(e) => {
              const newIndex = Math.round(
                e.nativeEvent.contentOffset.x / width
              );
              setIndex(newIndex);
            }}
            getItemLayout={(_, i) => ({
              length: width,
              offset: width * i,
              index: i,
            })}
            extraData={index}
          />
          <View style={styles.dots}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  { backgroundColor: i === index ? "#007AFF" : "#ccc" },
                ]}
              />
            ))}
          </View>
          {index < slides.length - 1 ? (
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleDone}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, justifyContent: "center" },
  slide: { width, alignItems: "center", justifyContent: "center", height: 300 },
  title: { fontSize: 32, color: "#fff", fontWeight: "bold" },
  dots: { flexDirection: "row", justifyContent: "center", margin: 16 },
  dot: { width: 10, height: 10, borderRadius: 5, margin: 4 },
  button: {
    alignSelf: "center",
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 20,
    marginTop: 10,
    minWidth: 100,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  exitBtn: {
    marginTop: 20,
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 10,
  },
  exitBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
