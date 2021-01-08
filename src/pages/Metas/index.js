import React, { useState, useCallback } from 'react'
import { Container,TitleList, ListMetas, ItemMeta, TitleItem, DescriptionItem, LoadingArea } from './styles'
import { useFocusEffect } from '@react-navigation/native';
import { Alert, ActivityIndicator } from 'react-native';

import api from '../../config/api';

export default function Metas() {

    const [metas, SetMetas] = useState("")
    const [loading, setLoading] = useState(false)

    const getMetas = async () => {
        setLoading(true)
        try {
            const response = await api.get('/metas')    
            SetMetas(response.data.metas) 
            setLoading(false)      
        } catch (error) {
            Alert.alert("", "Erro: Nenhuma meta encontrada, tente mais tarde!")
            setLoading(false)
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
            {loading ? <LoadingArea><ActivityIndicator size="large" color="#fff" /></LoadingArea> : 
            <ListMetas data={metas} renderItem={({item}) => (
                <ItemMeta>
                    <TitleItem>{item.name}</TitleItem>
                    <DescriptionItem>{item.description}</DescriptionItem>
                    <DescriptionItem>{item.status}</DescriptionItem>
                </ItemMeta>
            )} keyExtractor={meta => String(meta._id)}
            />
            }
        </Container>   
    )
}