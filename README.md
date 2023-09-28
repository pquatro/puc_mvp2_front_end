# Front-end - Cadastro de Dieta Nutricional

Este pequeno projeto faz parte da Disciplina **Arquitetura de Software** da Pós-Graduação Engenharia de Software PUC-Rio

A idéia desse projeto é apresentar o cadastro de uma dieta nutricional, calculando o metabolismo do usuário e a quantidade de macros necessários para atingir sua meta. Nesse cadastro teremos os usuários, a dieta e as refeições que o usuário irá montar para atingir seu objetivo nutricional. Temos também os alimentos classificados por grupos alimentícios, com seus respectivos conjunto de macros principais (calorias, proteínas, carboidratos e gorduras). Esses dados são usados por nutricionistas para calcular uma dieta.

O front-end foi desenvolvido utilizando [Bootstrap](https://getbootstrap.com/) para tornar responsivo e a biblioteca [jQuery](https://jquery.com/) para interação JavaScript. Foi utilizado também o plug-in de jQuery [DataTables](https://datatables.net/), para exibição dos dados em uma grid.  

---
## Como executar

Basta fazer o download do projeto e abrir o arquivo index.html no seu browser.

---

Importante: O Front-end para rodar precisa do back-end [api_composicao_alimentos](https://github.com/pquatro/puc_mvp2_servico) e do serviço [api_de_cadastro_dieta_nutricional](https://github.com/pquatro/puc_mvp2_api_composicao_alimentos).

## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile no terminal e seus arquivos de aplicação e
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t nome_da_sua_imagem .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -d -p 8080:80 nome_da_sua_imagem
```

Uma vez executando, para acessar o front-end, basta abrir o [http://localhost:8080/#/](http://localhost:8080/#/) no navegador.
