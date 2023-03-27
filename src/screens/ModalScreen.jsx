import React, { useState } from 'react';
import { Alert, StyleSheet, Modal, Text, Pressable, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ModalScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Icon name="close" 
                            style={styles.buttonclose}
                            onPress={() => setModalVisible(!modalVisible)}
                           
                            />
                       
                        <Text style={styles.modalText}>O primeiro passo é pequeno, mas não tão simples.
                            Você deve escrever uma frase que resuma toda a história do seu livro.
                            Recomendamos fazer uma frase com menos de 15 palavras que aborda as principais questões da estória sem citar nomes de personagens.
                        </Text>
                        <Text style={styles.modalText2}>
                            O resultado deve ficar mais ou menos assim:
                        </Text>
                        <Text style={styles.modalText3}>
                            “Um cientista excêntrico viaja no tempo para matar Hitler.”
                        </Text>
                        <Text>
                            Como você pode observar, descrevemos o protagonista em vez de citar seu nome.
                            Mencionar Hitler não tem problema, pois ele é uma figura histórica.
                            Não se preocupe em alcançar a perfeição. O objetivo de cada etapa é justamente desenvolver e aperfeiçoar o seu enredo aos poucos.
                        </Text>
                        <Text style={styles.modalText4}>
                            Aqui há outros exemplos para se inspirar:
                        </Text>
                        <Text style={styles.modalText5}>
                            “Garoto órfão descobre que é um bruxo famoso e é levado para uma escola de magia” (Harry Potter e a Pedra filosofal)
                        </Text>
                        <Text style={styles.modalText6}>
                            “Estudante adolescente descobre que o garoto que ela está interessada é um vampiro” (Crepúsculo)</Text>
                       
                    </View>
                </View>
            </Modal>


            <Icon name="information-outline" style={styles.iconinfo}
                onPress={() => setModalVisible(true)} />



        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonclose:{
        fontSize:"24px",
        marginLeft:"auto",
    },
   
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {

        textAlign: 'start',
    },
    modalText2: {
        marginRight: "auto",
    },
    modalText3: {
        marginTop: "10px",
        marginBottom: "10px",
        fontWeight: "bold"
    },
    modalText4: {
        marginRight: "auto",
        marginBottom: "10px",
        marginTop: "10px",
    },
    modalText5: {
        marginBottom: "10px",
        fontWeight: "bold",
    },
    modalText6: {
        fontWeight: "bold",
    },
    iconinfo: {
        fontSize: "24px",
        marginLeft:"auto",
    }
});