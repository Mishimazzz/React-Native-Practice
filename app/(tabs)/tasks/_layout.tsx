import { Stack } from "expo-router";

export default function TaskLayout()
{
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title:"Task List"}} />
            <Stack.Screen name="[id]" options={{ title:"Task Detail"}} />
        </Stack>
    )
}