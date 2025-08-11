import { View, TouchableOpacity, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from "expo-router";
import { useForm, Controller} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { log } from "console";


const schema = yup.object({
    titulo:yup.string().required('Digite o titulo da tarefa'),
    descricao:yup.string().required('Digite o descricao da tarefa'),
    dataInicio:yup.string().required('Digite o data início da tarefa'),
    dataTermino:yup.string().required('Digite o data término da tarefa'),
    nomeColaborador:yup.string().required('Digite o nome do colaborador'),
})

export default function CriaTarefa(){

    const router = useRouter()
    const { control, handleSubmit, formState : {errors}} = useForm<FormData>({
        resolver:yupResolver(schema),
        defaultValues:{
            titulo:'',
            descricao:'',
            dataInicio:'',
            dataTermino:'',
            nomeColaborador:''
        }
    })

    function criar(data : FormData){
        console.log(data);
        
    }

    type FormData = {
        titulo:string;
        descricao:string;
        dataInicio:string;
        dataTermino:string;
        nomeColaborador:string
    }

    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => router.push('/gestor/menu')}>
                    <MaterialCommunityIcons style={styles.icon} name='arrow-left' size={22} color='black'></MaterialCommunityIcons>
            </TouchableOpacity>
            <Text style={styles.title}>Criação de Tarefa</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Titulo</Text>
                    <Controller name="titulo" control={control} render={({ field : {onChange, value}}) => (
                        <TextInput style={styles.input} placeholder="Digite o titulo da tarefa..." placeholderTextColor='#ccc' onChangeText={onChange} value={value}></TextInput>
                    )}/>
                    {errors.titulo && <Text style={styles.error}>{errors.titulo?.message}</Text>}

                    <Text style={styles.label}>Descrição</Text>
                    <Controller name="descricao" control={control} render={({ field : {onChange, value}}) => (
                        <TextInput style={styles.input} placeholder="Digite o titulo da tarefa..." placeholderTextColor='#ccc' onChangeText={onChange} value={value}></TextInput>
                    )}/>
                    {errors.descricao && <Text style={styles.error}>{errors.descricao?.message}</Text>}

                    <Text style={styles.label}>Data Início</Text>
                    <Controller name="dataInicio" control={control} render={({ field : {onChange, value}}) => (
                        <TextInput style={styles.input} placeholder="Digite o titulo da tarefa..." placeholderTextColor='#ccc' onChangeText={onChange} value={value}></TextInput>
                    )}/>
                    {errors.dataInicio && <Text style={styles.error}>{errors.dataInicio?.message}</Text>}

                    <Text style={styles.label}>Data Término</Text>
                    <Controller name="dataTermino" control={control} render={({ field : {onChange, value}}) => (
                        <TextInput style={styles.input} placeholder="Digite o titulo da tarefa..." placeholderTextColor='#ccc' onChangeText={onChange} value={value}></TextInput>
                    )}/>
                    {errors.dataTermino && <Text style={styles.error}>{errors.dataTermino?.message}</Text>}

                    <Text style={styles.label}>Nome Colaborador</Text>
                    <Controller name="nomeColaborador" control={control} render={({ field : {onChange, value}}) => (
                        <TextInput style={styles.input} placeholder="Digite o titulo da tarefa..." placeholderTextColor='#ccc' onChangeText={onChange} value={value}></TextInput>
                    )}/>
                    {errors.nomeColaborador && <Text style={styles.error}>{errors.nomeColaborador?.message}</Text>}
                    

                    <TouchableOpacity style={styles.button} onPress={handleSubmit(criar)}>
                        <Text style={styles.color} >Criar</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
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
        width:300,
        marginTop:2,
        backgroundColor:'#ffffff',
        color:'#252323ff',
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
        minHeight:300,
        maxHeight:800,
        minWidth:300,
        maxWidth:500,
        marginBottom:60
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
    },
      error:{
        color:'#99335aff',
        marginBottom: 15,
        marginTop:10
  }
})
