import React, { useState, useCallback } from 'react'
import { Container,TitleList, ListMetas, ItemMeta, TitleItem, DescriptionItem } from './styles'
import { useFocusEffect } from '@react-navigation/native';
import { Alert } from 'react-native';

import api from '../../config/api';

export default function Metas() {

    const [metas, SetMetas] = useState("")

    const getMetas = async () => {
        try {
            const response = await api.get('/metas')    
            SetMetas(response.data.metas)       
        } catch (error) {
            Alert.alert("", "Erro de conexão com a API")
        }
    }

    useFocusEffect(
        useCallback( () => {
           getMetas() 
        },[])
    )

    return (
        <Container>
            <TitleList>Lista de Metas</TitleList>
            <ListMetas data={metas} renderItem={({item}) => (
                <ItemMeta>
                    <TitleItem>{item.name}</TitleItem>
                    <DescriptionItem>{item.description}</DescriptionItem>
                    <DescriptionItem>{item.status}</DescriptionItem>
                </ItemMeta>
            )} keyExtractor={meta => String(meta._id)}
            />
        </Container>   
    )
}