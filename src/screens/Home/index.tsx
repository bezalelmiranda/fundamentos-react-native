import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home(){
  const [participants, setParticipants] = useState<string[]>([]); 
  const [participantName, setParticipantName] = useState(''); 

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.")
    }

    // `prevState` recupera os valores anteriores do array, para poder atulizar com um novo valor
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return(
    <View style={styles.container}>
      <Text
      style={styles.eventName}
      >
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName} //onChangeText={text => setParticipantName(text)}
          value={participantName}
          //keyboardType=''
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      {/**
       * ScrollView approach option
       * 
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            participants.map(participant => (
              <Participant 
                key={participant}
                name={participant} 
                onRemove={() => handleParticipantRemove("Rodrigo")} 
              />
            ))
          }
        </ScrollView>
      */}

      {/**
       * FlatList approach option
      */} 
      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  );
}