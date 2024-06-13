-- Criação da Tabela: usuario
CREATE TABLE usuario (
    idusuario SERIAL PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(50) NOT NULL,
    nome VARCHAR(80) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Criação da Tabela: turma
CREATE TABLE turma (
    idturma SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    turno VARCHAR(50) NOT NULL
);

-- Criação da Tabela: aluno
CREATE TABLE aluno (
    idaluno SERIAL PRIMARY KEY,
    idusuario INTEGER,
    matricula VARCHAR(50) NOT NULL UNIQUE,
    dataNascimento DATE NOT NULL,
    FOREIGN KEY (idusuario) REFERENCES usuario(idusuario)
);

-- Criação da Tabela: professor
CREATE TABLE professor (
    idprofessor SERIAL PRIMARY KEY,
    idusuario INTEGER,
    matricula VARCHAR(50) NOT NULL UNIQUE,
    cargo VARCHAR(30) NOT NULL,
    FOREIGN KEY (idusuario) REFERENCES usuario(idusuario)
);

-- Criação da Tabela: autor
CREATE TABLE autor (
    idautor SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    nacionalidade VARCHAR(50) NOT NULL
);

-- Criação da Tabela: editora
CREATE TABLE editora (
    ideditora SERIAL PRIMARY KEY,
    nomeEditora VARCHAR(100) NOT NULL UNIQUE,
    endereco VARCHAR(150) NOT NULL
);

-- Criação da Tabela: genero
CREATE TABLE genero (
    idgenero SERIAL PRIMARY KEY,
    nomeGenero VARCHAR(100) NOT NULL UNIQUE
);

-- Criação da Tabela: livro
CREATE TABLE livro (
    idlivro SERIAL PRIMARY KEY,
    ideditora INTEGER NOT NULL,
    idgenero INTEGER NOT NULL,
    nome VARCHAR(200) NOT NULL UNIQUE,
    disponivel BOOLEAN NOT NULL,
    anoPublicacao INTEGER NOT NULL,
    FOREIGN KEY (ideditora) REFERENCES editora(ideditora),
    FOREIGN KEY (idgenero) REFERENCES genero(idgenero)
);

-- Criação da Tabela: aluguel
CREATE TABLE aluguel (
    idaluguel SERIAL PRIMARY KEY,
    idusuario INTEGER NOT NULL,
    idlivro INTEGER NOT NULL,
    dataAluguel DATE NOT NULL,
    dataDevolucao DATE,
    devolvido BOOLEAN NOT NULL,
    FOREIGN KEY (idusuario) REFERENCES usuario(idusuario),
    FOREIGN KEY (idlivro) REFERENCES livro(idlivro)
);

-- Criação da Tabela: livro_autor
CREATE TABLE livro_autor (
    idlivro INTEGER NOT NULL,
    idautor INTEGER NOT NULL,
    PRIMARY KEY (idlivro, idautor),
    FOREIGN KEY (idlivro) REFERENCES livro(idlivro),
    FOREIGN KEY (idautor) REFERENCES autor(idautor)
);

-- Criação da Tabela: aluno_turma
CREATE TABLE aluno_turma (
    idaluno INTEGER NOT NULL,
    idturma INTEGER NOT NULL,
   -- idprofessor INTEGER NOT NULL,
    ano INTEGER NOT NULL,
    PRIMARY KEY (idaluno, idturma),
    FOREIGN KEY (idaluno) REFERENCES aluno(idaluno),
    FOREIGN KEY (idturma) REFERENCES turma(idturma)
    --FOREIGN KEY (idprofessor) REFERENCES professor(idprofessor)
);

-- Inserções na tabela usuario
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('joaosilva', 'senha123', 'João Silva', 'joao.silva@example.com'); -- ID 1
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('mariarosa', 'senha123', 'Maria Rosa', 'maria.rosa@example.com'); -- ID 2
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('pedrosouza', 'senha123', 'Pedro Souza', 'pedro.souza@example.com'); -- ID 3
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('anacarvalho', 'senha123', 'Ana Carvalho', 'ana.carvalho@example.com'); -- ID 4
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('carloslima', 'senha123', 'Carlos Lima', 'carlos.lima@example.com'); -- ID 5
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('juliasantos', 'senha123', 'Julia Santos', 'julia.santos@example.com'); -- ID 6
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('marcospereira', 'senha123', 'Marcos Pereira', 'marcos.pereira@example.com'); -- ID 7
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('beatrizoliveira', 'senha123', 'Beatriz Oliveira', 'beatriz.oliveira@example.com'); -- ID 8
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('lucassouza', 'senha123', 'Lucas Souza', 'lucas.souza@example.com'); -- ID 9
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('fernandasilva', 'senha123', 'Fernanda Silva', 'fernanda.silva@example.com'); -- ID 10

INSERT INTO usuario (usuario, senha, nome, email) VALUES ('rodrigocosta', 'senha123', 'Rodrigo Costa', 'rodrigo.costa@example.com'); -- ID 11
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('samanthaalves', 'senha123', 'Samantha Alves', 'samantha.alves@example.com'); -- ID 12
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('eduardosantos', 'senha123', 'Eduardo Santos', 'eduardo.santos@example.com'); -- ID 13
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('alessandrasouza', 'senha123', 'Alessandra Souza', 'alessandra.souza@example.com'); -- ID 14
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('thiagomartins', 'senha123', 'Thiago Martins', 'thiago.martins@example.com'); -- ID 15
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('renatacosta', 'senha123', 'Renata Costa', 'renata.costa@example.com'); -- ID 16
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('gabrielsilva', 'senha123', 'Gabriel Silva', 'gabriel.silva@example.com'); -- ID 17
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('angelinajones', 'senha123', 'Angelina Jones', 'angelina.jones@example.com'); -- ID 18
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('felipealmeida', 'senha123', 'Felipe Almeida', 'felipe.almeida@example.com'); -- ID 19
INSERT INTO usuario (usuario, senha, nome, email) VALUES ('veronicamoraes', 'senha123', 'Veronica Moraes', 'veronica.moraes@example.com'); -- ID 20

-- Inserções na tabela aluno
INSERT INTO aluno (idusuario, matricula, dataNascimento) VALUES (1, '2021001', '2005-01-01');
INSERT INTO aluno (idusuario, matricula, dataNascimento) VALUES (2, '2021002', '2005-02-01');
INSERT INTO aluno (idusuario, matricula, dataNascimento) VALUES (3, '2021003', '2005-03-01');
INSERT INTO aluno (idusuario, matricula, dataNascimento) VALUES (4, '2021004', '2005-04-01');
INSERT INTO aluno (idusuario, matricula, dataNascimento) VALUES (5, '2021005', '2005-05-01');
INSERT INTO aluno (idusuario, matricula, dataNascimento) VALUES (6, '2021006', '2005-06-01');
INSERT INTO aluno (idusuario, matricula, dataNascimento) VALUES (7, '2021007', '2005-07-01');
INSERT INTO aluno (idusuario, matricula, dataNascimento) VALUES (8, '2021008', '2005-08-01');
INSERT INTO aluno (idusuario, matricula, dataNascimento) VALUES (9, '2021009', '2005-09-01');
INSERT INTO aluno (idusuario, matricula, dataNascimento) VALUES (10, '2021010', '2005-10-01');

-- Inserções na tabela professor
INSERT INTO professor (idusuario, matricula, cargo) VALUES (11, '2022001', 'Matemática');
INSERT INTO professor (idusuario, matricula, cargo) VALUES (12, '2022002', 'Português');
INSERT INTO professor (idusuario, matricula, cargo) VALUES (13, '2022003', 'História');
INSERT INTO professor (idusuario, matricula, cargo) VALUES (14, '2022004', 'Geografia');
INSERT INTO professor (idusuario, matricula, cargo) VALUES (15, '2022005', 'Física');
INSERT INTO professor (idusuario, matricula, cargo) VALUES (16, '2022006', 'Química');
INSERT INTO professor (idusuario, matricula, cargo) VALUES (17, '2022007', 'Biologia');
INSERT INTO professor (idusuario, matricula, cargo) VALUES (18, '2022008', 'Educação Física');
INSERT INTO professor (idusuario, matricula, cargo) VALUES (19, '2022009', 'Artes');
INSERT INTO professor (idusuario, matricula, cargo) VALUES (20, '2022010', 'Inglês');

-- Inserções na tabela turma
INSERT INTO turma (nome, turno) VALUES ('Turma A', 'Matutino');
INSERT INTO turma (nome, turno) VALUES ('Turma B', 'Vespertino');
INSERT INTO turma (nome, turno) VALUES ('Turma C', 'Noturno');
INSERT INTO turma (nome, turno) VALUES ('Turma D', 'Matutino');
INSERT INTO turma (nome, turno) VALUES ('Turma E', 'Vespertino');
INSERT INTO turma (nome, turno) VALUES ('Turma F', 'Noturno');
INSERT INTO turma (nome, turno) VALUES ('Turma G', 'Matutino');
INSERT INTO turma (nome, turno) VALUES ('Turma H', 'Vespertino');
INSERT INTO turma (nome, turno) VALUES ('Turma I', 'Noturno');
INSERT INTO turma (nome, turno) VALUES ('Turma J', 'Matutino');

-- Inserções na tabela autor
INSERT INTO autor (nome, nacionalidade) VALUES ('Machado de Assis', 'Brasileiro');
INSERT INTO autor (nome, nacionalidade) VALUES ('Carlos Drummond de Andrade', 'Brasileiro');
INSERT INTO autor (nome, nacionalidade) VALUES ('Clarice Lispector', 'Brasileira');
INSERT INTO autor (nome, nacionalidade) VALUES ('Jorge Amado', 'Brasileiro');
INSERT INTO autor (nome, nacionalidade) VALUES ('Graciliano Ramos', 'Brasileiro');
INSERT INTO autor (nome, nacionalidade) VALUES ('Cecília Meireles', 'Brasileira');
INSERT INTO autor (nome, nacionalidade) VALUES ('José de Alencar', 'Brasileiro');
INSERT INTO autor (nome, nacionalidade) VALUES ('Monteiro Lobato', 'Brasileiro');
INSERT INTO autor (nome, nacionalidade) VALUES ('Manuel Bandeira', 'Brasileiro');
INSERT INTO autor (nome, nacionalidade) VALUES ('Mario Quintana', 'Brasileiro');

-- Inserções na tabela editora
INSERT INTO editora (nomeEditora, endereco) VALUES ('Editora A', 'Rua A, 123');
INSERT INTO editora (nomeEditora, endereco) VALUES ('Editora B', 'Rua B, 123');
INSERT INTO editora (nomeEditora, endereco) VALUES ('Editora C', 'Rua C, 123');
INSERT INTO editora (nomeEditora, endereco) VALUES ('Editora D', 'Rua D, 123');
INSERT INTO editora (nomeEditora, endereco) VALUES ('Editora E', 'Rua E, 123');
INSERT INTO editora (nomeEditora, endereco) VALUES ('Editora F', 'Rua F, 123');
INSERT INTO editora (nomeEditora, endereco) VALUES ('Editora G', 'Rua G, 123');
INSERT INTO editora (nomeEditora, endereco) VALUES ('Editora H', 'Rua H, 123');
INSERT INTO editora (nomeEditora, endereco) VALUES ('Editora I', 'Rua I, 123');
INSERT INTO editora (nomeEditora, endereco) VALUES ('Editora J', 'Rua J, 123');

-- Inserções na tabela genero
INSERT INTO genero (nomeGenero) VALUES ('Romance');
INSERT INTO genero (nomeGenero) VALUES ('Poesia');
INSERT INTO genero (nomeGenero) VALUES ('Conto');
INSERT INTO genero (nomeGenero) VALUES ('Crônica');
INSERT INTO genero (nomeGenero) VALUES ('Drama');
INSERT INTO genero (nomeGenero) VALUES ('Ficção Científica');
INSERT INTO genero (nomeGenero) VALUES ('Fantasia');
INSERT INTO genero (nomeGenero) VALUES ('Aventura');
INSERT INTO genero (nomeGenero) VALUES ('Biografia');
INSERT INTO genero (nomeGenero) VALUES ('Infantil');

-- Inserções na tabela livro
INSERT INTO livro (ideditora, idgenero, nome, disponivel, anoPublicacao) VALUES (1, 1, 'Dom Casmurro', true, 1899);
INSERT INTO livro (ideditora, idgenero, nome, disponivel, anoPublicacao) VALUES (2, 2, 'A Rosa do Povo', true, 1945);
INSERT INTO livro (ideditora, idgenero, nome, disponivel, anoPublicacao) VALUES (3, 3, 'Laços de Família', true, 1960);
INSERT INTO livro (ideditora, idgenero, nome, disponivel, anoPublicacao) VALUES (4, 4, 'Gabriela, Cravo e Canela', true, 1958);
INSERT INTO livro (ideditora, idgenero, nome, disponivel, anoPublicacao) VALUES (5, 5, 'Vidas Secas', true, 1938);
INSERT INTO livro (ideditora, idgenero, nome, disponivel, anoPublicacao) VALUES (6, 6, 'Romanceiro da Inconfidência', true, 1953);
INSERT INTO livro (ideditora, idgenero, nome, disponivel, anoPublicacao) VALUES (7, 7, 'Iracema', true, 1865);
INSERT INTO livro (ideditora, idgenero, nome, disponivel, anoPublicacao) VALUES (8, 8, 'Sítio do Picapau Amarelo', true, 1920);
INSERT INTO livro (ideditora, idgenero, nome, disponivel, anoPublicacao) VALUES (9, 9, 'Libertinagem', true, 1930);
INSERT INTO livro (ideditora, idgenero, nome, disponivel, anoPublicacao) VALUES (10, 10, 'A Rua dos Cataventos', true, 1940);

-- Inserções na tabela aluguel
INSERT INTO aluguel (idusuario, idlivro, dataAluguel, dataDevolucao, devolvido) VALUES (1, 1, '2024-01-01', '2024-01-10', true);
INSERT INTO aluguel (idusuario, idlivro, dataAluguel, dataDevolucao, devolvido) VALUES (2, 2, '2024-02-01', '2024-02-10', true);
INSERT INTO aluguel (idusuario, idlivro, dataAluguel, dataDevolucao, devolvido) VALUES (3, 3, '2024-03-01', '2024-03-10', true);
INSERT INTO aluguel (idusuario, idlivro, dataAluguel, dataDevolucao, devolvido) VALUES (4, 4, '2024-04-01', '2024-04-10', true);
INSERT INTO aluguel (idusuario, idlivro, dataAluguel, dataDevolucao, devolvido) VALUES (5, 5, '2024-05-01', '2024-05-10', true);
INSERT INTO aluguel (idusuario, idlivro, dataAluguel, dataDevolucao, devolvido) VALUES (6, 6, '2024-06-01', '2024-06-10', true);
INSERT INTO aluguel (idusuario, idlivro, dataAluguel, dataDevolucao, devolvido) VALUES (7, 7, '2024-07-01', '2024-07-10', false);
INSERT INTO aluguel (idusuario, idlivro, dataAluguel, dataDevolucao, devolvido) VALUES (8, 8, '2024-08-01', '2024-08-10', false);
INSERT INTO aluguel (idusuario, idlivro, dataAluguel, dataDevolucao, devolvido) VALUES (9, 9, '2024-09-01', '2024-09-10', false);
INSERT INTO aluguel (idusuario, idlivro, dataAluguel, dataDevolucao, devolvido) VALUES (10, 10, '2024-10-01', '2024-10-10', false);

-- Inserções na tabela livro_autor
INSERT INTO livro_autor (idlivro, idautor) VALUES (1, 1);
INSERT INTO livro_autor (idlivro, idautor) VALUES (2, 2);
INSERT INTO livro_autor (idlivro, idautor) VALUES (3, 3);
INSERT INTO livro_autor (idlivro, idautor) VALUES (4, 4);
INSERT INTO livro_autor (idlivro, idautor) VALUES (5, 5);
INSERT INTO livro_autor (idlivro, idautor) VALUES (6, 6);
INSERT INTO livro_autor (idlivro, idautor) VALUES (7, 7);
INSERT INTO livro_autor (idlivro, idautor) VALUES (8, 8);
INSERT INTO livro_autor (idlivro, idautor) VALUES (9, 9);
INSERT INTO livro_autor (idlivro, idautor) VALUES (10, 10);

-- Inserções na tabela aluno_turma
INSERT INTO aluno_turma (idaluno, idturma, ano) VALUES (1, 1, 2024);
INSERT INTO aluno_turma (idaluno, idturma, ano) VALUES (2, 2, 2024);
INSERT INTO aluno_turma (idaluno, idturma, ano) VALUES (3, 3, 2024);
INSERT INTO aluno_turma (idaluno, idturma, ano) VALUES (4, 4, 2024);
INSERT INTO aluno_turma (idaluno, idturma, ano) VALUES (5, 5, 2024);
INSERT INTO aluno_turma (idaluno, idturma, ano) VALUES (6, 6, 2024);
INSERT INTO aluno_turma (idaluno, idturma, ano) VALUES (7, 7, 2024);
INSERT INTO aluno_turma (idaluno, idturma, ano) VALUES (8, 8, 2024);
INSERT INTO aluno_turma (idaluno, idturma, ano) VALUES (9, 9, 2024);
INSERT INTO aluno_turma (idaluno, idturma, ano) VALUES (10, 10, 2024);
