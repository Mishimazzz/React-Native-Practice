import { View, Text, Button } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function TaskDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 18 }}>Task Detail</Text>
      <Text>id: {id}</Text>

      <Button title="返回" onPress={() => router.back()} />
    </View>
  );
}