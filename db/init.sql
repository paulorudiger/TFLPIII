-- Criação da Tabela: usuario
CREATE TABLE usuario (
    idusuario SERIAL PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    nome VARCHAR(80) NOT NULL,
    email VARCHAR(100) NOT NULL
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
    nome VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(50) NOT NULL
);

-- Criação da Tabela: editora
CREATE TABLE editora (
    ideditora SERIAL PRIMARY KEY,
    nomeEditora VARCHAR(100) NOT NULL,
    endereco VARCHAR(150) NOT NULL
);

-- Criação da Tabela: genero
CREATE TABLE genero (
    idgenero SERIAL PRIMARY KEY,
    nomeGenero VARCHAR(100) NOT NULL
);

-- Criação da Tabela: livro
CREATE TABLE livro (
    idlivro SERIAL PRIMARY KEY,
    idautor INTEGER NOT NULL,
    ideditora INTEGER NOT NULL,
    idgenero INTEGER NOT NULL,
    nome VARCHAR(200) NOT NULL,
    disponivel BOOLEAN NOT NULL,
    anoPublicacao INTEGER NOT NULL,
    FOREIGN KEY (idautor) REFERENCES autor(idautor),
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

-- Criação da Tabela: autor_editora
CREATE TABLE autor_editora (
    idautor INTEGER NOT NULL,
    ideditora INTEGER NOT NULL,
    PRIMARY KEY (idautor, ideditora),
    FOREIGN KEY (idautor) REFERENCES autor(idautor),
    FOREIGN KEY (ideditora) REFERENCES editora(ideditora)
);

-- Criação da Tabela: aluno_turma
CREATE TABLE aluno_turma (
    idaluno INTEGER NOT NULL,
    idturma INTEGER NOT NULL,
    idprofessor INTEGER NOT NULL,
    ano INTEGER NOT NULL,
    PRIMARY KEY (idaluno, idturma),
    FOREIGN KEY (idaluno) REFERENCES aluno(idaluno),
    FOREIGN KEY (idturma) REFERENCES turma(idturma),
    FOREIGN KEY (idprofessor) REFERENCES professor(idprofessor)
);

