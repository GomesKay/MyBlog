  <h1 align="center">MyBlog</h1>
  
  ![Tela da Aplicação](https://github.com/user-attachments/assets/9d0cb908-9442-45eb-bd85-2b044303bbf4)

  <h2 align="center"> 💻 Instalação e Uso</h2>
  
  > [!NOTE]
  > Esse projeto foi separado em duas pastas (<b>server: Back-End</b>, <b>web: Front-End</b>)

  ### 🛠️ Pré-requisitos
  - Node.js
  - NPM
  - Git
  - VSCode

  | Passos | Comandos | Descrição |
  | --- | --- | --- |
  | 01 | `git clone https://github.com/GomesKay/MyBlog.git` | Clona esse repositório no seu computador |
  | 02 |  `npm install` | Execute este comando (Instala as dependências) no terminal de cada pasta aberta no VSCode, tanto na pasta <b>server</b> (Back-end) quanto na pasta <b>web</b> (Front-end) |
  | 03 | `DATABASE_URL="file:./dev.db"` | No <b>server</b> (Back-end) crie um aqui <i>.env</i> na raiz do projeto e coloque a linha de códígo descrita a esquerda |
  | 04 | `npx prisma validate` | Use esse comando no terminal para ter certeza que irá ler o arquivo <i>.env</i> no Back-end |
  | 05 | `npx prisma generate` | Use ess comando no terminal para gerar o cliente Prisma no terminal do Back-end |
  | 06 | `npm run dev` | Tanto no Back-end e no Front-end tem que executar este comando no terminal de cada janela do VSCode para rodar o projeto 100% |
  | 07 | ... | Com os dois executanto simultaneamente, você poderá testar a aplicação no navegador |

  <div align="center">
    
  ## ⚙️ Back-end

  ### 🔧 Arquitetura da API

  | HTTP | Rotas | Descrição |
  | --- | --- | --- |
  | `GET` | /posts | Lista todos os posts |
  | `POST` | /posts | Cria um post |
  | `PUT` | /posts/:id | Atualiza um post |
  | `DELETE` | /posts/:id | Deleta um post |

  ### 🚀 Tecnologias

  <img title="Biome" src="https://github.com/user-attachments/assets/ca50003f-5d35-4299-9474-30b305ae07cb" alt="Biome" width="50" /> &nbsp;
  <img title="PrismaORM" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="Prisma" width="50" /> &nbsp;
  <img title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" /> &nbsp;
  <img title="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" width="50" /> &nbsp;
  <img title="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width="50" /> &nbsp;
  <img title="SQLite" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLite" width="50" /> &nbsp;
  <img title="Postman" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" width="50" /> &nbsp;
  <img title="Vitest" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg" alt="Vitest" width="50" /> &nbsp;
  <img title="Zod" src="https://github.com/user-attachments/assets/bb33ed33-2e91-473c-9494-41386bf5111f" alt="Zod" width="50" />

  ## 🖥️ Front-end

  ### 🗡️ Projeto

  <p>Nesse projeto o maior desafio para mim foi consumo de API, pois o Front-end já tinha uma ideia de como programar e o Back-end já tinha feito APIs e estudei por fora, então só faltou o consumo de API mas no final deu tudo certo e fica como aprendizado o consumo de APIs que é bem importante para um desenvolvedor.</p>

  ### 🚀 Tecnologias

  <img title="Axios" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" alt="Axios" width="50" /> &nbsp;
  <img title="React Hook Form" src="https://github.com/user-attachments/assets/913089a0-f8ca-47f1-9843-704163d3d270" alt="React Hook Form" width="50" /> &nbsp;
  <img title="Shadcn/ui" src="https://github.com/user-attachments/assets/d4faa79c-ae66-4fe5-adfe-377ddb62ee62" alt="Shadcn/ui" width="50" /> &nbsp;
  <img title="React Router Dom" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" alt="React Router Dom" width="50" /> &nbsp;
  <img title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="50" /> &nbsp;
  <img title="Phosphor Icons" src="https://github.com/user-attachments/assets/cbd58641-06df-4189-94be-beca9f428883" alt="Phosphor Icons" width="50" /> &nbsp;
  <img title="TailwindCSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" width="50" /> &nbsp;
  <img title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" /> &nbsp;
  <img title="Zod" src="https://github.com/user-attachments/assets/bb33ed33-2e91-473c-9494-41386bf5111f" alt="Zod" width="50" />

  </div>
