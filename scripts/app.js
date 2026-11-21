/* ==========================================================================
   WEDDING_CONFIG — ЕДИНЫЙ КОНФИГ ДАННЫХ И ТЕКСТОВ ПРИГЛАСИТЕЛЬНОГО
   ========================================================================== */
const WEDDING_CONFIG = {
  couple: {
    signature: 'ERBOL & NURAIDA',
    heroCaps: 'ERBOL & NURAIDA',
    whatsappPhone: '', // Optional: e.g. '996700000000'
  },
  rsvpEndpoint: '', // Optional: Formspree / Google Apps Script / Telegram webhook URL
  date: {
    day: '03',
    monthShort: 'DEC',
    yearShort: '26',
    cornerDate: '03 • 12 • 2026',
    watermarkShort: '03.12.26',
    watermarkFull: '03.12.2026',
    time: '18:00',
  },
  location: {
    name: 'Bellagio Banquet Hall',
    coords: [42.865308, 74.631984],
    zoom: 15,
    twoGisUrl: 'https://2gis.kg/bishkek/firm/70000001035315188',
  },
  music: {
    src: 'assets/audio/wedding-melody.mp3?v=2',
    targetVolume: 0.42,
  },
  i18n: {
    kg: {
      pageTitle: 'Erbol & Nuraida — 03.12.2026 | Тойго чакыруу',
      envelopeEyebrow: 'Чакыруу',
      envelopeCtaTop: 'Чакырууну ачуу үчүн басыңыз',
      heroTopLabel: 'ТОЙГО ЧАКЫРУУ',
      heroEventCategory: 'ҮЛПӨТ ТОЙ',
      heroMonthFull: 'ДЕКАБРЬ',
      heroBottomLabel: '2026 • СААТ 18:00',
      heroDateFull: '03 ДЕКАБРЬ 2026',
      heroCity: 'Бишкек',
      welcomeEyebrow: 'СИЗДЕР ҮЧҮН ӨЗГӨЧӨ ЧАКЫРУУ',
      welcomeHeading: 'УРМАТТУУ',
      welcomeHeadingScript: 'коноктор!',
      welcomeTextHtml:
        'Аруу тилектер орундалып, жаңы очогубуз тутанган кубанычтуу күнүбүздө сиздер менен бирге болуу биз үчүн чоң бакыт!',
      welcomeDateCaps: '03.12.26 - 18.00',
      addCalendarBtn: 'КАЛЕНДАРГА КОШУУ',
      addCalendarDone: 'КАЛЕНДАРГА КОШУЛДУ ✓',
      calendarEventTitle: 'Erbol & Nuraida — Үлпөт той',
      calendarEventDesc: 'Эрбол & Нураиданын үлпөт тою. Bellagio Banquet Hall, Бишкек ш., Лев Толстой көч., 36к/1',
      countdownEyebrow: 'ТОЙГО ЧЕЙИН',
      countdownHeading: 'калды',
      countdownStartedHeading: 'башталды!',
      cdDays: 'күн',
      cdHours: 'саат',
      cdMins: 'мүнөт',
      cdSecs: 'секунд',
      locationHeading: 'ТОЙДУН ДАРЕГИ',
      locationName: 'Bellagio Banquet Hall',
      locationAddress: 'Бишкек ш., Лев Толстой көч., 36к/1',
      locationBtn: 'КАРТАДАН КӨРҮҮ',
      dresscodeHeading: 'ДРЕСС',
      dresscodeHeadingScript: 'код',
      dresscodeText1: 'Тоюбуздун эң башкы көркү — сиздердин катышууңуздар.',
      dresscodeText2:
        'Биздин кеченин негизги өңү — кара түс. Сиздерден кара түстөгү кечки кийимде келүүңүздөрдү суранабыз.',
      rsvpBannerHeading: 'КОНОК АНКЕТАСЫ',
      rsvpBannerText:
        'Сиздерди татыктуу тосуп алуубуз үчүн, сураныч, бул анкетаны толтуруп коюңуз:',
      rsvpOpenBtn: 'ТОЛТУРУУ',
      rsvpHeadingHtml: 'КАТЫШУУНУ ТАСТЫКТОО',
      rsvpSubtitle:
        'Сиздерди татыктуу тосуп алуубуз үчүн, келишиңизди алдын ала белгилеп коюуңузду суранабыз',
      rsvpNameLabel: 'Сиздин аты-жөнүңүз',
      rsvpNameHint: 'эгер жубайыңыз же үй-бүлөңүз менен келсеңиз, коноктордун баарын жазыңыз',
      rsvpNamePlaceholder: 'Асанов Тилек, Асанова Айжан',
      rsvpQuestion: 'Биздин кубанычыбызга ортоктош боло аласызбы?',
      rsvpOptYes: 'Ооба, сөзсүз барам',
      rsvpOptNo: 'Тилекке каршы, бара албайм',
      rsvpSubmit: 'ТАСТЫКТОО',
      rsvpSubmitting: 'САКТАЛУУДА...',
      rsvpError: 'Сураныч, аты-жөнүңүздү жазыңыз.',
      rsvpSaveError: 'Жообуңузду сактоо мүмкүн болбоду. Кайра аракет кылыңыз.',
      confirmTitle: 'ЖООБУҢУЗ КАБЫЛ АЛЫНДЫ!',
      confirmYesPrefix: 'Сизди тоюбузда чоң кубаныч менен күтөбүз, ',
      confirmNoPrefix: 'Кабарлап койгонуңуз үчүн чоң рахмат, ',
      confirmWaBtn: 'WHATSAPP АРКЫЛУУ БИЛДИРҮҮ',
      confirmWaTextYes: 'Саламатсыздарбы! 3-декабрдагы үлпөт тойго сөзсүз барам. Конок: ',
      confirmWaTextNo: 'Саламатсыздарбы! Тилекке каршы, 3-декабрдагы тойго бара албайм. Конок: ',
      confirmEditBtn: 'ЖООПТУ ӨЗГӨРТҮҮ',
      wishesEyebrow: 'КААЛОО-ТИЛЕКТЕР КИТЕБИ',
      wishesHeading: 'КААЛОО',
      wishesHeadingScript: 'тилектер',
      wishesSubtitle: 'Сиздин ар бир жылуу сөзүңүз жана батаңыз — жаңы үй-бүлөбүз үчүн эң кымбат белек.',
      wishesNameLabel: 'Сиздин ысымыңыз',
      wishesNamePlaceholder: 'Ысымыңызды жазыңыз',
      wishesMsgLabel: 'Каалоо-тилегиңиз',
      wishesMsgPlaceholder: 'Эрбол менен Нураидага каалооңуз...',
      wishesVisibilityNote: 'Калтырылган тилектер сайттагы коноктор китебинде сакталат.',
      wishesSubmitLabel: 'КААЛОО ЖӨНӨТҮҮ',
      wishesSubmitting: 'ЖӨНӨТҮЛҮҮДӨ...',
      wishesError: 'Сураныч, ысымыңызды жана каалоо-тилегиңизди жазыңыз.',
      wishesSaveError: 'Тилекти жөнөтүү мүмкүн болбоду. Кайра аракет кылыңыз.',
      wishesListTitle: 'КОНОКТОРДУН ТИЛЕКТЕРИ',
      wishesSwipeHint: 'Башка куттуктоолорду окуу үчүн капталга сүрүңүз.',
      wishesEmptyText: 'Азырынча тилектер жок — алгачкы каалоону сиз калтырыңыз!',
      loveNote1:
        'Биз үчүн эң башкы белек — сиздердин катышууңуздар жана жылуу батаңыздар. Бул маанилүү күнү баарыңыздарды чоң кубаныч менен күтөбүз.',
      loveSignoff: 'урматтоо менен,',
      loveNamesScript: 'Эрбол жана Нураида',
      shareHeading: 'ЧАКЫРУУНУ',
      shareHeadingScript: 'таратуу',
      shareTabCover: 'МУКАБА',
      shareTabInvite: 'ЧАКЫРУУ',
      shareCoverTop: 'ҮЛПӨТ ТОЙ',
      shareCoverMonth: 'ДЕКАБРЬ',
      shareCoverMeta: '2026 • СААТ 18:00',
      shareInviteTop: 'ҮЛПӨТ ТОЙ • БИШКЕК',
      shareInviteBody: 'Сиздерди биздин үлпөт тоюбуздун кадырлуу коногу болууга чын жүрөктөн чакырабыз',
      shareDownloadBtn: 'СҮРӨТТҮ САКТОО',
      shareSavedToast: 'Сүрөт сакталды! Instagram Story’ге жүктөңүз ✓',
      shareCopyBtn: 'ШИЛТЕМЕНИ КӨЧҮРҮҮ',
      shareCopiedBtn: 'ШИЛТЕМЕ КӨЧҮРҮЛДҮ ✓',
      wishAddedToast: 'Тилегиңиз кошулду ✓',
      shareStoryHint: 'Даяр сүрөттү жүктөп алып, жакындарыңыз менен же Instagram Story аркылуу бөлүшсөңүз болот.',
      shareMessageText:
        'Эрбол & Нураида — Үлпөт тойго чакыруу! 03.12.2026, саат 18:00, Bellagio Banquet Hall (Бишкек).',
      footerHeading: 'СИЗДЕРДИ КУБАНЫЧ МЕНЕН КҮТӨБҮЗ!',
      backToTopBtn: 'БАШЫНА КАЙТУУ ↑',
      musicPlayLabel: 'Музыканы күйгүзүү',
      musicMuteLabel: 'Музыканы өчүрүү',
      musicOnToast: 'Музыка күйгүзүлдү',
      musicOffToast: 'Музыка өчүрүлдү',
    },
    ru: {
      pageTitle: 'Erbol & Nuraida — 03.12.2026 | Приглашение на свадьбу',
      envelopeEyebrow: 'Приглашение',
      envelopeCtaTop: 'Нажмите, чтобы открыть приглашение',
      heroTopLabel: 'ПРИГЛАШЕНИЕ НА СВАДЬБУ',
      heroEventCategory: 'СВАДЕБНОЕ ТОРЖЕСТВО',
      heroMonthFull: 'ДЕКАБРЯ',
      heroBottomLabel: '2026 • В 18:00',
      heroDateFull: '3 ДЕКАБРЯ 2026',
      heroCity: 'Бишкек',
      welcomeEyebrow: 'ОСОБОЕ ПРИГЛАШЕНИЕ ДЛЯ ВАС',
      welcomeHeading: 'ДОРОГИЕ',
      welcomeHeadingScript: 'родные и близкие!',
      welcomeTextHtml:
        'Мы хотим разделить вместе с вами счастливые мгновения нашего свадебного дня',
      welcomeDateCaps: '03.12.26 - 18.00',
      addCalendarBtn: 'ДОБАВИТЬ В КАЛЕНДАРЬ',
      addCalendarDone: 'ДОБАВЛЕНО В КАЛЕНДАРЬ ✓',
      calendarEventTitle: 'Erbol & Nuraida — Свадьба',
      calendarEventDesc: 'Свадебное торжество Эрбола и Нураиды. Bellagio Banquet Hall, г. Бишкек, ул. Льва Толстого, 36к/1',
      countdownEyebrow: 'ДО СВАДЬБЫ',
      countdownHeading: 'осталось',
      countdownStartedHeading: 'началось!',
      cdDays: 'дней',
      cdHours: 'часов',
      cdMins: 'минут',
      cdSecs: 'секунд',
      locationHeading: 'ЛОКАЦИЯ',
      locationName: 'Bellagio Banquet Hall',
      locationAddress: 'г. Бишкек, ул. Льва Толстого, 36к/1',
      locationBtn: 'ПЕРЕЙТИ НА КАРТУ',
      dresscodeHeading: 'ДРЕСС',
      dresscodeHeadingScript: 'код',
      dresscodeText1: 'Самым главным украшением нашей свадьбы будете вы.',
      dresscodeText2:
        'Основной цвет нашего вечера — чёрный. Будем рады видеть вас в нарядах в чёрной цветовой гамме.',
      rsvpBannerHeading: 'АНКЕТА ГОСТЯ',
      rsvpBannerText:
        'Для того, чтобы мы могли подготовиться к мероприятию, пожалуйста, заполните данную анкету:',
      rsvpOpenBtn: 'ЗАПОЛНИТЬ',
      rsvpHeadingHtml: 'ПОДТВЕРЖДЕНИЕ Г<span class="editorial-interlock">О</span>СТЯ',
      rsvpSubtitle:
        'Чтобы мы могли позаботиться о Вашем комфорте, пожалуйста, подтвердите своё присутствие',
      rsvpNameLabel: 'Ваше имя и фамилия',
      rsvpNameHint: 'если Вы будете со спутником или семьёй, перечислите всех гостей',
      rsvpNamePlaceholder: 'Иванов Иван, Иванова Мария',
      rsvpQuestion: 'Сможете ли Вы разделить с нами этот вечер?',
      rsvpOptYes: 'Да, с радостью приду',
      rsvpOptNo: 'К сожалению, не смогу присутствовать',
      rsvpSubmit: 'ПОДТВЕРДИТЬ',
      rsvpSubmitting: 'СОХРАНЕНИЕ...',
      rsvpError: 'Пожалуйста, укажите Ваше имя и фамилию.',
      rsvpSaveError: 'Не удалось сохранить ответ. Попробуйте ещё раз.',
      confirmTitle: 'ВАШ ОТВЕТ СОХРАНЁН!',
      confirmYesPrefix: 'До скорой встречи на нашем празднике, ',
      confirmNoPrefix: 'Благодарим, что сообщили нам заранее, ',
      confirmWaBtn: 'ОТПРАВИТЬ В WHATSAPP',
      confirmWaTextYes: 'Здравствуйте! С радостью подтверждаю присутствие на свадьбе 3 декабря. Гость: ',
      confirmWaTextNo: 'Здравствуйте! К сожалению, не смогу присутствовать на свадьбе 3 декабря. Гость: ',
      confirmEditBtn: 'ИЗМЕНИТЬ ОТВЕТ',
      wishesEyebrow: 'КНИГА ПОЖЕЛАНИЙ',
      wishesHeading: 'ПОЖЕЛАНИЯ',
      wishesHeadingScript: 'молодожёнам',
      wishesSubtitle: 'Ваши искренние слова и напутствия станут тёплой семейной реликвией для Эрбола и Нураиды.',
      wishesNameLabel: 'Ваше имя',
      wishesNamePlaceholder: 'Укажите ваше имя',
      wishesMsgLabel: 'Текст пожелания',
      wishesMsgPlaceholder: 'Напишите тёплые слова для пары...',
      wishesVisibilityNote: 'Опубликованные пожелания отображаются в общей ленте гостей.',
      wishesSubmitLabel: 'ОТПРАВИТЬ ПОЖЕЛАНИЕ',
      wishesSubmitting: 'ОТПРАВКА...',
      wishesError: 'Пожалуйста, укажите ваше имя и текст пожелания.',
      wishesSaveError: 'Не удалось отправить пожелание. Попробуйте ещё раз.',
      wishesListTitle: 'ТЕПЛЫЕ СЛОВА ГОСТЕЙ',
      wishesSwipeHint: 'Листайте карточки в сторону, чтобы прочитать все поздравления.',
      wishesEmptyText: 'Пока нет пожеланий — станьте первыми, кто поздравит пару!',
      loveNote1:
        'Главный подарок для нас — ваше присутствие и тёплые слова. Будем с радостью ждать каждого из вас в этот важный для нас день.',
      loveSignoff: 'с любовью,',
      loveNamesScript: 'Эрбол и Нураида',
      shareHeading: 'ПОДЕЛИТЬСЯ',
      shareHeadingScript: 'приглашением',
      shareTabCover: 'ОБЛОЖКА',
      shareTabInvite: 'ПРИГЛАШЕНИЕ',
      shareCoverTop: 'СВАДЕБНОЕ ТОРЖЕСТВО',
      shareCoverMonth: 'ДЕКАБРЯ',
      shareCoverMeta: '2026 • В 18:00',
      shareInviteTop: 'СВАДЬБА • БИШКЕК',
      shareInviteBody: 'С любовью приглашаем Вас разделить с нами радость нашего свадебного вечера',
      shareDownloadBtn: 'СОХРАНИТЬ ФОТО',
      shareSavedToast: 'Фото сохранено! Загрузите в Instagram Story ✓',
      shareCopyBtn: 'СКОПИРОВАТЬ ССЫЛКУ',
      shareCopiedBtn: 'ССЫЛКА СКОПИРОВАНА ✓',
      wishAddedToast: 'Ваше пожелание добавлено ✓',
      shareStoryHint: 'Скачайте готовую карточку, чтобы отправить близким или опубликовать в Instagram Story.',
      shareMessageText:
        'Erbol & Nuraida — Приглашение на свадьбу! 03.12.2026 в 18:00, Bellagio Banquet Hall (г. Бишкек).',
      footerHeading: 'ДО ВСТРЕЧИ НА НАШЕМ ПРАЗДНИКЕ!',
      backToTopBtn: 'ВЕРНУТЬСЯ НАВЕРХ ↑',
      musicPlayLabel: 'Включить музыку',
      musicMuteLabel: 'Выключить музыку',
      musicOnToast: 'Музыка включена',
      musicOffToast: 'Музыка выключена',
    },
  },
  defaultWishes: [],
};

(() => {
  'use strict';

  const STORAGE_KEY = 'erbol_nuraida_rsvp_v2';
  const LANG_STORAGE_KEY = 'erbol_nuraida_lang_v1';
  let currentLang = 'kg';
  let lastSubmission = null;
  let toastTimer = null;

  function showToast(message) {
    const toast = document.getElementById('editorial-toast');
    if (!toast || !message) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2800);
  }

  /* ------------------------------------------------------------------------
     RENDER & LOCALIZATION FROM WEDDING_CONFIG
     ------------------------------------------------------------------------ */
  function setText(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.textContent = val;
  }

  function setHtml(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.innerHTML = val;
  }

  function applyConfig(lang) {
    currentLang = WEDDING_CONFIG.i18n[lang] ? lang : 'kg';
    document.documentElement.lang = currentLang === 'kg' ? 'ky' : 'ru';
    try {
      localStorage.setItem(LANG_STORAGE_KEY, currentLang);
    } catch (_) {}

    const t = WEDDING_CONFIG.i18n[currentLang];
    if (t.pageTitle) document.title = t.pageTitle;

    // Opening Envelope Gate
    setText('envelope-eyebrow', t.envelopeEyebrow);
    setText('envelope-cta-top', t.envelopeCtaTop);

    // Hero & Static Config Values
    setText('hero-date-full', t.heroDateFull);

    const twoGisBtn = document.getElementById('location-2gis-btn');
    if (twoGisBtn) twoGisBtn.href = WEDDING_CONFIG.location.twoGisUrl;

    // Localized Copy
    setText('welcome-heading', t.welcomeHeading);
    setText('welcome-heading-script', t.welcomeHeadingScript);
    setHtml('welcome-text', t.welcomeTextHtml);
    setText('welcome-date-caps', t.welcomeDateCaps);
    setText('add-calendar-label', t.addCalendarBtn);

    setText('countdown-eyebrow', t.countdownEyebrow);
    setText('countdown-heading', t.countdownHeading);
    setText('cd-days-label', t.cdDays);
    setText('cd-hours-label', t.cdHours);
    setText('cd-mins-label', t.cdMins);
    setText('cd-secs-label', t.cdSecs);

    setText('location-heading', t.locationHeading);
    setText('location-name', t.locationName);
    setText('location-address', t.locationAddress);
    setText('location-2gis-btn', t.locationBtn);

    setText('dresscode-heading', t.dresscodeHeading);
    setText('dresscode-heading-script', t.dresscodeHeadingScript);
    setText('dresscode-text-1', t.dresscodeText1);
    setText('dresscode-text-2', t.dresscodeText2);

    setText('rsvp-banner-heading', t.rsvpBannerHeading);
    setText('rsvp-banner-text', t.rsvpBannerText);
    setText('rsvp-open-modal-btn', t.rsvpOpenBtn);

    setHtml('rsvp-heading', t.rsvpHeadingHtml);
    setText('rsvp-subtitle', t.rsvpSubtitle);
    setText('rsvp-name-label', t.rsvpNameLabel);
    setText('rsvp-name-hint', t.rsvpNameHint);

    const nameInput = document.getElementById('guest-name');
    if (nameInput) nameInput.setAttribute('placeholder', t.rsvpNamePlaceholder);

    setText('rsvp-question', t.rsvpQuestion);
    setText('rsvp-opt-yes', t.rsvpOptYes);
    setText('rsvp-opt-no', t.rsvpOptNo);
    setText('rsvp-submit-btn', t.rsvpSubmit);
    setText('confirm-title', t.confirmTitle);
    setText('rsvp-wa-confirm-btn', t.confirmWaBtn);
    setText('rsvp-edit-btn', t.confirmEditBtn);

    // Wishes Section
    setText('wishes-heading', t.wishesHeading);
    setText('wishes-heading-script', t.wishesHeadingScript);
    setText('wishes-subtitle', t.wishesSubtitle);
    setText('wishes-name-label', t.wishesNameLabel);
    setText('wishes-msg-label', t.wishesMsgLabel);
    setText('wishes-visibility-note', t.wishesVisibilityNote);
    setText('wishes-submit-btn', t.wishesSubmitLabel);
    setText('wishes-list-title', t.wishesListTitle);
    setText('wishes-swipe-hint', t.wishesSwipeHint);

    const wishAuthorInput = document.getElementById('wish-author');
    if (wishAuthorInput) wishAuthorInput.setAttribute('placeholder', t.wishesNamePlaceholder);

    const wishMsgInput = document.getElementById('wish-message');
    if (wishMsgInput) wishMsgInput.setAttribute('placeholder', t.wishesMsgPlaceholder);

    // Love Closing Section
    setText('love-note-1', t.loveNote1);
    setText('love-signoff', t.loveSignoff);
    setText('love-names-script', t.loveNamesScript);

    // Share & Footer
    setText('share-heading', t.shareHeading);
    setText('share-heading-script', t.shareHeadingScript);
    setText('share-tab-cover-label', t.shareTabCover);
    setText('share-tab-invite-label', t.shareTabInvite);
    setText('share-cover-date', t.heroDateFull);
    setText('share-invite-top', t.shareInviteTop);
    setText('share-invite-body', t.shareInviteBody);
    setText('share-download-btn', t.shareDownloadBtn);
    setText('share-copy-btn', t.shareCopyBtn);
    setText('share-story-hint', t.shareStoryHint);
    setText('back-to-top-btn', t.backToTopBtn);

    updateSocialShareLinks();

    if (lastSubmission) {
      renderConfirmationSummary(lastSubmission);
    }

    if (wishesList.length === 0) {
      renderWishesTrack();
    }

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const isMatch = btn.getAttribute('data-lang-btn') === currentLang;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-pressed', String(isMatch));
    });

    if (typeof syncMusicButtonState === 'function') {
      syncMusicButtonState();
    }
  }

  /* ------------------------------------------------------------------------
     RSVP FORM VALIDATION & CONFIRMATION SCREEN
     ------------------------------------------------------------------------ */
  function renderConfirmationSummary(data) {
    const t = WEDDING_CONFIG.i18n[currentLang];
    const detailsEl = document.getElementById('confirm-details');
    if (detailsEl) {
      const prefix = data.attendance === 'yes' ? t.confirmYesPrefix : t.confirmNoPrefix;
      detailsEl.textContent = `${prefix}${data.name}!`;
    }

    const waBtn = document.getElementById('rsvp-wa-confirm-btn');
    if (waBtn) {
      const msgPrefix = data.attendance === 'yes' ? t.confirmWaTextYes : t.confirmWaTextNo;
      const phone = WEDDING_CONFIG.couple.whatsappPhone
        ? WEDDING_CONFIG.couple.whatsappPhone.replace(/\D/g, '')
        : '';
      waBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(msgPrefix + data.name)}`;
    }
  }

  function getFocusableElements(container) {
    if (!container) return [];
    const selector = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(container.querySelectorAll(selector)).filter((el) => {
      if (el.offsetParent === null) return false;
      const hiddenParent = el.closest('.hidden, .is-hidden');
      return !hiddenParent;
    });
  }

  function trapDialogFocus(container, event) {
    if (event.key !== 'Tab') return;
    const focusables = getFocusableElements(container);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && (document.activeElement === first || !container.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function getOrCreateRsvpDocId() {
    const idKey = `${STORAGE_KEY}_doc_id`;
    try {
      const existing = localStorage.getItem(idKey);
      if (existing && existing.length >= 8 && existing.length <= 64) return existing;
      const created = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `rsvp_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem(idKey, created);
      return created;
    } catch (_) {
      return `rsvp_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    }
  }

  function initRsvpForm() {
    const modal = document.getElementById('rsvp-modal');
    const openModalBtn = document.getElementById('rsvp-open-modal-btn');
    const closeModalBtn = document.getElementById('rsvp-modal-close');
    const form = document.getElementById('rsvp-form');
    const modalHeader = document.getElementById('rsvp-modal-header');
    const nameInput = document.getElementById('guest-name');
    const errorEl = document.getElementById('rsvp-error');
    const confirmBox = document.getElementById('rsvp-confirmation');
    const editBtn = document.getElementById('rsvp-edit-btn');

    if (modal && openModalBtn) {
      let lastFocusedEl = null;

      const openRsvpModal = () => {
        lastFocusedEl = document.activeElement instanceof HTMLElement ? document.activeElement : openModalBtn;
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        window.setTimeout(() => {
          if (nameInput && !form?.classList.contains('hidden')) {
            nameInput.focus();
          } else {
            const focusables = getFocusableElements(modal);
            if (focusables.length) focusables[0].focus();
          }
        }, 50);
      };

      const closeRsvpModal = () => {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        const target = lastFocusedEl && document.contains(lastFocusedEl) ? lastFocusedEl : openModalBtn;
        target.focus();
      };

      openModalBtn.addEventListener('click', openRsvpModal);
      if (closeModalBtn) closeModalBtn.addEventListener('click', closeRsvpModal);
      modal.addEventListener('click', (event) => {
        if (event.target === modal) closeRsvpModal();
      });
      document.addEventListener('keydown', (event) => {
        if (modal.classList.contains('hidden')) return;
        if (event.key === 'Escape') {
          closeRsvpModal();
          return;
        }
        trapDialogFocus(modal, event);
      });
    }

    if (!form || !nameInput || !errorEl || !confirmBox) return;

    // Restore saved RSVP state on page reload
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (saved && saved.name) {
        lastSubmission = saved;
        nameInput.value = saved.name;
        const radio = form.querySelector(`input[name="attendance"][value="${saved.attendance}"]`);
        if (radio) radio.checked = true;
        renderConfirmationSummary(lastSubmission);
        if (modalHeader) modalHeader.classList.add('hidden');
        form.classList.add('hidden');
        confirmBox.classList.remove('hidden');
      }
    } catch (_) {}

    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim()) {
        nameInput.removeAttribute('aria-invalid');
        errorEl.classList.add('hidden');
      }
    });

    const submitBtn = document.getElementById('rsvp-submit-btn');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nameVal = nameInput.value.trim();
      const t = WEDDING_CONFIG.i18n[currentLang];

      if (!nameVal) {
        nameInput.setAttribute('aria-invalid', 'true');
        errorEl.textContent = t.rsvpError;
        errorEl.classList.remove('hidden');
        nameInput.focus();
        return;
      }

      nameInput.removeAttribute('aria-invalid');
      errorEl.classList.add('hidden');
      const attendanceVal = form.attendance.value;
      const docId = getOrCreateRsvpDocId();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = t.rsvpSubmitting;
      }

      try {
        if (window.weddingFirebase?.saveRsvp) {
          await window.weddingFirebase.saveRsvp({
            docId,
            name: nameVal,
            attendance: attendanceVal,
            lang: currentLang,
          });
        }

        lastSubmission = {
          docId,
          name: nameVal,
          attendance: attendanceVal,
          submittedAt: new Date().toISOString(),
        };

        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(lastSubmission));
        } catch (_) {}

        if (WEDDING_CONFIG.rsvpEndpoint) {
          fetch(WEDDING_CONFIG.rsvpEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lastSubmission),
          }).catch(() => {});
        }

        renderConfirmationSummary(lastSubmission);
        if (modalHeader) modalHeader.classList.add('hidden');
        form.classList.add('hidden');
        confirmBox.classList.remove('hidden');
      } catch (err) {
        console.error('Firebase RSVP save failed:', err);
        errorEl.textContent = t.rsvpSaveError;
        errorEl.classList.remove('hidden');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = (WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg).rsvpSubmit;
        }
      }
    });

    if (editBtn) {
      editBtn.addEventListener('click', () => {
        confirmBox.classList.add('hidden');
        if (modalHeader) modalHeader.classList.remove('hidden');
        form.classList.remove('hidden');
        nameInput.focus();
      });
    }
  }

  /* ------------------------------------------------------------------------
     WISHES SECTION (PENULTIMATE PAGE: FORM + HORIZONTAL CAROUSEL)
     ------------------------------------------------------------------------ */
  const WISHES_STORAGE_KEY = 'erbol_nuraida_wishes_v6';
  let wishesList = [];
  let activeShareTab = 'cover';

  function loadWishes() {
    try {
      const saved = JSON.parse(localStorage.getItem(WISHES_STORAGE_KEY) || 'null');
      if (Array.isArray(saved) && saved.length > 0) {
        wishesList = saved;
        return;
      }
    } catch (_) {}
    wishesList = [...WEDDING_CONFIG.defaultWishes];
  }

  function formatTodayLabel() {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yy = String(now.getFullYear()).slice(-2);
    return `${dd}.${mm}.${yy}`;
  }

  function renderWishesTrack() {
    const track = document.getElementById('wishes-track');
    if (!track) return;
    track.innerHTML = '';

    const prevBtn = document.getElementById('wishes-prev-btn');
    const nextBtn = document.getElementById('wishes-next-btn');
    const swipeHint = document.getElementById('wishes-swipe-hint');
    const hideNav = wishesList.length <= 1;
    if (prevBtn) prevBtn.classList.toggle('hidden', hideNav);
    if (nextBtn) nextBtn.classList.toggle('hidden', hideNav);
    if (swipeHint) swipeHint.classList.toggle('hidden', hideNav);

    if (wishesList.length === 0) {
      const t = WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg;
      const emptyBox = document.createElement('div');
      emptyBox.className = 'w-full py-6 text-center font-body text-base text-white/75';
      emptyBox.textContent = t.wishesEmptyText;
      track.appendChild(emptyBox);
      return;
    }

    wishesList.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'wish-card';

      const bodyP = document.createElement('p');
      bodyP.className = 'font-body text-base leading-[1.55] text-white m-0 break-words';
      bodyP.textContent = item.text;

      const metaDiv = document.createElement('div');
      metaDiv.className = 'wish-card-meta';

      const authorSpan = document.createElement('span');
      authorSpan.className = 'font-body text-base font-medium text-white';
      authorSpan.textContent = item.author;

      const dateSpan = document.createElement('span');
      dateSpan.className = 'font-body text-sm text-white/80';
      dateSpan.textContent = item.date;

      metaDiv.appendChild(authorSpan);
      metaDiv.appendChild(dateSpan);
      card.appendChild(bodyP);
      card.appendChild(metaDiv);
      track.appendChild(card);
    });
  }

  function initWishesSection() {
    loadWishes();
    renderWishesTrack();

    const form = document.getElementById('wishes-form');
    const authorInput = document.getElementById('wish-author');
    const msgInput = document.getElementById('wish-message');
    const countEl = document.getElementById('wish-char-count');
    const errorEl = document.getElementById('wishes-error');
    const track = document.getElementById('wishes-track');
    const prevBtn = document.getElementById('wishes-prev-btn');
    const nextBtn = document.getElementById('wishes-next-btn');
    const submitBtn = document.getElementById('wishes-submit-btn');

    let wishesSubscribed = false;
    const attachWishesSubscription = () => {
      if (wishesSubscribed || !window.weddingFirebase?.subscribeWishes) return;
      wishesSubscribed = true;
      window.weddingFirebase.subscribeWishes(
        (remoteItems) => {
          wishesList = remoteItems;
          try {
            localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(wishesList));
          } catch (_) {}
          renderWishesTrack();
        },
        (err) => {
          console.warn('Firestore wishes listener error:', err);
        }
      );
    };

    if (window.weddingFirebase?.subscribeWishes) {
      attachWishesSubscription();
    } else {
      window.addEventListener('wedding:firebase-ready', attachWishesSubscription, { once: true });
    }

    if (msgInput && countEl) {
      msgInput.addEventListener('input', () => {
        countEl.textContent = `${msgInput.value.length}/600`;
      });
    }

    if (prevBtn && track) {
      prevBtn.addEventListener('click', () => {
        const step = track.firstElementChild
          ? track.firstElementChild.getBoundingClientRect().width + 14
          : 280;
        track.scrollBy({ left: -step, behavior: 'smooth' });
      });
    }

    if (nextBtn && track) {
      nextBtn.addEventListener('click', () => {
        const step = track.firstElementChild
          ? track.firstElementChild.getBoundingClientRect().width + 14
          : 280;
        track.scrollBy({ left: step, behavior: 'smooth' });
      });
    }

    if (form && authorInput && msgInput && errorEl) {
      [authorInput, msgInput].forEach((field) => {
        field.addEventListener('input', () => {
          field.removeAttribute('aria-invalid');
          if (authorInput.value.trim() && msgInput.value.trim()) {
            errorEl.classList.add('hidden');
          }
        });
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const authorVal = authorInput.value.trim();
        const msgVal = msgInput.value.trim();
        const t = WEDDING_CONFIG.i18n[currentLang];

        if (!authorVal || !msgVal) {
          if (!authorVal) authorInput.setAttribute('aria-invalid', 'true');
          if (!msgVal) msgInput.setAttribute('aria-invalid', 'true');
          errorEl.textContent = t.wishesError;
          errorEl.classList.remove('hidden');
          (!authorVal ? authorInput : msgInput).focus();
          return;
        }

        authorInput.removeAttribute('aria-invalid');
        msgInput.removeAttribute('aria-invalid');
        errorEl.classList.add('hidden');
        const dateLabel = formatTodayLabel();

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = t.wishesSubmitting;
        }

        try {
          if (window.weddingFirebase?.addWish) {
            await window.weddingFirebase.addWish({
              author: authorVal,
              text: msgVal,
              date: dateLabel,
              lang: currentLang,
            });
          } else {
            wishesList.unshift({ author: authorVal, text: msgVal, date: dateLabel });
            try {
              localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(wishesList));
            } catch (_) {}
            renderWishesTrack();
          }

          authorInput.value = '';
          msgInput.value = '';
          if (countEl) countEl.textContent = '0/600';

          if (track) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
          }
          showToast(t.wishAddedToast);
        } catch (err) {
          console.error('Firebase wish save failed:', err);
          errorEl.textContent = t.wishesSaveError;
          errorEl.classList.remove('hidden');
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = (WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg).wishesSubmitLabel;
          }
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     SHARE INVITATION SECTION (LAST PAGE: TABS, STORY DOWNLOAD, LINKS)
     ------------------------------------------------------------------------ */
  function updateSocialShareLinks() {
    const t = WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg;
    const shareUrl = window.location.href;
    const fullText = `${t.shareMessageText} ${shareUrl}`;

    const waBtn = document.getElementById('share-wa-btn');
    if (waBtn) {
      waBtn.href = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
    }

    const tgBtn = document.getElementById('share-tg-btn');
    if (tgBtn) {
      tgBtn.href = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(t.shareMessageText)}`;
    }
  }

  function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = String(text || '').split(/\s+/);
    let line = '';
    let currentY = y;
    for (let i = 0; i < words.length; i += 1) {
      const testLine = line ? `${line} ${words[i]}` : words[i];
      if (ctx.measureText(testLine).width > maxWidth && line) {
        ctx.fillText(line, x, currentY);
        line = words[i];
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    if (line) ctx.fillText(line, x, currentY);
  }

  function drawCoupleTitle(ctx, centerX, y, sizePx) {
    const serifFont = `${sizePx}px "The Seasons", Forum, "Cormorant Garamond", Georgia, serif`;
    const ampFont = `italic ${Math.round(sizePx * 1.06)}px "Seasons Italic", "The Seasons", "Cormorant Garamond", Georgia, serif`;

    ctx.font = serifFont;
    const leftW = ctx.measureText('ERBOL ').width;
    ctx.font = ampFont;
    const ampW = ctx.measureText('&').width;
    ctx.font = serifFont;
    const rightW = ctx.measureText(' NURAIDA').width;

    const totalW = leftW + ampW + rightW;
    let cursorX = centerX - totalW / 2;

    const prevAlign = ctx.textAlign;
    ctx.textAlign = 'left';

    ctx.font = serifFont;
    ctx.fillText('ERBOL ', cursorX, y);
    cursorX += leftW;

    ctx.font = ampFont;
    ctx.fillText('&', cursorX, y);
    cursorX += ampW;

    ctx.font = serifFont;
    ctx.fillText(' NURAIDA', cursorX, y);
    ctx.textAlign = prevAlign;
  }

  async function downloadStoryCardImage() {
    const t = WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg;
    const isCover = activeShareTab === 'cover';
    const imgSrc = isCover ? 'assets/photos/photo-1.webp' : 'assets/photos/photo-3.webp';

    try {
      if (document.fonts?.ready) await document.fonts.ready;
    } catch (_) {}

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const W = 1080;
      const H = 1920;
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw object-cover B&W image matching preview crop
      ctx.filter = 'grayscale(100%) contrast(1.06)';
      const scale = Math.max(W / img.width, H / img.height);
      const drawW = img.width * scale;
      const drawH = img.height * scale;
      const offsetX = (W - drawW) / 2;
      const offsetY = (H - drawH) * (isCover ? 0.24 : 0.62);
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
      ctx.filter = 'none';

      // Dark editorial gradient scrim matching .share-card-scrim / .share-card-scrim-strong
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      if (isCover) {
        grad.addColorStop(0, 'rgba(8,8,8,0.24)');
        grad.addColorStop(0.38, 'rgba(8,8,8,0.04)');
        grad.addColorStop(0.64, 'rgba(8,8,8,0.68)');
        grad.addColorStop(1, 'rgba(8,8,8,0.94)');
      } else {
        grad.addColorStop(0, 'rgba(10,10,10,0.62)');
        grad.addColorStop(0.5, 'rgba(10,10,10,0.52)');
        grad.addColorStop(1, 'rgba(10,10,10,0.82)');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';

      if (isCover) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
        ctx.shadowBlur = 22;
        ctx.shadowOffsetY = 4;
        drawCoupleTitle(ctx, W / 2, H - 250, 74);
        ctx.font = '34px Forum, "Cormorant Garamond", Georgia, serif';
        ctx.fillText(t.heroDateFull, W / 2, H - 175);
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;
      } else {
        ctx.font = '32px Forum, "Cormorant Garamond", Georgia, serif';
        ctx.fillText(t.shareInviteTop, W / 2, 190);
        drawCoupleTitle(ctx, W / 2, H / 2 - 60, 76);
        ctx.font = '38px "Cormorant Garamond", Georgia, serif';
        wrapCanvasText(ctx, t.shareInviteBody, W / 2, H / 2 + 50, W - 180, 52);
        ctx.font = '36px Forum, "Cormorant Garamond", Georgia, serif';
        ctx.fillText('03.12.2026 • 18:00', W / 2, H - 235);
        ctx.font = '30px Forum, "Cormorant Garamond", Georgia, serif';
        ctx.fillText('BELLAGIO BANQUET HALL', W / 2, H - 180);
      }

      const link = document.createElement('a');
      link.download = `erbol-nuraida-${activeShareTab}-03-12-2026.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast(t.shareSavedToast);
    };
    img.src = imgSrc;
  }

  function initShareSection() {
    const tabBtns = document.querySelectorAll('[data-share-tab]');
    const coverView = document.getElementById('share-view-cover');
    const inviteView = document.getElementById('share-view-invite');
    const downloadBtn = document.getElementById('share-download-btn');
    const igBtn = document.getElementById('share-ig-btn');
    const copyBtn = document.getElementById('share-copy-btn');

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeShareTab = btn.getAttribute('data-share-tab') === 'invite' ? 'invite' : 'cover';
        tabBtns.forEach((b) => {
          const isMatch = b.getAttribute('data-share-tab') === activeShareTab;
          b.classList.toggle('is-active', isMatch);
          b.setAttribute('aria-selected', String(isMatch));
        });
        if (coverView && inviteView) {
          coverView.classList.toggle('hidden', activeShareTab !== 'cover');
          inviteView.classList.toggle('hidden', activeShareTab !== 'invite');
        }
      });
    });

    if (downloadBtn) {
      downloadBtn.addEventListener('click', downloadStoryCardImage);
    }

    if (igBtn) {
      igBtn.addEventListener('click', downloadStoryCardImage);
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const t = WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg;
        try {
          await navigator.clipboard.writeText(window.location.href);
        } catch (_) {
          const temp = document.createElement('input');
          temp.value = window.location.href;
          document.body.appendChild(temp);
          temp.select();
          document.execCommand('copy');
          document.body.removeChild(temp);
        }
        copyBtn.textContent = t.shareCopiedBtn;
        window.setTimeout(() => {
          copyBtn.textContent = (WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg).shareCopyBtn;
        }, 2200);
      });
    }

    updateSocialShareLinks();
  }

  /* ------------------------------------------------------------------------
     ADD TO CALENDAR (.ICS DOWNLOAD FOR IOS / ANDROID / DESKTOP)
     ------------------------------------------------------------------------ */
  function initCalendarButton() {
    const btn = document.getElementById('add-calendar-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const t = WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg;
      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Erbol & Nuraida//Wedding Invitation//EN',
        'BEGIN:VEVENT',
        'UID:erbol-nuraida-20261203@invitation',
        'DTSTAMP:20261121T000000Z',
        'DTSTART:20261203T120000Z',
        'DTEND:20261203T180000Z',
        `SUMMARY:${t.calendarEventTitle}`,
        `DESCRIPTION:${t.calendarEventDesc}`,
        `LOCATION:${t.locationName}, ${t.locationAddress}`,
        'END:VEVENT',
        'END:VCALENDAR',
      ].join('\r\n');

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'erbol-nuraida-03-12-2026.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      const labelEl = document.getElementById('add-calendar-label');
      if (labelEl) {
        labelEl.textContent = t.addCalendarDone;
        window.setTimeout(() => {
          const active = WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg;
          labelEl.textContent = active.addCalendarBtn;
        }, 2200);
      }
    });
  }

  /* ------------------------------------------------------------------------
     LIVE COUNTDOWN TIMER (2026-12-03 18:00 ASIA/BISHKEK)
     ------------------------------------------------------------------------ */
  function initCountdown() {
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');
    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    const targetMs = new Date('2026-12-03T18:00:00+06:00').getTime();
    const pad2 = (n) => String(Math.max(0, n)).padStart(2, '0');

    function tick() {
      const diff = Math.max(0, targetMs - Date.now());
      const totalSec = Math.floor(diff / 1000);
      const d = Math.floor(totalSec / 86400);
      const h = Math.floor((totalSec % 86400) / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;

      daysEl.textContent = pad2(d);
      hoursEl.textContent = pad2(h);
      minsEl.textContent = pad2(m);
      secsEl.textContent = pad2(s);

      if (diff === 0) {
        const t = WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg;
        setText('countdown-heading', t.countdownStartedHeading);
      }
    }

    tick();
    window.setInterval(tick, 1000);
  }

  /* ------------------------------------------------------------------------
     GSAP SCROLL REVEAL (WITH PREFERS-REDUCED-MOTION SUPPORT)
     ------------------------------------------------------------------------ */
  function initScrollReveal() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || typeof window.gsap === 'undefined') return;

    if (typeof window.ScrollTrigger !== 'undefined') {
      window.gsap.registerPlugin(window.ScrollTrigger);
      document.querySelectorAll('.js-reveal').forEach((section) => {
        window.gsap.from(section, {
          opacity: 0,
          y: 16,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    }
  }

  /* ------------------------------------------------------------------------
     BACKGROUND WEDDING MUSIC & MONOCHROME EQUALIZER TOGGLE
     ------------------------------------------------------------------------ */
  let syncMusicButtonState = null;

  function initBackgroundMusic() {
    const audio = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle-btn');
    if (!audio || !toggleBtn) {
      return { startMusic: () => {}, showButton: () => {} };
    }

    const targetVol = WEDDING_CONFIG.music?.targetVolume ?? 0.42;
    let fadeTimer = null;

    if (WEDDING_CONFIG.music?.src) {
      const currentSrc = audio.getAttribute('src') || audio.querySelector('source')?.getAttribute('src');
      if (currentSrc !== WEDDING_CONFIG.music.src) {
        audio.src = WEDDING_CONFIG.music.src;
      }
    }

    syncMusicButtonState = () => {
      const t = WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg;
      const isPlaying = !audio.paused && !audio.ended;
      toggleBtn.classList.toggle('is-playing', isPlaying);
      toggleBtn.setAttribute('aria-pressed', String(isPlaying));
      toggleBtn.setAttribute('aria-label', isPlaying ? t.musicMuteLabel : t.musicPlayLabel);
    };

    const fadeToTargetVolume = () => {
      if (fadeTimer) window.clearInterval(fadeTimer);
      audio.volume = 0.02;
      fadeTimer = window.setInterval(() => {
        if (audio.paused) {
          window.clearInterval(fadeTimer);
          fadeTimer = null;
          return;
        }
        const nextVol = Math.min(targetVol, audio.volume + 0.04);
        audio.volume = nextVol;
        if (nextVol >= targetVol) {
          window.clearInterval(fadeTimer);
          fadeTimer = null;
        }
      }, 60);
    };

    const startMusic = async () => {
      if (!audio.paused && !audio.ended) {
        syncMusicButtonState();
        return true;
      }
      try {
        audio.volume = 0.02;
        await audio.play();
        fadeToTargetVolume();
        syncMusicButtonState();
        return true;
      } catch (_) {
        syncMusicButtonState();
        return false;
      }
    };

    const showButton = () => {
      toggleBtn.classList.add('is-visible');
      syncMusicButtonState();
    };

    audio.addEventListener('play', syncMusicButtonState);
    audio.addEventListener('pause', syncMusicButtonState);
    audio.addEventListener('ended', syncMusicButtonState);

    toggleBtn.addEventListener('click', async () => {
      const t = WEDDING_CONFIG.i18n[currentLang] || WEDDING_CONFIG.i18n.kg;
      if (!audio.paused && !audio.ended) {
        if (fadeTimer) {
          window.clearInterval(fadeTimer);
          fadeTimer = null;
        }
        audio.pause();
        syncMusicButtonState();
        showToast(t.musicOffToast);
      } else {
        const started = await startMusic();
        if (started) showToast(t.musicOnToast);
      }
    });

    syncMusicButtonState();
    return { startMusic, showButton };
  }

  /* ------------------------------------------------------------------------
     OPENING ENVELOPE GATE
     ------------------------------------------------------------------------ */
  function initEnvelopeGate(musicController) {
    const gate = document.getElementById('envelope-gate');
    const openBtn = document.getElementById('envelope-open-btn');
    const ctaBtn = document.getElementById('envelope-cta-top');
    const heroEl = document.getElementById('hero');
    if (!gate || !openBtn) {
      if (musicController) musicController.showButton();
      return;
    }

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    gate.setAttribute('aria-hidden', 'false');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';

    let opened = false;
    function openInvitation() {
      if (opened) return;
      opened = true;
      if (musicController) {
        musicController.startMusic();
        musicController.showButton();
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      gate.classList.add('is-opening');
      gate.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (heroEl) heroEl.focus({ preventScroll: true });
      window.setTimeout(() => {
        gate.classList.add('is-hidden');
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 640);
    }

    gate.addEventListener('keydown', (event) => {
      if (!opened) trapDialogFocus(gate, event);
    });

    openBtn.addEventListener('click', openInvitation);
    if (ctaBtn) ctaBtn.addEventListener('click', openInvitation);
  }

  /* ------------------------------------------------------------------------
     INITIALIZE
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    let initialLang = 'kg';
    try {
      const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
      if (savedLang && WEDDING_CONFIG.i18n[savedLang]) initialLang = savedLang;
    } catch (_) {}

    const musicController = initBackgroundMusic();
    applyConfig(initialLang);

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyConfig(btn.getAttribute('data-lang-btn'));
      });
    });

    initEnvelopeGate(musicController);
    initCalendarButton();
    initCountdown();
    initRsvpForm();
    initWishesSection();
    initShareSection();
    initScrollReveal();
  });
})();
