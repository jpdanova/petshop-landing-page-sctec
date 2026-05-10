# Blippi.Pet — Landing Page de Pet Shop

**Autor:** João Pedro Moraes Moritz da Nova
**Curso:** Introdução à Programação Front-End e Back-End (IP 20h A)
**Programa:** SCTEC — Carreira Tech, Ciclo 2

---

## Descrição do Projeto

A Blippi.Pet é uma landing page criada para um pet shop fictício como atividade do desafio extra do curso. O objetivo da página é apresentar os serviços do pet shop, contar um pouco sobre a empresa e permitir que os clientes entrem em contato para agendar um atendimento.

---

## Arquivos do Projeto

```
sctec-landing-page/
├── index.html       → Página principal com toda a estrutura HTML
├── styles.css       → Estilos visuais da página
├── script.js        → Validação do formulário de contato
├── yorkshire.png    → Foto do cachorro usada no site
└── README.md        → Este arquivo de documentação
```

---

## Tecnologias Usadas

- **HTML5** — estrutura da página com tags semânticas (header, main, section, footer)
- **CSS3** — estilização, Flexbox, Grid, position e responsividade
- **JavaScript** — validação dos campos do formulário
- **Google Fonts** — fontes Fredoka (títulos) e Poppins (texto)

---

## Seções da Página

**Cabeçalho:** menu de navegação com links para cada seção da página.

**Hero (Destaque):** seção principal com título, descrição e botões de chamada para ação. A imagem do pet é posicionada com `position: absolute` para criar um efeito visual de sobreposição sobre o fundo verde.

**Sobre:** apresentação da Blippi.Pet com texto descritivo e três indicadores numéricos (pets atendidos, anos de experiência e amor aos animais). O layout usa Flexbox para organizar o conteúdo e a imagem lado a lado.

**Serviços:** seis cards organizados em Grid com os serviços oferecidos: Banho, Tosa, Hidratação, Limpeza Dental, Pacote Completo e Hotel Pet. Cada card tem um ícone, título, descrição e preço. Foi aplicado `aspect-ratio` para manter proporção uniforme.

**Contato:** formulário de agendamento com os campos nome, e-mail, WhatsApp, nome do pet, serviço desejado e observações. A validação é feita via JavaScript, verificando se os campos obrigatórios foram preenchidos e se o e-mail tem formato válido.

**Rodapé:** informações finais da marca.

---

## Requisitos Técnicos Atendidos

- Fontes externas via Google Fonts
- Cores definidas em toda a página (verde #1f5e4a e amarelo #f4c542)
- Uso de `position: relative` e `position: absolute` na seção hero
- Layout com Flexbox nas seções Sobre, Contato e Cabeçalho
- Layout com Grid na seção de Serviços
- `aspect-ratio` aplicado nos cards de serviço
- Ícones visuais nos cards e itens de contato
- Formulário com validação de campos obrigatórios e formato de e-mail
- HTML semântico com header, main, section, footer e nav
- Página responsiva para telas menores com media queries

---

## Como Executar o Projeto

1. Descompacte o arquivo `.zip` em uma pasta no seu computador.
2. Certifique-se de que todos os arquivos estão na mesma pasta: `index.html`, `styles.css`, `script.js` e `yorkshire.png`.
3. Abra o arquivo `index.html` com um duplo clique no seu navegador preferido (Chrome, Firefox, Edge).
4. A página vai abrir normalmente, sem precisar instalar nada.
