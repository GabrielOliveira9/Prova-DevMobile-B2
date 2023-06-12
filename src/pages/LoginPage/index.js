import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Faça seu login</Text>
            <View style={styles.viewImg}>

            </View>
            <View style={styles.viewData}>
                <TextInput style={styles.input}
                    placeholder="Nome/E-mail"    
                />
                <TextInput style={styles.input}
                    placeholder="Senha"    
                />
                <TouchableOpacity style={styles.btn} >
                    <Link to={{screen: "Dashboard"}}>Login</Link>
                </TouchableOpacity>
                <Link to={{screen: "RegisterPage"}}>Não tem uma conta? Registre-se</Link>
                <Link to={{screen: "ForgotPasswordPage"}}>Esqueceu sua senha?</Link>
            </View>
        </View>
    )
}
