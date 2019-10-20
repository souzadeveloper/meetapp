# Meetup
O Meetup é uma Aplicação completa com Backend que é uma API desenvolvida em Node.js utilizando o Framework **Express**. Além disso possui o Frontend Web desenvolvido em **React JS** e um *Client* Mobile desenvolvido em **React Native**. Nesta aplicação os Usuários podem cadastrar e administrar **Meetups** e também podem se inscrever em **Meetups** organizados por outros usuários. Este Projeto faz parte do **Desafio Final do Bootcamp da Rocketseat**. Para conhecer mais sobre os Frameworks utilizados, acesse as documentações abaixo:

- [Express](https://expressjs.com/)
- [React JS](https://reactjs.org/)
- [Reac Native](https://facebook.github.io/react-native/)

**Para executar os Projetos você precisará executar os passos descritos abaixo:**

## Backend (Express)

1. Primeiramente precisaremos inciar um Servidor **[Redis](https://redis.io/)**. Para isso você pode utilizar o **[Docker](https://www.docker.com/)** ou instalar o seu próprio Servidor.
2. Inicie também um Servidor **[PostgreSQL](https://www.postgresql.org/)** para criarmos o Banco de Dados. Para isso você também pode utilizar o **Docker** ou instalar um outro Banco de Dados de sua preferência.
3. Após iniciar o **PostgreSQL**, crie um banco de Dados com o nome **meetup**, utilizando o **[Postbird](https://snapcraft.io/postbird)** ou outro *Client* de Banco de Dados PostgreSQL de sua preferência.
4. Acesse o diretório do Projeto e execute o comando abaixo para baixar as dependências:</br>
`yarn`
5. Caso tenha optado por utilizar outro Banco de Dados que não seja o **PostgreSQL**, acesse a documentação do **[Sequelize](https://sequelize.org/v5/manual/dialects.html)** para verificar a depência correspondente ao Banco escolhido.
6. Em seguida o Projeto no **[VsCode](https://code.visualstudio.com/)** para configurar as variáveis de Ambiente. Para isso na raíz do Projeto crie um arquivo de nome **.env** e copie o conteúdo do arquivo **.env.example** e preencha as configurações de acordo com o seu Ambiente.
6. Agora execute o comando abaixo para executar as Migrations no Banco de Dados:
`yarn sequelize db:migrate`
7. Agora você já deve ser capaz de iniciar o seu Backend apenas executando o comando abaixo:
`yarn dev`

## Frontend (React JS)

1. Acesse o diretório do Projeto e execute o comando abaixo para baixar as dependências:
`yarn`
2. Em seguida o Projeto no **[VsCode](https://code.visualstudio.com/)** para configurar as variáveis de Ambiente. Para isso na raíz do Projeto crie um arquivo de nome **.env** e copie o conteúdo do arquivo **.env.example** e preencha as configurações de acordo com o seu Ambiente.
3. Agora você já deve ser capaz de iniciar o seu Frontend Web apenas executando o comando abaixo:
`yarn start`

## Mobile (React Native)

1. Acesse o diretório do Projeto e execute o comando abaixo para baixar as dependências:
`yarn`
2. Em seguida o Projeto no **[VsCode](https://code.visualstudio.com/)** para configurar as variáveis de Ambiente. Para isso na raíz do Projeto crie um arquivo de nome **.env** e copie o conteúdo do arquivo **.env.example** e preencha as configurações de acordo com o seu Ambiente.
3. Agora você já deve ser capaz de iniciar o seu aplicativo Mobile apenas executando o comando abaixo de acordo com a sua plataforma:
`yarn android` (android)
ou
`yarn ios` (ios)

***Observação: A Aplicação Mobile não foi testada no Ios, devido a falta do Ambiente de Desenvolvimento necessário.***