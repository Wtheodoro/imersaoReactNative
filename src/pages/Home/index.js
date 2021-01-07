import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Btn, Btntxt } from './styles'

export default function Home() {

    const navigation = useNavigation()

    const Metas = () => {
        navigation.navigate('Metas')
    }
    return (
        <Container>
            <Btn onPress={Metas}>
                <Btntxt>Listar</Btntxt>
            </Btn>
            <Btn>
                <Btntxt>Cadastrar</Btntxt>
            </Btn>
        </Container>
    )
}