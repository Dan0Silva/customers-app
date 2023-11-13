# Customers App

Este é um projeto React Native utilizando o Expo com a proposta de testar meus conhecimentos em React Native.

## Configuração

Certifique-se de ter o node, npm e git instalados no seu sistema.


### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Dan0Silva/customers-app.git

2. Navegue até o diretório do projeto:

   ```bash
   cd customers-app

3. Instale as dependências do projeto:

   ```bash
   npm install

### Execução

1. para executar, basta rodar o comando:

   ```bash
   npx expo

> O sistema irá rodar e exibir um qr-code, que pode ser lido utilizando o aplicativo do Expo no telefone (caso o telefone esteja na mesma rede), ou por meio de um emulador
como o do Android Studio.

### Observações e Melhorias

Tentei durante o projeto escrever o código e separar as coisas de maneira que seja tranquilo de entender como o sistema está funcionando e de maneira
escalável. Além da separação comum do Expo que dedica uma pasca aos assets do projeto (como logos, imagens, splashs, etc), criei a pasta src com o intuito
de concentrar o código referente a aplicação em si. Na pasta src, separei as coisas em contextos da aplicação (contexts), rotas e navegação (routes), telas
(screens) e tipos (types), cada pasta com seu determinado propósito.

Outra separação que resolvi implementar é dentro das telas, separando a tela por "esqueleto" e estilo, o esqueleto sendo onde a tela é de fato renderizada,
e o estilo sendo um arquivo espara onde deixo toda a estilização refêrente a tela.

Uma separação que eu poderia ter feito e que seria um ponto de melhoria seria a criação de uma pasta components dentro da src, que serviria para criar componentes
padrão dentro da aplicação. Por exeplo, ao invés de criar um botão em cada tela e tentar deixar estes botões semelhantes para não quebrar a experiẽncia do usuário,
poderia criar um componente Button que poderia ser utilizado em qualquer tela, polpando código e facilitando futuras manutenções.

Creio que, caso fosse melhorar o projeto, tentaria criar uma parte de login, onde a pessoa só conseguiria ver outros usuários caso estivesse logada, além de trabalhar
mais no design da aplicação e adicionar alguns incrementos ao usuário, como foto de perfil ou um feed de publicações caso tomasse o projeto para esse rumo. Outro ponto
bem inportante na melhoria do projeto seria a utilização de uma api para persistência de dados.
   
