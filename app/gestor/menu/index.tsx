import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router"


export default function menu(){


    const router = useRouter()

    const colaborador = [
        {
            nome:'Bruno'
        },
        {
            nome:'Matheus'
        },
        {
            nome:'Julia'
        },
        {
            nome:'Renan'
        },
        {
            nome:'Kevin'
        }
    ]

    return(
        <View style={style.container}>
            <TouchableOpacity onPress={() => router.push('../(tabs)')}>
                <MaterialCommunityIcons style={style.icon} name='logout' size={22} color='black'></MaterialCommunityIcons>
            </TouchableOpacity>
            <Text  style={style.title}>Olá, Gerson!</Text>
            <View style={style.listaColaborador}>
                <Text style={style.subTitle}>Colaboradores</Text>
                {colaborador.map((item,  index) => (
                    <TouchableOpacity key={index} style={style.cardTarefa} onPress={() => router.push('../gestor/menu/dados')}>
                        <Text>{item.nome}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={style.cardAdd}  onPress={() => router.push('../gestor/menu/tarefa/')}>
                <MaterialCommunityIcons name='plus' color='black' size={22}></MaterialCommunityIcons>
                <Text>Adicionar Tarefa</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f0'
    },
    listaColaborador:{
        flex:1,
        padding:10,
        gap:10,
        flexDirection:'column'
    },
    title:{
        color: '#993399',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        marginRight:'auto',
        marginLeft:30,
        marginTop:30
    },
    cardAdd:{
        marginTop:'auto',
        marginBottom:30,
        padding:10,
        backgroundColor:'grey',
        flexDirection:'row',
        marginRight:'auto',
        marginLeft:'auto',
        paddingRight:140,
        borderRadius:10,
        paddingTop:20,
        paddingBottom:20,
        alignItems:'center',
        gap:20,
        paddingLeft:40,
        maxWidth:300
    },
    cardTarefa:{
        marginRight:'auto',
        marginLeft:40,
        backgroundColor:'#b15bb1ff',
        borderRadius:10,
        padding:20,
        minWidth:280,
    },
    subTitle:{
        color:'#993399',
        fontSize:20,
        marginBottom:20,
        marginRight:'auto',
        marginLeft:40
    },
    icon:{
        marginLeft:'auto',
        marginRight:20,
        marginTop:20
    }
})
