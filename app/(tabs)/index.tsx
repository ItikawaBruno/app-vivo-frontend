import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions, Alert} from 'react-native'
import {useRouter} from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
import { Controller, useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const {height} = Dimensions.get('window')

const schema = yup.object({
  email:yup.string().email('E-mail invalido').required("Digite seu email"),
  senha:yup.string().required('Digite sua senha')
})

export default function Login(){
    const router = useRouter()

  const {control, handleSubmit, formState : {errors}} =useForm<FormData>({
    resolver:yupResolver(schema),
    defaultValues:{
      email:'',
      senha:''
    }
  })

  function dadosLogin(data : FormData){
    console.log(data);
    fetch('http://localhost:8080/login',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    }).then(async response => {
      if (response.ok) {
        const json = await response.json();
        router.push('./menu/')
      } else {
        Alert.alert("Login falhou",'Usuário ou senha incorretos')
      }
    }).catch(error => {
      console.log('Erro na requisição: ',error);
      Alert.alert('Erro','Erro ao conectar com o servidor')
    })

  }
  
  
  type FormData ={
    email:string;
    senha:string;
  }
    
    return(
        <LinearGradient colors={['#663399', '#993399', '#CC66CC']} style={styles.gradient}>
            <View style={styles.header}>
                         <Text style={styles.title}>VIVI</Text>
                        <View style={styles.titleUnderline} />
                    </View>
            <View style={styles.circleDecoration1} />
                    <View style={styles.circleDecoration2} />
                    <View style={styles.circleDecoration3} />
                    <View style={styles.circleDecoration4}/>
            <View style={styles.form}>
                <Text style={styles.label}>E-mail</Text>
                <Controller control={control} name='email' render={({ field : {onChange,value}}) => (
                <TextInput id='email' placeholderTextColor={'#999'} placeholder='Digite seu e-mail' style={styles.input} value={value} onChangeText={onChange}/>  
                )}/>
                {errors.email && <Text style={styles.error}>{errors.email?.message}</Text>}
                
                <Text style={styles.label}>Senha</Text>
                <Controller name='senha' control={control} render={({field : {onChange, value}}) => (
                  <TextInput id='senha' placeholderTextColor={'#999'} placeholder='Digite sua senha' style={styles.input} secureTextEntry={true } value={value} onChangeText={onChange}/>
                )}/>
                {errors.senha && <Text style={styles.error}>{errors.senha?.message}</Text>}
                
                <TouchableOpacity id='btn' style={styles.button} onPress={handleSubmit(dadosLogin)}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => router.push('../colaborador/cadastrar')}>
                <Text style={styles.link}>Cadastar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => router.push('./gestor/menu')}>
                <Text style={styles.link}>Esqueci minha senha</Text>
            </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor:'#f0f0f0',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20
    },
    link:{
        color:'#993399',
        margin:3,
        fontSize:14,
        alignItems:'center',
        justifyContent:'center',
        marginTop:5
    },
      title: {
    fontSize: 28,
    fontWeight: 'bold',
    color:'#c042c0ff',
    alignItems:'center',
    marginTop:30
    },
    textColor:{
        color:'#993399',
        fontSize:30
    },
    form: {
    width: '90%',        
    maxWidth: 400,       
    backgroundColor: '#d1c3d3ff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 80,
    alignSelf: 'center', 
  },
    input:{
        backgroundColor:'#ffffff',
        padding:12,
        maxWidth:'100%',
        borderRadius:8,
        borderColor:'#ccc',
        borderWidth:1,
        marginTop:5
    },
    label:{
        fontSize: 16,
    marginTop:5
    },
    button: {
    backgroundColor: '#993399',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40, // em vez de paddingLeft/Right fixos
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  gradient:{
    flex:1,
    height:height,
    alignItems:'center',
    justifyContent:'center'
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
  },
    error:{
    color:'#99335aff',
        marginBottom: 15,
  },
  titleUnderline: {
    width: 60,
    height: 4,
    backgroundColor: '#FFD23F',
    marginTop: 10,
    borderRadius: 2,
  },
  header:{
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 60,
  }
})