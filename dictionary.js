const dictionary = [
    {
        "word": "人",
        "mean": [
            {
                "type": "名詞",
                "explanation": [
                    {
                        "translate": "人。人間。",
                        "tag": [],
                        "example": [
                            {
                                "ht": "十七億人活在之丸。",
                                "ja": "この星には81億の人が住む。",
                                "htPron": "va2 tao3 ya2 tang3 ren2 i1 ao3 bao2。"
                            }
                        ]
                    }
                ]
            }
        ],
        "pronunciation": "rén",
        "bopomofo": "ㄖㄣˊ"
    },
    {
        "word": "衆",
        "mean": [
            {
                "type": "名詞",
                "explanation": [
                    {
                        "translate": "たち。みんな。",
                        "tag": [],
                        "example": [
                            {
                                "ht": "衆動集去",
                                "ja": "皆が集まった。",
                                "htPron": "zhong1 pai3 an2 ung3."
                            }
                        ]
                    }
                ]
            }
        ],
        "pronunciation": "zhòng",
        "bopomofo": "ㄓㄨㄥˋ"
    }
    // ここに他の単語データを追加
];

// 注音符号順にソート
const bopomofoOrder = "ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ";
const compareBopomofo = (a, b) => {
    const aIndex = bopomofoOrder.indexOf(a.bopomofo[0]);
    const bIndex = bopomofoOrder.indexOf(b.bopomofo[0]);
    return aIndex - bIndex;
};

dictionary.sort(compareBopomofo);
