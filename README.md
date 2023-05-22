### Projeto React Native

Este é um projeto React Native utilizando o Fluxo de Trabalho do Expo Manager, com apenas uma tela onde você pode cadastrar e remover participantes.

# Tecnologias Utilizadas

    Node.js
    Expo CLI

## Configuração do Ambiente de Desenvolvimento

Siga as orientações de acordo com o seu sistema operacional e tecnologia para emular a aplicação:

    Para ambiente Windows ou Linux, siga as instruções em: https://react-native.rocketseat.dev/
    Para ambiente macOS ou iOS, siga as instruções em: https://reactnative-dev.translate.goog/docs/environment-setup?os=macos&platform=ios&_x_tr_sl=auto&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_hist=true

## Fluxo de Trabalho do Expo Manager

Para iniciar o projeto utilizando o Expo Manager, siga os passos abaixo:

    Execute o comando

```bash
    $ npx create-expo-app my-app
```

    ou

```bash
    $ npm install -g create-expo-app
```

    para instalar o Expo CLI globalmente.
    Em seguida, execute

```bash
    $ expo init imhere --npm
```

    para criar um novo projeto com o nome "imhere".
    Durante a criação do projeto, você será solicitado a selecionar um template. Escolha o template "Manager workflow - blank (TypeScript)".
    Após a criação do projeto, abra-o no seu editor de código preferido. Caso a pasta "node_modules" não tenha sido criada automaticamente, abra um terminal, navegue até a pasta raiz do projeto e execute o comando

```bash
    $ npm install
```

## Executando o Projeto

Para executar o projeto, utilize o seguinte comando:

```bash
$ expo start
```

Em seguida, selecione a plataforma na qual deseja executar a aplicação de acordo com o seu ambiente de desenvolvimento. Você pode utilizar um emulador Android, executar a aplicação no navegador ou utilizar o emulador iOS se estiver utilizando um sistema operacional iOS.

Também é possível executar o aplicativo em um dispositivo móvel escaneando o QR code gerado no terminal. Para isso, você precisa baixar o aplicativo Expo Go nas lojas de aplicativos.

Observação: Para utilizar o Expo Go, é necessário que o dispositivo móvel esteja conectado à mesma rede Wi-Fi do computador. Caso contrário, é necessário configurar a opção de tunneling para estabelecer a conexão.
