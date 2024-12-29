import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  jp: {
    translation: {
      
        "hero_title": "ようこそ",
        "highlighted_text": "もう一度お越しください",
        "hero_subtitle": "",
        "hero_description": "Simplify internationalization in your Next.js app with seamless multi-language support using next-intl. Reach a global audience and deliver content in multiple languages effortlessly.",
        "get_started_button": "Get started",
        "learn_more_button": "Learn more",
        "guide_title": "サービスガイド",
        "fold_all": "すべて折りたたむ",
        "menu1": "接続とインストール",
        "menu1_1": "メッセンジャー接続",
        "menu1_2": "メッセンジャー拡張機能インストール",
        "menu2": "メンバー",
        "menu2_1": "お気に入り",
        "menu2_2": "組織図",
        "menu2_3": "私の部門",
        "menu3": "チャット",
        "menu3_1": "一般チャット",
        "menu4": "メッセージ",
        "menu4_1": "受信メッセージ",
        "menu4_2": "送信メッセージ",
        "menu5": "ビデオ会議",
        "menu5_1": "ビデオ会議予約",
        "menu5_2": "ビデオ会議参加",
        "menu5_3": "ビデオ会議参加者リスト",
        "menu5_4": "ビデオ会議詳細機能",
        "menu6": "学務支援",
        "menu6_1": "タスク",
        "menu6_2": "プロジェクト",
        "menu6_3": "スケジュール"      
    }
  },
  kr: {
    translation: {
        "hero_title": "반갑습니다",
        "highlighted_text": "또오세요",
        "hero_subtitle": "",
        "hero_description": "Simplify internationalization in your Next.js app with seamless multi-language support using next-intl. Reach a global audience and deliver content in multiple languages effortlessly.",
        "get_started_button": "시작하기",
        "learn_more_button": "더 알아보기",
        "guide_title": "서비스 가이드",
        "fold_all": "모두 접기",
        "menu1": "접속 및 설치",
        "menu1_1": "메신저 접속",
        "menu1_2": "메신저 확장 프로그램 설치",
        "menu2": "멤버",
        "menu2_1": "즐겨찾기",
        "menu2_2": "조직도",
        "menu2_3": "내 부서",
        "menu3": "채팅",
        "menu3_1": "일반 대화",
        "menu4": "쪽지",
        "menu4_1": "받은 쪽지",
        "menu4_2": "보낸 쪽지",
        "menu5": "화상회의",
        "menu5_1": "화상회의 예약",
        "menu5_2": "화상회의 참여",
        "menu5_3": "화상회의 참여자 목록",
        "menu5_4": "화상회의 세부 기능",
        "menu6": "학사 지원",
        "menu6_1": "할 일",
        "menu6_2": "프로젝트",
        "menu6_3": "일정"      
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "kr",
    lng: "kr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;