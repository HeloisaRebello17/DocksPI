import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
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
                        <Text style={styles.modalText}>O primeiro passo é pequeno, mas não tão simples.
                                Você deve escrever uma frase que resuma toda a história do seu livro.
                                Recomendamos fazer uma frase com menos de 15 palavras que aborda as principais questões da estória sem citar nomes de personagens.
                                </Text>
                                <Text style={{display:"flex"}}>
                                O resultado deve ficar mais ou menos assim:
                                </Text>
                         <Text>
                                “Um cientista excêntrico viaja no tempo para matar Hitler.”
                        </Text>
                        <Text>
                                Como você pode observar, descrevemos o protagonista em vez de citar seu nome.
                                Mencionar Hitler não tem problema, pois ele é uma figura histórica.
                                Não se preocupe em alcançar a perfeição. O objetivo de cada etapa é justamente desenvolver e aperfeiçoar o seu enredo aos poucos.

                                Aqui há outros exemplos para se inspirar:

                                “Garoto órfão descobre que é um bruxo famoso e é levado para uma escola de magia” (Harry Potter e a Pedra filosofal)

                                “Estudante adolescente descobre que o garoto que ela está interessada é um vampiro” (Crepúsculo)</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>
                            </Text>
                        </Pressable>
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
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    iconinfo: {
        fontSize: "24px"
    }
});