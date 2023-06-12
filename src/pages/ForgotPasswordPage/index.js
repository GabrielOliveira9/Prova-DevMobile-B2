import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from '@react-navigation/native';

export default function ForgotPasswordPage(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Alterar senha</Text>
            <View style={styles.viewImg}>

            </View>
            <View style={styles.viewData}>
                <TextInput style={styles.input}
                    placeholder="Nome/E-mail"    
                />
                <TextInput style={styles.input}
                    placeholder="Nova Senha"    
                />
                <TextInput style={styles.input}
                    placeholder="Confirmar Nova senha"    
                />
                <TouchableOpacity style={styles.btn}>
                <Link to={{screen: "Dashboard"}}>Alterar Senha</Link>
                </TouchableOpacity>
            
            </View>
        </View>
    )
}
