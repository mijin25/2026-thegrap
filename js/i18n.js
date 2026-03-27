/* ─────────────────────────────────────────
   THE GRAP — i18n (Internationalisation)
   Keys used via data-i18n="key" on elements.
   HTML is allowed in values (innerHTML).
   ───────────────────────────────────────── */

const GRAP_I18N = {

  /* ── ABOUT PAGE ── */
  'about.manifesto': {
    ko: 'K-POP 아티스트와 글로벌 팬을 연결합니다. <br>디지털 경험부터 라이브 공연까지, <br>콘서트 기획부터 아티스트 IP 굿즈까지 — <br>엔터테인먼트의 모든 접점을 함께 설계합니다.',
    en: 'We connect K-POP artists with global audiences — from digital experience to live stages, from concert production to artist IP merchandise. Every touchpoint of entertainment, engineered.',
    zh: '我们连接K‑POP艺术家与全球观众 — 从数字体验到现场舞台，从演唱会制作到艺人IP周边。设计娱乐的每一个接触点。',
    ja: 'K‑POPアーティストとグローバルなオーディエンスをつなぐ — デジタル体験からライブステージ、コンサート制作からアーティストIPマーチャンダイズまで。エンターテインメントのあらゆる接点を設計します。',
  },
  'about.story.lead': {
    ko: '2013년 서울에서 디지털 에이전시로 출발한 더그랩은, 2024년 K‑POP 공연 제작과 아티스트 IP 비즈니스로 영역을 확장했습니다. 오늘날 글로벌 브랜드를 위한 디지털 경험 사업부와, 아시아 전역의 K‑POP 공연을 기획·제작하는 공연 사업부를 운영합니다. 두 사업부를 잇는 것은 하나의 원칙 — 관객 경험에 대한 끊임없는 집중입니다.',
    en: 'Founded in Seoul in 2013 as a digital design studio, THE GRAP has since expanded into K‑POP performance production and artist IP. Today we operate two divisions: a Digital Experience arm serving global brands, and a Performance Division producing K‑POP concerts across Asia. Two fields, one principle — a relentless focus on the audience experience.',
    zh: 'THE GRAP于2013年在首尔创立，从数字设计工作室起步，逐步拓展至K‑POP演出制作与艺人IP业务。如今我们运营两个事业部：服务全球品牌的数字体验部门，以及在亚洲各地制作K‑POP演出的演出部门。两个领域，一个原则 — 对观众体验的极致专注。',
    ja: '2013年にソウルでデジタルエージェンシーとして創業したTHE GRAPは、K‑POP公演制作とアーティストIP事業へと拡大しました。現在はグローバルブランド向けのデジタルエクスペリエンス部門と、アジア全域でK‑POP公演を制作するパフォーマンス部門を運営しています。二つの領域、一つの原則 — 観客体験への飽くなき集中。',
  },
  'about.hero.sub': {
    ko: '2013년 서울에서 디지털 에이전시로 시작해, 라이브 공연 제작과 아티스트 IP 사업으로 영역을 확장했습니다. 디지털 경험부터 콘서트 기획까지 — K-POP 아티스트와 글로벌 팬을 잇는 모든 접점을 함께 설계합니다.',
    en: 'Founded in Seoul in 2013 as a digital agency, we have since expanded into live performance production and artist IP. From digital experiences to concert production — we design every touchpoint connecting K-POP artists with global audiences.',
    zh: '2013年创立于首尔的数字代理商，逐步拓展至现场演出制作与艺人IP业务。从数字体验到演唱会制作 — 我们设计连接K‑POP艺术家与全球观众的每一个接触点。',
    ja: '2013年にソウルでデジタルエージェンシーとして創業し、ライブ公演制作とアーティストIP事業へと拡大。デジタル体験からコンサート制作まで — K‑POPアーティストとグローバルなファンをつなぐあらゆる接点を設計します。',
  },

  /* Capabilities — Digital */
  'about.cap.d1': { ko: '브랜드 아이덴티티', en: 'Brand Identity', zh: '品牌视觉设计', ja: 'ブランドアイデンティティ' },
  'about.cap.d2': { ko: 'UX / UI 디자인', en: 'UX / UI Design', zh: 'UX / UI 设计', ja: 'UX / UIデザイン' },
  'about.cap.d3': { ko: '웹 개발', en: 'Web Development', zh: '网站开发', ja: 'ウェブ開発' },
  'about.cap.d4': { ko: '디지털 전략', en: 'Digital Strategy', zh: '数字战略', ja: 'デジタル戦略' },
  'about.cap.d5': { ko: '이커머스', en: 'E-Commerce', zh: '电商运营', ja: 'Eコマース' },
  'about.cap.d6': { ko: '모션 & 영상', en: 'Motion & Video', zh: '动态与视频', ja: 'モーション＆映像' },
  'about.cap.d7': { ko: '크리에이티브 디렉션', en: 'Creative Direction', zh: '创意总监', ja: 'クリエイティブディレクション' },
  'about.cap.d8': { ko: '콘텐츠 전략', en: 'Content Strategy', zh: '内容策略', ja: 'コンテンツ戦略' },

  /* Capabilities — labels */
  'about.cap.label.perf':  { ko: 'Performance & IP', en: 'Performance & IP', zh: 'Performance & IP', ja: 'Performance & IP' },
  'about.cap.label.perf2': { ko: 'Performance', en: 'Performance', zh: 'Performance', ja: 'Performance' },
  'about.cap.label.ip':    { ko: 'IP', en: 'IP', zh: 'IP', ja: 'IP' },
  'about.cap.label.dig':   { ko: 'Digital', en: 'Digital', zh: 'Digital', ja: 'Digital' },

  /* Capabilities — Performance */
  'about.cap.p1': { ko: '라이브 이벤트 공동 제작', en: 'Live Event Co-Production', zh: '现场演出联合制作', ja: 'ライブイベント共同制作' },
  'about.cap.p2': { ko: '이벤트 프로덕션', en: 'Event Production', zh: '活动制作', ja: 'イベントプロダクション' },
  'about.cap.p3': { ko: '팬미팅 운영', en: 'Fan Meeting Management', zh: '粉丝见面会管理', ja: 'ファンミーティング運営' },
  'about.cap.p4': { ko: '아티스트 호스피탈리티', en: 'Artist Hospitality', zh: '艺人接待服务', ja: 'アーティストホスピタリティ' },
  'about.cap.p5': { ko: '투어 매니지먼트', en: 'Tour Management', zh: '巡演管理', ja: 'ツアーマネジメント' },

  /* Capabilities — IP & Media */
  'about.cap.i1': { ko: '아티스트 IP 굿즈', en: 'Artist IP Merchandise', zh: '艺人IP周边', ja: 'アーティストIP商品' },
  'about.cap.i2': { ko: '현지 프로모션', en: 'Local Promotion', zh: '本地推广', ja: 'ローカルプロモーション' },
  'about.cap.i3': { ko: '미디어 & PR', en: 'Media & PR', zh: '媒体与公关', ja: 'メディア＆PR' },
  'about.cap.i4': { ko: '콘텐츠 유통', en: 'Content Distribution', zh: '内容发行', ja: 'コンテンツ配信' },
  'about.cap.i5': { ko: '엔터테인먼트 웹 플랫폼', en: 'Entertainment Web Platform', zh: '娱乐网站平台', ja: 'エンターテインメント ウェブ プラットフォーム' },

  /* Stats */
  'about.stat1': { ko: '창업 이래', en: 'Years in Business', zh: '创立至今', ja: '創業以来' },
  'about.stat2': { ko: '글로벌 콘서트', en: 'Global Concerts Produced', zh: '全球演唱会', ja: 'グローバルコンサート' },
  'about.stat3': { ko: '기업 클라이언트', en: 'Corporate Clients', zh: '企业客户', ja: '企業クライアント' },

  /* ── FOOTER ── */
  'footer.cta': {
    ko: '프로젝트 시작하기',
    en: 'Start a project',
    zh: '开始项目',
    ja: 'プロジェクトを始める',
  },

  /* ── CONTACT PAGE ── */
  'contact.copy.line1': { ko: "Let's Make",      en: "Let's Make",      zh: "Let's Make",      ja: "Let's Make" },
  'contact.copy.line2': { ko: 'Something Great.', en: 'Something Great.', zh: 'Something Great.', ja: 'Something Great.' },
  'contact.info.label': { ko: '파트너십 문의', en: 'Get in Touch', zh: '合作咨询', ja: 'お問い合わせ' },
  'contact.heading':    { ko: '함께<br>만들어가요.', en: 'Let\'s build<br>together.', zh: '一起<br>创造吧。', ja: 'ともに<br>つくろう。' },
  'contact.body':       {
    ko: '공연 기획, 굿즈 협업, 브랜드 파트너십 등 모든 비즈니스 문의를 환영합니다. 아이디어가 있다면 언제든지 연락주세요.',
    en: 'We welcome all business inquiries — concert planning, merchandise collaboration, brand partnerships. If you have an idea, reach out anytime.',
    zh: '欢迎演出策划、周边合作、品牌合作等一切商业咨询。有想法随时联系我们。',
    ja: '公演企画、グッズコラボ、ブランドパートナーシップなど、あらゆるビジネスのお問い合わせを歓迎します。アイデアがあればいつでもご連絡ください。',
  },
  'contact.hero.sub': {
    ko: '프로젝트, 공연 파트너십, 굿즈 협업 — 무엇이든 이야기해주세요.',
    en: 'Projects, performance partnerships, merchandise collaboration — let\'s talk.',
    zh: '项目合作、演出合作、周边联名 — 欢迎联系我们。',
    ja: 'プロジェクト、公演パートナーシップ、グッズコラボ — なんでもご相談ください。',
  },
  'contact.form.name': { ko: '이름', en: 'Name', zh: '姓名', ja: 'お名前' },
  'contact.form.email': { ko: '이메일', en: 'Email', zh: '电子邮件', ja: 'メールアドレス' },
  'contact.form.company': { ko: '회사 / 소속', en: 'Company', zh: '公司', ja: '会社名' },
  'contact.form.message': { ko: '메시지', en: 'Message', zh: '留言', ja: 'メッセージ' },
  'contact.form.submit': { ko: '보내기', en: 'Send', zh: '发送', ja: '送信' },

  /* ── BUSINESS PAGE ── */
  'biz.copy.line1':  { ko: 'Stage is Culture.', en: 'Stage is Culture.', zh: 'Stage is Culture.', ja: 'Stage is Culture.' },
  'biz.copy.line2':  { ko: 'Merch is Memory.', en: 'Merch is Memory.', zh: 'Merch is Memory.', ja: 'Merch is Memory.' },
  'biz.intro':       {
    ko: 'K-POP 공연 기획, 아티스트 IP 굿즈, 디지털 경험. 세 가지 전문 영역으로 엔터테인먼트의 전 과정을 설계합니다.',
    en: 'Concert production, artist IP merchandise, digital experience. Three specialized fields designing every stage of entertainment.',
    zh: '演出制作、艺人IP周边、数字体验。三个专业领域，设计娱乐的每一个环节。',
    ja: '公演制作、アーティストIPグッズ、デジタルエクスペリエンス。三つの専門分野でエンターテインメントの全工程を設計します。',
  },
  'biz.hero.sub':    { ko: 'What We Do', en: 'What We Do', zh: 'What We Do', ja: 'What We Do' },
  'biz.title1':      { ko: '글로벌 K-POP<br>공연 기획',      en: 'Global K-POP<br>Concert Production', zh: '全球K‑POP<br>演出制作',    ja: 'グローバルK‑POP<br>公演企画' },
  'biz.title2':      { ko: '아티스트 IP<br>글로벌 굿즈',     en: 'Artist IP<br>Global Merchandise',   zh: '艺人IP<br>全球周边',      ja: 'アーティストIP<br>グローバルグッズ' },
  'biz.title3':      { ko: '브랜드 &amp;<br>아티스트 시너지', en: 'Brand &amp;<br>Artist Synergy',      zh: '品牌与<br>艺人协同',      ja: 'ブランドと<br>アーティストの<br>相乗効果' },
  'biz.keywords1':   { ko: 'World Tour · Fan Meeting · Showcase · Festival',          en: 'World Tour · Fan Meeting · Showcase · Festival',          zh: 'World Tour · Fan Meeting · Showcase · Festival',          ja: 'World Tour · Fan Meeting · Showcase · Festival' },
  'biz.keywords2':   { ko: 'Limited Edition · Collaboration · Official Merch · Pop-up Store', en: 'Limited Edition · Collaboration · Official Merch · Pop-up Store', zh: 'Limited Edition · Collaboration · Official Merch · Pop-up Store', ja: 'Limited Edition · Collaboration · Official Merch · Pop-up Store' },
  'biz.keywords3':   { ko: 'Brand Deal · Licensing · Digital Contents · NFT / IP',    en: 'Brand Deal · Licensing · Digital Contents · NFT / IP',    zh: 'Brand Deal · Licensing · Digital Contents · NFT / IP',    ja: 'Brand Deal · Licensing · Digital Contents · NFT / IP' },
  'biz.panel1.label': { ko: '공연 기획', en: 'Performance', zh: '演出制作', ja: 'パフォーマンス' },
  'biz.panel1.desc': {
    ko: 'K-POP 콘서트, 팬미팅, 아시아 투어 전 과정을 기획·제작·운영합니다.',
    en: 'Full-cycle planning, production, and management of K-POP concerts, fan meetings, and Asia tours.',
    zh: '全流程策划、制作和运营K‑POP演唱会、粉丝见面会及亚洲巡演。',
    ja: 'K‑POPコンサート、ファンミーティング、アジアツアーの全工程を企画・制作・運営します。',
  },
  'biz.panel2.label': { ko: 'IP 굿즈', en: 'IP Merch', zh: 'IP周边', ja: 'IPグッズ' },
  'biz.panel2.desc': {
    ko: '아티스트 IP 기반 굿즈를 기획하고 글로벌 유통망을 통해 팬들에게 전달합니다.',
    en: 'Artist IP-based merchandise designed and delivered to fans through global distribution networks.',
    zh: '基于艺人IP设计周边产品，通过全球分销网络送达粉丝手中。',
    ja: 'アーティストIPに基づくグッズを企画し、グローバル流通ネットワークでファンに届けます。',
  },
  'biz.panel3.label': { ko: '디지털 경험', en: 'Digital Experience', zh: '数字体验', ja: 'デジタルエクスペリエンス' },
  'biz.panel3.desc': {
    ko: '브랜드 아이덴티티부터 웹·앱 개발까지, 엔터테인먼트 산업에 최적화된 디지털 솔루션을 제공합니다.',
    en: 'From brand identity to web and app development, digital solutions tailored for the entertainment industry.',
    zh: '从品牌视觉到网站与应用开发，为娱乐行业量身打造的数字解决方案。',
    ja: 'ブランドアイデンティティからウェブ・アプリ開発まで、エンターテインメント産業に最適化したデジタルソリューション。',
  },

  /* ── ABOUT — CLIENTS ── */
  'client.samsung':    { ko: '삼성전자',       en: 'Samsung',           zh: '三星电子',       ja: 'サムスン電子' },
  'client.lg':         { ko: 'LG전자',         en: 'LG Electronics',    zh: 'LG电子',         ja: 'LG電子' },
  'client.lgcns':      { ko: 'LG CNS',         en: 'LG CNS',            zh: 'LG CNS',         ja: 'LG CNS' },
  'client.sk':         { ko: 'SK그룹',         en: 'SK Group',          zh: 'SK集团',         ja: 'SKグループ' },
  'client.line':       { ko: 'LINE',           en: 'LINE',              zh: 'LINE',           ja: 'LINE' },
  'client.sm':         { ko: 'SM엔터테인먼트', en: 'SM Entertainment',  zh: 'SM娱乐',         ja: 'SMエンタテインメント' },
  'client.kakao':      { ko: '카카오뱅크',     en: 'KakaoBank',         zh: 'Kakao银行',      ja: 'カカオバンク' },
  'client.koreanair':  { ko: '대한항공',       en: 'Korean Air',        zh: '大韩航空',       ja: '大韓航空' },
  'client.jtbc':       { ko: 'JTBC',           en: 'JTBC',              zh: 'JTBC',           ja: 'JTBC' },
  'client.cjenm':      { ko: 'CJ ENM',         en: 'CJ ENM',            zh: 'CJ ENM',         ja: 'CJ ENM' },
  'client.cjshopping': { ko: 'CJ온스타일',     en: 'CJ Shopping',       zh: 'CJ购物',         ja: 'CJショッピング' },
  'client.hanwha':     { ko: '한화',           en: 'Hanwha',            zh: '韩华',           ja: 'ハンファ' },
  'client.kt':         { ko: 'KT',             en: 'KT',                zh: 'KT',             ja: 'KT' },
  'client.amore':      { ko: '아모레퍼시픽',   en: 'Amore Pacific',     zh: '爱茉莉太平洋',   ja: 'アモーレパシフィック' },
  'client.vw':         { ko: '폭스바겐 코리아', en: 'Volkswagen Korea',  zh: '大众汽车韩国',   ja: 'フォルクスワーゲン コリア' },
  'client.samhwa':     { ko: '삼화페인트',     en: 'Samhwa Paint',      zh: '三和涂料',       ja: '三和ペイント' },
  'client.dankook':    { ko: '단국대학교',     en: 'Dankook University', zh: '檀国大学',       ja: '檀国大学校' },

  /* ── ABOUT — CLIENTS (Performance: Artists) ── */
  'client.gikwang':   { ko: '이기광',     en: 'Lee Gikwang',   zh: '李基光',   ja: 'イ・ギグァン' },
  'client.yoseop':    { ko: '양요섭',     en: 'Yang Yoseop',   zh: '梁耀燮',   ja: 'ヤン・ヨソプ' },
  'client.highlight': { ko: 'Highlight',  en: 'Highlight',     zh: 'Highlight', ja: 'Highlight' },
  'client.xin':       { ko: 'X:IN',       en: 'X:IN',          zh: 'X:IN',     ja: 'X:IN' },
  'client.xodiac':    { ko: 'XODIAC',     en: 'XODIAC',        zh: 'XODIAC',   ja: 'XODIAC' },
  'client.justb':     { ko: 'JUSTB',      en: 'JUSTB',         zh: 'JUSTB',    ja: 'JUSTB' },
  'client.shinhye':   { ko: '박신혜',     en: 'Park Shin Hye', zh: '朴信惠',   ja: 'パク・シネ' },
  'client.niziu':     { ko: 'NiziU',      en: 'NiziU',         zh: 'NiziU',    ja: 'NiziU' },
  'client.plave':     { ko: 'Plave',      en: 'Plave',         zh: 'Plave',    ja: 'Plave' },
  'client.jackson':   { ko: 'Jackson Wang', en: 'Jackson Wang', zh: '王嘉尔',  ja: 'ジャクソン・ワン' },
  'client.mark':      { ko: 'Mark Tuan',  en: 'Mark Tuan',     zh: '段宜恩',   ja: 'マーク・トゥアン' },
  'client.kstallions':{ ko: 'K Stallions', en: 'K Stallions',  zh: 'K Stallions', ja: 'K Stallions' },
  'client.kimyk':     { ko: '김영광',     en: 'Kim Young Kwang', zh: '金映光', ja: 'キム・ヨングァン' },

  /* ── ABOUT — CLIENTS (Performance: Partners) ── */
  'client.farglory':  { ko: 'Farglory Creative', en: 'Farglory Creative', zh: '遠雄創藝',  ja: 'Farglory Creative' },
  'client.superdome': { ko: 'Super Dome',  en: 'Super Dome',    zh: '超級圓頂',  ja: 'Super Dome' },
  'client.ime':       { ko: 'iMe',         en: 'iMe',           zh: 'iMe',       ja: 'iMe' },
  'client.ddconcert': { ko: 'DD Concert',  en: 'DD Concert',    zh: 'DD Concert', ja: 'DD Concert' },
  'client.viu':       { ko: 'Viu',         en: 'Viu',           zh: 'Viu',        ja: 'Viu' },
  'client.kham':      { ko: 'KHAM INC.',   en: 'KHAM INC.',     zh: '寬宏藝術',  ja: 'KHAM INC.' },
  'client.mmie':      { ko: 'MMie Entertainment', en: 'MMie Entertainment', zh: 'MMie Entertainment', ja: 'MMie Entertainment' },
  'client.threeangles':{ ko: 'Three Angles Production', en: 'Three Angles Production', zh: 'Three Angles Production', ja: 'Three Angles Production' },
  'client.dshow':     { ko: 'D.Show Entertainment', en: 'D.Show Entertainment', zh: 'D.Show Entertainment', ja: 'D.Show Entertainment' },
  'client.feoh':      { ko: 'Feoh Performing Arts', en: 'Feoh Performing Arts', zh: 'Feoh Performing Arts', ja: 'Feoh Performing Arts' },
  'client.alfa':      { ko: 'ALFA MUSIC',  en: 'ALFA MUSIC',    zh: 'ALFA MUSIC', ja: 'ALFA MUSIC' },
  'client.chillin':   { ko: 'Chillin',     en: 'Chillin',       zh: 'Chillin',    ja: 'Chillin' },

  /* ── ABOUT: Section headings / Filter ── */
  'filter.all':        { ko: 'All',               en: 'All',               zh: 'All',               ja: 'All' },
  'about.clients.hl':  { ko: 'Clients',           en: 'Clients',           zh: 'Clients',           ja: 'Clients' },
  'about.partners.hl': { ko: 'Partners',          en: 'Partners',          zh: 'Partners',          ja: 'Partners' },

  /* ── WORK PAGE ── */
  'work.copy.line1': { ko: 'Move the Crowd.', en: 'Move the Crowd.', zh: 'Move the Crowd.', ja: 'Move the Crowd.' },
  'work.copy.line2': { ko: 'Own the Moment.', en: 'Own the Moment.', zh: 'Own the Moment.', ja: 'Own the Moment.' },
  'work.filter.all':        { ko: 'All Work',    en: 'All Work',    zh: 'All Work',    ja: 'All Work' },
  'work.filter.live':       { ko: 'Live',        en: 'Live',        zh: 'Live',        ja: 'Live' },
  'work.filter.branding':   { ko: 'Branding',    en: 'Branding',    zh: 'Branding',    ja: 'Branding' },
  'work.filter.campaign':   { ko: 'Campaign',    en: 'Campaign',    zh: 'Campaign',    ja: 'Campaign' },
  'work.filter.website':    { ko: 'Website',     en: 'Website',     zh: 'Website',     ja: 'Website' },
  'work.filter.app':        { ko: 'App',         en: 'App',         zh: 'App',         ja: 'App' },
  'work.filter.ecommerce':  { ko: 'E-Commerce',  en: 'E-Commerce',  zh: 'E-Commerce',  ja: 'E-Commerce' },
  'work.filter.experience': { ko: 'Experience',  en: 'Experience',  zh: 'Experience',  ja: 'Experience' },

};

/* ─────────────────────────────────────────
   Apply translations to current page
   ───────────────────────────────────────── */
function applyI18n(lang) {
  const fallback = 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const entry = GRAP_I18N[key];
    if (!entry) return;
    const text = entry[lang] || entry[fallback] || '';
    el.innerHTML = text;
  });
}

/* Init + listen */
(function () {
  const lang = localStorage.getItem('grap-lang') || 'ko';
  applyI18n(lang);
  document.addEventListener('grap:lang', e => applyI18n(e.detail.lang));
})();
