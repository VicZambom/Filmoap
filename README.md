# MovieApp 🎬

Bem-vindo ao MovieApp, uma aplicação web moderna e responsiva para explorar o mundo do cinema. Navegue pelos filmes mais populares do momento, pesquise por títulos específicos e veja detalhes completos, tudo numa interface limpa e amigável.

Este projeto foi construído para demonstrar competências no ecossistema de desenvolvimento web moderno, incluindo Next.js, TypeScript e Tailwind CSS.

*(Sugestão: tire um screenshot da sua aplicação e adicione aqui para mostrar o seu trabalho!)*
`![Pré-visualização do MovieApp](URL_DA_SUA_IMAGEM_AQUI.png)`

## ✨ Funcionalidades

* **Página Inicial Dinâmica:** Exibe os filmes mais populares do momento, obtidos diretamente da API do The Movie Database (TMDb).
* **Pesquisa em Tempo Real:** Uma barra de pesquisa na `navbar` permite aos utilizadores procurar por qualquer filme na base de dados.
* **Página de Detalhes:** Cada filme tem a sua própria página dedicada com informações detalhadas, incluindo sinopse, data de lançamento, duração, géneros e classificação.
* **Design Responsivo:** A interface foi construída com Tailwind CSS para se adaptar perfeitamente a qualquer tamanho de ecrã, desde telemóveis a desktops.
* **Navegação Intuitiva:** Uma navegação clara permite aos utilizadores voltar facilmente à página principal ou limpar a sua pesquisa.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

* **Framework:** [Next.js](https://nextjs.org/) (v14)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Biblioteca UI:** [React](https://reactjs.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **API:** [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)
* **Requisições HTTP:** [Axios](https://axios-http.com/)
* **Ícones:** [React Icons](https://react-icons.github.io/react-icons/)

## 🔧 Como Executar o Projeto Localmente

Para executar este projeto no seu ambiente local, siga os passos abaixo:

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* `npm` ou `yarn`

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/VicZambom/Movieapp.git](https://github.com/VicZambom/Movieapp.git)
    cd Movieapp
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Para que a aplicação consiga comunicar com a API do TMDb, precisa de uma chave de API.

    * Crie um ficheiro chamado `.env.local` na raiz do projeto.
    * Adicione a sua chave da API do TMDb a este ficheiro:
        ```
        NEXT_PUBLIC_TMDB_API_KEY=SUA_CHAVE_DA_API_AQUI
        ```
    * Pode obter uma chave de API gratuitamente no [site do TMDb](https://www.themoviedb.org/signup).

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

A aplicação estará agora disponível em [http://localhost:3000](http://localhost:3000).
