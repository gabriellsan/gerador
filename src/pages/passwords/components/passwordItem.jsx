import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export function PasswordItem({data, removePassword}) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
        <Text style={styles.title}>{data}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0E0E0E",
        padding: 14,
        width: '100%',
        marginBottom:14,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    title: {
        color: "#FFF",
    }
})