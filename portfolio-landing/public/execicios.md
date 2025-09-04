### **Exercício 1: Contador com Controles**

Crie um componente de contador com botões de incremento e decremento que emite eventos quando o valor muda.

-- contador | -- incrementar -- decrementar -- output 

-- pagina | valor -- contador.component 

-- app.routes

### **Exercício 2: Lista de Tarefas**

Implemente um sistema de lista de tarefas onde:

- Um componente pai gerencia a lista
- Um componente filho exibe cada tarefa
- Um componente filho permite adicionar novas tarefas

### **Exercício 3: Sistema de Avaliação**

Crie um componente de estrelas de avaliação que:

- Recebe a avaliação atual via @Input()
- Permite ao usuário selecionar uma nova avaliação
- Emite a nova avaliação via @Output()

### **Exercício 4: Filtro de Produtos**

Implemente um sistema de filtro onde:

- Um componente filho contém opções de filtro
- O componente pai exibe produtos filtrados
- Use @Input() para passar produtos
- Use @Output() para emitir critérios de filtro