# HTML

É uma linguagem de marcação que tem as seguintes responsabilidades:

- Conteúdo;
- Semântico (tags);
- Estrutura.

* `<h1>` - heading 1 - 6
Usamos ele quando queremos definir títulos

- `<a>` - Link (a - anchor)
Usamos ela para definir a navegação do usuário. Se você tem um texto que você quer que o usuário clique e vá para outro lugar você pode usar essa tag junto com o atributo `href`. Exemplo de um `a` que o usuário é redirecionado para o site da collabcode.training:

```
<a href="http://www.collabcode.training">CollabCode.Training</a>

````

# CSS

É uma linguagem de estilo, isso quer dizer que ela tem as seguintes responsabilidades:

- Visual;

# RESET CSS

Acessar o seguinte site: https://meyerweb.com/eric/tools/css/reset/
e copiar o conteudo para fazer o reset das configurações do CSS, dentro do VSCODE, vamos criar um arquivo (reset.css) com esse conteudo dentro.

# PADDING

Se você quer que o conteúdo que está dentro do quadrado(exemplo) se afaste das extremidades o que queremos é um respiro interno (PADDING)

A ordem dos valores das propriedades do Padding são:
1) TOP 2) RIGHT 3) BOTTOM 4) LEFT 

# MARGING

Agora quando temos 2 elementos um do lado do outro vamos usar 2 quadrados como exemplo, nós queremos distancia-los um do outro seja nas extremidades ou em qualquer lado queremos um respiro externo (MARGING)

A ordem dos valores das propriedades da MARGING são:
1) TOP 2) RIGHT 3) BOTTOM 4) LEFT

# SELETORES

- TAG: Passa o nome da Tag e cria o seletor(que é preso a propria Tag por mais obvio que isso possa parecer), exemplo: 
    h1 {
    color: white;
    }

- ID: Usa # e cria o seletor (como boa pratica só criar um por página com o nome igual), exemplo:
    #last {
        color: white;
    }

- CLASS: Usa . e cria o seletor (pode ser usado "N" vezes na mesma página), exemplo:
    .last {
        color: white;
    }

# DISPLAY

- INLINE: deixa os elementos na mesma linha e não permite definir o "WIDTH e HEIGHT";

- BLOCK:  não deixa os elementos na mesma linha mas permite definir o "WIDTH e HEIGHT";

- INLINE-BLOCK: deixa os elementos na mesma linha e permite definir o "WIDTH E HEIGHT"

# POSITION

- ABSOLUTE (funciona bem similar ao float): cria um novo contexto e o que vai definir a largura e a altura é o conteúdo. Dentro dele temos 4 propriedades mas o recomendado é usar 2 apenas.
/* TOP e BOTTOM => mexem com o eixo X (não faz sentido usar essas 2 no mesmo valor)
/* LEFT e RIGHT => mexem com o eixo Y (não faz sentido usar essas 2 no mesmo valor)

# CALL TO ACTION (CTA)

(CTA) é o botão final que voce quer que o usuário clique sempre. Ex. Clicar em: Comprar (na nossa loja fone), já o botão Adiciona ao carrinho é um botão secundário (não sendo um CTA).

# VERTICAL ALIGN

Só funciona para alinharmos quando tivermos 2 elementos na mesma linha e forem inline-block um do lado do outro. 

# BORDER-BOX

Calcula a borda fazendo parte da largura e da altura.

# CONTENT-BOX

Não faz parte da largura e da altura fazendo com que o elemento cresça e fique desalinhado como foi o caso dos 2 botões aqui.

# DESCRIPTIONS (TAGS)

- Description List (DL) -> Usada para descrever algo, exemplo: O texto com a descrição de um avatar.

A Decription List (DL) tem por sua vez um titulo que é a Description Title (DT) e para descrever o produto temos uma tag chamada Define Description (DD)
                                                <dl>
                                                <dt>
                                                <dd>












