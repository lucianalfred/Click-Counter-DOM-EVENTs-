# Click-Counter-DOM-EVENTs-


Este é um projeto simples de um **Contador de Cliques** desenvolvido com **HTML, CSS e JavaScript**. O contador permite incrementar um número a cada clique em um botão e também possui uma opção para resetar o valor.

## 🚀 Tecnologias Utilizadas

- **HTML** → Estrutura da página
- **CSS** → Estilização do contador
- **JavaScript** → Lógica para incrementar e resetar o contador

## 📌 Funcionalidades

- Exibe um contador iniciado em **0**.
- Botão para **incrementar** o valor do contador a cada clique.
- Botão para **resetar** o contador para **0**.

## 🎨 Estilização

O projeto inclui uma estilização básica para centralizar os elementos na tela e deixar os botões mais interativos.

## 🛠️ Como Executar o Projeto

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador.

## 📜 Código Principal

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Click Counter</title>
</head>
<body>
    <h1>Click Counter(DOM EVENTs)</h1>
    <p id="counter">0</p>
    <button id="btnIn">Click here</button>
    <button id="btnReset">Reset</button>
    <script src="script.js"></script>
</body>
</html>
```
```css
body{
    font-family: Arial, Helvetica, sans-serif;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f4;
}

h1{
    color: #333;
}

#counter{
    font-size: 2rem;
    font-weight: bold;
    margin: 20px;
}

button{
    font-size: 1.2rem;
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#btnIn{
    background-color: #28a745;
}

#btnReset{
    background-color:#dc3545;
    color: white;
}

button:hover{
    opacity: 0.8;
}
```
```javascript
let count = 0;

document.getElementById("btnIn").addEventListener("click", function(){
    count++;
    document.getElementById('counter').innerHTML = count;
});

document.getElementById('btnReset').addEventListener('click', function(){
    count = 0;
    document.getElementById('counter').innerHTML = count;  
})
```
## 🔥 Melhorias Futuras

- Adicionar **armazenamento local** para manter o valor do contador mesmo após atualizar a página.
- Criar **animações** para tornar a experiência mais dinâmica.
- **Melhorar o design** com CSS avançado.

## 📄 Licença

Este projeto é de livre uso para estudos e modificações. Sinta-se à vontade para contribuir e melhorar o código!

---
✍️ Feito por Luciano Alfredo 🚀

