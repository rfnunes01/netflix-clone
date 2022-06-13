### NETFLIX CLONE
Clone da plataforma de streaming <a href="https://www.netflix.com/">Netflix</a>

## Tecnologias

-  [React.js](https://pt-br.reactjs.org/)
-  [Styled-Components](https://styled-components.com/)
-  [Axios](https://github.com/axios/axios)

## Sobre o projeto

Recriando a interface da [Netflix](https://www.netflix.com/) cNetflix utilizando ReactJs. Durante O desenvolvimento deste projeto foi utilizado este [vídeo](https://www.youtube.com/watch?v=tBweoUiMsDg&ab_channel=BoniekyLacerda) como material de apoio.

Todos os dados dos catálogos como título, descrição, capa, foto de background e avaliação foram extraídos ao usar a [API TMDb](https://www.themoviedb.org/documentation/api).


## Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone git@github.com:rfnunes01/netflix-clone.git && cd netflix-clone
```

Para ter acesso a API você precisará de uma chave, basta criar uma conta no TMDB para ter acesso, [link do cadastro](https://www.themoviedb.org/signup). Caminho da chave: **Perfil -> Configurações -> API -> Chave da API**

Renomeie o arquivo `.env.example` para `.env` e cole o valor da sua chave no campo **REACT_APP_API_KEY**. Agora instale as dependências e execute o projeto:

```bash
# Instalando as dependências
$ yarn install

# Executanto aplicação
$ yarn start
```


