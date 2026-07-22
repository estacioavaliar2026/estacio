const questoes = [

{
    numero: 1,

    texto: `Seja um cenário em que existem vários objetos capazes de realizar o processamento associado a uma requisição. Esses objetos são organizados em uma lista encadeada de modo que a requisição vai sendo passada do primeiro objeto receptor da requisição para o próximo da lista, e assim sucessivamente, até que o resultado desejado seja atingido.

Assinale a alternativa com o nome do padrão com esse propósito:`,

    imagem: null,

    alternativas: [

        "Chain of Responsibility(R)",

        "Command",

        "Strategy",

        "Mediator",

        "Iterator"

    ]
},

{
    numero: 2,

    texto: `Sobre o padrão Mediator, assinale a alternativa correta:`,

    imagem: null,

    alternativas: [

        "Faz a mediação da execução de um conjunto de algoritmos paralelos, de forma que não haja problemas de sincronização.",

        "Pode ser aplicado em conjunto com o padrão Observer.(R)",

        "Transforma uma interação entre objetos de uma estrutura 1-N para uma estrutura N-N.",

        "Encapsula requisições em objetos, mediando o registro do histórico das requisições e o gerenciamento de uma fila de requisições.",

        "Permite definir um conjunto de passos em uma superclasse, sendo os passos comuns implementados como métodos dessa superclasse, enquanto os passos específicos são implementados nas suas subclasses."

    ]
},

{
    numero: 3,

    texto: `Você está implementando um sistema e quer guardar o histórico de todas as requisições efetuadas pelo usuário via interface gráfica, 
    de forma a poder realizar operações, como desfazer (undo) e refazer (redo) requisições.`,

    imagem: null,

    alternativas: [

        "Chain of Responsibility",

        "Strategy",

        "Mediator",

        "State",

        "Command(R)"

    ]
},

{
    numero: 4,

    texto: `"Na implementação de um processo complexo, um módulo A chama operações de um módulo B e de um módulo C, por sua vez, chama operações de C e de D. 
    O módulo C chama operações de A e E. O módulo D chama operações de interfaces e E."

    Essa estrutura ilustra um situação onde objetos no estilo muitos para muitos. Para simplificar esse processo, define-se um objeto que centraliza todas as     interações entre esses objetos, de modo que eles passam a se comunicar apenas com esse elemento central. Dessa forma, o sistema central passa a receber uma     notificação de A, para então chamar operações de C e D. O mesmo mantém a lógica de uma notificação enviada por B, C chama operações de C e de D.

    Essa descrição corresponde à estrutura de solução de qual padrão?`,

    imagem: null,

    alternativas: [

        "Chain of Responsibility",

        "Strategy",

        "Visitor",

        "Template Method",

        "Mediator(R)"

    ]
},

{
    numero: 5,

    texto: `Suponha que existam diferentes algoritmos para resolver um problema, sendo que cada algoritmo se aplica melhor a um contexto específico 
    (ex.: volume maior ou menor de dados, frequência de modificações e de consultas). Essa prática sugere resolver o problema encapsulando cada 
    algoritmo em uma classe distinta, que implementa uma interface padrão utilizada pelos módulos clientes dessas algoritmos.

    Assinale a alternativa com o nome do padrão que possui o propósito descrito no enunciado:`,

    imagem: null,

    alternativas: [

        "Strategy(R)",

        "Command",

        "Memento",

        "Chain of Responsibility",

        "Meditor"

    ]
},

{
    numero: 6,

    texto: `Você está desenvolvendo um módulo correspondente a uma classe X que possui um ciclo de vida composto por estados e não quer escrever 
    o código dessa classe utilizando estruturas condicionais complexas. Para isso, você separa o processamento de cada parte desse ciclo de vida 
    em uma classe à parte. A classe X apenas guarda a referência para a situação corrente do processamento e repassa as requisições para o objeto 
    correspondente a essa situação corrente.

    Assinale a opção a que esse texto se refere:`,

    imagem: null,

    alternativas: [

        "Command",

        "State(R)",

        "Mediator",

        "Memento",

        "Chain of Responsibility"

    ]
},

{
    numero: 7,

    texto: `Assinale a alternativa que expressa a intenção do padrão de projeto Template Method:`,

    imagem: null,

    alternativas: [

        "Encapsular uma família de algoritmos em objetos, permitindo que os módulos clientes possam utilizar esses algoritmos de forma intercambiável.",

        "Definir uma relação de dependência entre objetos, de modo a garantir que modificações no estado do objeto afetado sejam notificadas automaticamente para         os objetos inscritos previamente como interessados em receber essas notificações.",

        "Implementar a estrutura de um algoritmo genérico em uma superclasse, considerando que os passos comuns são implementados na própria superclasse, enquanto os         passos específicos são implementados nas suas subclasses.(R)",

        "Permite capturar o estado interno de um objeto, permitindo que o seu estado seja restaurado posteriormente, sem quebrar o encapsulamento desse objeto.",

        "Encapsular uma requisição em um objeto, permitindo o registro do histórico de requisições disparadas pelos módulos cliente e a criação de filas de         requisições."

    ]
},

{
    numero: 8,

    texto: `Sobre o padrão Observer, assinale a alternativa correta:`,

    imagem: null,

    alternativas: [

        "É responsável por observar e promover as mudanças de estado de um objeto que possui um ciclo de vida complexo.",

        "Define uma cadeia de objetos responsáveis pelo processamento de uma requisição, em que cada objeto da cadeia observa eventos gerados por um elemento         central.",

        "É frequentemente utilizado na implementação de interfaces gráficas complexas, em que uma fonte de informação precisa estar sincronizada com diferentes         visualizações apresentadas simultaneamente para o usuário.(R)",

        "O conceito de polimorfismo não está presente na solução proposta pelo padrão.",

        "Permite o acesso sequencial a objetos organizados em uma coleção, sem expor a representação interna dessa coleção."

    ]
},

{
    numero: 9,

    texto: `Esse padrão encapsula uma requisição em um objeto, desacoplando o requisitante e o executor. Esse encapsulamento permite registrar o histórico de         requisições, reproduzir em outro ambiente, bem como implementar operações de desfazer ou refazer o processamento associado à requisição" Assinale a alternativa com     o nome do padrão que possui esse propósito.`,

    imagem: null,

    alternativas: [

        "Chain of Responsibility",

        "Command(R)",

        "Mediator",

        "Iterator",

        "Template Method"

    ]
},

{
    numero: 10,

    texto: `Você está desenvolvendo um sistema para acompanhar as cotações da bolsa de valores. As cotações podem ser acompanhadas na interface com usuário na forma     textual (ticker da ação e valor) e na forma de gráfico de candlesticks, apresentando o histórico das cotações em um período do tempo. As duas formas de     visualização devem estar em sincronia com as variações que ocorrem no valor das ações. Assinale a alternativa com o nome do padrão que pode ser aplicado para     resolver esse problema de sincronização de visualizações de um conjunto de informações com a sua fonte.`,

    imagem: null,

    alternativas: [

        "Strategy",

        "State",

        "Iterator",

        "Observer(R)",

        "Mediator"

    ]
},

{
    numero: 11,

    texto: `Esse padrão define uma estrutura similar à de um esquema Publisher-Subscriber, pois existe um Publisher detentor de um conjunto de informações e registra       um conjunto de objetos interessados em receber notificações de modificação desse conjunto de informações, ou seja, do estado do Publisher. Ao ter o seu estado       interno modificado, o Publisher notifica os Subscribers que, por sua vez, executam algum procedimento específico de tratamento dessa modificação.`,

    imagem: null,

    alternativas: [

        "Observer(R)",

        "State",

        "Template Method",

        "Strategy",

        "Visitor"

    ]
},

{
    numero: 12,

    texto: `Na implementação desse padrão, cada objeto de uma estrutura hierárquica deve definir uma operação Accept, que recebe um objeto de uma classe X     como parâmetro. A classe X, por sua vez, implementa uma interface genérica Z, definindo uma operação específica de tratamento para cada tipo de objeto que pertença     à estrutura hierárquica. Assinale a opção com o nome do padrão cuja estrutura de solução foi descrita no enunciado.`,

    imagem: null,

    alternativas: [

        "Strategy",

        "Template Method",

        "Observer",

        "State",

        "Visitor(R)"

    ]
},

{
    numero: 13,

    texto: `Fornecer uma interface de alto nível para os módulos clientes acessarem um componente ou subsistema, desacoplando os módulos clientes da estrutura interna     do subsistema e reduzindo o número de elementos com os quais os módulos clientes precisam interagir para realizar um serviço. Assinale a alternativa com o nome do     padrão que possui esse propósito:`,

    imagem: null,

    alternativas: [

        "Facade(R)",

        "Composite",

        "Proxy",

        "Abstract Factory",

        "Bridge"

    ]
},

{
    numero: 14,

    texto: `Um colega seu de trabalho está implementando a interface com o usuário de um sistema que dispara a execução de uma lógica de negócio envolvendo vários     objetos. Ele implementa uma primeira versão que faz diversas chamadas a objetos da lógica de negócio porque não existe uma interface de mais alto nível disponível     que encapsule esta complexidade. Para piorar, ao implementar um segundo módulo de interface com o usuário, ele se depara com o mesmo problema, tendo que copiar e     colar partes da lógica utilizadas no primeiro módulo de interface com o usuário. Ao revisar o código feito pelo seu colega, qual padrão você recomendaria que ele     utilizasse para diminuir o acoplamento entre os módulos de interface com o usuário e módulos referentes à lógica de negócio?`,

    imagem: null,

    alternativas: [

        "Proxy",

        "Composite",

        "Flyweight",

        "Adapter",

        "Facade(R)"

    ]
},

{
    numero: 15,

    texto: `Assinale o padrão que utiliza uma fábrica de objetos de modo a gerenciar a instaciação e o compartilhamento de objetos imutáveis utilizados em larga escala     em um sistema:`,

    imagem: null,

    alternativas: [

        "Proxy",

        "Flyweight(R)",

        "Facade",

        "Composite",

        "Adapter"

    ]
},

{
    numero: 16,

    texto: `Sobre o padrão Facade, assinale a alternativa correta:`,

    imagem: null,

    alternativas: [

        "Com a aplicação do padrão Facade, os módulos clientes passam a depender apenas de uma interface de alto nível oferecida por um subsistema, não podendo         utilizar diretamente elementos definidos dentro desse subsistema.",

        "Com a aplicação do padrão Facade, os módulos clientes podem utilizar um componente ou subsistema por meio de uma interface de alto nível.(R)",

        "O padrão Facade visa fornecer aos módulos clientes uma interface de alto nível para a instanciação de objetos complexos.",

        "O padrão Facade fornece uma interface de alto nível para a manipulação de uma hierarquia de objetos complexos.",

        "O padrão Facade permite adicionar funcionalidades de alto nível de abstração a componentes já existentes."

    ]

},

{
    numero: 17,

    texto: `Identifique no código a seguir o padrão que está sendo utilizado para ler o arquivo texto.

public class Exemplo {
    public static void main(String[] args) {
        try (
            BufferedReader reader = new BufferedReader(new FileReader("exemplo.txt"));
            String line;
            while ((line = reader.readLine()) != null)
                System.out.println(line);
        } catch (IOException e) {
            System.err.format("IOException: %s%n", e);
        }
    }
}`,

    imagem: null,

    alternativas: [

        "Decorator(R)",

        "Proxy",

        "Facade",

        "Bridge",

        "Flyweight"

    ]
},

{
    numero: 18,

    texto: `A arquitetura MVC (Model, View e Controller) é utilizada de forma ampla na criação de sistemas cadastrais e caracteriza-se pela divisão do sistema em     três camadas, com objetivos especificos. Considerando a divisão utilizada pelo MVC, a interface de usuário e o componente DAO estariam, respectivamente, nas     camadas:`,

    imagem: null,

    alternativas: [

        "View e Model(R).",

        "Controller e Model.",

        "View e Controller.",

        "Model e View.",

        "Model e Controller."

    ]
}

];