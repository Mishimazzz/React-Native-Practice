import { View, Text, FlatList, Pressable} from "react-native";
import {Link, router} from "expo-router";

const data = [
    {id:"1", title:"buy milk"},
    {id:"2", title:"Finish assignment"},
    {id:"3", title:"Workout"},
]

export default function Tasks()
{
    return (
        <View>
            <FlatList 
            data={data} 
            renderItem={({ item }) => (
            <View style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 12,
              padding: 14,
              paddingTop:20,
              margin:20,
              backgroundColor: "white",
            }}>
            <Text style={{ fontSize:16, fontWeight:"600"}}>{item.title}</Text>
            <Link href={`/(tabs)/tasks/${item.id}`} style={{ marginTop: 8, fontSize: 14 }}>
            查看详情（Link）
            </Link>
            </View>
            )} 
            keyExtractor={(item) => item.id}/>
        </View>
    );
}