import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Dimensions} from 'react-native';
import { useRouter } from 'expo-router';
import { useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup  from 'yup'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons} from '@expo/vector-icons';


const schema = yup.object({
    nome:yup.string().required("Informe seu nome."),
    email:yup.string().email("Email Invalido.").required("Informe seu email."),
    senha:yup.string().required("Informe sua senha.")
  })

const { height, width} = Dimensions.get("window")

export default function Cadastro() {
  const router = useRouter();

   const { control, handleSubmit, formState : {errors}} = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues:{
        nome:'',
        email:'',
        senha:''
    }
   })

    type FormData = {
    nome: string;
    email:string;
    senha:string;
  }

  async function cadastrarUsuario(data: FormData){
    console.log('Dados Recebidos',data);
    
    let response = await fetch('http://192.168.15.181:8080/usuario/cadastro',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    if((await response).ok){
      alert("Conta criada com sucesso!")
    }else{
      alert("Não foi possivel criar a conta")
    }
    router.push("./menu");

  }

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
    <LinearGradient colors={['#663399', '#993399', '#CC66CC']} >

        <View style={styles.circleDecoration1} />
        <View style={styles.circleDecoration2} />
        <View style={styles.circleDecoration3} />
        <View style={styles.circleDecoration4}/>

        <View style={styles.header}>
             <Text style={styles.title}>VIVI</Text>
            <Text style={styles.subtitle}>Sua guia nessa jornada</Text>
            <View style={styles.titleUnderline} />
        </View>
      
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <Controller control={control} name='nome' render={({field : {onChange, value,}}) => (
            <TextInput style={styles.input} placeholderTextColor="#999" placeholder='Digite seu nome' value={value} onChangeText={onChange}></TextInput>
        )}/> 
        {errors.nome && <Text style={styles.error}>{errors.nome?.message}</Text>}
        <Text style={styles.label}>E-mail</Text>
        <Controller control={control} name='email' render={({field : {onChange, value}}) => (
            <TextInput style={styles.input} placeholderTextColor="#999" placeholder='Digite seu email' value={value} onChangeText={onChange}></TextInput>
        )}/>
        {errors.email && <Text style={styles.error}>{errors.email?.message}</Text>}
        <Text style={styles.label}>Senha</Text>
        <Controller control={control} name='senha' render={({field : {onChange, value}}) => (
            <TextInput style={styles.input} placeholderTextColor="#999" placeholder='Digite seu senha' value={value} secureTextEntry={true} onChangeText={onChange}></TextInput>
        )}/>
        {errors.senha && <Text style={styles.error}>{errors.senha?.message}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleSubmit(cadastrarUsuario)}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("../(tabs)")} style={styles.link}>
          <Text style={styles.textColor}>Já possuo uma conta</Text>
          <MaterialCommunityIcons name='arrow-right' size={22} color='#993399'></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>Seus dados estão protegidos</Text>
      </View>
    </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
    alignItems:'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#b452b4ff',
    marginTop:30,
    marginRight:'auto',
    marginLeft:'auto'
  },
  form: {
    minHeight:'30%',
    maxHeight:'60%',
    maxWidth: 350,
    marginRight:'auto',
    marginLeft:'auto',
    backgroundColor:'#d1c3d3ff',
    padding:50,
    borderRadius:10,
    marginBottom:40
  },
  label: {
    fontSize: 16,
    marginTop:5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 10,
    marginTop:10,
    width:250,
  },
  button: {
    backgroundColor: '#993399',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop:20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textColor:{
    color:'#993399',
    fontSize:15
  },
  link:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    flexDirection:'row',
    gap:8
  },
  error:{
    color:'#99335aff',
        marginBottom: 15,
  },
  scrollView:{
    flex:1
  },
  backgroundGadient:{
    height:height,
    position:'relative'
  },
  header:{
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 60,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 8,
    fontWeight: '300',
  },
  titleUnderline: {
    width: 60,
    height: 4,
    backgroundColor: '#FFD23F',
    marginTop: 15,
    borderRadius: 2,
  },
  footer:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom:100,
    marginTop:30
  },
    circleDecoration1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(83, 23, 117, 0.42)',
    top: -50,
    right: -50,
  },
  circleDecoration2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(211, 175, 15, 0.53)',
    bottom: 100,
    left: -30,
  },
  circleDecoration3: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(168, 32, 139, 0.55)',
    top: 180,
    left: 12,
  },
  circleDecoration4:{
    position:'absolute',
    backgroundColor: '#993399',
    width:190,
    height:190,
    borderRadius:180,
    left:250,
    top:560
  }
});
