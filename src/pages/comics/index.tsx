import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { FiChevronDown } from 'react-icons/fi';
import { Container, CardList, Card, ButtonMore, CopyRighter } from './styles';
import Header  from './Header';
import Modal from './Modal';


interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export type DadosModal = Omit<ResponseData, 'id'> 


const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<ResponseData[]>([]);
    const [dadosModal, setDadosModal] = useState<DadosModal>({} as DadosModal);
    const [abrirModal, setAbrirModal] = useState(false);

    useEffect(() => {
        api
        .get('/comics')
        .then(response => {
            setCharacters(response.data.data.results);
        })    
        .catch(err => console.log('log erro', err));
    }, []); 
    
    const handleMore = useCallback(async () => {
        try {
          const offset = characters.length;
          const response = await api.get(`characters`, {
            params: {
                offset,
            },
          });

          setCharacters([... characters, ...response.data.data.results]);

        } catch (err) {
            console.log(err);
        }    
        }, [characters]);
        function expandir(character: DadosModal) {
            setDadosModal(character)
            setAbrirModal(true)
        }


    return (
        <>
     <Header/>  
        <Container>
            <CardList>
                {characters.map(character => {
                    return (
                        <Card onClick={() => expandir(character)} key={character.id} thumbnail={character.thumbnail}>

                        <div id="img" />
                        <h2>{character.name}</h2>
                        <p>{character.description}</p>
                      </Card>
                    )
                })}         
            </CardList>
            <ButtonMore onClick={handleMore}>
                <FiChevronDown  size={20}/>
                Mais 
                <FiChevronDown  size={20}/>
            </ButtonMore>

        </Container>
        <CopyRighter>©2022 MARVEL</CopyRighter>
        {abrirModal && <Modal dadosModal={dadosModal} onClose={() => setAbrirModal(false)}/>}
       </>
    );
};        


export default Characters;