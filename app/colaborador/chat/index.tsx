import { View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import { useRouter } from 'expo-router'

export default function Chat(){

    const router = useRouter()

    return(
        <View style={style.container}>
            <TouchableOpacity onPress={() => router.push('./menu/')}>
                <MaterialCommunityIcons style={style.icon} name='arrow-left' size={22} color='black'></MaterialCommunityIcons>
            </TouchableOpacity>
            <ScrollView>
            <View style={style.chat}>
                <View style={style.boxChatBoot}>
                    <Text>Olá Bruno, como posso te ajudar?</Text>
                </View>
                <View style={style.boxChatUser}>
                    <Text>Eu Gostaria de saber como eu consigo acesso a plataforma de benefícios.</Text>
                </View>
                <View style={style.boxChatBoot}>
                    <Text>Ótima pergunta, esse assunto </Text>
                </View>
            </View>
        </ScrollView>
            <View style={style.footer}>
                <TextInput style={style.input} placeholderTextColor='#f0f0f0' placeholder='Digite uma pergunta...' />
                <TouchableOpacity>
                    <MaterialCommunityIcons name='send' size={22} color='white'></MaterialCommunityIcons>
                </TouchableOpacity>
            </View>
       </View>
    );
}


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f0'
    },
    input:{
        padding:10,
        paddingRight:100,
        backgroundColor:'#b669b68a',
        opacity:20,
        borderRadius:10,
        width:"80%"
    },
    boxChatBoot:{
        backgroundColor:'#993399',
        padding:10,
        alignSelf:'flex-start',
        marginLeft:20,
        marginRight:'auto',
        marginTop:20,
        marginBottom:20,
        borderRadius:10,
        maxWidth:'75%'
    },
    boxChatUser:{
        backgroundColor:'#c981c9ff',
        padding:10,
        alignSelf:'flex-start',
        marginLeft:'auto',
        marginRight:20,
        marginTop:20,
        marginBottom:20,
        borderRadius:10,
        maxWidth:'75%'
    },
    chat:{
        flex:1,
        padding:10
    },
    footer:{
        backgroundColor:'#993399',
        marginTop:'auto',
        paddingTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:20,
        alignItems:'center'
    },
    icon:{
        marginLeft:'auto',
        marginRight:20,
        marginTop:20
    }
})
