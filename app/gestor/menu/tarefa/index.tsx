import { View, TouchableOpacity, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from "expo-router";

export default function CriaTarefa(){

    const router = useRouter()


    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('/gestor/menu')}>
                    <MaterialCommunityIcons style={styles.icon} name='arrow-left' size={22} color='black'></MaterialCommunityIcons>
            </TouchableOpacity>
            <Text style={styles.title}>Criação de Tarefa</Text>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.label}>Titulo</Text>
                        <TextInput style={styles.input} placeholder="Digite o titulo da tarefa..." placeholderTextColor='#ccc'></TextInput>
                    </View>
                    <View>
                        <Text style={styles.label}>Descrição</Text>
                        <TextInput style={styles.input} placeholder="Digite a descrição da tarefa..." placeholderTextColor='#ccc'></TextInput>
                    </View>
                    <View>
                        <Text style={styles.label}>Data de Inicio</Text>
                        <TextInput style={styles.input} placeholder="Digite a data de início..." placeholderTextColor='#ccc'></TextInput>
                    </View>
                    <View>
                        <Text style={styles.label}>Data de término</Text>
                        <TextInput style={styles.input} placeholder="Digite a data de término..." placeholderTextColor='#ccc'></TextInput>
                    </View>
                    <View>
                        <Text style={styles.label}>Nome do colaborador</Text>
                        <TextInput style={styles.input} placeholder="Digite o nome do colaborador..." placeholderTextColor='#ccc'></TextInput>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.color}>Criar</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f0f0f0',
        flex:1
    },
    title:{
        color:'#993399',
        fontSize:30,
        fontWeight:'bold',
        marginTop:20,
        marginLeft:30
    },
    input:{
        padding:15,
        paddingRight:80,
        marginTop:2,
        backgroundColor:'#ffffff',
        color:'#ccc',
        borderRadius:10
    },
    label:{
        marginTop:20,
        marginBottom:5,
        marginLeft:4
    },
    form:{
        marginLeft:'auto',
        marginRight:'auto',
        padding:10
    },
    button:{
        backgroundColor:'#993399',
        color:'#ffffff',
        minWidth:150,
        justifyContent:'center',
        alignItems:'center',
        padding:8,
        borderRadius:10,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:20
    },
    color:{
        color:'#ffffff'
    },
    icon:{
        marginLeft:'auto',
        marginRight:20,
        marginTop:20
    }
})
