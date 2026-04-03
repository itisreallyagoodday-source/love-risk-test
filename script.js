const modules = {
  reality: {
    name: "他的生活里有你吗",
    description: "看你是真的走进他的日常，还是只活在他的甜言蜜语里。"
  },
  commitment: {
    name: "他敢公开你们的关系吗",
    description: "看他愿不愿意把你介绍给身边人，给这段关系一个正经名分。"
  },
  ambiguity: {
    name: "他是认真的还是在耗着你",
    description: "看他是想和你好好走下去，还是只想低成本占着你的感情。"
  },
  fit: {
    name: "你们真的适合过一辈子吗",
    description: "看你们的相处模式、生活习惯，能不能长久磨合下去。"
  },
  selfCost: {
    name: "这段感情是不是在消耗你",
    description: "看这段关系有没有让你委屈、内耗，甚至弄丢了自己。"
  }
};

const questions = [
  {
    id: "q1",
    module: "reality",
    title: "你是他的日常，还是他无聊时的消遣？",
    prompt: "回想最近 3–6 个月的相处，选最贴合你现状的答案。",
    risk: "你在他生活里的存在感风险",
    impacts: ["中高风险", "高风险", "极高风险"],
    highScoreMeaning: "分数越高，说明你只是他情绪上的伴儿，根本没走进他的真实生活。",
    options: [
      { points: 0, title: "他的日常里处处有我", detail: "同城或者有明确的同城计划，他的生活里我是理所当然的存在。" },
      { points: 1, title: "能稳定见面，但还没融入他的日常", detail: "见面频率很规律，但他的生活节奏里还没完全有我的位置。" },
      { points: 2, title: "大多时候只在线上聊", detail: "现实见面少得可怜，每次见面都是临时凑时间，没个准数。" },
      { points: 3, title: "我只是他生活的边缘人", detail: "要么长期异地，要么只在他有空、没人陪的时候才会想起我。" },
      { points: 4, title: "我只在他需要情绪安慰时出现", detail: "他的现实生活里没我的痕迹，只有聊天、深夜emo时才会找我。" }
    ]
  },
  {
    id: "q2",
    module: "reality",
    title: "他的未来规划里，有你的位置吗？",
    prompt: "别听他嘴上说的甜言蜜语，看实际行动里有没有把你算进去。",
    risk: "你在他未来里的存在感风险",
    impacts: ["中高风险", "高风险", "极高风险"],
    highScoreMeaning: "分数越高，说明你只是他的临时情绪补给，根本没被他放进未来里。",
    options: [
      { points: 0, title: "他的未来里，我是既定人选", detail: "买房、工作、旅行这些重大规划，都会明确把我算进去，不是随口说说。" },
      { points: 1, title: "我大概在他的未来版图里", detail: "已经把我纳入一部分规划了，只是还需要时间慢慢落地验证。" },
      { points: 2, title: "偶尔提提我，但没真的算进去", detail: "聊未来时会带一嘴，但真到做重要决定时，我的位置就没了。" },
      { points: 3, title: "我只是他的情绪陪伴", detail: "他难过、开心都找我，但聊到正经的未来安排，从来没我的份。" },
      { points: 4, title: "我一直是他的“临时选项”", detail: "他只是把我当情绪寄托，比起把我放进未来，更愿意把我留在“备胎区”。" }
    ]
  },
  {
    id: "q3",
    module: "commitment",
    title: "他敢把你介绍给身边人，给你一个名分吗？",
    prompt: "看他愿不愿意为你承担“有对象”的名声，而不是藏着掖着。",
    risk: "关系公开的诚意风险",
    impacts: ["轻中风险", "中高风险", "高风险"],
    highScoreMeaning: "分数越高，说明他只想偷偷摸摸和你处，根本不想让别人知道你的存在。",
    options: [
      { points: 0, title: "我们的关系光明正大", detail: "他的朋友、同事、家人都知道我，对外从来不会遮掩我们的关系。" },
      { points: 1, title: "他的核心圈子都知道我", detail: "虽然不会高调秀恩爱，但他的好朋友、家人都明确知道我的存在。" },
      { points: 2, title: "只有一小部分人知道我", detail: "几个普通朋友知道，但他的发小、家人这些核心圈，根本不知道我的存在。" },
      { points: 3, title: "他一直把我藏着掖着", detail: "从不带我见他的朋友、家人，也从不把我放进他的现实社交场景里。" },
      { points: 4, title: "我就是他的“地下情人”", detail: "只敢私下联系，对外绝口不提我，刻意让我处于“隐身”状态。" }
    ]
  },
  {
    id: "q4",
    module: "commitment",
    title: "你们是在往结婚走，还是只在原地耗着？",
    prompt: "别听他画的大饼，看有没有实际的推进动作，比如见家长、谈同居。",
    risk: "关系推进的诚意风险",
    impacts: ["轻中风险", "中高风险", "高风险", "极高风险"],
    highScoreMeaning: "分数越高，说明你们处再久也没用，一提谈婚论嫁他就躲，根本没打算推进。",
    options: [
      { points: 0, title: "感情一直在稳步向前", detail: "已经聊过见家长、定婚期，甚至开始规划同居、买房这些实际的事。" },
      { points: 1, title: "方向很明确，也有实际动作", detail: "推进速度慢，但能看到他的诚意，比如主动带我见朋友，聊未来的生活。" },
      { points: 2, title: "只聊未来，从不落地", detail: "嘴上天天说“以后我们怎样怎样”，但从来没做过一件实际推进的事。" },
      { points: 3, title: "总说“以后再说”，从不行动", detail: "相处了很久，但关系一直原地踏步，没有任何实质性的进展。" },
      { points: 4, title: "一提推进关系，他就回避", detail: "只要聊到见家长、谈结婚，他就冷脸、转移话题，根本不想聊。" }
    ]
  },
  {
    id: "q5",
    module: "ambiguity",
    title: "他是在认真和你谈，还是在低成本耗着你？",
    prompt: "关键不是相处快慢，而是他有没有想和你定下来的心思。",
    risk: "被消耗的感情风险",
    impacts: ["中高风险", "高风险", "极高风险"],
    highScoreMeaning: "分数越高，说明他只是把你当“免费情绪价值”，根本没打算认真对你。",
    options: [
      { points: 0, title: "节奏清晰，感情在往前走", detail: "哪怕进展慢，但每一步都有方向，能明显感觉到他想和我好好走。" },
      { points: 1, title: "偶尔慢一点，但没停步", detail: "有时候节奏会慢，但能看到他的用心，也有推进关系的实际行动。" },
      { points: 2, title: "开始变得模糊不清", detail: "关系状态越来越暧昧，他既不拒绝也不承诺，让人摸不透。" },
      { points: 3, title: "忽冷忽热，把我耗得很累", detail: "他心情好就找我，心情不好就晾着我，长期不清不楚，快把我逼疯了。" },
      { points: 4, title: "他只享受好处，不承担责任", detail: "他心安理得享受我的好，却从不给我名分，也拒绝推进关系。" }
    ]
  },
  {
    id: "q6",
    module: "ambiguity",
    title: "他越界后会认错修复，还是让你自己委屈？",
    prompt: "看他有没有把你的感受放在心上，而不是犯了错还理直气壮。",
    risk: "感情边界的忠诚风险",
    impacts: ["高风险", "极高风险"],
    highScoreMeaning: "分数越高，说明他根本不把你的感受当回事，越界已成常态，还懒得哄你。",
    options: [
      { points: 0, title: "有边界感，错了会主动弥补", detail: "知道什么该做什么不该做，要是不小心越界，会立刻道歉并弥补我的情绪。" },
      { points: 1, title: "偶尔犯错，但会及时纠正", detail: "偶尔会有小失误，但态度很端正，会马上改，不会让我一直委屈。" },
      { points: 2, title: "边界感越来越模糊", detail: "偶尔会做让我不安的事，比如和异性走得近，但还没到越界的程度。" },
      { points: 3, title: "已经越界，却懒得修复", detail: "和别人搞暧昧、撒谎这些事都做过，但从来不会认真道歉，更不会改。" },
      { points: 4, title: "反复越界，把我当傻子", detail: "多次和别人暧昧、脚踏几条船，被发现后还狡辩，完全没有悔意。" }
    ]
  },
  {
    id: "q7",
    module: "fit",
    title: "这段感情里，只有你在一味付出吗？",
    prompt: "看谁在掏心掏肺，谁在坐享其成，付出和回报是不是对等的。",
    risk: "感情付出的失衡风险",
    impacts: ["中高风险", "高风险"],
    highScoreMeaning: "分数越高，说明你掏心掏肺付出，他却只享受，还掌握着感情的主动权。",
    options: [
      { points: 0, title: "彼此付出，谁也不亏", detail: "我和他的投入差不多，大事小事都会商量着来，不会一方说了算。" },
      { points: 1, title: "略有倾斜，但能沟通", detail: "偶尔我多付出一点，或者他多付出一点，但聊一聊就能调整过来。" },
      { points: 2, title: "一直是我主动、我付出", detail: "情绪、时间、钱都是我花得多，他只偶尔回应一下，根本不上心。" },
      { points: 3, title: "我付出，他掌控节奏", detail: "我天天琢磨怎么对他好，他却只顾着自己，想理我就理，不想理就晾着。" },
      { points: 4, title: "我一味付出，却没半点话语权", detail: "感情里的事都是他说了算，我再怎么掏心掏肺，也做不了任何主。" }
    ]
  },
  {
    id: "q8",
    module: "fit",
    title: "真嫁给他，你能受得了他的生活方式吗？",
    prompt: "别被恋爱的甜蜜冲昏头，看看他的家庭、三观，你真的能接受吗？",
    risk: "婚后生活的适配风险",
    impacts: ["轻中风险", "中高风险", "高风险"],
    highScoreMeaning: "分数越高，说明就算有感情，结婚后也会天天吵架，日子过得一地鸡毛。",
    options: [
      { points: 0, title: "三观合拍，过日子没问题", detail: "他的家庭氛围、为人处世的方式，我都能接受，长期相处也不会累。" },
      { points: 1, title: "有差异，但能磨合", detail: "生活习惯有点不一样，但不会吵翻天，慢慢调整就能适应。" },
      { points: 2, title: "差异明显，已经开始别扭", detail: "他的三观、家庭规矩和我差太多，相处时已经觉得不舒服了。" },
      { points: 3, title: "融入他的生活，我特别压抑", detail: "每次去他家，或者接触他的生活圈，都觉得浑身不自在，特别委屈。" },
      { points: 4, title: "结婚必内耗，日子过不下去", detail: "他的家庭、三观和我完全不合，真结婚了只会天天吵架，没有好日子过。" }
    ]
  },
  {
    id: "q9",
    module: "selfCost",
    title: "和他在一起，你是安心的，还是天天内耗？",
    prompt: "别替他找借口，就凭直觉说，和他在一起你开心吗？",
    risk: "情绪和身体的消耗风险",
    impacts: ["高风险", "极高风险"],
    highScoreMeaning: "分数越高，说明这段感情正在拖垮你，让你又累又委屈。",
    options: [
      { points: 0, title: "安心自在，做自己就好", detail: "和他在一起不用小心翼翼，有安全感，能坦然做最真实的自己。" },
      { points: 1, title: "偶尔不安，但很快就好", detail: "偶尔会有点小情绪，但不会放在心上，也不会影响正常生活。" },
      { points: 2, title: "天天内耗，总在自我说服", detail: "经常忍不住胡思乱想，还要不停安慰自己“他是爱我的”，特别累。" },
      { points: 3, title: "这段感情快把我榨干了", detail: "焦虑、失眠、自我怀疑，每天都在纠结，做什么事都没心思。" },
      { points: 4, title: "身体和情绪都在喊“快跑”", detail: "长期委屈、难过，吃不好睡不好，连正常生活都受影响，身体都在抗议。" }
    ]
  },
  {
    id: "q10",
    module: "selfCost",
    title: "这段感情，正在偷走你的未来吗？",
    prompt: "看看你为他放弃了多少，时间、机会、梦想，值得吗？",
    risk: "未来选择的消耗风险",
    impacts: ["中高风险", "高风险", "极高风险"],
    highScoreMeaning: "分数越高，说明你为了这段没结果的感情，正在浪费自己的青春和机会。",
    options: [
      { points: 0, title: "付出有回报，不亏", detail: "为他花的时间、精力都有回应，没有因为这段感情耽误自己的未来。" },
      { points: 1, title: "费点精力，但不影响大局", detail: "偶尔会为感情分心，但不会耽误自己的工作、社交和人生规划。" },
      { points: 2, title: "开始为他放弃其他机会", detail: "明显感觉因为这段感情，错过了更好的工作、社交，甚至人生选择。" },
      { points: 3, title: "等他的日子，我亏大了", detail: "时间、精力、好机会都耗在等他上，但他始终不给我一个明确的结果。" },
      { points: 4, title: "我的青春，全耗在他身上了", detail: "被这段不清不楚的感情绑住，错过最好的年纪，却什么都没得到。" }
    ]
  }
];

const resultTypes = [
  {
    key: "type1",
    label: "低风险 · 稳定观察型",
    min: 0,
    max: 7,
    interpretation: "当前关系的**结构型风险未形成**，现实嵌入、承诺表达、权力适配等核心维度均处于健康区间，属于良性的关系发展阶段。但低风险≠无风险，仅代表现阶段未出现系统性的关系失衡，不构成长期稳定的判定依据。",
    issue: "当前关系的核心任务并非止损，而是**持续验证现实推进动作的稳定性**，避免因短期情绪适配，过早进行高成本的关系绑定行为。",
    biggestRisk: "将「临时的结构稳定」误判为「长期的关系安全」，在未完成现实纳入、公开承诺的核心验证前，贸然进入同居、订婚、共同财务等深度绑定阶段。",
    nextSteps: [
      "以**行为指标**为核心判断依据，而非情绪表达或口头承诺；",
      "保持关系推进节奏，不提前进行高成本的现实绑定；",
      "持续观察「现实嵌入+公开承诺+结构推进」的同步性。"
    ]
  },
  {
    key: "type2",
    label: "轻中风险 · 谨慎验证型",
    min: 8,
    max: 15,
    interpretation: "关系已出现**局部性结构失衡**，核心维度中至少一项出现轻微偏差，尚未形成固化的风险模式。此时关系的核心矛盾并非情绪适配，而是对方未完成「关系成本的主动承担」，需通过明确的验证机制确认推进意愿。",
    issue: "你正以**情绪价值的过度供给**，弥补对方在现实推进、公开承诺上的结构缺口，长期易形成「单向投入」的关系模式，加剧权力适配的失衡。",
    biggestRisk: "以「情绪理解」替代「现实验证」，忽视局部结构失衡的信号，让轻中风险逐步固化为中高风险，最终陷入关系消耗。",
    nextSteps: [
      "立即调整投入节奏，停止无上限的情绪与时间供给；",
      "设定30–60天的**结构化验证周期**，明确现实推进的量化指标；",
      "暂不进入任何形式的重大承诺，拒绝为对方的决策成本兜底。"
    ]
  },
  {
    key: "type3",
    label: "中高风险 · 暂停加码型",
    min: 16,
    max: 23,
    interpretation: "关系已出现**系统性结构偏差**，现实嵌入、公开承诺、模糊占用中至少两项处于失衡状态，关系停留在「情绪连接」层面，未向「现实关系」完成转化。此时继续追加投入，本质是用个人的时间窗口为对方的「低成本占用」买单。",
    issue: "关系长期处于**模糊化发展阶段**，你在持续补位关系的结构缺口，而对方始终维持「低投入、高收益」的关系状态，权力分布已出现明显倾斜。",
    biggestRisk: "持续的单向加码会强化对方的低成本占用行为，让模糊关系固化为长期的消耗型关系，最终吞噬你的情绪价值与决策窗口。",
    nextSteps: [
      "立即停止所有形式的关系投入加码，切断无意义的情绪供给；",
      "提出明确的**现实推进诉求**，拒绝纯口头的情绪安抚与模糊化回应；",
      "若验证期内无结构性改善，直接按高风险关系进行止损处理。"
    ]
  },
  {
    key: "type4",
    label: "高风险 · 优先止损型",
    min: 24,
    max: 31,
    interpretation: "关系已进入**显性消耗阶段**，核心维度中至少三项出现严重失衡，边界失守、权力错配、自我代价等问题已形成固化模式，持续的关系存续会对个人的情绪稳定与现实功能造成不可逆的影响。",
    issue: "关系的**核心结构已完全失衡**，模糊占用、单向投入、边界突破等关键问题，正持续吞噬你的情绪价值、时间窗口与未来选择权，关系的收益已无法覆盖个人付出的成本。",
    biggestRisk: "将「无意义的沟通与等待」视为关系修复策略，忽视结构失衡的本质问题，让高风险关系继续消耗个人的现实功能与决策机会。",
    nextSteps: [
      "立即暂停所有形式的重大关系绑定（同居、婚姻、共同财务等）；",
      "制定**个性化的关系止损方案**，优先保障个人的情绪稳定与现实功能；",
      "必要时寻求专业的关系咨询，进行系统性的风险复核与止损指导。"
    ]
  },
  {
    key: "type5",
    label: "极高风险 · 退出优先型",
    min: 32,
    max: 40,
    interpretation: "关系已属于**恶性消耗型结构**，个人在关系中的位置长期处于「不稳定、不可见、高可替代」状态，身体直觉、情绪价值、未来窗口已被持续吞噬，关系的存续已无任何正向价值，默认策略为退出优先。",
    issue: "你在关系中已完全丧失**主动权与决策权**，成为对方的情绪补位或临时选项，个人的自我价值与发展节奏被严重裹挟，持续的沉没成本已形成路径依赖。",
    biggestRisk: "因沉没成本过高而陷入「合理化偏差」，继续为已验证的错误结构寻找支撑理由，最终错过个人的最佳发展窗口。",
    nextSteps: [
      "执行**退出优先的核心策略**，停止所有形式的解释、沟通与等待；",
      "优先进行**自我价值修复**，恢复个人的情绪稳定与现实决策功能；",
      "如需关系收尾，采用「体面退出+现实切割」的处理方案，避免二次消耗。"
    ]
  }
];

const redFlagRules = [
  {
    questionId: "q5",
    label: "拖延与模糊红线",
    detail: "关系已高度符合低成本占用结构。对方持续享受关系收益，却拒绝承担关系升级成本与现实推进责任。"
  },
  {
    questionId: "q6",
    label: "边界与忠诚红线",
    detail: "关系的边界与忠诚结构已明显失守。越界行为已经形成固定模式，而对方没有做出任何实质性的修复动作。"
  },
  {
    questionId: "q9",
    label: "身体与情绪红线",
    detail: "这段关系已经对你的情绪稳定和现实功能造成伤害。身体直觉和情绪体验都在发出明确的负面信号。"
  }
];

const moduleIssueCopy = {
  reality: "你当前最突出的**结构型问题**为现实嵌入度严重不足，未被稳定纳入对方的现实生活与未来规划体系，在关系中仅处于「情绪连接位置」，而非「现实关系位置」，可替代性极高。",
  commitment: "你当前最突出的**结构型问题**为承诺表达的缺失，关系长期停留在「私下相处层」，未完成「公开化+规划化」的转化，对方始终拒绝为关系承担名誉成本与现实推进成本。",
  ambiguity: "你当前最突出的**结构型问题**为关系的模糊化与拖延化，核心矛盾并非推进速度，而是对方的「低成本占用」策略，你在为关系承担决策成本，而对方持续享受关系收益却拒绝升级。",
  fit: "你当前最突出的**结构型问题**为长期适配性的底层缺失，权力分布、家庭文化、生活方式的核心维度存在不可调和的偏差，即便短期情绪适配，长期共同生活仍会形成持续性的结构内耗。",
  selfCost: "你当前最突出的**结构型问题**为关系的自我代价已突破临界值，这段关系正持续吞噬你的身体直觉、情绪价值与未来选择权，**自我保全**已成为现阶段的核心任务，而非关系推进。"
};

const moduleDisplayMap = {
  reality: {
    academicName: "模块 A：现实嵌入度",
    plainName: "他的生活里有你吗",
    subtitle: "看你是真的走进他的日常，还是只活在他的甜言蜜语里。"
  },
  commitment: {
    academicName: "模块 B：公开承诺度",
    plainName: "他敢公开你们的关系吗",
    subtitle: "看他愿不愿意把你介绍给身边人，给这段关系一个正经名分。"
  },
  ambiguity: {
    academicName: "模块 C：模糊占用度",
    plainName: "他是认真的还是在耗着你",
    subtitle: "看他是想和你好好走下去，还是只想低成本占着你的感情。"
  },
  fit: {
    academicName: "模块 D：权力适配度",
    plainName: "这段关系里，谁在迁就，谁在掌控",
    subtitle: "看你们在主导权、付出、生活方式和长期结构上是否已经失衡。"
  },
  selfCost: {
    academicName: "模块 E：自我代价度",
    plainName: "这段感情是不是在消耗你",
    subtitle: "看这段关系有没有让你委屈、内耗，甚至弄丢了自己。"
  }
};

const moduleDeepCopy = {
  reality: {
    academicName: "模块 A：现实嵌入度",
    plainName: "他的生活里有你吗",
    subtitle: "看你是真的走进他的日常，还是只活在他的甜言蜜语里。",
    professional: "该模块评估的是你是否被稳定纳入对方的现实生活系统，包括日常安排、社交环境、生活节奏与未来规划。",
    simple: "说白了，就是你和他到底是不是在真正谈一段有现实位置的关系。"
  },
  commitment: {
    academicName: "模块 B：公开承诺度",
    plainName: "他敢公开你们的关系吗",
    subtitle: "看他愿不愿意把你介绍给身边人，给这段关系一个正经名分。",
    professional: "该模块评估的是对方是否愿意承担关系公开化、名分化与推进化的成本。",
    simple: "说白了，就是他到底敢不敢真正认你、推进你们的关系。"
  },
  ambiguity: {
    academicName: "模块 C：模糊占用度",
    plainName: "他是认真的还是在耗着你",
    subtitle: "看他是想和你好好走下去，还是只想低成本占着你的感情。",
    professional: "该模块评估的是关系是否长期处于模糊、拖延与低成本占用状态。",
    simple: "说白了，就是他一直占着你，但没有真正决定要你。"
  },
  fit: {
    academicName: "模块 D：权力适配度",
    plainName: "这段关系里，谁在迁就，谁在掌控",
    subtitle: "看你们在主导权、付出、生活方式和长期结构上是否已经失衡。",
    professional: "该模块评估的是关系中的权力分布与长期结构适配，包括推进节奏、现实成本承担、家庭文化和婚后系统磨合。",
    simple: "说白了，就是谁一直在让步、谁说了算、谁长期在吃亏。"
  },
  selfCost: {
    academicName: "模块 E：自我代价度",
    plainName: "这段感情是不是在消耗你",
    subtitle: "看这段关系有没有让你委屈、内耗，甚至弄丢了自己。",
    professional: "该模块评估的是这段关系对你的情绪稳定、身体直觉、自我价值和未来窗口造成的消耗程度。",
    simple: "说白了，就是这段感情是不是已经开始伤你了。"
  }
};

const validCodes = ["VIP888", "TEST001", "LOVE2026"];
const PAYMENT_URL = "";
const CONSULT_URL = "";
const UNLOCK_STORAGE_KEY = "reportUnlocked";

const riskMisjudgmentCopy = [
  "很多关系不是没有问题，而是因为偶尔的温柔、短暂的推进和片段式补偿，让人误以为问题正在变好。",
  "你最容易误判的，不是对方有没有情绪，而是他有没有真正承担结构性的推进成本。",
  "一段关系最危险的地方，往往不是明显的伤害，而是长期模糊下的自我合理化。",
  "如果你总在替一个失衡结构解释，那通常不是你太懂事，而是你已经开始替风险买单。"
];

const screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen")
};

const startBtn = document.getElementById("start-btn");
const prevBtn = document.getElementById("prev-btn");
const restartBtn = document.getElementById("restart-btn");
const retakeBtn = document.getElementById("retake-btn");
const unlockBtn = document.getElementById("unlock-btn");
const unlockPayLink = document.getElementById("unlock-pay-link");
const consultBtn = document.getElementById("consult-btn");

const questionCounter = document.getElementById("question-counter");
const moduleBadge = document.getElementById("module-badge");
const progressFill = document.getElementById("progress-fill");
const questionCard = document.getElementById("question-card");
const questionTitle = document.getElementById("question-title");
const questionPrompt = document.getElementById("question-prompt");
const optionsContainer = document.getElementById("options");

const resultType = document.getElementById("result-type");
const resultSummary = document.getElementById("result-summary");
const scoreDisplay = document.getElementById("score-display");
const rawScoreDisplay = document.getElementById("raw-score-display");
const resultIssue = document.getElementById("result-issue");
const resultRisk = document.getElementById("result-risk");
const resultActions = document.getElementById("result-actions");
const moduleBars = document.getElementById("module-bars");
const primaryModule = document.getElementById("primary-module");
const redFlagBox = document.getElementById("red-flag-box");
const redFlagList = document.getElementById("red-flag-list");
const structurePrimaryTag = document.getElementById("structure-primary-tag");
const proReport = document.getElementById("pro-report");
const unlockPanel = document.getElementById("unlock-panel");
const unlockInput = document.getElementById("unlock-input");
const unlockFeedback = document.getElementById("unlock-feedback");
const moduleDeepCards = document.getElementById("module-deep-cards");
const primaryModuleAnalysis = document.getElementById("primary-module-analysis");
const riskWarningBlock = document.getElementById("risk-warning-block");
const consultCta = document.getElementById("consult-cta");
const consultLine1 = document.getElementById("consult-line-1");
const consultLine2 = document.getElementById("consult-line-2");

let currentQuestionIndex = 0;
let answers = new Array(questions.length).fill(null);
let currentResult = null;

function showScreen(target) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[target].classList.add("is-active");
}

function animateCard() {
  questionCard.classList.remove("is-animating");
  window.requestAnimationFrame(() => {
    questionCard.classList.add("is-animating");
  });
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const module = modules[question.module];
  const selectedPoints = answers[currentQuestionIndex];

  questionCounter.textContent = `${String(currentQuestionIndex + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
  moduleBadge.textContent = module.name;
  progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  questionTitle.textContent = question.title;
  questionPrompt.textContent = question.prompt;
  optionsContainer.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";

    if (selectedPoints === option.points) {
      button.classList.add("is-selected");
    }

    button.innerHTML = `<strong>${option.title}</strong><span>${option.detail}</span>`;

    button.addEventListener("click", () => {
      answers[currentQuestionIndex] = option.points;
      renderQuestion();

      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          currentQuestionIndex += 1;
          animateCard();
          renderQuestion();
        } else {
          renderResult();
        }
      }, 140);
    });

    optionsContainer.appendChild(button);
  });

  prevBtn.disabled = currentQuestionIndex === 0;
}

function calculateModuleScores() {
  return questions.reduce((accumulator, question, index) => {
    const current = accumulator[question.module] || 0;
    accumulator[question.module] = current + (answers[index] ?? 0);
    return accumulator;
  }, {});
}

function getResultByScore(totalScore) {
  return resultTypes.find((type) => totalScore >= type.min && totalScore <= type.max) || resultTypes[resultTypes.length - 1];
}

function getRedFlags() {
  return redFlagRules.filter((rule) => {
    const questionIndex = questions.findIndex((question) => question.id === rule.questionId);
    return answers[questionIndex] === 4;
  });
}

function buildResult() {
  const totalScore = answers.reduce((sum, value) => sum + (value ?? 0), 0);
  const rawScore = totalScore + 10;
  const moduleScores = calculateModuleScores();
  const primaryModuleKey = Object.entries(moduleScores).sort((left, right) => right[1] - left[1])[0][0];
  const primaryModuleScore = moduleScores[primaryModuleKey] ?? 0;
  const primaryModulePercent = Math.round((primaryModuleScore / 8) * 100);
  const redFlags = getRedFlags();

  let finalResult = getResultByScore(totalScore);

  if (
    redFlags.length > 0 &&
    finalResult.key !== "type5" &&
    (finalResult.key === "type1" || finalResult.key === "type2" || finalResult.key === "type3")
  ) {
    finalResult = resultTypes.find((type) => type.key === "type4");
  }

  return {
    totalScore,
    rawScore,
    moduleScores,
    primaryModuleKey,
    primaryModuleScore,
    primaryModulePercent,
    redFlags,
    finalResult
  };
}

function stripMarkdown(text) {
  return String(text || "").replace(/\*\*/g, "").replace(/`/g, "").replace(/;/g, "。").trim();
}

function getFirstSentence(text) {
  const cleaned = stripMarkdown(text);
  if (!cleaned) {
    return "";
  }

  const sentences = cleaned
    .split("。")
    .map((item) => item.trim())
    .filter(Boolean);

  return sentences.length > 0 ? `${sentences[0]}。` : cleaned;
}

function getStoredUnlockState() {
  return localStorage.getItem(UNLOCK_STORAGE_KEY) === "true";
}

function setStoredUnlockState(value) {
  localStorage.setItem(UNLOCK_STORAGE_KEY, value ? "true" : "false");
}

function getModuleRiskTag(score) {
  if (score >= 6) {
    return "高风险区";
  }
  if (score >= 4) {
    return "关注区";
  }
  if (score >= 2) {
    return "轻风险区";
  }
  return "低风险区";
}

function renderPrimaryModuleCard(moduleKey, score, percent) {
  const moduleInfo = moduleDisplayMap[moduleKey];
  primaryModule.innerHTML = `
    <span class="module-academic">${moduleInfo.academicName}</span>
    <strong class="module-plain">${moduleInfo.plainName}</strong>
    <span class="module-subtitle">${moduleInfo.subtitle}</span>
    <span class="score-chip">${score} / 8 · ${percent} 分</span>
  `;
}

function renderModuleBars(moduleScores, primaryModuleKey) {
  moduleBars.innerHTML = "";

  Object.keys(moduleDisplayMap).forEach((key) => {
    const moduleInfo = moduleDisplayMap[key];
    const score = moduleScores[key] ?? 0;
    const row = document.createElement("div");
    row.className = "overview-row";
    if (key === primaryModuleKey) {
      row.classList.add("is-primary");
    }
    row.innerHTML = `
      <div class="overview-top">
        <span class="overview-name">${moduleInfo.academicName}</span>
        <strong class="overview-score">${score} / 8</strong>
      </div>
      <div class="overview-track">
        <div class="overview-fill" style="width: ${(score / 8) * 100}%"></div>
      </div>
    `;
    moduleBars.appendChild(row);
  });
}

function renderModuleDeepCards(moduleScores) {
  moduleDeepCards.innerHTML = "";

  Object.keys(moduleDeepCopy).forEach((key) => {
    const moduleInfo = moduleDeepCopy[key];
    const score = moduleScores[key] ?? 0;
    const percent = Math.round((score / 8) * 100);
    const card = document.createElement("article");
    card.className = "module-report-card";
    card.innerHTML = `
      <div class="module-card-head">
        <div class="module-card-title-block">
          <span class="module-card-kicker">${moduleInfo.academicName}</span>
          <h3 class="module-card-title">${moduleInfo.plainName}</h3>
        </div>
        <span class="module-score-pill">${score} / 8 · ${percent} 分 · ${getModuleRiskTag(score)}</span>
      </div>
      <p class="module-card-summary">${moduleInfo.subtitle}</p>
      <div class="module-copy-group">
        <span class="module-copy-label">专业解释</span>
        <p class="module-professional">${moduleInfo.professional}</p>
      </div>
      <div class="module-copy-group">
        <span class="module-copy-label">说白了</span>
        <p class="module-simple">${moduleInfo.simple}</p>
      </div>
    `;
    moduleDeepCards.appendChild(card);
  });
}

function renderPrimaryModuleAnalysis(result) {
  const moduleInfo = moduleDeepCopy[result.primaryModuleKey];
  primaryModuleAnalysis.innerHTML = `
    <div class="analysis-module-card">
      <span class="module-card-kicker">${moduleInfo.academicName}</span>
      <h3 class="module-card-title">${moduleInfo.plainName}</h3>
      <p class="module-card-summary">${moduleInfo.subtitle}</p>
    </div>
    <div class="module-copy-group">
      <span class="module-copy-label">专业解释</span>
      <p class="module-professional">${moduleInfo.professional}</p>
    </div>
    <div class="module-copy-group">
      <span class="module-copy-label">说白了</span>
      <p class="module-simple">${moduleInfo.simple}</p>
    </div>
  `;

  resultRisk.textContent = `你当前最需要警惕的，不是某一次争吵，而是这个模块已经成为整段关系的主要风险来源。当前分值为 ${result.primaryModuleScore} / 8（${result.primaryModulePercent} 分），说明它更接近长期模式，而不是偶发摩擦。`;
}

function renderRiskWarningBlock(result) {
  riskWarningBlock.innerHTML = "";
  redFlagList.innerHTML = "";

  const commonWrap = document.createElement("div");
  commonWrap.className = "warning-section";
  const commonTitle = document.createElement("p");
  commonTitle.className = "warning-subtitle";
  commonTitle.textContent = "很多人真正误判的，不是情绪，而是结构。";
  const commonList = document.createElement("ul");
  commonList.className = "warning-list";
  riskMisjudgmentCopy.forEach((copy) => {
    const item = document.createElement("li");
    item.textContent = copy;
    commonList.appendChild(item);
  });
  commonWrap.appendChild(commonTitle);
  commonWrap.appendChild(commonList);
  riskWarningBlock.appendChild(commonWrap);

  if (result.redFlags.length === 0) {
    const item = document.createElement("article");
    item.className = "red-alert-item is-empty";
    item.innerHTML = `
      <strong class="red-alert-title">当前未触发系统红线</strong>
      <p class="red-alert-text">这并不代表关系已经安全，只说明目前没有出现必须按高风险覆盖处理的明确信号，仍需结合结构总览和行动建议继续观察。</p>
    `;
    redFlagList.appendChild(item);
    return;
  }

  result.redFlags.forEach((flag) => {
    const item = document.createElement("article");
    item.className = "red-alert-item";
    item.innerHTML = `
      <strong class="red-alert-title">${flag.label}</strong>
      <p class="red-alert-text">${flag.detail}</p>
    `;
    redFlagList.appendChild(item);
  });
}

function renderActionSuggestions(result) {
  resultActions.innerHTML = "";

  result.finalResult.nextSteps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = stripMarkdown(step);
    resultActions.appendChild(item);
  });

  const extraItem = document.createElement("li");
  extraItem.textContent = "把注意力从情绪拉扯转向关系结构：是否公开、是否推进、是否承担、是否一致。";
  resultActions.appendChild(extraItem);
}

function updateUnlockView(isUnlocked) {
  proReport.classList.toggle("is-locked", !isUnlocked);
  unlockPanel.hidden = isUnlocked;
  consultCta.hidden = !isUnlocked;

  if (isUnlocked) {
    unlockInput.classList.remove("has-error");
    unlockFeedback.textContent = "深度报告已解锁，你现在可以查看完整分析与咨询建议。";
    unlockFeedback.classList.add("is-success");
  } else {
    unlockFeedback.textContent = "";
    unlockFeedback.classList.remove("is-success");
  }
}

function renderConsultCta(result) {
  if (result.primaryModulePercent >= 70) {
    consultLine1.textContent = `如果你的最高风险模块为 ${result.primaryModulePercent} 分，说明这段关系已经进入结构失衡区，仅靠单次测试结论可能不足以判断，建议进行一次个体化关系诊断。`;
  } else {
    consultLine1.textContent = `你的最高风险模块为 ${result.primaryModulePercent} 分，说明这段关系已经出现清晰的结构偏差，若你仍难以判断是否继续投入，建议进行一次个体化关系诊断。`;
  }

  consultLine2.textContent = "有些关系的问题，不在于你爱得不够，而在于你一直在替一个失衡结构找理由。";
}

function handleUnlock() {
  const inputCode = unlockInput.value.trim().toUpperCase();
  const isValid = validCodes.includes(inputCode);

  if (!isValid) {
    unlockInput.classList.add("has-error");
    unlockFeedback.textContent = "激活码无效或已使用，请检查";
    unlockFeedback.classList.remove("is-success");
    return;
  }

  unlockInput.classList.remove("has-error");
  setStoredUnlockState(true);
  updateUnlockView(true);
}

function handlePaymentJump() {
  if (!PAYMENT_URL) {
    alert("跳转至支付页面");
    return;
  }

  window.open(PAYMENT_URL, "_blank");
}

function handleConsultJump() {
  if (!CONSULT_URL) {
    alert("跳转至咨询预约页面");
    return;
  }

  window.open(CONSULT_URL, "_blank");
}

function renderResult() {
  const result = buildResult();
  currentResult = result;

  showScreen("result");
  window.scrollTo({ top: 0, behavior: "smooth" });

  resultType.textContent = result.finalResult.label;
  resultSummary.textContent = getFirstSentence(result.finalResult.interpretation);
  resultIssue.textContent = getFirstSentence(moduleIssueCopy[result.primaryModuleKey] || result.finalResult.issue);

  scoreDisplay.textContent = `${result.totalScore} / 40`;
  rawScoreDisplay.textContent = `${result.rawScore} / 50`;

  renderPrimaryModuleCard(result.primaryModuleKey, result.primaryModuleScore, result.primaryModulePercent);
  structurePrimaryTag.textContent = `主风险模块：${moduleDeepCopy[result.primaryModuleKey].academicName.replace("：", " · ")}`;
  renderModuleBars(result.moduleScores, result.primaryModuleKey);
  renderModuleDeepCards(result.moduleScores);
  renderPrimaryModuleAnalysis(result);
  renderRiskWarningBlock(result);
  renderActionSuggestions(result);
  renderConsultCta(result);
  updateUnlockView(getStoredUnlockState());
}

function resetQuiz(goToStart = false) {
  currentQuestionIndex = 0;
  answers = new Array(questions.length).fill(null);
  currentResult = null;
  unlockInput.value = "";
  unlockInput.classList.remove("has-error");

  if (goToStart) {
    showScreen("start");
  } else {
    showScreen("quiz");
    animateCard();
    renderQuestion();
  }
}

startBtn.addEventListener("click", () => {
  showScreen("quiz");
  animateCard();
  renderQuestion();
});

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    animateCard();
    renderQuestion();
  }
});

restartBtn.addEventListener("click", () => {
  resetQuiz(false);
});

retakeBtn.addEventListener("click", () => {
  resetQuiz(true);
});

unlockBtn.addEventListener("click", handleUnlock);

unlockInput.addEventListener("input", () => {
  unlockInput.classList.remove("has-error");
  unlockFeedback.textContent = "";
  unlockFeedback.classList.remove("is-success");
});

unlockInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleUnlock();
  }
});

unlockPayLink.addEventListener("click", handlePaymentJump);
consultBtn.addEventListener("click", handleConsultJump);
