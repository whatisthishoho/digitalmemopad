/* Shared text checks for the participant UI, display and Apps Script.
 * Keyword-based checks reduce exposure; they do not understand every sentence.
 */
var ContentModeration = (function () {
  "use strict";
  var words = [
    "씨발", "시발", "씨바", "씨벌", "시벌", "씨빨", "시빨", "씨팔", "시팔", "쉬발", "쒸발", "ㅅㅂ", "ㅆㅂ",
    "병신", "븅신", "빙신", "ㅂㅅ", "개새끼", "개색기", "개쉐끼", "개세끼", "씨ㅂ", "시ㅂ", "새끼", "좆", "좃", "존나", "졸라", "ㅈㄴ", "지랄", "ㅈㄹ",
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
