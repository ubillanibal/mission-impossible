import styles from "./LoginFormStyles"; // Assuming you have a styles file
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match!");
    }

    const mode = isLogin ? "Login" : "Registration";
    console.log(`${mode} Form submitted with:`, {
      email,
      password,
      confirmPassword,
    });

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch {
      setError("Wrong password or email. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Log in" : "Create Account"}</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="john@email.tld"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="password"
        value={password}
        onChangeText={setPassword}
      />

      {!isLogin && (
        <>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </>
      )}

      {error && <Text>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {isLogin ? "Log in" : "Register Account"}
        </Text>
      </TouchableOpacity>

      <View style={styles.toggleContainer}>
        <Text>
          {isLogin
            ? "Do you want to create an account?"
            : "Do you already have an account?"}
        </Text>
        <TouchableOpacity
          className="toggle-button"
          onPress={() => setIsLogin(!isLogin)}
        >
          <Text style={styles.toggleText}>
            {isLogin ? "Create Account" : "Log in"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
