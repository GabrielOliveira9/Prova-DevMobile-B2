import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from '@react-navigation/native';

export default function RegisterPage(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Registre-se</Text>
            <View style={styles.viewImg}>

            </View>
            <View style={styles.viewData}>
                <TextInput style={styles.input}
                    placeholder="E-mail"    
                />
                <TextInput style={styles.input}
                    placeholder="Senha"    
                />
                <TextInput style={styles.input}
                    placeholder="Confirmar senha"    
                />
                <TouchableOpacity style={styles.btn}>
                    <Link to={{screen: "Dashboard"}}>Registrar-se</Link>
                </TouchableOpacity>
            </View>
        </View>
    )
}
