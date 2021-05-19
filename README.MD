<p align="center">
  <a href="https://www.youtube.com/watch?v=0sTfIZvjYJk&list=PLMdYygf53DP5SVQQrkKCVWDS0TwYLVitL&index=2">
    <img src="https://cdn.discordapp.com/attachments/725215239875854337/844367287406034954/Annotation_2021-05-18_210658.png" width="550">
  </a>
</p>


# clone do messenger
Este foi um projeto até que simples, porém trás consigo um esclarecimento muito grande sobre **arquitetura de software** e sobre **design patterns**. Com esse projeto eu fui capaz de por em prática e entender como vários conceitos importanticimos sobre desenvolvimento de software funcionam! Inclusive aprendi a como compartilhar informações em tempo real utilizando uma ferramenta chamada socket.io, eu fiz um vídeo no meu canal falando sobre, caso queira dar uma olhada eu vou disponibilizar bem aqui: **[Assistir vídeo no YouTube](https://www.youtube.com/watch?v=VaaItBPTsOM)**

|||
| :---: | :--- |
| <img src="https://yt3.ggpht.com/yti/ANoDKi6ijhtf2qBYvDOtCsvsfdQkdblyCMT-iEEkYV-Qq2k=s88-c-k-c0x00ffffff-no-rj-mo" width="300"> | **Clone do messenger por [@ronildes](https://github.com/Ronildes)**<br>Eu nunca programei alguma aplicação em tempo real, e esse projeto me deu uma vários esclarecimentos sobre vários assuntos que eu nunca tinha pensado que conseguiria entender. Eu adquiri conhecimentos sobre arquitetura de software e desing patterns, além de aprender a mexer com a ferramenta socket.io<br>


# Configurando o projeto

## Obs:
O banco de dados é o postgreSQL, dentro de um container Docker.

#

- Antes de qualquer coisa, coloque eu seu terminal isso:
- com isso você vai instalar todas as dependências do projeto

```shell
  yarn
```

- Para você deixar o seu banco de dados compatível com este projeto:

```shell
  yarn typeorm migration:run
```

- Se você quiser iniciar o servidor use:

```shell
  yarn dev
```

# Autor
[<img src="https://avatars.githubusercontent.com/u/72399418?v=4" width=200><br><sub>@ronildes</sub>](https://github.com/ronildes)


