# Requisitos

- Geral
    - [ ]  A porta utilizada pelo seu servidor deve ser a 5000 (isso facilita nossa avaliação 🙂)
    - [ ]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub
    - [ ]  Faça commits a cada funcionalidade implementada
    - [ ]  Adicione o código que inicia o servidor em `src/app.js`
    - [ ]  Adicione um script no package.json para iniciar o servidor rodando `npm run start` como no exemplo abaixo
        
        ```json
        // package.json
        {
          //...
          "scripts": {
            //...
            "start": "node ./src/app.js"
          }
        }
        ```
        
- Armazenamento de dados
    - [ ]  Para persistir os dados (usuários e tweets), utilize variáveis globais em memória
    - [ ]  O formato de um **usuário** deve ser:
        
        ```jsx
        {
        	username: 'bobesponja', 
        	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
        }
        ```
        
    - [ ]  O formato de um **tweet** deve ser:
        
        ```jsx
        {
        	username: "bobesponja",
          tweet: "eu amo o hub"
        }
        ```
        
- **POST** `/sign-up`
    - [ ]  Deve receber (pelo body da request), um parâmetro **username** e um **avatar**, contendo o nome do username do usuário e a sua foto de avatar:
        
        ```jsx
        {
            username: "bobesponja",
        		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
        }
        ```
        
    - [ ]  Salvar esse usuário num array de usuários do servidor
    - [ ]  Por fim, retornar a mensagem `“OK”`
- **POST** `/tweets`
    - [ ]  Se o usuário não estiver cadastrado (username não fez sign-up anteriormente), deve retornar a mensagem `“UNAUTHORIZED”`
    - [ ]  Deve receber (pelo body da request), os parâmetros `username` e `tweet`:
        
        ```jsx
        {
        	username: "bobesponja",
          tweet: "eu amo o hub"
        }
        ```
        
    - [ ]  Salvar esse tweet num array de tweets do servidor
    - [ ]  Por fim, retornar a mensagem `“OK”`
- **GET** `/tweets`
    - [ ]  Retornar os 10 últimos tweets publicados
        
        ```jsx
        [
        	{
        		username: "bobesponja",
        		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        		tweet: "eu amo o hub"
        	}
        ]
        ```
        
    - Repare que a informação “avatar” **não vem** da requisição **post** de `/tweets`. Para retornar o “avatar” na requisição **get** de `/tweets`, você vai precisar obtê-lo de outra forma.