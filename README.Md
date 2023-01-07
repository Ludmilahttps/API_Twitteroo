# Requisitos

- Geral
    - [x]  A porta utilizada pelo seu servidor deve ser a 5000 (isso facilita nossa avaliação 🙂)
    - [x]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub
    - [x]  Faça commits a cada funcionalidade implementada
    - [x]  Adicione o código que inicia o servidor em `src/app.js`
    - [x]  Adicione um script no package.json para iniciar o servidor rodando `npm run start` como no exemplo abaixo
       
- Armazenamento de dados
    - [x]  Para persistir os dados (usuários e tweets), utilize variáveis globais em memória
    - [x]  O formato de um **usuário** deve ser:
        
        ```jsx
        {
        	username: 'bobesponja', 
        	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
        }
        ```
        
    - [x]  O formato de um **tweet** deve ser:
        
        ```jsx
        {
        	username: "bobesponja",
          tweet: "eu amo o hub"
        }
        ```
        
- **POST** `/sign-up`
    - [x]  Deve receber (pelo body da request), um parâmetro **username** e um **avatar**, contendo o nome do username do usuário e a sua foto de avatar:
        
        ```jsx
        {
            username: "bobesponja",
        		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
        }
        ```
        
    - [x]  Salvar esse usuário num array de usuários do servidor
    - [x]  Por fim, retornar a mensagem `“OK”`
- **POST** `/tweets`
    - [ ]  Se o usuário não estiver cadastrado (username não fez sign-up anteriormente), deve retornar a mensagem `“UNAUTHORIZED”`
    - [x]  Deve receber (pelo body da request), os parâmetros `username` e `tweet`:
        
        ```jsx
        {
        	username: "bobesponja",
          tweet: "eu amo o hub"
        }
        ```
        
    - [x]  Salvar esse tweet num array de tweets do servidor
    - [x]  Por fim, retornar a mensagem `“OK”`
- **GET** `/tweets`
    - [x]  Retornar os 10 últimos tweets publicados
        
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


- Validação de dados
    - [ ]  Todas as rotas deverão validar os dados recebidos, caso algum dado venha vazio ou no formato inválido, o servidor deverá retornar o status code 400 (BAD REQUEST) e não continuará com a execução da função. **Dica:** procure pelo método `res.sendStatus()`
    - [ ]  **POST** `/sign-up` precisa validar se os valores de `username` e `avatar` foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”
    - [ ]  **POST** `/tweets` precisa validar se os valores de `username` e `tweet` foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”
- Status codes de requisições POST
    - [ ]  Todas as requisições POST deverão retornar o status code 201 (CREATED) além do seu retorno já descrito (mensagens, JSONs, etc). **Dica:** procure pelo método `res.status()` e tente utilizá-lo junto do método `res.send()`
    - [ ]  Para o caso em que usuário não fez sign-up na rota de POST `/tweets`, deve retornar 401
- **GET** `/tweets/USERNAME`
    - [ ]  Retornar todos os tweets publicados do usuario recebido por parâmetro de rota
        
        ```jsx
        [
        	{
        		username: "bobesponja",
        		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        	  tweet: "eu amo o hub"
        	}
        ]
        ```
        
- **GET** `/tweets` com paginação
    - [ ]  Esse endpoint deverá passar a receber a página identificada via query string (`?page=1`). Esse é um recurso diferente do que vimos até agora (route params e body)
    - [ ]  Modifique o endpoint para retornar corretamente os tweets da “página” (`page`) atual, esse endpoint será chamado ao clicar no botão “**Carregar mais**” (isso já foi feito no front-end). A primeira página corresponde aos últimos 10 tweets, a segunda do 11 ao 20, a terceira do 21 ao 30, etc
    - [ ]  Lembre-se de validar se o valor de `page` (query string) foi enviado e tem valor **maior ou igual a** 1 e caso contrário, deverá responder com a mensagem “Informe uma página válida!” e com o status code 400 (BAD REQUEST)
    - [ ]  O parâmetro `page` continua opcional. Caso não seja enviado, deverá comportar como no requisito original (200, retornando últimos 10 tweets)
- **POST** `/tweets` recebendo username por Header
    - [x]  Esse endpoint deverá parar de receber o valor de username do body e passar a recebê-lo por meio de um **header** `user`. Esse é um recurso diferente do que vimos até agora (route params e body)


200: Ok => Significa que deu tudo certo com a requisição
201: Created => Sucesso na criação do recurso
301: Moved Permanently => Significa que o recurso que você está tentando acessar foi movido pra outra URL
401: Unauthorized => Significa que você não tem acesso a esse recurso
404: Not Found => Significa que o recurso pedido não existe
409: Conflict => Significa que o recurso que você está tentando inserir já foi inserido
422: Unprocessable Entity => Significa que a requisição enviada não está no formato esperado
500: Internal Server Error => Significa que ocorreu algum erro desconhecido no servidor