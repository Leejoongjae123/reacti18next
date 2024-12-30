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
        "expand_all": "すべて展開",
        "menu1": "接続とインストール",
        "menu1_1": "メッセンジャー接続",
        "menu1_2": "メッセンジャー拡張アプリのインストール",
        "menu2": "メンバー",
        "menu2_1": "お気に入り",
        "menu2_2": "組織図",
        "menu2_3": "自分の部署",
        "menu3": "チャット",
        "menu3_1": "ー般チャット",
        "menu4": "メッセージ",
        "menu4_1": "受信トレイ",
        "menu4_2": "送信済み",
        "menu5": "Web会議",
        "menu5_1": "Web会議の予",
        "menu5_2": "Web会議に参加",
        "menu5_3": "Web会議の参加者リスト",
        "menu5_4": "Web会議の詳細機能",
        "menu6": "学事支援",
        "menu6_1": "タスク(To-Do)",
        "menu6_2": "プロジェクト",
        "menu6_3": "スケジュール",   
        "menu7": "登下校の管理",
        "menu8": "生徒の管理",
        "menu8_1": "欠席/遅刻/早退",
        "menu8_2": "現在位置の通知",
        "menu8_3": "心の管理",
        "menu8_4": "体の管理",
        "menu9": "緊急ヘルプ",
        "menu10": "通知のリスト",
        "menu11": "資源の予約",
        "menu11_1": "資源の作成および定義",
        "menu11_2": "資源の予約および使用",
        "menu12": "掲示板",
        "menu13": "チャット相談",
        "menu14": "管理者",
        "menu14_1": "ワークスペースに管理者としてアクセス",
        "menu14_2": "サービスのモニタリング",
        "menu14_3": "組織/ユーザーの管理",
        "menu14_4": "管理者の管理",
        "menu14_5": "フェデレーションの管理",
        "menu14_6": "クラスの管理",
        "menu14_7": "相談チャンネルの管理",
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
        "expand_all": "모두 펼치기",
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
        "menu6_3": "일정",
        "menu7": "등하교 관리",
        "menu8": "생도 관리",
        "menu9": "긴급 헬프",
        "menu10": "알림 목록",
        "menu11": "자원예약",
        "menu12": "게시판",
        "menu13": "채팅 상담",
        "menu14": "관리자",
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