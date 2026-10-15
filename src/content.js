export const SOCIAL = {
  email: 'henriquef621@gmail.com',
  github: 'https://github.com/Henrique-Ignacio',
  linkedin: 'https://www.linkedin.com/in/henrique-ignacio-ferreira-souza-6517562b9/',
}

export const projects = [
  {
    id: 'display-grid',
    date: { pt: 'Set 2024', en: 'Sep 2024' },
    repo: 'https://github.com/Henrique-Ignacio/display-grid',
    image: '/assets/display-grid.png',
    tech: ['HTML', 'CSS', 'CSS Grid', 'Flexbox'],
    name: 'display-grid',
    desc: {
      pt: 'Réplica de um template de e-commerce de produtos orgânicos feita só com HTML e CSS. São quatro páginas (início, loja, blog e contato), com cabeçalho, menu de departamentos e banner principal montados com Grid e Flexbox.',
      en: 'A replica of an organic-products e-commerce template built with plain HTML and CSS. It has four pages (home, shop, blog and contact), with the header, department menu and main banner laid out with Grid and Flexbox.',
    },
  },
  {
    id: 'kotlin',
    date: { pt: 'Fev 2025', en: 'Feb 2025' },
    repo: 'https://github.com/Henrique-Ignacio/algoritmos-sintaxe-kotlin',
    image: '/assets/kotlin.png',
    tech: ['Kotlin', 'VS Code'],
    name: 'algoritmos-sintaxe-kotlin',
    desc: {
      pt: 'Lista de dez exercícios para praticar a sintaxe do Kotlin: variáveis, leitura de dados pelo console, condicionais e laços de repetição.',
      en: 'A set of ten exercises to practice Kotlin syntax: variables, console input, conditionals and loops.',
    },
  },
  {
    id: 'swift',
    date: { pt: 'Mar 2025', en: 'Mar 2025' },
    repo: 'https://github.com/Henrique-Ignacio/aula-1---swift',
    image: '/assets/swift.png',
    tech: ['Swift', 'SwiftUI', 'Xcode'],
    name: 'aula-1---swift',
    desc: {
      pt: 'Primeiro app em SwiftUI, feito em aula: uma calculadora de idade canina com campo de texto, botão e estado reativo com @State.',
      en: 'My first SwiftUI app, built in class: a dog-age calculator with a text field, a button and reactive state using @State.',
    },
  },
  {
    id: 'login',
    date: { pt: 'Set 2026', en: 'Sep 2026' },
    repo: 'https://github.com/Henrique-Ignacio/Login-java',
    image: '/assets/login-java.png',
    tech: ['Java 25', 'Spring Boot 4', 'Thymeleaf', 'Maven', 'HTML', 'CSS'],
    name: 'Login-java',
    desc: {
      pt: 'Aplicação web de login e cadastro feita em dupla na PUC Minas. Valida os campos, impede e-mails repetidos, guarda a senha com hash SHA-256 e mantém o usuário logado por sessão, com área restrita, logout e tela de recuperação de senha.',
      en: 'A login and sign-up web app built in pairs at PUC Minas. It validates the fields, blocks duplicate emails, stores passwords as SHA-256 hashes and keeps the user signed in through a session, with a protected area, logout and a password-recovery screen.',
    },
  },
]

export const content = {
  pt: {
    langLabel: 'Idioma',
    nav: { about: 'Sobre mim', projects: 'Projetos', experience: 'Experiências', contact: 'Contato' },
    role: 'Desenvolvedor Full Stack em formação',
    place: 'Contagem, MG',
    about: {
      title: 'Sobre mim',
      headline: 'Estagiário de desenvolvimento .NET e estudante de Engenharia de Software.',
      paragraphs: [
        'Sou Henrique, tenho curso técnico em Informática pelo Cotemig e curso Engenharia de Software na PUC Minas. No estágio na Minasmaquinas, ajudo a desenvolver e manter um ERP corporativo com ASP.NET MVC, DDD e SQL Server.',
        'Fora do trabalho, estudo outras plataformas na faculdade e por conta própria, como Kotlin, Swift, Flutter e Laravel. Também fiz a certificação do Code Club, da Raspberry Pi Foundation, ensinando lógica de programação em Scratch para crianças de áreas periféricas.',
        'Meu objetivo é atuar como Desenvolvedor Full Stack Júnior, entregando soluções organizadas e escaláveis, com DDD, MVC e boas práticas.',
      ],
      skillsTitle: 'Competências',
      skills: [
        ['Back-end', 'C#, .NET, ASP.NET MVC, Razor Pages, DDD, LINQ'],
        ['Front-end', 'HTML, CSS, JavaScript, jQuery'],
        ['Banco de dados', 'SQL Server, modelagem relacional, consultas complexas'],
        ['Estudos acadêmicos', 'Kotlin, Swift, Flutter (Dart), Laravel (PHP), Java com Spring Boot'],
        ['Outros', 'Git, orientação a objetos, montagem e manutenção de computadores'],
      ],
      langsTitle: 'Idiomas',
      langs: ['Português: nativo', 'Inglês: intermediário', 'Espanhol: básico'],
    },
    projects: {
      title: 'Projetos',
      intro: 'Do mais antigo ao mais recente.',
      repo: 'Ver repositório no GitHub',
      stack: 'Tecnologias',
    },
    experience: {
      title: 'Experiências',
      items: [
        {
          period: 'Atual',
          org: 'Minasmaquinas',
          role: 'Estagiário de Desenvolvimento .NET',
          desc: 'Desenvolvimento e manutenção de um sistema ERP corporativo com ASP.NET MVC e DDD, incluindo consultas em SQL Server e correções em sistema legado.',
        },
        {
          period: '',
          org: 'Raspberry Pi Foundation, Code Club',
          role: 'Certificação e atividade de ensino',
          desc: 'Ensino de programação em Scratch para crianças de áreas periféricas, com foco em didática, lógica de programação e inclusão digital.',
        },
        {
          period: '2020',
          org: 'Colégio Santo Agostinho',
          role: 'Excelência Agostiniana',
          desc: 'Reconhecimento concedido a aluno de destaque por desempenho acadêmico e conduta exemplar.',
        },
      ],
      eduTitle: 'Formação',
      edu: [
        { period: 'Em andamento', org: 'PUC Minas', role: 'Bacharelado em Engenharia de Software' },
        { period: 'Concluído', org: 'Colégio Cotemig', role: 'Técnico em Informática' },
      ],
    },
    contact: {
      title: 'Contato',
      intro: 'Quer conversar sobre uma vaga, um projeto ou só trocar ideia? Escreva pelo formulário ou use um dos links.',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar mensagem',
      sending: 'Enviando...',
      ok: 'Mensagem enviada. Obrigado pelo contato!',
      fallback: 'O envio automático ainda não está configurado, então abri o seu aplicativo de e-mail com a mensagem pronta.',
      fail: 'Não foi possível enviar agora. Tente de novo ou escreva direto para o meu e-mail.',
      errors: {
        name: 'Informe seu nome.',
        email: 'Informe um e-mail válido.',
        message: 'Escreva uma mensagem com pelo menos 10 caracteres.',
      },
    },
    footer: 'Feito com React e Vite.',
  },
  en: {
    langLabel: 'Language',
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    role: 'Full Stack Developer in training',
    place: 'Contagem, MG, Brazil',
    about: {
      title: 'About me',
      headline: '.NET development intern and Software Engineering student.',
      paragraphs: [
        "I'm Henrique. I hold a technical degree in Computing from Colégio Cotemig and I'm studying Software Engineering at PUC Minas. As an intern at Minasmaquinas, I help build and maintain a corporate ERP using ASP.NET MVC, DDD and SQL Server.",
        "Outside of work I explore other platforms through college and on my own, such as Kotlin, Swift, Flutter and Laravel. I also took part in the Raspberry Pi Foundation's Code Club, teaching programming logic with Scratch to children from underserved neighborhoods.",
        'My goal is to work as a Junior Full Stack Developer, delivering organized, scalable solutions with DDD, MVC and good engineering practices.',
      ],
      skillsTitle: 'Skills',
      skills: [
        ['Back-end', 'C#, .NET, ASP.NET MVC, Razor Pages, DDD, LINQ'],
        ['Front-end', 'HTML, CSS, JavaScript, jQuery'],
        ['Databases', 'SQL Server, relational modeling, complex queries'],
        ['Academic studies', 'Kotlin, Swift, Flutter (Dart), Laravel (PHP), Java with Spring Boot'],
        ['Other', 'Git, object-oriented programming, computer assembly and maintenance'],
      ],
      langsTitle: 'Languages',
      langs: ['Portuguese: native', 'English: intermediate', 'Spanish: basic'],
    },
    projects: {
      title: 'Projects',
      intro: 'From the oldest to the most recent.',
      repo: 'View repository on GitHub',
      stack: 'Technologies',
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: 'Current',
          org: 'Minasmaquinas',
          role: '.NET Development Intern',
          desc: 'Developing and maintaining a corporate ERP system with ASP.NET MVC and DDD, including SQL Server queries and fixes to legacy code.',
        },
        {
          period: '',
          org: 'Raspberry Pi Foundation, Code Club',
          role: 'Certification and teaching activity',
          desc: 'Teaching Scratch programming to children from underserved neighborhoods, focusing on teaching skills, programming logic and digital inclusion.',
        },
        {
          period: '2020',
          org: 'Colégio Santo Agostinho',
          role: 'Agostinian Excellence award',
          desc: 'Recognition given to an outstanding student for academic performance and exemplary conduct.',
        },
      ],
      eduTitle: 'Education',
      edu: [
        { period: 'In progress', org: 'PUC Minas', role: "Bachelor's degree in Software Engineering" },
        { period: 'Completed', org: 'Colégio Cotemig', role: 'Technical degree in Computing' },
      ],
    },
    contact: {
      title: 'Contact',
      intro: "Want to talk about a job, a project, or just trade ideas? Use the form or one of the links.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      ok: 'Message sent. Thanks for reaching out!',
      fallback: "Automatic sending isn't set up yet, so I opened your email app with the message ready to go.",
      fail: "Couldn't send right now. Please try again or write to my email directly.",
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email.',
        message: 'Write a message with at least 10 characters.',
      },
    },
    footer: 'Built with React and Vite.',
  },
}
