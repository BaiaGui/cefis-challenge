# cefis-challenge
Este projeto consiste em uma versão simplificada de uma LPX LXP (Learning Experience Platform). O projeto foi construido em Reac e Node Js para o deafio tech da CEFIS.

## ⭐ Como acessar?
Para acessar a plataforma utilize o seguinte link: https://cefis-client.onrender.com

### Login
O login é feito através da escolha de usuário. Selecione o tipo e o nome do usuário que deseja logar e clique em "Entrar".
_Obs: O login é feito por armazenamento de sessão. Para logar em um novo usuário basta abrir a plataforma em outra aba do navegador._

### Cursos
Ao logar, é possível ter acesso a todos os cursos disponíveis da plataforma. Cada curso possui sua própria página com espaço para o conteúdo e uma seção para perguntas dos alunos.

### Fazendo Perguntas
Para fazer uma pergunta selecione o curso desejado e digite a dúvida na caixa de texto da página. Ao enviar a pergunta aparecerá na listagem de questões do curso.
_Obs: Um aluno só pode fazer duas perguntas por curso._

## ⭐ Painel Admin
Professores possuem acesso ao painel de administração de contúdo, logue com um usuário professor para liberar o acesso ao painel no menu da página principal. O painel admin possui páginas para cadastro de respostas às dúvidas do professor logado e CRUD de usuários e cursos. _(Para voltar para a página principal clique no botão no canto inferior do menu lateral "Modo Usuário")_

### Cadastro de Curso/Usuário
1) No painel admin selecione a página desejada no menu lateral
2) Clique no botão de cadastro
3) No modal de cadastro preencha os campos com os dados desejados e envie

### Editar ou Deletar Curso/Usuário
Cada linha da tabela possui ícones de edição (ícone do lápis) e exclusão (ícone da lixeira) da linha. Clique no ícone desejado para efetuar as ações correspondentes

### Respondendo Perguntas
A página de perguntas do painel admin exibe todas as perguntas feitas para o professor que está logado. Clique em uma pergunta e digite a resposta no campo de texto do modal para responder.
<br><br>
_Obs: As respostas da API podem demorar um pouco mais que o normal por motivos de distância do servidor e limitação de tempo de hosting do plano gratuito do Render._
