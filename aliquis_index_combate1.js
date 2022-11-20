// HISTORY ARRAY

    // !!! OBS: ONLY 2 SCENES HAD 3 OPTIONS, IN GENERAL OPT3.NEXTPOINT MUST BE EQUAL TO HIS INDEX;
    // !!! OBS: COMMENT ALL THE INDEX;

    const history = [
        // 0
                {
                    action: "Olá caro Jogador, antes de interagir com o século 18, que tal saber um pouco sobre minha história??",
                    opt1: {
                        text: "Sim",
                        nextpoint: 1 ,
                    },
                    opt2:  {
                        text: "Não",
                        nextpoint: 3 ,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 0,
                    }
                },
        // 1
                {
                    action: "Meu nome é Aliquis Petit, nasci em 1768, na região próxima ao Palácio de Versalhes. Não sei muito sobre meus pais, sou órfão desde que eu me entendo por gente. Minha maior ambição é conseguir fazer algo a respeito dessa monarquia, enquanto todos vivem na pobreza, o clero esnoba com suas festividades e negligenciam o próprio povo.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 2,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 1,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 1,
                    }
                },
        //2
                {
                    action: "Comecei a trabalhar desde pequeno para não morrer, então, sempre me virei, com isto, aprendi a lutar. Meu único amigo, Patróclo Tisía Hetairos, descendente de famílias nórdicas, sempre me contava sobre as histórias que seus avós lhe falavam.Patróclo me contava sobre Valhalla, um palácio para onde iria os soldados após suas mortes. E falava que esse era o seu sonho.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 3,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 2,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 2,
                    }
                },
        //3
                {
                    action: "Você está voltando de mais um dia de trabalho, e sente um pouco de fome.",
                    opt1: {
                        text: "Ir para casa",
                        nextpoint: 4,
                    },
                    opt2: {
                        text: "Passar no bar e comer um pouco",
                        nextpoint: 19,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 3,
                    }
                },
        //4
                {
                    action: "Você volta para casa, mas não tem nada pra comer, então, você decide dormir.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 5,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 4,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 4,
                    }
                },
        //5
                {
                    action: "No dia seguinte, sai de casa para mais um trabalho, e acaba por ler um panfleto jogado na rua. O panfleto fala sobre a Assembleia dos Estados Gerais, e vê que não adiantaria nada resolver as coisas de um jeito pacífico. Você então continua indo para o trabalho, contudo, no meio do caminho, avista seu melhor amigo, Patróclo Tisía Hetairos. Você comenta sobre a Assembleia com ele, e ele lhe conta sobre a ideia que estão tendo.",                        
                    opt1: {
                        text: "Continuar",
                        nextpoint: 9,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 5,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 5,
                    }
                },
        //6
                {
                    action: "",
                    opt1: {
                        text: "",
                        nextpoint: 6,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 6,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 6,
                    }
                },
        //7
                {
                    action: "Você então continua indo para o trabalho, contudo, no meio do caminho, avista seu melhor amigo, Patróclo Tisía Hetairos.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 8,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 7,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 7,
                    }
                },
        //8
                {
                    action: "Você comenta sobre a Assembleia com ele, e ele lhe conta sobre a ideia que estão tendo.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 9,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 8,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 8,
                    }
                },
        //9
                {
                    action: '"Ouvi que estão com um plano de tomar bastilha e fazer uma declaração por direito do homem e do cidadão. Mostrar pra aquele reizinho de merda quem somos"',
                    opt1: {
                        text: "continuar",
                        nextpoint: 10,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 9,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 9,
                    }
                },
        //10
                {
                    action: "Ele lhe pergunta se quer se juntar.",
                    opt1: {
                        text: "Aceita convite",
                        nextpoint: 12,
                    },
                    opt2: {
                        text: "Recusar convite",
                        nextpoint: 11,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 10,
                    }
                },
        //11
                {
                    action: "Você recusa, mas se lembra de todo o seu passado.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 12,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 11,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 11,
                    }
                },
        
            
        //12
                {
                    action: "Sabe Patróclo, desde sempre eu quis isto, ir contra este rei de merda. Eu vou.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 13,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 12,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 12,
                    }
                },
        //13
                {
                    action: "É assim que se fala Aliquis. Vai ser em 2 semanas, se prepare.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 14,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 13,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 13,
                    }
                },
        
            
            
            
        //14
                {
                    action: "Tenho duas semanas para me preparar, ok... vamos lá.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 15,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 14,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 14,
                    }
                },
        
            
        //15
                {
                    action: "Você tira uma folga do trabalho para se preparar.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 16,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 15,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 15,
                    }
                },
        //16
                {
                    action: "Como você não comeu, tem tal opção agora. Deseja comer ou ir direto para o treino?",
                    opt1: {
                        text: "Comer",
                        nextpoint: 18,
                    },
                    opt2: {
                        text: "Treino",
                        nextpoint: 17,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 16,
                    }
                },
        //17 (linkar com a morte)
                  {
                    action: "Aliquis, devido a fome, morre de exaustão enquanto treinava",
                    opt1: {
                        text: "Você morreu",
                        nextpoint: 18,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 17,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 17,
                    }
                },
        //18
                {
                    action: "Você tem o melhor treino de sua vida, assim, ficando totalmente preparado.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 32,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 18,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 18,
                    }
                },
        // OUHAHAUOSAHOUHNOUHUOHNUOHNUOHNUOHNUOHNUOHNUOHNUOHNUOH
            
        //19
                {
                    action: "Você decide ir para o bar se alimentar de um árduo dia.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 20,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 19,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 19,
                    }
                },
        //20
                {
                    action: "Indo ao bar, você vê várias pessoas com fome, vivendo só de restos, é triste, mas você tenta ignorar.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 21,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 20,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 20,
                    }
                },
        //21
                {
                    action: "Chegando ao bar, você avista seu amigo, Patróclo.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 22,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 21,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 21,
                    }
                },		
        //22
                {
                    action: "Você pergunta como vão as coisas, ele fica sério.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 23,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 22,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 22,
                    }
                },		
        //23
                {
                    action: "Sabe Aliquis, hoje mais cedo teve a Assembleia... Não vamos conseguir nada se continuar com a calma.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 24,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 23,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 23,
                    }
                },				
        //24
                {
                    action: "Ouvi que estão organizando uma invasão a bastilha, e com isto, fazer uma declaração sobre o direito do homem e cidadão.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 25,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 24,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 24,
                    }
                },			
        //25
                {
                    action: "O que você acha? Se quiser se preparar, temos até uma rotina para isto, vai acontecer em 2 semanas.",
                    opt1: {
                        text: "Aceitar",
                        nextpoint: 27,
                    },
                    opt2: {
                        text: "Recusar",
                        nextpoint: 26,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 26,
                    }
                },		
        //26
                {
                    action: "Você recusa, mas se lembra de todo o seu passado.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 27,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 26,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 26,
                    }
                },			
        //27
                {
                    action: '"Sabe Patróclo, desde sempre eu quis isto, ir contra este rei de merda. Eu vou."',
                    opt1: {
                        text: "continuar",
                        nextpoint: 28,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 27,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 27,
                    }
                },		
        //28
                {
                    action: "É assim que se fala Aliquis. Vamos comer e beber um pouco, você deve estar com fome.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 29,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 28,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 28,
                    }
                },		
        //29
                {
                    action: "Nessas duas semanas, você treinou arduamente todos os dias sem falta.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 30,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 29,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 29,
                    }
                },
        //30
                {
                    action: "Em seu tempo livre, ouvia as palestras de Georges Jacques Danton, um filosofo que você seguia e gostava bastante.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 31,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 30,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 30,
                    }
                },
        //31
                {
                    action: "Ele falando que era a favor da revolução, e que o rei tinha que cair, acabou fazendo você gostar ainda mais dele.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 32,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 31,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 31,
                    }
                },
        //32
                {
                    action: "Dia da tomada de bastilha.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 33,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 32,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 32,
                    }
                },
        //33
                {
                    action: "Patróclo vai bem cedo na sua casa te chamar.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 34,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 33,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 33,
                    }
                },
        //34
                {
                    action: "Está pronto?",
                    opt1: {
                        text: "Eu nasci pronto",
                        nextpoint: 35,
                    },
                    opt2: {
                        text: "Claro que sim",
                        nextpoint: 35,
                    },
                    opt3: {
                        text: "Vamos mostrar para aquele rei quem é que manda",
                        nextpoint: 35,
                    }
                },
        //35
                {
                    action: "É assim que se fala! Vamos!",
                    opt1: {
                        text: "continuar",
                        nextpoint: 36,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 35,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 35,
                    }
                },
        //36
                {
                    action: "Chegando junto da multidão, você percebe que são inúmeras pessoas.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 37,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 36,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 36,
                    }
                },
        //37
                {
                    action: "Eles estão distribuindo armas, são precárias, contudo, uteis ao proposito.",
                    opt1: {
                        text: "Pegar uma espada",
                        nextpoint: 38,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 37,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 37,
                    }
                },
        //38
                {
                    action: "Patróclo lhe apresenta para o líder da multidão, o Pierre Lorenzo.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 39,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 38,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 38,
                    }
                },
        //39 (fala do patroclo)
                {
                    action: "Este é o meu amigo que eu tanto lhe falei!",
                    opt1: {
                        text: "continuar",
                        nextpoint: 40,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 39,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 39,
                    }
                },
        //40 (fala do pierre)
                {
                    action: "Vai ser bom lhe ter aqui, meu filho.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 41,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 40,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 40,
                    }
                },
        //41
                {
                    action: "Sua impressão a respeito de Pierre, é que ele se encaixa perfeitamente para o papel de um líder.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 42,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 41,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 41,
                    }
                },
        //42
                {
                    action: "Todos começam a fazer uma roda em volta de Pierre, parece que ele vai dar um discurso.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 43,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 42,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 42,
                    }
                },
        
        //43
                {
                    action: "HOMENS, NÓS HOJE VAMOS TOMAR BASTILHA EM RESPOSTA A TODOS OS CIDADÃOS QUE ESTÃO MORRENDO E QUE MORRERAM POR NEGLICENCIA DESTE SER QUE OUSAMOS CHAMAR DE REI!",
                    opt1: {
                        text: "continuar",
                        nextpoint: 44,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 43,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 43,
                    }
                },
        //44
                {
                    action: "NÃO SE APAVOREM, NÃO DETAM, APENAS PENSEM NO FUTURO DA FRANÇA, JUNTOS PODEMOS QUALQUER COISA, VAMOS MOSTRAR DO QUE SOMOS FEITOS!",
                    opt1: {
                        text: "continuar",
                        nextpoint: 45,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 44,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 44,
                    }
                },
        //45
                {
                    action: "ESSE É O ÚNICO MÉTODO QUE TEMOS PARA NOS REBELAR CONTRA ESTE MUNDO CRUEL! MORREMOS AQUI, E DEIXAMOS PARA OS QUE FICAREM ENCONTRAR UM SIGNIFCADO NAS NOSSAS VIDAS!",
                    opt1: {
                        text: "continuar",
                        nextpoint: 46,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 45,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 45,
                    }
                },
        //46
                {
                    action: "VAMOS MEUS GUERREIROS, VAMOS ENFRETAR TODOS!",
                    opt1: {
                        text: "continuar",
                        nextpoint: 47,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 46,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 46,
                    }
                },
        //47
                {
                    action: "Assim, após este emocionante discurso, todos vão rumo a Bastilha.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 48,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 47,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 47,
                    }
                },
        //48
                {
                    action: "Chegando já perto, você tem um vislumbre da prisão.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 49,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 48,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 48,
                    }
                },
        //49
                {
                    action: "Pierre para todos, e diz para rezarem para os seus deuses antes de começar a luta.",
                    opt1: {
                        text: "Rezar",
                        nextpoint: 50,
                    },
                    opt2: {
                        text: "Esperar a multidão",
                        nextpoint: 50,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 49,
                    }
                },
        //50
                {
                    action: "Você acaba por se juntar a multidão em uma reza.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 51,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 50,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 50,
                    }
                },	
        //51
                {
                    action: "Enfim no local, já explode batalhas e mais batalhas.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 52,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 51,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 51,
                    }
                },
        //52
                {
                    action: "Patróclo fala para vocês lutarem lado a lado, um protegendo as costas um do outro.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 53,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 52,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 52,
                    }
                },
        //53
                {
                    action: "De repente, avança um soltado para cima de ti.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 54,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 53,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 53,
                    }
                },
        //54
                {
                    action: "Sem outra possibilidade, você avança com tudo pra cima dele.",
                    opt1: {
                        text: "Batalhar", // linkar o combate
                        nextpoint: 54,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 54,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 54,
                    }
                },
        //55
                {
                    action: "Após um árduo confronto, você consegue vence-lo, mas não fica animado, pois sabe que vem outros pela frente.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 56,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 55,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 55,
                    }
                },
        //56
                {
                    action: "Aparece outro de surpresa querendo atacar Patróclo, você o defende entrando em combate novamente.",
                    opt1: {
                        text: "Batalhar", // linkar batalha
                        nextpoint: 57,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 56,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 56,
                    }
                },
        //57
                {
                    action: "Você derrota mais um inimigo, e começa a ver que o treinamento não foi em vão.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 58,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 57,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 57,
                    }
                },
        //58
                {
                    action: "Dois soldados avançam para cima de ti, sem escolha, você os enfrenta.",
                    opt1: {
                        text: "Batalhar", // linkar com combate
                        nextpoint: 59,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 58,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 58,
                    }
                },
        //59
                {
                    action: "Com muito esforços, e alguns arranhões, você consegue derrota-los.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 60,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 59,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 59,
                    }
                },
        //60
                {
                    action: "Você começa a achar o clima muito calmo, calmo demais.",
                    opt1: {
                        text: "Olhar para trás",
                        nextpoint: 61,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 60,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 60,
                    }
                },
        //61
                {
                    action: "Tem um soldado vindo em sua direção muito rápido, não consegue desviar, até que...",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 62,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 61,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 61,
                    }
                },
        //62
                {
                    action: "Patróclo aparece e usa o seu corpo para te defender, se sacrificando por ti.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 63,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 62,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 62,
                    }
                },
        //63
                {
                    action: "Você perde totalmente o raciocínio, e parte para o soldado!",
                    opt1: {
                        text: "Matar-lo",
                        nextpoint: 64,
                    },
                    opt2: {
                        text: "Destrui-lo",
                        nextpoint: 64,
                    },
                    opt3: {
                        text: "Oblitera-lo",
                        nextpoint: 64,
                    }
                },
        //64
                {
                    action: "Você acaba por matar friamente o soldado.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 65,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 64,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 64,
                    }
                },
        //65
                {
                    action: "Uma irá e tristeza incontrolável começa a fluir de seu corpo.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 66,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 65,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 65,
                    }
                },
        //66
                {
                    action: "Qualquer soldado que aparecia a sua frente, era facilmente morto.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 67,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 66,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 66,
                    }
                },
        //67
                {
                    action: "Não era mais pela França, era uma vingança pelo seu amigo.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 68,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 67,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 67,
                    }
                },
        //68
                {
                    action: "Você é cercado por 10 soldados.",
                    opt1: {
                        text: "Batalhar", // linkar o combate 
                        nextpoint: 69,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 68,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 68,
                    }
                },
        //69
                {
                    action: "Você massacra os seus inimigos.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 70,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 69,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 69,
                    }
                },
        //70
                {
                    action: "Pierre chega para falar que já tinha acabado, você olha para ele, e percebe-se o seu choro.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 71,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 70,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 70,
                    }
                },
        //71
                {
                    action: "Você dá um grito para o alto, e finalmente começa a olhar tudo o que tinha acontecido.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 72,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 71,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 71,
                    }
                },
        //72
                {
                    action: "Você corre para o corpo de Patróclo, e ele com os seus últimos suspiros, lhe fala:",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 73,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 72,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 72,
                    }
                },
        //73
                {
                    action: "F-fez um estrago, hein.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 74,
                    },
                    opt2: {
                        text: "Se derramar em lágrimas",
                        nextpoint: 74,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 73,
                    }
                },
        //74
                {
                    action: "10 horas depois",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 75,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 74,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 74,
                    }
                },
        //75
                {
                    action: "Em uma comemoração por conseguir a tomada de Bastilha, vocês fazem um pequeno banquete.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 76,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 75,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 75,
                    }
                },
        //76
                {
                    action: "Você se senta meio isolado de todos, pois estava pensando sobre Patróclo.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 77,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 76,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 76,
                    }
                },
        //77 // fala de pierre
                {
                    action: "Posso me juntar a você?",
                    opt1: {
                        text: "Claro",
                        nextpoint: 78,
                    },
                    opt2: {
                        text: "Sim, pode",
                        nextpoint: 78,
                    },
                    opt3: {
                        text: "Chega mais",
                        nextpoint: 78,
                    }
                },
        //78 // fala de aliquis
                {
                    action: "Por que você acha que ele se sacrificou por mim?",
                    opt1: {
                        text: "Escutar a resposta de pierre.",
                        nextpoint: 79,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 78,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 78,
                    }
                },
        //79 // fala de pierre
                {
                    action: "Não faço ideia, quem sabe, é porque ele te via como um irmão mais novo a ser protegido",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 80,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 79,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 79,
                    }
                },
        //80 // fala de aliquis
                {
                    action: "Desde sempre, eu só me importei comigo e com a minha ambição!",
                    opt1: {
                        text: "Escutar a resposta de pierre.",
                        nextpoint: 81,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 80,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 80,
                    }
                },
        
        //81 // fala de aliquis
                {
                    action: "Do que adianta qual ambição se não posso comemorar com quem eu gosto? Esse vazio. Esse vazio eu irei carregar para sempre",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 82,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 81,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 81,
                    }
                },
        //82 // fala de aliquis
                {
                    action: "Ele morreu por mim, então, em compensação, irei carregar os sonhos dele, irei carregar ele comigo para todo o sempre!",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 83,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 82,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 82,
                    }
                },
        //83 // fala de pierre
                {
                    action: "Cuidado para não se afogar em magoas por não conseguir fazer algo tão grande.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 84,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 83,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 83,
                    }
                },
        //84 // fala de aliquis
                {
                    action: "É um peso que eu vou levar, tenho que levar.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 85,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 84,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 84,
                    }
                },
        //85 // fala de pierre
                {
                    action: "Só pelo fato dele se sacrificar acha mesmo que tem o direito de carregar os sonhos dele? Quanta arrogância",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 86,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 85,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 85,
                    }
                },
        //86 // fala de pierre
                {
                    action: "O desejo dele foi você continuar vivo, e não que carregassem os sonhos dele.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 87,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 86,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 86,
                    }
                },
        //87 // fala de pierre
                {
                    action: "Espero que algum dia consiga entender isto, e se encontre!",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 88,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 87,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 87,
                    }
                },
        //88 // fala de pierre
                {
                    action: "Eu vou voltar para a festa, estão me esperando, espero que fique bem.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 89,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 88,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 88,
                    }
                },
        //89 // fala de pierre
                {
                    action: "Sempre que precisa de alguma ajuda, conte comigo, Aliquis",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 90,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 89,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 89,
                    }
                },
        //90
                {
                    action: "Você começa a refletir sobre o que Pierre disse.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 91,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 90,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 90,
                    }
                },
        //91
                {
                    action: "Quem sabe, ele tenha razão... Irei tirar um tempo para mim. Parar de sempre querer vingança, tentar viver a vida realmente.",
                    opt1: {
                        text: "Ir para casa",
                        nextpoint: 92,
                    },
                    opt2: {
                        text: "Se retirar",
                        nextpoint: 92,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 91,
                    }
                },
        //92
                {
                    action: "Você volta para casa, e mesmo que a França estivesse nosseus piores estados possíveis...",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 93,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 92,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 92,
                    }
                },
        //93
                {
                    action: "Você começa a sempre tentar ver o lado bom, o lado que o Patróclo tenta ver.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 94,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 93,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 93,
                    }
                },
        //94
                {
                    action: "Por mais que você esteja vivendo de forma pacífica, ainda sim, continua com seus treinamentos, e assim durou durante 3 anos.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 95,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 94,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 94,
                    }
                },
        //95
                {
                    action: "Frequentemente Pierre, ia te visitar. Uma dessas visitas foi bastante inoportuna.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 96,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 95,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 95,
                    }
                },
        //96
                {
                    action: "Ele comenta sobre um exército que estava fazendo, até apelidou de “Exército Revolucionário”.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 97,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 96,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 96,
                    }
                },
        //97
                {
                    action: "Ele propõe que você entre.",
                    opt1: {
                        text: "Aceitar",
                        nextpoint: 107,
                    },
                    opt2: {
                        text: "Recusar",
                        nextpoint: 98,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 97,
                    }
                },
        //98
                {
                    action: "Você recusa.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 99,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 98,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 98,
                    }
                },
        //99
                {
                    action: "Por mais que esteja treinando, prefiro ficar aqui, longe batalhas, acho que era isto que Patróclo gostaria.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 100,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 99,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 99,
                    }
                },
        //100 //fala de aliquis
                {
                    action: "Por mais que esteja treinando, prefiro ficar aqui, longe batalhas, acho que era isto que Patróclo gostaria.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 101,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 100,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 100
                    }
                },
        //101 //fala de pierre
                {
                    action: "É, você tem razão, bem, já vou indo, tenho muito a fazer até outro dia, Aliquis.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 102,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 101,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 101,
                    }
                },
        //102 
                {
                    action: "1 ano se passa, e você fica sabendo da sentença do rei, e decide ir à praça para ver ele sendo guilhotinado.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 103,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 102,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 102,
                    }
                },
        //103
                {
                    action: "Um tempo mais tarde, o mesmo acontece com a rainha, e você novamente vai ver.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 104,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 103,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 103,
                    }
                },
        //104
                {
                    action: "Após estes acontecimentos, decide se mudar para a floresta.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 105,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 104,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 104,
                    }
                },
        //105
                {
                    action: "Assim, morando na floresta, você passa o resto de sua vida.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 106,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 105,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 105,
                    }
                },
        //106
                {
                    action: "Seus últimos pensamentos foram: “Espero te ver em Valhala, meu caro amigo.”",
                    opt1: {
                        text: "Fim", // linkar tela final
                        nextpoint: 106,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 106,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 106,
                    }
                },
        //107
                {
                    action: "Você aceita.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 108,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 107,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 107,
                    }
                },
        //108
                {
                    action: "Logo na primeira missão, você teria que enfrentar o Exército Austro-Prussiano, que tentava devolver o poder para as mãos de Luiz VXI.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 109,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 108,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 108,
                    }
                },
        //109
                {
                    action: "O Exército Revolucionário era desengonçado, precário, parecia uma tarefa impossível.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 110,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 109,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 109,
                    }
                },
        //110
                {
                    action: "Dumoriez e François Christophe Kellerman pegaram a liderança.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 111,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 110,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 110,
                    }
                },
        //111
                {
                    action: "20 de setembro de 1792",
                    opt1: {
                        text: "continuar",
                        nextpoint: 112,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 111,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 111,
                    }
                },
        //112
                {
                    action: "Dia em que você torcia para Deus ser o último desta luta infernal, pois já estava nas suas últimas forças.",
                    opt1: {
                        text: "continuar",
                        nextpoint: 113,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 112,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 112,
                    }
                },
        //113
                {
                    action: "Avança 2 inimigos para cima de ti.",
                    opt1: {
                        text: "Batalhar", //linkar combate
                        nextpoint: 113,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 113,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 113,
                    }
                },
        //114
                {
                    action: "Você consegue enfrentar eles, mas sai com ferimentos sérios.",
                    opt1: {
                        text: "Batalhar",
                        nextpoint: 115,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 114,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 114,
                    }
                },
        //115
                {
                    action: "Avança muitos mais inimigos em cima de ti, tanto que não consegue nem ao menos contar.",
                    opt1: {
                        text: "Fugir",
                        nextpoint: 116,
                    },
                    opt2: {
                        text: "Tentar recuar por hora",
                        nextpoint: 116,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 115,
                    }
                },
        //116
                {
                    action: "Você não tem escapatória.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 117,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 116,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 116,
                    }
                },
        //117
                {
                    action: "Você acaba por morrer em combate.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 118,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 117,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 117,
                    }
                },
        //118
                {
                    action: "Seus últimos pensamentos são divididos.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 119,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 118,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 118,
                    }
                },
        //119
                {
                    action: "Uma parte de você estava desejando a vitória sobre aquela guerra, cortejando a morte do rei, torcendo para a França se tornar um lugar melhor.",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 120,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 119,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 119,
                    }
                },
        //120
                {
                    action: "A outra, estava pensando sobre Patróclo:",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 121,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 120,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 120,
                    }
                },
        //121 //pensamento de aliquis
                {
                    action: "Espero ter feito algo bom meu caro amigo, espero ter consigo influenciar em algo, ter ajudado a França...",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 122,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 121,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 121,
                    }
                },
        //122 //pensamento de aliquis
                {
                    action: "Espero ter feito algo bom meu caro amigo, espero ter consigo influenciar em algo, ter ajudado a França...",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 123,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 122,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 122,
                    }
                },
        //123 //pensamento de aliquis
                {
                    action: "...Espero ter conseguido viver igual um guerreiro que você tanto falava, bem, minhas preces finais vão para ti",
                    opt1: {
                        text: "Continuar",
                        nextpoint: 124,
                    },
                    opt2: {
                        text: "",
                        nextpoint: 123,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 123,
                    }
                },
        //124 //pensamento de aliquis
                {
                    action: "Espero lhe encontrar em Valhalla!",
                    opt1: {
                        text: "Fim", 
                        nextpoint: 124, //linkar quadro final
                    },
                    opt2: {
                        text: "",
                        nextpoint: 124,
                    },
                    opt3: {
                        text: "",
                        nextpoint: 124,
                    }
                },	
                ];

// CONST AND VARS DECLARATION:

const action = document.getElementById("action-text");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option1_bt = document.getElementById("option-1-pushable");
const option2_bt = document.getElementById("option-2-pushable");
const option3_bt = document.getElementById("option-3-pushable");

// FUNCTIONS:

function typing(){
    if(counter < text_typing.length){
        action.innerHTML += text_typing.charAt(counter);
        
        counter += 1;

        setTimeout(typing, 8);
    };

total_time =  (text_typing.length)*8

return total_time;
}

function applyPoint(next) {
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    action.innerHTML = "";
    

    const point = history[next];

    if(point.action == "Olá caro Jogador, antes de interagir com o século 18, que tal saber um pouco sobre minha história??"){
        document.getElementById("scene-image").setAttribute("src", "https://i.imgur.com/UPFb4JC.jpeg")   
    }
    if(point.action == "Meu nome é Aliquis Petit, nasci em 1768, na região próxima ao Palácio de Versalhes. Não sei muito sobre meus pais, sou órfão desde que eu me entendo por gente. Minha maior ambição é conseguir fazer algo a respeito dessa monarquia, enquanto todos vivem na pobreza, o clero esnoba com suas festividades e negligenciam o próprio povo."){
        document.getElementById("scene-image").setAttribute("src", "https://i.imgur.com/fpRVIT0.jpeg")   
    }
    
// SE OPT1 TEXT IGUAL A BATALHAR ENTÃO BASTA COLOCAR O LINK DA RESPECTIVA PÁGINA DE COMBATE

counter = 0;
text_typing = String(point.action); 
typing();

setTimeout(() => {
    option1.innerHTML = String(point.opt1.text);
    option2.innerHTML = String(point.opt2.text);
    option3.innerHTML = String(point.opt3.text);
    
    option1_bt.setAttribute('onclick', `applyPoint(${point.opt1.nextpoint})`);
    option2_bt.setAttribute('onclick', `applyPoint(${point.opt2.nextpoint})`);
    option3_bt.setAttribute('onclick', `applyPoint(${point.opt3.nextpoint})`);

    if(point.opt1.text == "Batalhar"){
        option1_bt.setAttribute("onclick", "window.location = 'https://aaljim.github.io/Repositorio_jogo_I.N.C.E.L/battle_tests_batalha1.html'");
    };
    if(point.opt1.text == "Você morreu"){
        option1_bt.setAttribute("onclick", "window.location = 'https://tiago070.github.io/integrador2022/morte_aliquis.html'");
    };


}, total_time+250)

    
}

applyPoint(55);
