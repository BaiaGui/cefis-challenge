
export function ApiDoc() {
    return (
        <div className="flex bg-white text-stone-900">
            <nav className="bg-white border-r border-black/50 flex flex-col h-screen fixed w-64 gap-4 pb-16">
                <p className="p-10 font-bold text-black/75 text-lg">Documentação API LXP</p>
                <a href="#Users" className="p-5 text-black/75 border-b border-black/25 hover:text-black">Users</a>
                <a href="#Courses" className="p-5 text-black/75 border-b border-black/25 hover:text-black">Courses</a>
                <a href="#Questions" className="p-5 text-black/75 border-b border-black/25 hover:text-black">Questions</a>
                <a href="#Answers" className="p-5 text-black/75 border-b border-black/25 hover:text-black">Answers</a>
            </nav>

            <main className="flex flex-col ml-64 px-24 py-16">
                <h1 className="text-3xl font-bold">Documentação API LXP</h1>
                <p>Entenda como a API funciona e quais seus endpoints</p>
                <section>
                    <SubjectTitle>Users</SubjectTitle>

                    <EndpointTitle>Recuperar todos os usuários (GET)</EndpointTitle>
                    <EndpointData httpMethod="GET" endpoint="/user">Recupere todos os usuários cadastrados no banco. Com o query param "type" é possível rcuperar todos os usuários de um tipo específico, atavés de ".../user?type=teacher" ou ".../user?type=student" </EndpointData>
                    
                    <EndpointTitle>Recuperar usuário por ID (GET)</EndpointTitle>
                    <EndpointData httpMethod="GET" endpoint="/user/:id">Recupere o usuários cadastrados com o ID especificado</EndpointData>
                    
                    <EndpointTitle>Cadastrar Usuário (POST)</EndpointTitle>
                    <EndpointData httpMethod="POST" endpoint="/user/">Cadastre um usuário no banco</EndpointData>
                    
                    <EndpointTitle>Atualizar Usuário (PUT)</EndpointTitle>
                    <EndpointData httpMethod="PUT" endpoint="/user/:id">Atualize os dados de um usuário de ID específico</EndpointData>
                    
                    <EndpointTitle>Deletar Usuário (DELETE)</EndpointTitle>
                    <EndpointData httpMethod="DELETE" endpoint="/user/:id">Exclua o usuário com o ID especificado</EndpointData>
                </section>

                <section>
                    <SubjectTitle>Courses</SubjectTitle>
                    
                    <EndpointTitle>Recuperar todos os cursos (GET)</EndpointTitle>
                    <EndpointData httpMethod="GET" endpoint="/course">Recupere todos os cursos cadastrados no sistema.</EndpointData>
                    
                    <EndpointTitle>Recuperar curso por ID (GET)</EndpointTitle>
                    <EndpointData httpMethod="GET" endpoint="/course/:id">Recupere o curso cadastrado com o ID especificado.</EndpointData>
                    
                    <EndpointTitle>Cadastrar Curso (POST)</EndpointTitle>
                    <EndpointData httpMethod="POST" endpoint="/course/">Cadastre um novo curso no sistema.</EndpointData>
                    
                    <EndpointTitle>Atualizar Curso (PUT)</EndpointTitle>
                    <EndpointData httpMethod="PUT" endpoint="/course/:id">Atualize os dados do curso de ID especificado.</EndpointData>
                    
                    <EndpointTitle>Deletar Curso (DELETE)</EndpointTitle>
                    <EndpointData httpMethod="DELETE" endpoint="/course/:id">Exclua o curso de ID especificado.</EndpointData>
                </section>

                <section>
                    <SubjectTitle>Questions</SubjectTitle>
                    
                    <EndpointTitle>Recuperar perguntas por curso (GET)</EndpointTitle>
                    <EndpointData httpMethod="GET" endpoint="/question/course/:courseId">Recupere todas as perguntas relacionadas a um curso específico, a busca é feita com o ID do curso.</EndpointData>
                    
                    <EndpointTitle>Recuperar pergunta por ID (GET)</EndpointTitle>
                    <EndpointData httpMethod="GET" endpoint="/question/:id">Recupere a pergunta com o ID especificado.</EndpointData>
                    
                    <EndpointTitle>Recuperar pergunta por Professor (GET)</EndpointTitle>
                    <EndpointData httpMethod="GET" endpoint="/question/teacher/:teacherId">Recupere todas as perguntas feitas para um professor específico, a busca é feita com o ID do professor.</EndpointData>
                    
                    <EndpointTitle>Cadastrar Pergunta (POST)</EndpointTitle>
                    <EndpointData httpMethod="POST" endpoint="/question/">Cadastre uma nova pergunta no sistema.</EndpointData>
                </section>

                <section>
                    
                    <SubjectTitle>Answers</SubjectTitle>
                    
                    <EndpointTitle>Recuperar Resposta por Pergunta (GET)</EndpointTitle>
                    <EndpointData httpMethod="GET" endpoint="/answer/:questionId">Recupere todas as respostas relacionadas a uma pergunta específica, a busca é feita através do ID da pergunta.</EndpointData>
                    
                    <EndpointTitle>Cadastrar Resposta (POST)</EndpointTitle>
                    <EndpointData httpMethod="POST" endpoint="/answer/">Cadastre uma nova resposta no sistema.</EndpointData>
                </section>
            </main>
        </div>
    );
}

function SubjectTitle({ children }) {
    return <h2 id={children} className="uppercase text-3xl font-bold mt-28 mb-5">{children}</h2>
}

function EndpointTitle({ children }) {
    return <h3 className="text-xl mt-6 font-bold">{children}</h3>
}

function EndpointData({ endpoint, httpMethod, children }) {
    return (
        <div className="flex flex-col p-7 border w-full mt-2 rounded-sm">
            <div className="flex gap-5 items-center justify-start">
                <p className="text-gray-700">https://cefis-challenge.onrender.com{endpoint}</p>
                {(httpMethod == "GET") && <p className="bg-blue-500 w-fit p-2 text-white text-xs rounded-md font-bold">{httpMethod}</p>}
                {(httpMethod == "POST") && <p className="bg-green-500 w-fit p-2 text-white text-xs rounded-md font-bold">{httpMethod}</p>}
                {(httpMethod == "PUT") && <p className="bg-yellow-500 w-fit p-2 text-white text-xs rounded-md font-bold">{httpMethod}</p>}
                {(httpMethod == "DELETE") && <p className="bg-red-500 w-fit p-2 text-white text-xs rounded-md font-bold">{httpMethod}</p>}
            </div>
            <p className="mt-5">{children}</p>
        </div>
    );
}