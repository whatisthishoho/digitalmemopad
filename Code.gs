/*
Reviewed word-list subsets, with event-specific additions.
Sources: https://github.com/yoonheyjung/badwords-ko
https://github.com/doublems/korean-bad-words

The MIT License (MIT)

Copyright (c) 2015 Michael Price

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

MIT License

Copyright (c) 2019 Doublem.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
var ContentModeration = (function () {
  "use strict";
  // Strict event policy: "가슴" is blocked even in otherwise ordinary sentences.
  var words = [
  "씨발",
  "시발",
  "씨바",
  "씨벌",
  "시벌",
  "씨빨",
  "시빨",
  "씨팔",
  "시팔",
  "쉬발",
  "쒸발",
  "ㅅㅂ",
  "ㅆㅂ",
  "병신",
  "븅신",
  "빙신",
  "ㅂㅅ",
  "개새끼",
  "개색기",
  "개쉐끼",
  "개세끼",
  "씨ㅂ",
  "시ㅂ",
  "새끼",
  "새키",
  "쉐끼",
  "쉐키",
  "이시키",
  "저시키",
  "그시키",
  "개시키",
  "좆",
  "좃",
  "존나",
  "졸라",
  "ㅈㄴ",
  "지랄",
  "ㅈㄹ",
  "꺼져",
  "닥쳐",
  "미친놈",
  "미친년",
  "또라이",
  "니애미",
  "네애미",
  "느금마",
  "니미",
  "염병",
  "썅",
  "엿먹",
  "개년",
  "쌍년",
  "쌍놈",
  "쓰레기새끼",
  "정신병자",
  "죽여버",
  "죽어버",
  "뒤져",
  "뒤질",
  "한남충",
  "한녀충",
  "섹스",
  "쎅스",
  "섹쓰",
  "야동",
  "포르노",
  "폰섹",
  "몸캠",
  "성매매",
  "성관계",
  "성행위",
  "구강성교",
  "음경",
  "음핵",
  "클리토리스",
  "조건만남",
  "원나잇",
  "강간",
  "윤간",
  "페니스",
  "딜도",
  "오르가즘",
  "오르가슴",
  "사정액",
  "질내사정",
  "노콘",
  "씹질",
  "걸레년",
  "창녀",
  "창놈",
  "fuck",
  "fucking",
  "shit",
  "bitch",
  "asshole",
  "motherfucker",
  "porn",
  "porno",
  "sex",
  "sexy",
  "nudes",
  "penis",
  "pussy",
  "dick",
  "cock",
  "cumshot",
  "blowjob",
  "handjob",
  "hentai",
  "D쥐고",
  "D지고",
  "jonna",
  "jot같",
  "mi쳤",
  "tlqkf",
  "wlfkf",
  "같은 새끼",
  "같은새끼",
  "개 새끼",
  "개 새 끼",
  "개같",
  "개나대",
  "개넷",
  "개념빠가",
  "개련",
  "개부랄",
  "개새기",
  "개섹",
  "풀발",
  "씹선",
  "개소리",
  "개쓰래기",
  "개저씨",
  "거지같",
  "계새끼",
  "골 빈",
  "골1빈",
  "골빈",
  "괘새끼",
  "구1씹",
  "구씹",
  "그1켬",
  "그지 같",
  "그지같",
  "그켬",
  "극1혐",
  "극혐",
  "글러 먹",
  "글러먹",
  "기레기",
  "기자레기",
  "김치녀",
  "한녀",
  "된장녀",
  "앙기모띠",
  "소추",
  "김여사",
  "보적보",
  "삼일한",
  "보슬아치",
  "보징어",
  "헤으응",
  "부왘",
  "보픈카",
  "상폐녀",
  "배빵",
  "찌질",
  "자박꼼",
  "허벌",
  "쿰.척",
  "쿰척",
  "까내리",
  "껒여",
  "꺼지세요",
  "꺼져요",
  "로 꺼져",
  "로꺼져",
  "로 꺼.져",
  "꺼.지",
  "꼬라지",
  "꼴갑",
  "꼴값",
  "꼴깝",
  "꼴랑",
  "꼴보기",
  "꼴뵈기",
  "설거지론",
  "퐁퐁남",
  "퐁퐁녀",
  "나빼썅",
  "나쁜 새끼",
  "넌씨눈",
  "년놈",
  "노무노무",
  "노알라",
  "노친네",
  "느그",
  "느금",
  "뇌 텅",
  "뇌1텅",
  "뇌텅",
  "눈깔 파",
  "눈깔파",
  "눈새",
  "늬믜",
  "늬미",
  "니년",
  "니믜",
  "니미럴",
  "닝기리",
  "ㄷㅇㅂ",
  "다꺼져",
  "닥1",
  "닥2",
  "닥쳐라",
  "닥치세",
  "대가리",
  "대갈",
  "더럽네",
  "덜떨어",
  "도라이",
  "도랏",
  "도랐",
  "도른",
  "돌앗구만",
  "돌앗나",
  "돌앗네",
  "돌았구만",
  "돌았나",
  "돌았네",
  "둄마",
  "뒈져",
  "뒤져라",
  "뒤져버",
  "뒤져야",
  "뒤져야지",
  "뒤져요",
  "뒤졌",
  "뒤지겠",
  "뒤지고싶",
  "뒤지길",
  "뒤진다",
  "디져라",
  "디졌",
  "디지고",
  "디질",
  "딴년",
  "또라인",
  "똘아이",
  "뚫린 입",
  "뚫린입",
  "런년",
  "레1친",
  "레기같",
  "레기네",
  "레기다",
  "레친",
  "롬들",
  "ㅁㅊ",
  "ㅁ친",
  "망해라",
  "머갈",
  "머리 텅",
  "머리텅",
  "먹1금",
  "명존",
  "믜칀",
  "믜친",
  "미: 놈",
  "미:놈",
  "미1친",
  "미놈",
  "미시친발",
  "미쳣네",
  "미쳤나",
  "미쳤니",
  "미췬",
  "미칀",
  "미친 새",
  "미친~",
  "미친개",
  "미친새",
  "미친색",
  "미친ㅋ",
  "미틴",
  "및힌",
  "줘패",
  "꼬추",
  "미치ㄴ",
  "ㅅ.ㄲ",
  "색퀴",
  "ㅅ끼",
  "흉자",
  "미친넘",
  "미핀놈",
  "샛기",
  "G랄",
  "세키",
  "미치누",
  "d져",
  "ㅂㅊ",
  "발놈",
  "별창",
  "병1신",
  "병1크",
  "봊",
  "보전깨",
  "싸개",
  "빠큐",
  "빡새끼",
  "빻았",
  "빻은",
  "뻐규",
  "뻐큐",
  "뻑유",
  "뻑큐",
  "뻨큐",
  "뼈큐",
  "뽄새",
  "뽄세",
  "ㅄ",
  "ㅅ.ㅂ",
  "ㅅ1ㅂ",
  "ㅅ1발",
  "ㅅㄲ네",
  "ㅅㄲ들",
  "친ㅅㄲ",
  "친 ㅅㄲ",
  "ㅅ1ㄲ",
  "사새끼",
  "새.끼",
  "새1끼",
  "새1키",
  "새77ㅣ",
  "새끼라",
  "새끼야",
  "새퀴",
  "새킈",
  "색희",
  "색히",
  "샊기",
  "샊히",
  "샹년",
  "섀키",
  "성괴",
  "쉬버",
  "쉬이바",
  "쉬이이",
  "쉬이이이",
  "쉬펄",
  "슈1발",
  "슈레기",
  "슈발",
  "슈벌",
  "슈우벌",
  "슈ㅣ발",
  "스벌",
  "싑창",
  "시1발",
  "시미발친",
  "시미친발",
  "시바라지",
  "시바류",
  "시바시바",
  "시바알",
  "시바앙",
  "시방새",
  "시벌탱",
  "시볼탱",
  "시부럴",
  "시부렬",
  "시부울",
  "시뷰럴",
  "시뷰렬",
  "시새발끼",
  "시이발",
  "시친발미",
  "시펄",
  "십창",
  "십팔",
  "ㅆ1ㄺ",
  "ㅆ1ㅂ",
  "ㅆㄹㄱ",
  "ㅆㄺ",
  "싸가지 없",
  "싸가지없",
  "싸물어",
  "쌔끼",
  "썌끼",
  "쒸펄",
  "쓰1레기",
  "쓰래기같",
  "쓰레기 새",
  "쓰레기새",
  "쓰렉",
  "씝창",
  "씨1발",
  "씨바라",
  "씨바알",
  "씨방새",
  "씨버럼",
  "씨벌탱",
  "씨볼탱",
  "씨부럴",
  "씨부렬",
  "씨뷰럴",
  "씨뷰렬",
  "씨빠빠",
  "씨뻘",
  "씨새발끼",
  "씨이발",
  "씹귀",
  "씹덕",
  "씹못",
  "씹뻐럴",
  "씹새끼",
  "씹쌔",
  "씹창",
  "씹치",
  "씹팔",
  "씹할",
  "ㅇㅍㅊㅌ",
  "아가리",
  "아닥",
  "아오 ㅅㅂ",
  "아오 시바",
  "아오ㅅㅂ",
  "아오시바",
  "애미",
  "앰창",
  "에라이 퉤",
  "에라이 퉷",
  "에라이퉤",
  "에라이퉷",
  "엠뷩신",
  "엠븽신",
  "엠빙신",
  "엠생",
  "엠창",
  "엿같",
  "엿이나",
  "옘병",
  "와꾸",
  "외1퀴",
  "외퀴",
  "은년",
  "은새끼",
  "이 새끼",
  "이따위",
  "이새끼",
  "인간말종",
  "입 털",
  "입털",
  "ㅈ.ㄴ",
  "절라",
  "정병",
  "정신나갓",
  "정신나갔",
  "젖 같",
  "젗같",
  "젼나",
  "젼낰",
  "졀라",
  "졀리",
  "졌같은",
  "졏 같",
  "조낸",
  "조온나",
  "족까",
  "존 나",
  "존.나",
  "존1나",
  "존귀",
  "존귘",
  "존ㄴ나",
  "존낙",
  "존내",
  "존똑",
  "존맛",
  "존멋",
  "존버",
  "존싫",
  "존웃",
  "존잘",
  "존잼",
  "존좋",
  "졸맛",
  "졸멋",
  "졸싫",
  "졸예",
  "졸웃",
  "졸잼",
  "졸좋",
  "좁밥",
  "조센징",
  "짱깨",
  "짱개",
  "짱꼴라",
  "짱골라",
  "종나",
  "곱창났",
  "곱창나",
  "좆팔",
  "후팔",
  "좆까",
  "좇같",
  "좆되네",
  "ㅈ되네",
  "죠낸",
  "죠온나",
  "죤나",
  "죤내",
  "죵나",
  "죶",
  "죽어버려",
  "죽여 버리고",
  "죽여버리고",
  "죽여불고",
  "죽여뿌고",
  "줬같은",
  "쥐랄",
  "쥰나",
  "쥰내",
  "쥰니",
  "쥰트",
  "즤랄",
  "지 랄",
  "지1랄",
  "지1뢰",
  "지롤",
  "ㅉ질한",
  "짱께",
  "쪼다",
  "착짱죽짱",
  "섬숭이",
  "쪽본",
  "쪽1바리",
  "쪽바리",
  "쪽발",
  "쫓같",
  "쬰잘",
  "쯰질",
  "찌1질",
  "찌질한",
  "찝째끼",
  "창년",
  "창남",
  "창넘",
  "처먹",
  "취좃",
  "친 년",
  "한 년",
  "친 놈",
  "친구년",
  "친년",
  "한년",
  "친노마",
  "친놈",
  "손놈",
  "남미새",
  "여미새",
  "호로새끼",
  "호로잡",
  "화낭년",
  "화냥년",
  "후1려",
  "후1빨",
  "후빨",
  "미-친",
  "시-발",
  "지-랄",
  "개-새-끼",
  "또-라-이",
  "디-질",
  "걸-레",
  "닥-쳐",
  "등-신",
  "뇌-텅텅",
  "대-가-리",
  "병-신",
  "엠-창",
  "조-ㅈ",
  "염-병",
  "쌍-판",
  "개넘",
  "개놈",
  "개뇽",
  "개눔",
  "개늠",
  "개라슥",
  "개ㅅㅐㄲㅣ",
  "개새야",
  "개색끼",
  "개샛키",
  "개샛끼",
  "개샤끼",
  "개샤킥",
  "개샥",
  "개섺",
  "개셃",
  "개셋키",
  "개셐",
  "개솩",
  "개쇅",
  "개쇗",
  "개쇸",
  "개쉐",
  "개쉐리",
  "개쉐키",
  "개쉑",
  "개쉑기",
  "개쉑끼",
  "개쉑키",
  "개쉢",
  "개쉨",
  "개싀기",
  "개싀끼",
  "개싀밸",
  "개싀킈",
  "개싀키",
  "개싏",
  "개싘",
  "개싯기",
  "개싯끼",
  "개싴",
  "개쌍넘",
  "개쌍년",
  "개쌍눔",
  "개쌍늠",
  "개쌍연",
  "개쌍영",
  "개쌕",
  "개썅년",
  "개썅연",
  "개쒜",
  "개쒜끼",
  "개쒝기",
  "개쒝끼",
  "개쒸",
  "개씨끼",
  "개씨팕",
  "개씹",
  "개자슥",
  "개자싁",
  "개조옷",
  "개좝",
  "개지랄",
  "개가툰",
  "개같은",
  "개년??",
  "개노마",
  "개뇬",
  "개느마",
  "개도라이",
  "개때꺄",
  "개때끼",
  "개또라이",
  "개보지",
  "개부럴",
  "개불알",
  "개뼈다구",
  "개뼈다귀",
  "개뼉다구",
  "개뼉따구",
  "개새끼?",
  "개새ㄲㅣ",
  "개새꺄",
  "개새리",
  "개새이",
  "개새킹",
  "개색기?",
  "개색꺄",
  "개색히",
  "개샛킹",
  "개샠",
  "개세이",
  "개쇄",
  "개쇄끼",
  "개쇅갸",
  "개쇅기",
  "개쇅꺄",
  "개쇅끼",
  "개쇅캬",
  "개쇅키",
  "개쇗기",
  "개쇠리",
  "개수작",
  "개쉐이",
  "개쉑갸",
  "개쉑꺄",
  "개쉑이",
  "개쉑캬",
  "개쉑히",
  "개쉬리",
  "개쉽",
  "개스끼",
  "개스키",
  "개십팔",
  "개싯키",
  "개쌍놈",
  "개쌔",
  "개쌔꺄",
  "개쌔끼",
  "개쌕끼",
  "개썅넘",
  "개썅놈",
  "개썅늠",
  "개쎅",
  "개쐐리",
  "개쒜리",
  "개쒝",
  "개쒝갸",
  "개쒝꺄",
  "개쒝캬",
  "개쒝키",
  "개쒯",
  "개쒹기",
  "개씨발",
  "개씹창",
  "개씹팔",
  "개염창",
  "개욘",
  "개자식",
  "개자지",
  "개잡년",
  "개잡놈",
  "개젓",
  "개젖",
  "개졋",
  "개졎",
  "개조또",
  "개족",
  "개좆",
  "개찌질이",
  "개후랄",
  "개후레",
  "개후장",
  "게년",
  "게색끼",
  "게샛키",
  "게셋키",
  "게싯끼",
  "게노마",
  "게뇬",
  "게뇽",
  "게눔",
  "게새끼",
  "게새리",
  "게색기",
  "게세꺄",
  "게세끼",
  "게섹",
  "게섹놈아",
  "게쉐이",
  "게스끼",
  "게스키",
  "게시끼",
  "게시퀴",
  "게쌔기",
  "게쌕끼?",
  "뛰발",
  "뛰봘",
  "띠랄",
  "띠방",
  "띠밸",
  "띠벨",
  "띠부랄",
  "띠부럴",
  "띠불",
  "띠뷀",
  "띠브랄",
  "띠브럴",
  "띠팔",
  "띠바",
  "띠박",
  "띠발",
  "띠벌",
  "띠붕",
  "띠이바",
  "띠이발",
  "띠이방",
  "띠이밸",
  "띠이벌",
  "띠이불",
  "띠이붕",
  "띠이팔",
  "띠이펄",
  "띠이풀",
  "띠펄",
  "띠풀",
  "시글년",
  "시달년",
  "시박",
  "시밝",
  "시밠",
  "시밣",
  "시밮",
  "시밯",
  "시밸",
  "시뱔",
  "시벨",
  "시벵",
  "시봘",
  "시봟",
  "시빌",
  "시앙넘",
  "시앙년",
  "시앙놈",
  "시앙눔",
  "시양넘",
  "시양년",
  "시양놈",
  "시입팔",
  "시팍",
  "시팏",
  "시팔넘",
  "시팔놈",
  "시팕",
  "시팗",
  "시팤",
  "시펑",
  "시퐉",
  "시퐐",
  "시끼",
  "시댕",
  "시댕아",
  "시뎅",
  "시뎅아",
  "시발넘",
  "시발년",
  "시발놈",
  "시방세",
  "시방쉐",
  "시뱅",
  "시뱜",
  "시벨넘",
  "시벨새키",
  "시부랄",
  "시불",
  "시붕",
  "시뷀",
  "시브랄",
  "시블",
  "시아눔",
  "시양눔",
  "시이방",
  "시이밸",
  "시이벌",
  "시이불",
  "시이붕",
  "시이빡",
  "시이풀",
  "십8",
  "십놈",
  "십밸",
  "십새",
  "십새캬",
  "십색",
  "십쉐",
  "십앋",
  "십알",
  "십왈",
  "십질",
  "십탱구리",
  "십팔년",
  "십팔련",
  "십팔연",
  "십할년",
  "십할련",
  "십녀",
  "십때끼",
  "십때꺄",
  "십떼끼",
  "십새꺄",
  "십새끼",
  "십새키",
  "십색꺄",
  "십색끼",
  "십색히",
  "십세끼",
  "십쇄리",
  "십쇡기",
  "십쉐리",
  "십쉐이",
  "십쉑",
  "십쉑히",
  "십시끼",
  "십쌔",
  "십쌔꺄",
  "십쎄끼",
  "십씨키",
  "십좌지",
  "십탱",
  "십할",
  "쌍넘",
  "쌍뇸",
  "쌍뇽",
  "쌍뉸",
  "쌍넌",
  "쌍노무",
  "쌍놈아",
  "쌍뇨나",
  "쌍뇬",
  "쌍악연",
  "쌍연",
  "쌔꺄",
  "쌔리",
  "쌔밸년",
  "쌔캬",
  "쌔키",
  "쎄끼",
  "쎄럽",
  "쎄꺄",
  "쎄끈",
  "쎄끈한",
  "쎄엑",
  "쎄엑스",
  "쐑갸",
  "쐑꺄",
  "쐑캬",
  "쐑수",
  "쐑스",
  "쐑쑤",
  "쐑쓰",
  "쒜끼",
  "쒜럽",
  "쒜리",
  "쒝기",
  "쒝끼",
  "쒝수",
  "쒝스",
  "쒝쑤",
  "쒝쓰",
  "쒝캬",
  "쒸바",
  "쒸박",
  "쒸밸",
  "쒸벨",
  "쒸빨",
  "쒸빨넘",
  "쒸이발",
  "쒸입새",
  "쒸파",
  "쒸팍",
  "쒸팔",
  "쒸펠",
  "쒸폴",
  "쒸댕아",
  "쒸바라",
  "쒸방",
  "쒸방쉐이",
  "쒸벌",
  "쒸부",
  "쒸부럴",
  "쒸불",
  "쒸붕",
  "쒸빠",
  "쒸빡",
  "쒸빵",
  "쒸빵세이",
  "쒸뻘",
  "쒸이바",
  "쒸이방",
  "쒸이밸",
  "쒸이벌",
  "쒸이부",
  "쒸이불",
  "쒸이붕",
  "쒸이빡",
  "쒸이빨",
  "쒸이팔",
  "쒸이펄",
  "쒸이풀",
  "쒸풀",
  "쒸풍",
  "쓉년",
  "쓉발",
  "쓉새",
  "쓉알",
  "쓉질",
  "쓉창",
  "쓉탱",
  "쓉쎄끼",
  "쓰글",
  "쓰글넘",
  "쓰글년",
  "쓰댕",
  "쓰델",
  "쓰뎅",
  "쓰바",
  "쓰박",
  "쓰발",
  "쓰발넘",
  "쓰밝",
  "쓰볼",
  "쓰봉",
  "쓰봘",
  "쓰불",
  "쓰뷀",
  "쓰블",
  "쓰파",
  "쓰글놈",
  "쓰글늠",
  "쓰방",
  "쓰밸",
  "쓰버",
  "쓰벌",
  "쓰부",
  "쓰붕",
  "쓰브럴",
  "쓰빡",
  "쓰뺄",
  "쓰으방",
  "쓰으벌",
  "쓰이바",
  "쓰이발",
  "쓰이방",
  "쓰이밸",
  "쓰이벌",
  "쓰이부",
  "쓰이불",
  "쓰이붕",
  "쓰이빡",
  "쓰이팔",
  "쓰이펄",
  "쓰이풀",
  "쓰팍",
  "쓰팔",
  "쓰펄",
  "쓰풀",
  "씌댈",
  "씌댕",
  "씌뎅",
  "씌바",
  "씌발",
  "씌밝",
  "씌밸",
  "씌뱅",
  "씌뱌",
  "씌벌",
  "씌벨",
  "씌벵",
  "씌봉",
  "씌봘",
  "씌뵹",
  "씌부려",
  "씌블",
  "씌팍",
  "씌팔",
  "씌팕",
  "씌퐁",
  "씌델",
  "씌방",
  "씌팏",
  "씝",
  "씨델",
  "씨뎅",
  "씨뤠기",
  "씨밝",
  "씨밟",
  "씨밠",
  "씨밣",
  "씨밦",
  "씨밮",
  "씨뱅",
  "씨뱔",
  "씨벌년",
  "씨벧",
  "씨벨",
  "씨벨년",
  "씨벵",
  "씨봉",
  "씨봘",
  "씨봙",
  "씨봟",
  "씨봪",
  "씨뵐",
  "씨부랄",
  "씨부려",
  "씨불년",
  "씨불얼",
  "씨뷩",
  "씨브럴",
  "씨블년",
  "씨빡",
  "씨빯",
  "씨뽤",
  "씨뽥",
  "씨뿔",
  "씨쁠",
  "씨앙넘",
  "씨앙년",
  "씨앙놈",
  "씨앙눔",
  "씨양넘",
  "씨양년",
  "씨양놈",
  "씨양눔",
  "씨양념",
  "씨이댕",
  "씨탱",
  "씨텡",
  "씨파",
  "씨팍",
  "씨팏",
  "씨팕",
  "씨팗",
  "씨팞",
  "씨팡",
  "씨풀",
  "씨풍",
  "씨할",
  "씨8",
  "씨꽈랄",
  "씨끼",
  "씨누드21",
  "씨댕",
  "씨댕년",
  "씨레기",
  "씨박",
  "씨박새끼",
  "씨발넘",
  "씨발년",
  "씨발놈",
  "씨발놈아",
  "씨방",
  "씨방세",
  "씨방쉐",
  "씨밯",
  "씨밸",
  "씨밸년?",
  "씨밸놈",
  "씨뱅놈",
  "씨뱅아",
  "씨봉알",
  "씨부랠",
  "씨부렁",
  "씨부리",
  "씨부얼",
  "씨붕",
  "씨뷀",
  "씨브랄",
  "씨블",
  "씨빠",
  "씨뽀랄",
  "씨이바",
  "씨이방",
  "씨이밸",
  "씨이벌",
  "씨이부",
  "씨이불",
  "씨이붕",
  "씨이빡",
  "씨이빨",
  "씨이팔",
  "씨이풀",
  "씨입년",
  "씨입뇬",
  "씨파??",
  "씨팔년",
  "씨펄",
  "씨필",
  "씳박",
  "씳발",
  "씳알",
  "씹년",
  "씹놈",
  "씹때끼",
  "씹떼끼",
  "씹벌",
  "씹알",
  "씹탱",
  "씹탱구리",
  "씹팔년",
  "씹팔련",
  "씹팔연",
  "씹할련",
  "씹할연",
  "씹8",
  "씹갓길",
  "씹넘",
  "씹뇬",
  "씹딱꿍",
  "씹때꺄",
  "씹떼",
  "씹물",
  "씹밸",
  "씹보지",
  "씹보지년",
  "씹블",
  "씹빡",
  "씹빨",
  "씹뻘",
  "씹새",
  "씹새꺄",
  "씹새캬",
  "씹새키",
  "씹색꺄",
  "씹색끼",
  "씹색히",
  "씹샛길",
  "씹생알",
  "씹세",
  "씹세끼",
  "씹세이",
  "씹셋나루",
  "씹쉐",
  "씹쉐리",
  "씹쉐이",
  "씹쉑",
  "씹쉑히",
  "씹시끼",
  "씹쌔기",
  "씹쌔꺄",
  "씹쌔끼",
  "씹쌔키",
  "씹쎄",
  "씹쎄끼",
  "씹씨키",
  "씹연",
  "씹자지년",
  "씹펄",
  "씹풀",
  "씻발",
  "씻벌",
  "씻끼",
  "씻뻘",
  "씻퐁",
  "씾팔",
  "졳",
  "졷까",
  "졷따",
  "죳",
  "죳나",
  "씹창년",
  "쌔까",
  "개가턴",
  "게같은",
  "개뇸",
  "게뇸",
  "게보지",
  "게부랄",
  "개부달",
  "개부알",
  "게부알",
  "개씨발넘",
  "게씨발넘",
  "개씨발놈",
  "개씨발뇸",
  "게띠발넘",
  "게자시",
  "게좆",
  "개호로새끼",
  "개호로년",
  "게호로새끼",
  "게호로놈",
  "게호로년",
  "개걸레",
  "개너마",
  "게너마",
  "개뇨나",
  "게뇨나",
  "게쓰레기",
  "게쓰래기",
  "개쓰레기",
  "게자지",
  "게잡년",
  "개잡뇬",
  "게잡뇬",
  "게잡넘",
  "개젓가튼넘",
  "게젓가튼넘",
  "게젓",
  "게지랄",
  "걔잡년",
  "걔잡뇬",
  "걔잡넘",
  "띠블",
  "씨발뇬",
  "씨발뇸",
  "씨팔넘",
  "씨팔뇬",
  "씨팔뇸",
  "시팔년",
  "시팔새꺄",
  "시댕이",
  "씨댕이",
  "시발새끼",
  "시팍새끼",
  "씨팍새끼",
  "씨팍새꺄",
  "시팍새꺄",
  "씹녀",
  "씹뇸",
  "씹새이",
  "씹새리",
  "십세이",
  "십세리",
  "십셰리",
  "십팔새끼",
  "씹팔쌔끼",
  "십발새끼",
  "십발쌔꺄",
  "십지랄",
  "씹지랄",
  "십지럴",
  "씹지럴",
  "십탱꾸리",
  "씹탱꾸리",
  "십탱굴이",
  "쓰바새끼",
  "쓰발쌔꺄",
  "쓰발새끼",
  "쓰발세끼",
  "쓰발세꺄",
  "쓰바쌔끼",
  "쓰바세끼",
  "시발롬",
  "씨발롬",
  "씨뱅가리",
  "씨땡이",
  "시땡이",
  "씹부랄",
  "씹빵구",
  "씹뽀지",
  "쒭새",
  "좃니",
  "좃간년",
  "좃깟네",
  "좃넘",
  "좃만아",
  "좃가튼뇬",
  "좃까리",
  "좃털",
  "좆같은놈",
  "좃가튼년",
  "좆같은새끼",
  "좆년",
  "좆만한년",
  "좆만한놈",
  "좆만한새끼",
  "좆만아",
  "좆먹어",
  "좆빨아",
  "좆새끼",
  "좆털",
  "시이팔",
  "시이펄",
  "씨이펄",
  "씨불알",
  "가슴",
  "찌찌",
  "찌쮜",
  "찌쭈",
  "쮜쮜",
  "슴가",
  "쭈쭈",
  "유방",
  "유두",
  "젖꼭지",
  "젖탱",
  "젖통",
  "짬지",
  "자쥐",
  "부랄",
  "불알",
  "음부",
  "음순",
  "누드",
  "알몸",
  "나체",
  "야설",
  "야짤",
  "야애니",
  "야캠",
  "음란",
  "외설",
  "성희롱",
  "성추행",
  "성폭행",
  "강제추행",
  "몰카",
  "성인용품",
  "성인영상",
  "성인동영상",
  "성인사이트",
  "성인방송",
  "성인만화",
  "성인영화",
  "성인게임",
  "19금",
  "후장",
  "항문성교",
  "애무",
  "애액",
  "정사씬",
  "사정하",
  "발기",
  "사까시",
  "빠구리",
  "떡치",
  "따먹",
  "딸딸이",
  "딸치",
  "자위행위",
  "자위중",
  "자위하",
  "원조교제",
  "매춘",
  "매음",
  "집창촌",
  "노팬티",
  "노브라",
  "오랄",
  "펠라",
  "페티시",
  "페티쉬",
  "섹파",
  "섹친",
  "섹트",
  "조건녀",
  "조건남",
  "보빨",
  "자빨",
  "빨어줘",
  "박아줘",
  "박아줄",
  "신음소리",
  "음란물",
  "boobs",
  "boob",
  "breasts",
  "breast",
  "tits",
  "titties",
  "nipple",
  "nipples",
  "vagina",
  "vulva",
  "dildo",
  "masturbation",
  "masturbate",
  "orgasm",
  "anal",
  "nude",
  "naked",
  "nsfw",
  "xxx",
  "bdsm",
  "fellatio",
  "cunnilingus",
  "gangbang",
  "creampie",
  "ejaculate",
  "erection",
  "testicles",
  "scrotum",
  "등신",
  "멍청이",
  "얼간이",
  "찐따",
  "호구새끼",
  "호로",
  "후레자식",
  "패드립",
  "늬애미",
  "느개비",
  "느검",
  "느그애미",
  "니애비",
  "니에미",
  "fuckyou",
  "fuk",
  "fuq",
  "fxxk",
  "fck",
  "shibal",
  "ssibal",
  "sibal",
  "shib",
  "ssib",
  "qudtls",
  "ㅅㄲ",
  "ㅈ같",
  "ㅈ밥",
  "ㅈ까",
  "ㅈ같은",
  "ㅂ신",
  "ㅂㅕㅇㅅㅣㄴ",
  "ㅆl발",
  "ㅆi발",
  "ㅆ1발",
  "시l발",
  "씨l발"
];

  var initials = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
  var vowels = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
  var finals = ["", "ㄱ", "ㄲ", "ㄱㅅ", "ㄴ", "ㄴㅈ", "ㄴㅎ", "ㄷ", "ㄹ", "ㄹㄱ", "ㄹㅁ", "ㄹㅂ", "ㄹㅅ", "ㄹㅌ", "ㄹㅍ", "ㄹㅎ", "ㅁ", "ㅂ", "ㅂㅅ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
  function fromJamo(ch) {
    var c = ch.charCodeAt(0);
    if (c === 0x1121) return "ㅂㅅ";
    if (c >= 0x1100 && c <= 0x1112) return initials.charAt(c - 0x1100);
    if (c >= 0x1161 && c <= 0x1175) return vowels.charAt(c - 0x1161);
    if (c >= 0x11A8 && c <= 0x11C2) return finals[c - 0x11A7];
    return ch;
  }
  function normalize(value) {
    var s = String(value == null ? "" : value);
    if (s.normalize) s = s.normalize("NFKC");
    return s.toLowerCase()
      .replace(/[\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF\uFE00-\uFE0F]/g, "")
      .replace(/[\u1100-\u11FF]/g, fromJamo);
  }
  function compact(s) { return s.replace(/[^a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/g, ""); }
  function escapeRegex(s) { return s.replace(/[.*+?^$()|[\]{}\\]/g, "\\$&"); }
  function jamo(s) {
    if (s.normalize) s = s.normalize("NFD");
    return compact(s.replace(/[\u1100-\u11FF]/g, fromJamo));
  }
  function textForms(value) {
    var text = compact(value);
    var withoutDigits = text.replace(/([가-힣ㄱ-ㅎㅏ-ㅣ])[0-9]+(?=[가-힣ㄱ-ㅎㅏ-ㅣ])/g, "$1");
    return [text, withoutDigits, withoutDigits.replace(/([가-힣ㄱ-ㅎㅏ-ㅣ])\1+/g, "$1")];
  }
  function compile(list) {
    var korean = [], decomposed = [], english = [], seen = Object.create(null);
    list.forEach(function (word) {
      var key = compact(normalize(word));
      if (!key || seen[key]) return;
      seen[key] = true;
      if (/^[a-z]+$/.test(key)) {
        english.push(key.split("").map(function (ch) { return escapeRegex(ch) + "+"; }).join("[^a-z0-9]*"));
      } else {
        korean.push(escapeRegex(key));
        // Initial-only rules must not match consonants across normal syllable boundaries.
        if (/^[가-힣]+$/.test(key)) decomposed.push(escapeRegex(jamo(key)) + "(?![ㅏ-ㅣ])");
      }
    });
    return {
      korean: korean.length ? new RegExp(korean.join("|")) : null,
      decomposed: decomposed.length ? new RegExp(decomposed.join("|")) : null,
      english: english.length ? new RegExp("(?:^|[^a-z0-9])(?:" + english.join("|") + ")(?:$|[^a-z0-9])", "i") : null
    };
  }
  var baseMatcher = compile(words);
  var baseWords = Object.create(null);
  words.forEach(function (word) { baseWords[word] = true; });
  var customKey = "", customMatcher = null;
  function getCustomMatcher(extraWords) {
    if (!extraWords || !extraWords.length) return null;
    var key = extraWords.join("\n");
    if (key !== customKey) {
      customKey = key;
      customMatcher = compile(extraWords.filter(function (word) { return !baseWords[word]; }));
    }
    return customMatcher;
  }
  function matches(matcher, text, forms, jamoForms) {
    if (!matcher) return false;
    return (matcher.english && matcher.english.test(text))
      || forms.some(function (form) { return matcher.korean && matcher.korean.test(form); })
      || jamoForms.some(function (form) { return matcher.decomposed && matcher.decomposed.test(form); });
  }
  function contextualHit(value) {
    var text = compact(value);
    return ["보지", "자지", "자위", "정액"].some(function (word) {
      return text === word || new RegExp(escapeRegex(word) + "(?:빨|핥|보여|사진|만져|삽입|크기)").test(text)
        || new RegExp("(?:^|[^가-힣])" + escapeRegex(word) + "(?:를|가|는|랑|만)(?:$|[^가-힣])").test(value);
    });
  }
  function hasProhibited(value, extraWords) {
    var text = normalize(value);
    if (/\uD83D\uDD95/.test(text)) return true;
    var leet = text.replace(/[a-z0-9@$!]+/g, function (token) {
      if (!/[a-z]/.test(token)) return token;
      return token.replace(/[013457@$!]/g, function (ch) {
        return ({ "0":"o", "1":"i", "3":"e", "4":"a", "5":"s", "7":"t", "@":"a", "$":"s", "!":"i" })[ch];
      });
    });
    var forms = textForms(text), jamoForms = forms.map(jamo);
    if (contextualHit(text) || matches(baseMatcher, text, forms, jamoForms)) return true;
    var custom = getCustomMatcher(extraWords);
    if (matches(custom, text, forms, jamoForms)) return true;
    if (leet !== text) {
      var leetForms = textForms(leet), leetJamo = leetForms.map(jamo);
      if (matches(baseMatcher, leet, leetForms, leetJamo) || matches(custom, leet, leetForms, leetJamo)) return true;
    }
    return false;
  }
  function safeCard(card, extraWords) {
    return !!card && !hasProhibited(card.nick, extraWords) && !hasProhibited(card.text, extraWords);
  }
  return { words: words.slice(), normalize: normalize, hasProhibited: hasProhibited, safeCard: safeCard };
})();
if (typeof module !== "undefined" && module.exports) module.exports = ContentModeration;


/**
 * 🚀 「D'velop 2026, 우리의 다음 도전」 — Apps Script 백엔드
 *
 * doPost : 본문 JSON 의 action 으로 구분
 *          action "card"  → 도전카드 1장 저장 (같은 카드번호면 다시 저장하지 않음 = 재전송 중복 방지)
 *          action "heart" → 하트 누르기·옮기기·취소 (기기 1대당 하트 1개, cardId 를 비우면 취소)
 * doGet  : ?action=cards (기본) → 화면에 띄울 카드 목록 + 하트수 (&device= 를 주면 그 폰의 하트 위치도)
 *          ?action=config       → 카테고리·금지어 (폰에서 전송 전에 미리 검사하는 용도)
 *          callback 파라미터가 있으면 JSONP 로 응답 (CORS 우회)
 *
 * 최초 1회: 편집기에서 setup() 실행 → 도전카드·하트기록·사회자용·금지어 탭 생성
 * 여러 번 실행해도 기존 카드·하트는 지워지지 않는다.
 *
 * 동시 접속(100~150명) 대비: 카드 목록은 5초 캐시를 모든 폰이 나눠 받고, 하트는 기기별 행만 고쳐 잠금 없이 처리한다.
 * 도전카드 '하트수' 열(사회자용 탭)은 누군가 목록을 볼 때 최대 몇 초 늦게 맞춰진다.
 * ※ 코드를 고친 뒤에는 [배포 → 배포 관리 → 편집 → 새 버전]으로 다시 배포해야 폰에 반영된다.
 * ※ 행사 직전 편집기에서 warmUp() 을 한 번 실행해 두면 첫 접속이 빨라진다.
 */

var SHEET_ID = "";   // 시트 메뉴 [확장 프로그램 → Apps Script]로 만들었다면 비워둬도 된다. 별도 프로젝트면 시트 ID 입력

var CARD_SHEET = "도전카드";
var HEART_SHEET = "하트기록";
var MC_SHEET = "사회자용";
var WORD_SHEET = "금지어";

var CATEGORIES = ["일·공부", "돈·생활", "해보고 싶은 경험", "아직 찾는 중"];
var CARD_HEADERS = ["제출시각", "카테고리", "닉네임", "한 줄", "하트수", "화면표시(N=숨김)", "필터처리", "카드번호"];
// 열 번호 (1부터)
var COL = { time: 1, category: 2, nick: 3, text: 4, hearts: 5, show: 6, filtered: 7, id: 8 };
var HEART_HEADERS = ["마지막 변경 시각", "기기번호", "하트 준 카드번호"];
var HCOL = { time: 1, device: 2, card: 3 };

// 동시 접속 대비: 카드 목록을 몇 초간 캐시에 두고 모든 폰이 그걸 나눠 받는다 (매번 시트를 읽지 않게)
var DATA_CACHE_KEY = "data_v4_strict_moderation";
var WORDS_CACHE_KEY = "words_v4_strict_moderation";
var FRESH_MS = 5000;        // 이 시간이 지나면 다음 요청 때 1명만 시트를 다시 읽는다 (나머지는 직전 목록을 받음)
var CACHE_CHUNK = 25000;    // 캐시 값 1개 크기 제한(100KB)을 넘지 않게 나눠 담는 단위 (글자 수)
var CACHE_TTL = 21600;      // 6시간

var MAX_TEXT = 100;
var MAX_NICK = 10;
var NICK_RE = /^[가-힣]+$/;   // 닉네임: 완성형 한글만 (띄어쓰기·숫자·영문·이모지 불가)
var DEFAULT_NICK = "익명";
var MASK = "***";

// 기본 금지어. 행사 중 새로 보이는 단어는 '금지어' 탭 A2 아래에 추가하면 바로 적용된다
var BASE_WORDS = ContentModeration.words.slice();

// 개인정보 형태 (이메일을 @아이디보다 먼저 검사해야 통째로 가려진다)
var PRIVACY_PATTERNS = [
  /[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/g,    // 이메일
  /01[016789][\s.\-]?\d{3,4}[\s.\-]?\d{4}/g,              // 휴대폰 번호
  /0\d{1,2}[\s.\-]\d{3,4}[\s.\-]\d{4}/g,                   // 일반 전화번호
  /\d{6}[\s\-]?[1-4]\d{6}/g,                               // 주민등록번호
  /\b(?!(?:19|20)\d\d-\d\d?-\d\d?\b)\d{2,6}-\d{2,6}-\d{2,8}/g,   // 계좌번호 형태 (2027-03-01 같은 날짜는 제외)
  /\d{9,}/g,                                               // 9자리 이상 이어진 숫자
  /@[A-Za-z0-9_.]{3,}/g                                    // SNS 아이디 (@아이디)
];

// ====== 최초 세팅 ======
function setup() {
  var ss = book_();

  var cards = ss.getSheetByName(CARD_SHEET) || ss.getSheets()[0];
  cards.setName(CARD_SHEET);
  styleHeader_(cards, CARD_HEADERS, [130, 130, 110, 340, 70, 120, 90, 120]);
  cards.getRange(2, COL.time, cards.getMaxRows() - 1, 1).setNumberFormat("MM-dd HH:mm:ss");
  cards.getRange(1, COL.hearts, cards.getMaxRows(), 1).setHorizontalAlignment("center");
  cards.getRange(1, COL.show, cards.getMaxRows(), 1).setHorizontalAlignment("center");
  // 시트에 손으로 카드를 추가할 때 카테고리 오타가 나지 않게 드롭다운
  cards.getRange(2, COL.category, cards.getMaxRows() - 1, 1)
    .setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(CATEGORIES, true).build());

  var hearts = ss.getSheetByName(HEART_SHEET) || ss.insertSheet(HEART_SHEET);
  styleHeader_(hearts, HEART_HEADERS, [150, 300, 300]);
  hearts.getRange(2, HCOL.time, hearts.getMaxRows() - 1, 1).setNumberFormat("MM-dd HH:mm:ss");

  // 사회자용: 숨김(N) 뺀 카드를 하트 많은 순으로 자동 정렬 (수식이라 손댈 필요 없음)
  var mc = ss.getSheetByName(MC_SHEET) || ss.insertSheet(MC_SHEET);
  mc.clear();
  styleHeader_(mc, ["순위", "카테고리", "닉네임", "한 줄", "하트수"], [50, 130, 110, 340, 70]);
  var src = "'" + CARD_SHEET + "'!";
  mc.getRange("B2").setFormula(
    "=IFERROR(SORT(FILTER(" + src + "B2:E, " + src + "D2:D<>\"\", UPPER(" + src + "F2:F)<>\"N\"), 4, FALSE), \"\")");
  mc.getRange("A2").setFormula("=ARRAYFORMULA(IF(B2:B=\"\", \"\", ROW(B2:B)-1))");
  mc.getRange("A:A").setHorizontalAlignment("center");
  mc.getRange("E:E").setHorizontalAlignment("center");

  var words = ss.getSheetByName(WORD_SHEET) || ss.insertSheet(WORD_SHEET);
  if (!words.getRange("A1").getValue()) {
    words.getRange("A1").setValue("금지어 (A2부터 한 줄에 하나씩 · 기본 욕설은 코드에 이미 들어 있음)")
      .setFontWeight("bold").setFontColor("#FFFFFF").setBackground("#2F4BD8");
  }
  words.setColumnWidth(1, 420);
  words.setFrozenRows(1);
}

function styleHeader_(sheet, headers, widths) {
  sheet.getRange(1, 1, 1, headers.length).setValues([headers])
    .setFontWeight("bold").setFontColor("#FFFFFF").setBackground("#2F4BD8");
  sheet.setFrozenRows(1);
  widths.forEach(function (w, i) { sheet.setColumnWidth(i + 1, w); });
}

// ====== 저장 ======
// status "error" = 입력값 문제(다시 보내도 같음) / "busy"·"retry" = 혼잡·일시 오류(폰이 다시 보냄)
function doPost(e) {
  var body;
  try {
    body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
  } catch (err) {
    return json_({ status: "error", message: "잘못된 요청이에요" });
  }
  try {
    return json_(body.action === "heart" ? heart_(body) : addCard_(body));
  } catch (err) {
    // 잠금 대기 초과·'동시 실행 너무 많음' 같은 일시 오류는 폰이 카드를 버리지 않고 재시도하게 한다
    return json_({ status: "retry", message: String(err && err.message || err) });
  }
}

function addCard_(body) {
  var id = clean_(body.id, 64);
  var category = clean_(body.category, 20);
  var text = clean_(body.text, MAX_TEXT);
  var nick = clean_(body.nick, 100);
  if (!id || !text) return { status: "error", message: "한 줄을 적어주세요" };
  if (CATEGORIES.indexOf(category) < 0) return { status: "error", message: "카테고리를 골라주세요" };
  if (nick && (nick.length > MAX_NICK || !NICK_RE.test(nick))) {
    return { status: "error", message: "닉네임은 한글로만 " + MAX_NICK + "자 이내로 적어주세요" };
  }
  nick = nick || DEFAULT_NICK;

  // 금지 표현은 서버에서도 등록을 거절하고, 개인정보는 가려서 저장한다.
  var words = getWords_();
  if (ContentModeration.hasProhibited(text, words) || ContentModeration.hasProhibited(nick, words)) {
    return { status: "error", message: "욕설·비방·성적 표현은 등록할 수 없어요. 내용을 수정해주세요." };
  }
  var t = mask_(text, words);
  var n = mask_(nick, words);

  var lock = LockService.getScriptLock();
  if (!lock.tryLock(20000)) return { status: "busy", message: "잠시 사람이 몰렸어요" };
  try {
    var sheet = book_().getSheetByName(CARD_SHEET);
    if (findRow_(sheet, COL.id, id)) return { status: "ok", duplicate: true };
    var row = [];
    row[COL.time - 1] = new Date();
    row[COL.category - 1] = category;
    row[COL.nick - 1] = cell_(n.text);
    row[COL.text - 1] = cell_(t.text);
    row[COL.hearts - 1] = 0;
    row[COL.show - 1] = "";
    row[COL.filtered - 1] = (t.hit || n.hit) ? "*** 처리됨" : "";
    row[COL.id - 1] = cell_(id);
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }
  markStale_();   // 다음 조회 때 새 카드가 바로 보이도록
  return { status: "ok", filtered: t.hit || n.hit };
}

// 기기 1대당 하트기록 1행: 하트를 옮기면 같은 행의 카드번호만 바뀐다
// 기기마다 자기 행만 고치므로 전체 잠금 없이 처리한다 (100명 이상이 한꺼번에 눌러도 줄 서지 않게).
// 재전송 등으로 같은 기기 행이 2개 생겨도 '아래쪽 행이 최신'으로 세므로 하트가 2개로 세지지 않는다.
function heart_(body) {
  var device = clean_(body.device, 64);
  var cardId = clean_(body.cardId, 64);   // 빈 값 = 하트 취소
  if (!device) return { status: "error", message: "기기 정보가 없어요" };

  var ss = book_();
  if (cardId) {
    var known = getData_().cards.some(function (c) { return c.id === cardId; });
    if (!known && !cardExists_(ss.getSheetByName(CARD_SHEET), cardId)) {
      return { status: "error", message: "카드를 찾을 수 없어요" };
    }
  }
  var sheet = ss.getSheetByName(HEART_SHEET);
  var rows = readHeartRows_(ss);
  var values = [new Date(), cell_(device), cell_(cardId)];
  var found = 0;
  for (var i = rows.length - 1; i >= 0; i--) {
    if (String(rows[i][0]).trim() === device) { found = i + 2; break; }
  }
  if (found) {
    sheet.getRange(found, 1, 1, HEART_HEADERS.length).setValues([values]);
    rows[found - 2][1] = cardId;
  } else {
    sheet.appendRow(values);   // appendRow 는 동시에 불려도 행이 겹치지 않는다
    rows.push([device, cardId]);
  }
  markStale_();
  return { status: "ok", myHeart: cardId, hearts: countHearts_(heartMap_(rows)) };
}

// 하트기록 시트의 [기기번호, 카드번호] 두 열
function readHeartRows_(ss) {
  var sheet = ss.getSheetByName(HEART_SHEET);
  var last = sheet.getLastRow();
  return last < 2 ? [] : sheet.getRange(2, HCOL.device, last - 1, 2).getDisplayValues();
}

// 기기번호 → 하트 준 카드번호 (같은 기기가 여러 행이면 아래쪽 = 최신)
function heartMap_(rows) {
  var map = {};
  rows.forEach(function (r) {
    var d = String(r[0]).trim();
    if (d) map[d] = String(r[1]).trim();
  });
  return map;
}

function countHearts_(map) {
  var counts = {};
  Object.keys(map).forEach(function (d) {
    var id = map[d];
    if (id) counts[id] = (counts[id] || 0) + 1;
  });
  return counts;
}

// ====== 조회 ======
function doGet(e) {
  var p = (e && e.parameter) || {};
  var data;
  try {
    if (p.action === "config") {
      data = { categories: CATEGORIES, words: getWords_(), maxText: MAX_TEXT, maxNick: MAX_NICK, nickPattern: NICK_RE.source };
    } else {
      var d = getData_();
      var device = clean_(p.device, 64);
      data = { cards: d.cards, myHeart: (device && d.hearts[device]) || "" };
    }
  } catch (err) {
    data = { error: String(err && err.message || err) };
  }
  var text = JSON.stringify(data);
  if (p.callback && /^[A-Za-z0-9_]+$/.test(p.callback)) {
    return ContentService.createTextOutput(p.callback + "(" + text + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(text).setMimeType(ContentService.MimeType.JSON);
}

// 화면용 데이터 { cards, hearts(기기→카드) }. 캐시가 FRESH_MS 이내면 그대로 쓰고,
// 오래됐으면 잠금을 잡은 1명만 시트를 다시 읽는다. 잠금을 못 잡은 나머지는 직전 목록을 받는다.
function getData_() {
  var cached = cacheGet_(DATA_CACHE_KEY);
  if (cached && Date.now() - cached.ts < FRESH_MS) return cached.data;
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(cached ? 0 : 10000)) {
    return cached ? cached.data : buildData_(false);
  }
  try {
    var again = cacheGet_(DATA_CACHE_KEY);   // 기다리는 사이 다른 요청이 새로 만들었으면 그걸 쓴다
    if (again && Date.now() - again.ts < FRESH_MS) return again.data;
    var data = buildData_(true);
    cachePut_(DATA_CACHE_KEY, data);
    return data;
  } finally {
    lock.releaseLock();
  }
}

// 빈 카드·화면표시 N 카드는 빼고, 시트에서 고친 내용과 하트수를 그대로 반영한다.
// writeCounts 면 도전카드 '하트수' 열도 맞춰 둔다 (사회자용 탭이 이 열을 읽음 · 바뀐 게 있을 때만 씀)
function buildData_(writeCounts) {
  var ss = book_();
  var hearts = heartMap_(readHeartRows_(ss));
  var counts = countHearts_(hearts);
  var sheet = ss.getSheetByName(CARD_SHEET);
  var cards = [];
  var last = sheet ? sheet.getLastRow() : 0;
  if (last < 2) return { cards: cards, hearts: hearts };

  var rows = sheet.getRange(2, 1, last - 1, CARD_HEADERS.length).getDisplayValues();
  var moderationWords = getWords_();
  var changed = false;
  var heartCol = rows.map(function (r, i) {
    var text = String(r[COL.text - 1]).trim();
    if (!text) return [r[COL.hearts - 1]];   // 빈 행은 건드리지 않는다
    var id = cardId_(r[COL.id - 1], i + 2);   // 시트에 손으로 넣은 행도 표시되도록
    var n = counts[id] || 0;
    if (String(r[COL.hearts - 1]).trim() !== String(n)) changed = true;
    if (String(r[COL.show - 1]).trim().toUpperCase() !== "N" && ContentModeration.safeCard({ nick: r[COL.nick - 1], text: text }, moderationWords)) {
      cards.push({
        id: id,
        category: r[COL.category - 1],
        nick: String(r[COL.nick - 1]).trim() || DEFAULT_NICK,
        text: text,
        hearts: n
      });
    }
    return [n];
  });
  if (writeCounts && changed) sheet.getRange(2, COL.hearts, rows.length, 1).setValues(heartCol);
  return { cards: cards, hearts: hearts };
}

// 카드번호가 빈 행(시트에 손으로 넣은 카드)은 "row행번호" 를 카드번호로 쓴다
function cardId_(idCell, rowNo) {
  return String(idCell).trim() || ("row" + rowNo);
}

function cardExists_(sheet, cardId) {
  var m = /^row(\d+)$/.exec(cardId);
  if (m) {
    var row = Number(m[1]);
    if (row < 2 || row > sheet.getLastRow()) return false;
    var r = sheet.getRange(row, 1, 1, CARD_HEADERS.length).getDisplayValues()[0];
    return !String(r[COL.id - 1]).trim() && !!String(r[COL.text - 1]).trim();
  }
  return !!findRow_(sheet, COL.id, cardId);
}

// ====== 캐시 (CacheService) ======
// 값 1개당 100KB 제한이 있어 카드가 많아지면 여러 조각으로 나눠 담는다. 메타 = { n: 조각 수, ts: 만든 시각 }
function cacheGet_(key) {
  try {
    var cache = CacheService.getScriptCache();
    var meta = cache.get(key);
    if (!meta) return null;
    meta = JSON.parse(meta);
    var keys = [];
    for (var i = 0; i < meta.n; i++) keys.push(key + ":" + i);
    var parts = cache.getAll(keys);
    var s = "";
    for (var j = 0; j < keys.length; j++) {
      if (parts[keys[j]] == null) return null;
      s += parts[keys[j]];
    }
    return { ts: meta.ts, data: JSON.parse(s) };   // 쓰는 도중에 읽어 조각이 섞이면 parse 가 실패 → null
  } catch (_) {
    return null;
  }
}

function cachePut_(key, obj) {
  try {
    var s = JSON.stringify(obj);
    var n = Math.max(1, Math.ceil(s.length / CACHE_CHUNK));
    var map = {};
    for (var i = 0; i < n; i++) map[key + ":" + i] = s.substr(i * CACHE_CHUNK, CACHE_CHUNK);
    var cache = CacheService.getScriptCache();
    cache.putAll(map, CACHE_TTL);
    cache.put(key, JSON.stringify({ n: n, ts: Date.now() }), CACHE_TTL);
  } catch (_) {}
}

// 내용은 그대로 두고 '오래됨' 표시만 한다 → 다음 조회 1건이 새로 읽고, 그동안 나머지는 직전 목록을 받는다
function markStale_() {
  try {
    var cache = CacheService.getScriptCache();
    var meta = cache.get(DATA_CACHE_KEY);
    if (!meta) return;
    meta = JSON.parse(meta);
    meta.ts = 0;
    cache.put(DATA_CACHE_KEY, JSON.stringify(meta), CACHE_TTL);
  } catch (_) {}
}

// 행사 전에 편집기에서 한 번 실행해 두면 첫 접속이 빨라진다 (권한 확인 + 캐시 채우기)
function warmUp() {
  CacheService.getScriptCache().remove(WORDS_CACHE_KEY);
  markStale_();
  var d = getData_();
  getWords_();
  Logger.log("카드 " + d.cards.length + "장 · 하트 준 기기 " + Object.keys(d.hearts).length + "대");
}

// ====== 필터링 ======
// 금지어 탭은 1분간 캐시한다 (새로 추가한 단어는 최대 1분 뒤 적용)
function getWords_() {
  var cache = CacheService.getScriptCache();
  try {
    var hit = cache.get(WORDS_CACHE_KEY);
    if (hit) return JSON.parse(hit);
  } catch (_) {}
  var words = BASE_WORDS.slice();
  var sheet = book_().getSheetByName(WORD_SHEET);
  if (sheet && sheet.getLastRow() >= 2) {
    sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getDisplayValues().forEach(function (r) {
      var w = String(r[0]).trim();
      if (w && words.indexOf(w) < 0) words.push(w);
    });
  }
  try { cache.put(WORDS_CACHE_KEY, JSON.stringify(words), 60); } catch (_) {}
  return words;
}

// "씨 발", "씨.발" 처럼 글자 사이에 공백·기호를 끼워 넣어도 걸리게 한다
function wordRegex_(word) {
  var gap = "[\\s.,·_*~!\\-]*";
  return new RegExp(word.split("").map(function (ch) {
    return ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }).join(gap), "gi");
}

function mask_(s, words) {
  var hit = false;
  var out = String(s || "");
  PRIVACY_PATTERNS.forEach(function (re) {
    re.lastIndex = 0;
    if (re.test(out)) {
      hit = true;
      re.lastIndex = 0;
      out = out.replace(re, MASK);
    }
  });
  return { text: out, hit: hit };
}

// ====== 공통 ======
function book_() {
  return SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
}

function findRow_(sheet, col, value) {
  var last = sheet.getLastRow();
  if (!value || last < 2) return 0;
  var hit = sheet.getRange(2, col, last - 1, 1).createTextFinder(value).matchEntireCell(true).findNext();
  return hit ? hit.getRow() : 0;
}

// 한 줄 입력이므로 줄바꿈·제어문자는 공백으로 바꾼다
function clean_(v, max) {
  return String(v == null ? "" : v).replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

// =, +, -, @ 로 시작하면 시트가 수식으로 해석하므로 ' 를 붙여 글자로 저장
function cell_(v) {
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
