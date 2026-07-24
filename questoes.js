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
},

{
    numero: 19,

    texto: `Uma mudança essencial no modelo de programação Java, com a evolução do JEE, foi o uso de anotações nas diversas tarefas de configuração dos EJBs do     aplicativo. Para que serve a anotação Local no ambiente de criação de EJBs?`,

    imagem: null,

    alternativas: [

        "Definir um Stateless Session Bean..",

        "Definir um contexto de persistência local para o Session Bean.",

        "Definir a interface de acesso às entidades do JPA.",

        "Definir um Stateful Session Bean.",

        "Definir a interface de acesso local ao pool de EJBs.(R)"

    ]
},

{
    numero: 20,

    texto: `Em uma aplicação corporativa Java EE seguindo a arquitetura MVC, as camadas são implementadas com tecnologias específicas: A camada Controller recebe     requisições HTTP do usuário, coordena chamadas à camada de negócio e seleciona a View a ser exibida. A camada Model encapsula a lógica de negócio e pode interagir     com a persistência de dados. No NetBeans, ao criar um projeto corporativo "Enterprise Application", qual combinação de tecnologias seria mais adequada para     implementar [Model, Controller] nesta aplicação?`,

    imagem: null,

    alternativas: [

        "JPA e JSP",

        "EJB e Servlet(R)",

        "Servlet e EJB",

        "JSP e EJB",

        "EJB e JPA"

    ]
},

{
    numero: 21,

    texto: `Em um projeto de software para gestão de bibliotecas, o padrão Singleton é utilizado para garantir uma única instância do sistema de gerenciamento de     usuários. Este padrão assegura que todas as operações de empréstimo e devolução de livros sejam gerenciadas de forma centralizada.
    Qual é a principal característica do padrão Singleton utilizada neste contexto?`,

    imagem: null,

    alternativas: [

        "Permite a criação de múltiplas instâncias de uma classe.",

        "Facilita a criação de objetos complexos em etapas.",

        "Garante uma única instância de uma classe em toda a aplicação.(R)",

        "Fornece uma interface para criar famílias de objetos relacionados.",

        "Permite clonar objetos mantendo o mesmo estado."

    ]
},

{
    numero: 22,

    texto: `Em um sistema de vendas online, o padrão Abstract Factory é utilizado para criar objetos relacionados a diferentes categorias de produtos sem especificar     suas classes concretas. Isso permite flexibilidade na adição de novas categorias de produtos. Qual é o propósito do padrão Abstract Factory neste contexto?`,

    imagem: null,

    alternativas: [

        "Garantir que apenas uma instância de uma classe seja criada.",

        "Permitir a construção de um objeto em múltiplas etapas.",

        "Criar uma família de objetos relacionados sem especificar suas classes concretas.(R)",

        "Clonar objetos mantendo seu estado original.",

        "Gerenciar o ciclo de vida de objetos complexos."

    ]
},

{
    numero: 23,

    texto: `Os iteradores de coleção em Java obtidos a partir da interface Collection são implementados com a aplicação de qual padrão de projeto?`,

    imagem: null,

    alternativas: [

        "Abstract Factory",

        "Factory Method(R)",

        "Singleton",

        "Prototype",

        "Builder"

    ]
},

{
    numero: 24,

    texto: `Analise a estratégia de solução a seguir: "Definir um construtor private e implementar uma operação estática que retorna uma instância criada em uma     operação com escopo static e armazenada como um atributo static dentro da própria classe". Assinale a alternativa com o nome do padrão que define essa     estratégia:`,

    imagem: null,

    alternativas: [

        "Abstract Factory",

        "Factory Method",

        "Singleton(R)",

        "Prototype",

        "Builder"

    ]
},

{
    numero: 25,

    texto: `Reduzir a necessidade de criar hierarquias paralelas de classes ou de criar subclasses apenas para instanciar objetos específicos é um dos efeitos obtidos     com a aplicação de qual padrão?`,

    imagem: null,

    alternativas: [

        "Abstract Factory",

        "Factory Method",

        "Singleton",

        "Prototype(R)",

        "Builder"

    ]

},

{
    numero: 26,

    texto: `Você deseja criar um objeto complexo formado por diferentes partes. Para isso, você define uma interface abstrata responsável com operações representando a     criação dessas partes, permitindo que as implementações concretas dessa interface criem diferentes representações dessas partes. Qual padrão de projeto você         utilizaria nessa situação?`,

    imagem: null,

    alternativas: [

        "Abstract Factory",

        "Factory Method",

        "Singleton",

        "Prototype",

        "Builder(R)"

    ]
},

{
    numero: 27,

    texto: `Sobre o padrão Abstract Factory, assinale a alternativa correta:`,

    imagem: null,

    alternativas: [

        "Sua implementação requer a definição de uma operação chamada clone em cada fábrica concreta.",

        "Sua implementação pode envolver a aplicação do padrão Factory Method.(R)",

        "Seu propósito é abstrair o processo de construção de um objeto complexo formado por vários passos.",

        "Uma fábrica pode criar apenas um tipo de produto.",

        "O construtor de cada fábrica deve ser definido como private."

    ]
},

{
    numero: 28,

    texto: `Analise a estratégia de solução a seguir: "Definir uma hierarquia de classes responsáveis pela instanciação de uma hierarquia paralela de classes produtos,     em que cada classe concreta é capaz de instanciar um produto específico de cada tipo definido em uma família de produtos". Assinale a alternativa com o nome do     padrão que define essa estratégia:`,

    imagem: null,

    alternativas: [

        "Abstract Factory(R)",

        "Factory Method",

        "Singleton",

        "Prototype",

        "Builder"

    ]
},

{
    numero: 29,

    texto: `Um módulo X escreve dados em uma tabela de um banco de dados relacional que é lida por um módulo Y. Se o desenvolvedor responsável pelo módulo X resolver     mudar algo no esquema dessa tabela, será preciso avaliar o impacto dessa mudança em Y. Esse fato evidencia a existência de um acoplamento de que natureza entre os     módulos X e Y?`,

    imagem: null,

    alternativas: [

        "Acoplamento Global",

        "Acoplamento de Estrutura",

        "Acoplamento de Dados",

        "Acoplamento Externo(R)",

        "Acoplamento de Controle"

    ]
},

{
    numero: 30,

    texto: `Ao invés de colocarmos o cálculo do frete de um pedido na classe Pedido, optamos por criar uma hierarquia de classes para encapsular os diferentes     algoritmos de cálculo de frete que temos no sistema". Assinale a alternativa com o nome do padrão GRASP que recomenda a criação de classes que não representam     diretamente elementos concretos encontrados no domínio no negócio, seguindo uma decomposição de responsabilidades por comportamento e não por representação, como a     descrita no cálculo do frete.`,

    imagem: null,

    alternativas: [

        "Invenção Pura.(R)",

        "Especialista na Informação.",

        "Polimorfismo.",

        "Acoplamento Baixo.",

        "Indireção."

    ]
},

{
    numero: 31,

    texto: `Veja o código a seguir e assinale a alternativa com o tipo de acoplamento existente entre a classe Exemplo e a classe Lampada.

public class Lampada {
    public static final int LIGAR = 1;
    public static final int DESLIGAR = 0;

    public realizarOperacao(int codigo) {
        switch(codigo) {
            case LIGAR:
                // executa procedimento para ligar a lâmpada
                break;
            case DESLIGAR:
                // executa procedimento para ligar a lâmpada
                break;
        }
    }
}

public class Exemplo {
    public static void main(String [] args) {
        Lampada lampada = new Lampada();
        Lampada.realizarOperacao(Lampada.LIGAR);
    }
}
}`,

    imagem: null,

    alternativas: [

        "Acoplamento Global.",

        "Acoplamento de Estrutura.",

        "Acoplamento Funcional.",

        "Acoplamento Externo.",

        "Acoplamento de Controle.(R)"

    ]
},

{
    numero: 32,

    texto: `Um módulo A contém operações como conversão de medidas, formatação de valores monetários, remoção de espaços duplicados em strings e envio/recepção de     arquivos FTP. O módulo A possui coesão:`,

    imagem: null,

    alternativas: [

        "Funcional.",

        "Procedural.",

        "Coincidente.(R)",

        "Temporal.",

        "Sequencial."

    ]
},

{
    numero: 33,

    texto: `Uma classe X contém o seguinte conjunto de métodos: Fechar arquivos Fechar conexão com banco de dados Finalizar tarefas em execução em segundo plano     Liberar buffers de armazenamento temporário Finalizar operação, que é um método executado na finalização do sistema e que chama todos os métodos anteriores.     Assinale a alternativa com o tipo de coesão da classe X.`,

    imagem: null,

    alternativas: [

        "Coesão Coincidente",

        "Coesão Temporal(R)",

        "Coesão Lógica",

        "Coesão Funcional",

        "Coesão Sequencial"

    ]
},

{
    numero: 34,

    texto: `Uma classe X acessa diretamente os atributos públicos de uma classe Y. Que tipo de acoplamento existe entre X e Y?`,

    imagem: null,

    alternativas: [

        "Acoplamento Global",

        "Acoplamento de Conteúdo(R)",

        "Acoplamento Externo",

        "Acoplamento de Estrutura",

        "Acoplamento de Dados"

    ]
},

{
    numero: 35,

    texto: `Assinale a alternativa que contém tipos de coesão de um módulo em ordem do tipo de coesão mais baixa para a mais alta:`,

    imagem: null,

    alternativas: [

        "Temporal - Lógica - Procedural",

        "Lógica - Coincidente - Sequencial",

        "Procedural - Sequencial - Comunicação",

        "Coincidente - Temporal - Sequencial(R)",

        "Procedural - Lógica - Funcional"

    ]
},

{
    numero: 36,

    texto: `Assinale a alternativa que apresenta os níveis de acoplamento entre módulos ordenados do mais baixo para o mais alto:`,

    imagem: null,

    alternativas: [

        "Dados - Estrutura - Externo - Controle - Conteúdo - Global",

        "Dados - Controle - Estrutura - Externo - Conteúdo - Global",

        "Estrutura - Dados - Controle - Conteúdo - Global - Externo",

        "Dados - Estrutura - Controle - Externo - Global - Conteúdo(R)",

        "Estrutura - Dados - Controle - Global - Externo - Conteúdo"

    ]
},

{
    numero: 37,

    texto: `"Este padrão substitui soluções condicionais baseadas em switch-case ou if-then-else por uma chamada genérica de operação para um objeto que pode             assumir diferentes formas em tempo de execução". Assinale a alternativa com o nome do padrão GRASP correspondente a esta descrição:`,

    imagem: null,

    alternativas: [

        "Acoplamento Baixo.",

        "Polimorfismo.(R)",

        "Indireção.",

        "Especialista na Informação.",

        "Controlador."

    ]
},

{
    numero: 38,

    texto: `Assinale a alternativa que descreve uma situação em que a utilização do padrão Especialista de Informação pode comprometer a coesão de um módulo.`,

    imagem: null,

    alternativas: [

        "Quando definimos uma classe que fornece uma interface de alto nível para módulos clientes utilizarem para disparar operações do negócio.",

        "Quando colocamos em uma mesma classe operações de naturezas diferentes como lógica do negócio e acesso a banco de dados, uma vez que eles utilizam as mesmas           informações da classe.(R)",

        "Quando definimos um objeto intermediário para mediar a comunicação entre objetos remotos.",

        "Quando introduzimos uma interface abstrata em substituição a um código centralizado em um módulo com estruturas condicionais do tipo switch-case ou if-then-           else.",

        "Quando definimos a responsabilidade por criar um objeto para a classe que contém todas as informações necessárias para realizar essa criação."

    ]
},

{
    numero: 39,

    texto: `Assinale a alternativa CORRETA sobre o padrão GRASP Coesão.`,

    imagem: null,

    alternativas: [

        "Um módulo com coesão alta é aquele que concentra o código das funções mais importantes do sistema.",

        "Um módulo com coesão baixa é aquele que depende de um pequeno conjunto de módulos.",

        "Um módulo com coesão alta é aquele que concentra operações logicamente relacionadas envolvendo diferentes tecnologias ou sistemas externos.",

        "Um módulo com coesão baixa é aquele que possui um propósito bem definido.",

        "Um módulo com coesão alta reúne elementos que contribuem para que o módulo realize o seu propósito específico.(R)"

    ]
},

{
    numero: 40,

    texto: `Assinale a alternativa CORRETA sobre o padrão GRASP Acoplamento:`,

    imagem: null,

    alternativas: [

        "O acoplamento Global entre dois módulos corresponde a um grau baixo de acoplamento, já que eles não dependem um do outro, mas sim de uma variável global.",

        "Quando passamos um objeto com diversos atributos como argumento para um método e este método utiliza apenas um desses atributos no seu processamento, temos um         acoplamento de dados.",

        "Em um sistema de acoplamento baixo, as mudanças de requisitos tendem a gerar modificações em poucas classes.(R)",

        "Um sistema com acoplamento baixo indica que a lógica do sistema está concentrada em poucos módulos, facilitando o seu entendimento.",

        "Um sistema que não faz uso do recurso de interfaces abstratas, sendo implementado apenas com classes, tende a ser um sistema com grau de acoplamento baixo."

    ]
},

{
    numero: 41,

    texto: `Assinale a alternativa com uma afirmativa correta sobre o padrão GRASP Variações Protegidas.`,

    imagem: null,

    alternativas: [

        "O padrão Variações Protegidas sugere proteger o sistema de variações concentrando a lógica dessas variações em um módulo controlador.",

        "O padrão Variações Protegidas sugere identificar pontos do sistema propensos a variações e isolá-los em um módulo com coesão lógica.",

        "O padrão Variações Protegidas sugere proteger o sistema de variações por meio de parâmetros definidos em uma classe com acesso global.",

        "O padrão Variações Protegidas sugere proteger as variações de algoritmos sensíveis por meio do uso de recursos de criptografia.",

        "O padrão Variações Protegidas sugere identificar pontos do sistema propensos a variações e isolá-los com a criação de interfaces no seu entorno.(R)"

    ]
},

{
    numero: 42,

    texto: `O padrão GoF Mediator reduz uma rede de dependências entre objetos de uma topologia N x N para uma topologia 1 x N, introduzindo um objeto central que     recebe as notificações enviadas pelos objetos mediados e encaminha o processamento para os objetos responsáveis. Qual padrão GRASP está diretamente relacionado à     estratégia de introduzir um objeto para intermediar a interação entre outros objetos?`,

    imagem: null,

    alternativas: [

        "Indireção(R)",

        "Polimorfismo",

        "Especialista na Informação",

        "Criador",

        "Coesão Alta"

    ]
},

{
    numero: 43,

    texto: `O padrão GoF Proxy consiste em colocarmos entre dois objetos remotos um elemento intermediário que capture a requisição do objeto cliente e a encaminhe     pela rede até o objeto destino. Dessa forma, o objeto cliente pode fazer chamadas de operações do objeto destino como se eles estivessem rodando localmente. Qual     padrão GRASP está mais diretamente relacionado à solução proposta pelo padrão GoF Proxy?`,

    imagem: null,

    alternativas: [

        "Especialista na Informação.",

        "Criador.",

        "Controlador.",

        "Polimorfismo.",

        "Indireção(R)"

    ]
},

{
    numero: 44,

    texto: `Serve como alternativa à utilização de subclasses na atribuição de responsabilidade, provendo uma forma mais flexível e dinâmica, por meio da superposição     de objetos em que o objeto mais externo adiciona funcionalidades às operações do objeto mais interno. Assinale a alternativa com o nome do padrâo que possui esse     propósito:`,

    imagem: null,

    alternativas: [

        "Decorator(R)",

        "Proxy.",

        "Composite.",

        "Facade",

        "Bridge"

    ]
},

{
    numero: 45,

    texto: `Fornecer aos clientes um objeto intermediário com uma réplica da interface do objeto fornecedor que contém os métodos que realmente serão executados. Esse      objeto intermediário delega as requisições dos clientes para o fornecedor, como ocorre, por exemplo, quando clientes e fornecedores são objetos distribuídos em         máquinas diferentes. Assinale a alternativa com o nome do padrão com esse propósito:`,

    imagem: null,

    alternativas: [

        "Bridge",

        "Decorator(R).",

        "Flyweight.",

        "Adapter",

        "Composite"

    ]
},

{
    numero: 46,

    texto: `Um amigo seu está desenvolvendo um sistema com dezenas de casos de uso. Esse sistema pode ser usado em uma interface web e em um aplicativo móvel. Você o     aconselha a criar uma classe para cada caso de uso que ficará responsável por receber os eventos lógicos recebidos dessas interfaces e coordenar a produção das     respostas que o sistema deve produzir para esses eventos. Assinale a alternativa com o nome do padrão GRASP descrito na recomendação descrita:`,

    imagem: null,

    alternativas: [

        "Indireção",

        "Criador.",

        "Mediador.",

        "Controlador(R)",

        "Polimorfismo."

    ]
},

{
    numero: 47,

    texto: `As mensagerias são um ferramental de ampla utilização em ambientes corporativos, e entre os diferentes tipos de EJBs, os MDBs são os componentes     responsáveis pelo comportamento assíncrono do sistema, baseado na utilização de mensagerias. Assinale a alternativa correta com relação aos Message Driven Benas,     ou MDBs:`,

    imagem: null,

    alternativas: [

        "Precisam implementar a interface SessionListener.",

        "Tratam as mensagens através de seu único método, denominado onMessage.(R)",

        "Necessitam de interfaces @Local e @Remote.",

        "Eles podem guardar informações de estado.",

        "São definidos pela anotação @Message."

    ]
},

{
    numero: 48,

    texto: `Os EJBs do tipo Session Bean podem ser divididos em três perfis, sendo que um deles permite a ocorrência de apenas uma instância por máquina virtual,     viabilizando o compartilhamento de dados de forma global, entre todos os aplicativos do servidor. Qual é o perfil do EJB descrito?`,

    imagem: null,

    alternativas: [

        "Stateful.",

        "Entity",

        "Singleton(R)",

        "Stateless",

        "Message Driven Bean"

    ]
}

];
