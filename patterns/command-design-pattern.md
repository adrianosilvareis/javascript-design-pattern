# Padrão de comando

O padrão de comando visa encapsular uma solicitação como um objeto e nos dá a capacidade de parametrizar e passar chamadas de método.

A idéia geral por trás do padrão de comando é que isso nos fornece um meio de separar a responsabilidade para diferentes objetos.

Em termos de implementação, objetos de comando simples vinculam uma ação e o objeto que deseja invocar a ação. Eles incluem operação de execução (como `run()` ou `execute()`). Todos os objetos de comando com a mesma interface podem ser facilmente trocados conforme necessário e esse é considerado um dos maiores benefícios do padrão.

Vamos criar um serviço simples de manutenção de inventário:
```javascript
class Command {

    // add new item to the inventory
    _add(item, id) {
        return 'You have successfully added ' + item + ' with ID: ' + id;
    }
    // remove an item from the inventory
    _remove(item, id) {
        return 'You have successfully removed ' + item + ' with ID: ' + id;
    }
    // check for item
    _check(item, id) {
        return 'You have selected ' + item + ' with ID: ' + id;
    }

    exec(fnName) {
        return this[`_${fnName}`] && this[`_${fnName}`].apply(this, [].slice.call(arguments, 1))
    }
}
```

Podemos invocar diretamente os metodos `_add`, `_remove` ou `_check`, porém a uma outra forma bem mais interessante de executar esta chamada.

```javascript 
const command = new Command()
// run add methods and provider item and id params
command.exec('add', 'item', 'id')
// run remove methods and provider item and id params
command.exec('remove', 'item', 'id')
// run check methods and provider item and id params
command.exec('check', 'item', 'id')
```

[Arquivo completo](../exemples/Command.js)

[BACK TO README](../README.md)