import React from 'react'
import { ActivityIndicator, Alert, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import api from "../../config/api"

import { Container, TitleInput, InputForm, BtnSubmitForm, TxtSubmitForm, TitleRequired, LoadingArea } from './styles';

export default function AddMeta() {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(false)

    const addMeta = async () => {
        setLoading(true)
        await api.post('/metas', {name, description, status})
        .then((response) => {
            Alert.alert("", response.data.message)
            setLoading(false)
        }).catch((err) => {
            if(err.response){
                Alert.alert("", response.data.message)
            } else {
                Alert.alert("", "Erro: Meta não cadastrada, tente novamente mais tarde! :(")
            }
            setLoading(true)
        })
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Container>
                <TitleInput>* Nome: </TitleInput>
                <InputForm  placeholder="Qual sua meta?"
                autoCorrect={false}
                value={name}
                editable={!loading}
                onChangeText={text => setName(text)}/>

                <TitleInput>* Descrição: </TitleInput>
                <InputForm  placeholder="Qual a descrição da sua meta?"
                autoCorrect={false}
                value={description}
                editable={!loading}
                onChangeText={text => setDescription(text)}/>

                <TitleInput>* Status: </TitleInput>
                <InputForm  placeholder="Qual o status da meta?"
                autoCorrect={false}
                value={status}
                editable={!loading}
                onChangeText={text => setStatus(text)} />

                <TitleRequired>* Campo obrigatório</TitleRequired>
                <BtnSubmitForm disable={loading} onPress={addMeta}>
                    <TxtSubmitForm>Cadastrar</TxtSubmitForm>
                </BtnSubmitForm>

                {loading && 
                    <LoadingArea>
                        <ActivityIndicator size="large" color="#fff"/>
                    </LoadingArea>
                }

            </Container>
        </ScrollView>
    )
}