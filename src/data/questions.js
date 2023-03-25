const questions = [
    {
      id: "1",
      name: "以下哪个不是坤坤的经典语录？",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "阿巴阿巴",
        },
        {
          key: "B",
          name: "你干嘛~哎哟~",
        },
        {
          key: "C",
          name: "厉不厉害你坤哥",
        },
        {
          key: "D",
          name: "喜欢唱、跳、RAP、🏀",
        },
      ],
      answer: ["A"],
      score: 5,
    },
    {
      id: "2",
      name: "怎么鉴别评论区的小黑子？",
      checkType: "multiple",
      options: [
        {
          key: "A",
          name: "错别字",
          score: 1,
        },
        {
          key: "B",
          name: "愤怒发言",
          score: 0,
        },
        {
          key: "C",
          name: "看头像",
          score: 2,
        },
        {
          key: "D",
          name: "藏头诗",
          score: 2,
        },
      ],
      max: 3,
    },
    {
      id: "3",
      name: "坤坤相关视频最多的弹幕是？",
      checkType: "single",
      options: [
        {
          key: "A",
          name: "鸡你太美",
          score: 3,
        },
        {
          key: "B",
          name: "你干嘛~哎哟~",
          score: 5,
        },
        {
          key: "C",
          name: "小黑子",
          score: 2,
        },
        {
          key: "D",
          name: "帅气",
          score: 0,
        },
      ],
    },
];

const questionMap = {};
const totalQuestion = questions.length;

questions.forEach((question) => {
  questionMap[question.id] = question;
});

export { questionMap, totalQuestion };
