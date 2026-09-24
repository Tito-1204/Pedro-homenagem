import { PhotoItem, TimelineMilestone } from '../types';

export const photosData: PhotoItem[] = [
  {
    id: 'photo-1',
    url: '/assets/foto-1.jpeg',
    title: 'Trabalhando Arduamente para Jeová',
    caption: 'Trabalhando arduamente para Jeová como voluntário no SALS.',
    category: 'sals',
    location: 'SALS • Luanda Sul',
    tags: [],
    aspect: 'portrait'
  },
  {
    id: 'photo-2',
    url: '/assets/foto-2.jpeg',
    title: 'Equipa Unida no SALS',
    caption: 'Intervalo merecido com a equipa e a alegria que só quem serve de coração a Jeová conhece.',
    category: 'equipa',
    location: 'SALS • Luanda Sul',
    tags: [],
    aspect: 'landscape'
  },
  {
    id: 'photo-3',
    url: '/assets/foto-3.jpeg',
    title: 'Momentos no Auditório Principal',
    caption: 'Momentos especiais de partilha, orientações e conselhos entre as filas de bancos do Salão de Assembleias.',
    category: 'sals',
    location: 'Auditório Principal • SALS',
    tags: [],
    aspect: 'portrait'
  },
  {
    id: 'photo-4',
    url: '/assets/foto-4.jpeg',
    title: 'Dia de Assembleia & Congresso',
    caption: 'Toda a equipa elegante de fato e gravata, pronta para apoiar os eventos espirituais no SALS.',
    category: 'sals',
    location: 'Assembleias • Luanda Sul',
    tags: [],
    aspect: 'portrait'
  },
  {
    id: 'photo-5',
    url: '/assets/foto-5.jpeg',
    title: 'Operando',
    caption: 'Sempre atento na coordenação técnica para que tudo chegasse com clareza para a assistência.',
    category: 'sals',
    location: 'Cabine Técnica • SALS',
    tags: [],
    aspect: 'landscape'
  },
  {
    id: 'photo-6',
    url: '/assets/foto-6.jpeg',
    title: 'Apontando para a Frente',
    caption: 'Apontando para a frente, pois sabemos que o futuro que Jeová nos reserva é o melhor.',
    category: 'sals',
    location: 'SALS • Luanda Sul',
    tags: [],
    aspect: 'portrait'
  },
  {
    id: 'photo-9',
    url: '/assets/foto-9.jpeg',
    title: 'A Equipa Antes da Partida',
    caption: 'a equipa mais atualizada antes da partida, tinha que ir na reunião, não consegui aparecer😭',
    category: 'equipa',
    location: 'SALS • Luanda Sul',
    tags: [],
    aspect: 'landscape'
  },
  {
    id: 'photo-10',
    url: '/assets/foto-10.jpeg',
    title: 'A Equipa Antes da Partida',
    caption: 'a equipa mais atualizada antes da partida, tinha que ir na reunião, não consegui aparecer😭',
    category: 'equipa',
    location: 'SALS • Luanda Sul',
    tags: [],
    aspect: 'landscape'
  },
  {
    id: 'photo-11',
    url: '/assets/foto-11.jpeg',
    title: 'Fora do Expediente',
    caption: 'equipe disposta e alegre, gostam de trabalhar fora do expediente😑, como diz o inácio, tinha que bazar na renião tbm😭',
    category: 'equipa',
    location: 'SALS • Luanda Sul',
    tags: [],
    aspect: 'landscape'
  },
  {
    id: 'photo-12',
    url: '/assets/foto-12.jpeg',
    title: 'Bastidores do Salão',
    caption: 'Nos bastidores onde tudo acontece — cada cabo, cada coluna, cada detalhe cuidado com amor.',
    category: 'sals',
    location: 'Bastidores • SALS',
    tags: [],
    aspect: 'landscape'
  },
  {
    id: 'photo-13',
    url: '/assets/foto-13.jpeg',
    title: 'Os Chefes a Operar',
    caption: 'os chefes a operar para nada falhar',
    category: 'sals',
    location: 'Cabine Técnica • SALS',
    tags: [],
    aspect: 'landscape'
  }
];

export const editorialValuesData = [
  {
    id: 'val-1',
    title: 'Espírito Voluntário (A-2)',
    description: 'Dedicação incansável nos bastidores, nas salas de AV (audiovisual) e nos sistemas do auditório.',
    iconName: 'Wrench',
    badge: 'Disposição Integral',
    color: 'amber'
  },
  {
    id: 'val-2',
    title: 'Cuidado com os Irmãos',
    description: 'Capacidade de incluir, ensinar e liderar com paciência quem estava a começar.',
    iconName: 'HeartHandshake',
    badge: 'Mentoria & Amor',
    color: 'sky'
  },
  {
    id: 'val-3',
    title: 'Prontidão para o Próximo Passo',
    description: 'O exemplo de prontidão para aceitar novas responsabilidades onde a necessidade for maior.',
    iconName: 'Building2',
    badge: 'Fidelidade Sagrada',
    color: 'emerald'
  }
];

export const timelineData: TimelineMilestone[] = [
  {
    id: 'milestone-1',
    year: 'O Começo',
    badge: 'Petição A-2',
    title: 'O Chamado do Coração Voluntário',
    subtitle: 'Disposição para apoiar o Salão de Assembleias',
    description: 'Com o espírito de Isaías ("Eis-me aqui! Envia-me a mim"), a disposição para doar o teu tempo, energias e zelo através da petição A-2, iniciando uma trajetória de amor e serviço prático no Salão de Assembleias de Luanda Sul.',
    iconName: 'ClipboardCheck',
    details: [
      'Disposição voluntária para servir na manutenção e apoio',
      'Integração de coração na equipa técnica de Luanda Sul',
      'Prontidão contínua para apoiar em qualquer necessidade'
    ],
    scripture: {
      text: 'Então ouvi a voz de Jeová, dizendo: "A quem enviarei e quem irá por nós?" E eu respondi: "Eis-me aqui! Envia-me a mim."',
      reference: 'Isaías 6:8'
    }
  },
  {
    id: 'milestone-2',
    year: 'O Suor no SALS',
    badge: 'Trabalhando no SALS',
    title: 'Cuidando do Audiovisual do Salão',
    subtitle: 'Para que cada palavra chegasse com clareza à assistência',
    description: 'Enquanto milhares de famílias assistem pacificamente aos discursos e cânticos, os bastidores exigem vigilância constante. Cuidando das colunas de som, telões, microfones, mixers e equipamentos de áudio e vídeo para que o programa das assembleias chegasse com clareza a toda a assistência.',
    iconName: 'Wrench',
    details: [
      'Operação e manutenção das colunas de som e sistema de áudio do auditório',
      'Configuração de telões, projetores e equipamentos de vídeo para cada evento',
      'Gestão de microfones, mixers e cabine técnica durante assembleias e congressos'
    ],
    scripture: {
      text: 'Continuámos assim a reconstruir a muralha... porque o povo estava com o coração na obra.',
      reference: 'Neemias 4:6'
    }
  },
  {
    id: 'milestone-3',
    year: 'O Legado',
    badge: 'Irmandade & Exemplo',
    title: 'Um Exemplo de Humildade e União',
    subtitle: 'Mais do que cabos e chaves: amor em ação',
    description: 'O maior testemunho deixado no SALS não foi apenas o que as tuas mãos consertaram, mas o modo como acolheste e trataste cada irmão. Sempre paciente, pontual, bem-humorado e pronto a estender a mão a quem estava a chegar.',
    iconName: 'HeartHandshake',
    details: [
      'Companheirismo alegre nos intervalos e refeições',
      'Paciência e carinho para orientar quem estava a começar',
      'Reconhecimento caloroso de todos os irmãos da equipa'
    ],
    scripture: {
      text: 'Porque Deus não é injusto para se esquecer da vossa obra e do amor que mostrastes ao seu nome...',
      reference: 'Hebreus 6:10'
    }
  },
  {
    id: 'milestone-4',
    year: 'O Novo Capítulo',
    badge: 'Nova Designação',
    title: 'A Porta Aberta para o Próximo Serviço',
    subtitle: 'Expandindo o serviço sagrado numa nova missão',
    description: 'Agora, uma nova e abençoada designação se abre. Levas para esta nova etapa a bagagem preciosa de experiência adquirida no SALS, as orações e o amor de todos os irmãos da equipa técnica e o mesmo coração dedicado a servir a Jeová de toda a alma.',
    iconName: 'Building2',
    details: [
      'Acolhimento da nova designação com a mesma prontidão de sempre',
      'Votos sinceros de perseverança, paz e muitas alegrias nesta nova etapa',
      'Continuidade do serviço fiel onde a necessidade for maior'
    ],
    scripture: {
      text: 'Tudo o que fizerem, façam-no de toda a alma, como para Jeová e não para homens...',
      reference: 'Colossenses 3:23-24'
    }
  }
];
