/* Shared text checks for the participant UI, display and Apps Script.
 * Keyword-based checks reduce exposure; they do not understand every sentence.
 */
var ContentModeration = (function () {
  "use strict";
  var words = [
    "씨발", "시발", "씨바", "씨벌", "시벌", "씨빨", "시빨", "씨팔", "시팔", "쉬발", "쒸발", "ㅅㅂ", "ㅆㅂ",
    "병신", "븅신", "빙신", "ㅂㅅ", "개새끼", "개색기", "개쉐끼", "개세끼", "씨ㅂ", "시ㅂ", "새끼", "새키", "쉐끼", "쉐키", "이시키", "저시키", "그시키", "개시키", "좆", "좃", "존나", "졸라", "ㅈㄴ", "지랄", "ㅈㄹ",
    "꺼져", "닥쳐", "미친놈", "미친년", "또라이", "니애미", "네애미", "느금마", "니미", "염병", "썅", "엿먹",
    "개년", "쌍년", "쌍놈", "쓰레기새끼", "정신병자", "죽여버", "죽어버", "뒤져", "뒤질", "한남충", "한녀충",
    "섹스", "쎅스", "섹쓰", "야동", "포르노", "폰섹", "몸캠", "성매매", "성관계", "성행위", "구강성교", "음경", "음핵", "클리토리스", "조건만남", "원나잇", "강간", "윤간",
    "페니스", "딜도", "오르가즘", "오르가슴", "사정액", "질내사정", "노콘", "씹질", "걸레년", "창녀", "창놈",
    "fuck", "fucking", "shit", "bitch", "asshole", "motherfucker", "porn", "porno", "sex", "sexy", "nudes", "penis", "pussy", "dick", "cock", "cumshot", "blowjob", "handjob", "hentai"
  ];
  var choseong = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
  function normalize(value) {
    var s = String(value == null ? "" : value);
    if (s.normalize) s = s.normalize("NFKC");
    return s.toLowerCase()
      .replace(/[\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF\uFE00-\uFE0F]/g, "")
      .replace(/[\u1100-\u1112]/g, function (ch) { return choseong.charAt(ch.charCodeAt(0) - 0x1100); });
  }
  function compact(s) {
    return s.replace(/[^a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/g, "");
  }
  function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  var ruleCache = Object.create(null);
  function textForms(value) {
    var text = compact(value);
    var withoutDigits = text.replace(/([가-힣ㄱ-ㅎ])[0-9]+(?=[가-힣ㄱ-ㅎ])/g, "$1");
    return [text, withoutDigits, withoutDigits.replace(/([가-힣ㄱ-ㅎ])\1+/g, "$1")];
  }
  function wordHit(value, word, forms) {
    var raw = String(word);
    var rule = ruleCache[raw];
    if (!rule) {
      var normalized = compact(normalize(raw));
      var pattern = null;
      if (/^[a-z]+$/.test(normalized)) {
        var letters = normalized.split("").map(function (ch) { return escapeRegex(ch) + "+"; }).join("[^a-z0-9]*");
        pattern = new RegExp("(?:^|[^a-z0-9])" + letters + "(?:$|[^a-z0-9])", "i");
      }
      rule = ruleCache[raw] = { key: normalized, pattern: pattern };
    }
    var key = rule.key;
    if (!key) return false;
    if (/^[a-z]+$/.test(key)) {
      // English word boundaries avoid blocking e.g. "Essex" and "Scunthorpe".
      return rule.pattern.test(value);
    }
    return forms.some(function (form) {
      return form.indexOf(key) !== -1;
    });
  }
  function contextualHit(value) {
    var text = compact(value);
    // These short words also appear in ordinary sentences such as "해보지" or "잠을 자지 않고".
    return ["보지", "자지", "자위", "정액"].some(function (word) {
      return text === word || new RegExp(escapeRegex(word) + "(?:빨|핥|보여|사진|만져|삽입|크기)").test(text)
        || new RegExp("(?:^|[^가-힣])" + escapeRegex(word) + "(?:를|가|는|랑|만)(?:$|[^가-힣])").test(value);
    });
  }
  function hasProhibited(value, extraWords) {
    var text = normalize(value);
    var leet = text.replace(/[a-z0-9@$!]+/g, function (token) {
      if (!/[a-z]/.test(token)) return token;
      return token.replace(/[013457@$!]/g, function (ch) {
        return ({ "0":"o", "1":"i", "3":"e", "4":"a", "5":"s", "7":"t", "@":"a", "$":"s", "!":"i" })[ch];
      });
    });
    var forms = textForms(text);
    var leetForms = leet === text ? forms : textForms(leet);
    var seen = Object.create(null);
    return contextualHit(text) || words.concat(extraWords || []).some(function (word) {
      if (seen[word]) return false;
      seen[word] = true;
      return wordHit(text, word, forms) || (leet !== text && wordHit(leet, word, leetForms));
    });
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
var DATA_CACHE_KEY = "data_v3_moderation";
var WORDS_CACHE_KEY = "words_v3_moderation";
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

  // 폰에서 한 번 걸렀지만, 그래도 들어온 욕설·개인정보는 *** 로 가려서 저장한다
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
