import { View, Text, FlatList } from "react-native";
import { Link } from "expo-router";
import { useAppSelector } from "../../store";

export default function Tasks() {
  const tasks = useAppSelector((state) => state.tasks.items);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>暂无任务</Text>}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              borderRadius: 12,
              padding: 14,
            }}
          >
            <Text style={{ fontSize: 16 }}>{item.title}</Text>

            <Link href={`/(tabs)/tasks/${item.id}`} style={{ marginTop: 8 }}>
              查看详情
            </Link>
          </View>
        )}
      />
    </View>
  );
}
