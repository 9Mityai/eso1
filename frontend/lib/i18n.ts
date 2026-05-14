export type LanguageCode =
  | "en"
  | "de"
  | "fr"
  | "it"
  | "es"
  | "pt"
  | "nl"
  | "pl"
  | "ru"
  | "ja"
  | "zh"
  | "ko";

export const supportedLanguages: { code: LanguageCode; label: string }[] = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "ru", label: "Русский" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
  { code: "ko", label: "한국어" },
];

type TranslationShape = {
  app: {
    dashboard: string;
    patients: string;
    cases: string;
    uploadDicom: string;
    billing: string;
    patientCabinet: string;
    patientHome: string;
    aiGem: string;
    language: string;
    logout: string;
  };
  login: {
    title: string;
    secureAccess: string;
    roleDoctor: string;
    rolePatient: string;
    loginPlaceholder: string;
    passwordPlaceholder: string;
    signIn: string;
    invalidCredentials: string;
    doctorDemoAccess: string;
    patientDemoAccess: string;
  };
  dashboard: {
    title: string;
    subtitle: string;
  };
  aiGem: {
    title: string;
    subtitle: string;
    inputLabel: string;
    inputPlaceholder: string;
    generate: string;
    generating: string;
    warning: string;
    outputLabel: string;
    noOutput: string;
    error: string;
  };
  patientsPage: {
    title: string;
    subtitle: string;
    headers: {
      id: string;
      name: string;
      location: string;
      priority: string;
      cases: string;
      updated: string;
    };
  };
  chat: {
    title: string;
    placeholder: string;
    send: string;
    aiAssistant: string;
    backToPortal: string;
  };
  icd10: {
    title: string;
    search: string;
    noResults: string;
  };
  patientCabinet: {
    title: string;
    subtitle: string;
    profile: string;
    fullName: string;
    email: string;
    phone: string;
    saveProfile: string;
    saved: string;
    services: string;
    inCart: string;
    addToCart: string;
    appointments: string;
    notesPlaceholder: string;
    bookNow: string;
    noAppointments: string;
    cartSummary: string;
    selectedServices: string;
    noServices: string;
    total: string;
    invoices: string;
  };
  billingPage: {
    title: string;
    subtitle: string;
    planName: string;
    planDesc: string;
    managePlan: string;
    downloadInvoice: string;
    paymentMethod: string;
    paymentInfo: string;
    pci: string;
  };
  casesPage: {
    title: string;
    subtitle: string;
    headers: {
      id: string;
      name: string;
      patient: string;
      status: string;
      updated: string;
    };
    open: string;
  };
  caseDetails: {
    title: string;
    subtitle: string;
    patient: string;
    board: string;
    nextSession: string;
    imaging: string;
    clinicalDocs: string;
    clinicalNotes: string;
    noteText: string;
  };
};

const patientCabinetDefault = {
  title: "Patient Cabinet",
  subtitle: "Manage patient profile and services",
  profile: "Profile",
  fullName: "Full name",
  email: "Email",
  phone: "Phone",
  saveProfile: "Save profile",
  saved: "Saved",
  services: "Services",
  inCart: "In cart",
  addToCart: "Add to cart",
  appointments: "Appointments",
  notesPlaceholder: "Notes",
  bookNow: "Book now",
  noAppointments: "No appointments yet",
  cartSummary: "Cart summary",
  selectedServices: "Selected services",
  noServices: "No services selected",
  total: "Total",
  invoices: "Invoices",
} as const;

const billingPageDefault = {
  title: "Billing",
  subtitle: "Manage your subscription and invoices",
  planName: "Premium plan",
  planDesc: "Unlimited consultations and AI support",
  managePlan: "Manage plan",
  downloadInvoice: "Download invoice",
  paymentMethod: "Payment method",
  paymentInfo: "Visa ending in 1234",
  pci: "PCI compliance verified",
} as const;

const casesPageDefault = {
  title: "Cases",
  subtitle: "Active patient cases and triage",
  headers: {
    id: "ID",
    name: "Case",
    patient: "Patient",
    status: "Status",
    updated: "Updated",
  },
  open: "Open",
} as const;

const caseDetailsDefault = {
  title: "Case details",
  subtitle: "Clinical summary and findings",
  patient: "Patient",
  board: "Board",
  nextSession: "Next session",
  imaging: "Imaging",
  clinicalDocs: "Clinical docs",
  clinicalNotes: "Clinical notes",
  noteText: "Summary and notes will appear here.",
} as const;

const translations_en: TranslationShape = {
  app: {
    dashboard: "Dashboard",
    patients: "Patients",
    cases: "Cases",
    uploadDicom: "Upload DICOM",
    billing: "Billing",
    patientCabinet: "Patient Cabinet",
    patientHome: "My Overview",
    aiGem: "AI Medical Assistant",
    language: "Language",
    logout: "Logout",
  },
  patientCabinet: patientCabinetDefault,
  billingPage: billingPageDefault,
  casesPage: casesPageDefault,
  caseDetails: caseDetailsDefault,
  login: {
    title: "Welcome to Euro Second Opinion",
    secureAccess: "Secure medical access",
    roleDoctor: "Doctor",
    rolePatient: "Patient",
    loginPlaceholder: "Username",
    passwordPlaceholder: "Password",
    signIn: "Sign In",
    invalidCredentials: "Invalid credentials",
    doctorDemoAccess: "Doctor demo: admin / admin",
    patientDemoAccess: "Patient demo: patient / patient123",
  },
  dashboard: {
    title: "Dashboard",
    subtitle: "Welcome",
  },
  aiGem: {
    title: "AI Medical Assistant",
    subtitle: "Clinical support assistant",
    inputLabel: "Patient prompt",
    inputPlaceholder: "Describe symptoms, history or questions...",
    generate: "Generate report",
    generating: "Generating...",
    warning: "This assistant is for support only, not a diagnosis.",
    outputLabel: "AI Report",
    noOutput: "No report generated yet.",
    error: "Failed to generate AI report.",
  },
  patientsPage: {
    title: "Patients",
    subtitle: "Patient portal and active cases",
    headers: {
      id: "ID",
      name: "Patient",
      location: "Location",
      priority: "Priority",
      cases: "Cases",
      updated: "Last Updated",
    },
  },
  chat: {
    title: "AI Medical Assistant",
    placeholder: "Describe your symptoms or ask a question...",
    send: "Send",
    aiAssistant: "AI Medical Assistant",
    backToPortal: "Back to portal",
  },
  icd10: {
    title: "ICD-10 Reference",
    search: "Search ICD-10 codes",
    noResults: "No results found",
  },
};

const translations_de: TranslationShape = {
  app: {
    dashboard: "Dashboard",
    patients: "Patienten",
    cases: "Fälle",
    uploadDicom: "DICOM hochladen",
    billing: "Abrechnung",
    patientCabinet: "Patientenschrank",
    patientHome: "Meine Übersicht",
    aiGem: "KI-Medizinassistent",
    language: "Sprache",
    logout: "Abmelden",
  },
  patientCabinet: patientCabinetDefault,
  billingPage: billingPageDefault,
  casesPage: casesPageDefault,
  caseDetails: caseDetailsDefault,
  login: {
    title: "Willkommen bei Euro Second Opinion",
    secureAccess: "Sicherer medizinischer Zugang",
    roleDoctor: "Arzt",
    rolePatient: "Patient",
    loginPlaceholder: "Benutzername",
    passwordPlaceholder: "Passwort",
    signIn: "Anmelden",
    invalidCredentials: "Ungültige Zugangsdaten",
    doctorDemoAccess: "Arzt-Demo: admin / admin",
    patientDemoAccess: "Patienten-Demo: patient / patient123",
  },
  dashboard: {
    title: "Dashboard",
    subtitle: "Willkommen",
  },
  aiGem: {
    title: "KI-Medizinassistent",
    subtitle: "Klinische Unterstützungsassistent",
    inputLabel: "Patientenanfrage",
    inputPlaceholder: "Beschreiben Sie Symptome, Anamnese oder Fragen...",
    generate: "Bericht erstellen",
    generating: "Erstelle Bericht...",
    warning: "Dieser Assistent dient nur zur Unterstützung, nicht zur Diagnose.",
    outputLabel: "KI-Bericht",
    noOutput: "Noch kein Bericht erstellt.",
    error: "Fehler beim Erstellen des KI-Berichts.",
  },
  patientsPage: {
    title: "Patienten",
    subtitle: "Patientenportal und aktive Fälle",
    headers: {
      id: "ID",
      name: "Patient",
      location: "Standort",
      priority: "Priorität",
      cases: "Fälle",
      updated: "Zuletzt aktualisiert",
    },
  },
  chat: {
    title: "KI-Medizinassistent",
    placeholder: "Beschreiben Sie Ihre Symptome oder stellen Sie eine Frage...",
    send: "Senden",
    aiAssistant: "KI-Medizinassistent",
    backToPortal: "Zurück zum Portal",
  },
  icd10: {
    title: "ICD-10 Referenz",
    search: "ICD-10-Codes suchen",
    noResults: "Keine Ergebnisse gefunden",
  },
};

const translations_fr: TranslationShape = {
  app: {
    dashboard: "Tableau de bord",
    patients: "Patients",
    cases: "Cas",
    uploadDicom: "Télécharger DICOM",
    billing: "Facturation",
    patientCabinet: "Cabinet patient",
    patientHome: "Mon aperçu",
    aiGem: "Assistant médical IA",
    language: "Langue",
    logout: "Se déconnecter",
  },
  patientCabinet: patientCabinetDefault,
  billingPage: billingPageDefault,
  casesPage: casesPageDefault,
  caseDetails: caseDetailsDefault,
  login: {
    title: "Bienvenue sur Euro Second Opinion",
    secureAccess: "Accès médical sécurisé",
    roleDoctor: "Docteur",
    rolePatient: "Patient",
    loginPlaceholder: "Nom d'utilisateur",
    passwordPlaceholder: "Mot de passe",
    signIn: "Se connecter",
    invalidCredentials: "Identifiants invalides",
    doctorDemoAccess: "Démo docteur : admin / admin",
    patientDemoAccess: "Démo patient : patient / patient123",
  },
  dashboard: {
    title: "Tableau de bord",
    subtitle: "Bienvenue",
  },
  aiGem: {
    title: "Assistant médical IA",
    subtitle: "Assistant d'aide clinique",
    inputLabel: "Demande patient",
    inputPlaceholder: "Décrivez les symptômes, l'historique ou les questions...",
    generate: "Générer un rapport",
    generating: "Génération en cours...",
    warning: "Cet assistant est uniquement d'aide, pas un diagnostic.",
    outputLabel: "Rapport IA",
    noOutput: "Aucun rapport généré pour le moment.",
    error: "Échec de la génération du rapport IA.",
  },
  patientsPage: {
    title: "Patients",
    subtitle: "Portail patient et cas actifs",
    headers: {
      id: "ID",
      name: "Patient",
      location: "Emplacement",
      priority: "Priorité",
      cases: "Cas",
      updated: "Dernière mise à jour",
    },
  },
  chat: {
    title: "Assistant médical IA",
    placeholder: "Décrivez vos symptômes ou posez une question...",
    send: "Envoyer",
    aiAssistant: "Assistant médical IA",
    backToPortal: "Retourner au portail",
  },
  icd10: {
    title: "Référence ICD-10",
    search: "Rechercher des codes ICD-10",
    noResults: "Aucun résultat trouvé",
  },
};

const translations_it: TranslationShape = {
  app: {
    dashboard: "Dashboard",
    patients: "Pazienti",
    cases: "Casi",
    uploadDicom: "Carica DICOM",
    billing: "Fatturazione",
    patientCabinet: "Armadio paziente",
    patientHome: "La mia panoramica",
    aiGem: "Assistente medico IA",
    language: "Lingua",
    logout: "Disconnetti",
  },
  patientCabinet: patientCabinetDefault,
  billingPage: billingPageDefault,
  casesPage: casesPageDefault,
  caseDetails: caseDetailsDefault,
  login: {
    title: "Benvenuto in Euro Second Opinion",
    secureAccess: "Accesso medico sicuro",
    roleDoctor: "Medico",
    rolePatient: "Paziente",
    loginPlaceholder: "Nome utente",
    passwordPlaceholder: "Password",
    signIn: "Accedi",
    invalidCredentials: "Credenziali non valide",
    doctorDemoAccess: "Demo medico: admin / admin",
    patientDemoAccess: "Demo paziente: patient / patient123",
  },
  dashboard: {
    title: "Dashboard",
    subtitle: "Benvenuto",
  },
  aiGem: {
    title: "Assistente medico IA",
    subtitle: "Assistente di supporto clinico",
    inputLabel: "Prompt paziente",
    inputPlaceholder: "Descrivi sintomi, anamnesi o domande...",
    generate: "Genera rapporto",
    generating: "Generazione in corso...",
    warning: "Questo assistente è solo di supporto, non una diagnosi.",
    outputLabel: "Rapporto IA",
    noOutput: "Nessun rapporto generato ancora.",
    error: "Impossibile generare il rapporto IA.",
  },
  patientsPage: {
    title: "Pazienti",
    subtitle: "Portale paziente e casi attivi",
    headers: {
      id: "ID",
      name: "Paziente",
      location: "Posizione",
      priority: "Priorità",
      cases: "Casi",
      updated: "Ultimo aggiornamento",
    },
  },
  chat: {
    title: "Assistente medico IA",
    placeholder: "Descrivi i tuoi sintomi o fai una domanda...",
    send: "Invia",
    aiAssistant: "Assistente medico IA",
    backToPortal: "Torna al portale",
  },
  icd10: {
    title: "Riferimento ICD-10",
    search: "Cerca codici ICD-10",
    noResults: "Nessun risultato trovato",
  },
};

const translations_es: TranslationShape = {
  app: {
    dashboard: "Panel de control",
    patients: "Pacientes",
    cases: "Casos",
    uploadDicom: "Cargar DICOM",
    billing: "Facturación",
    patientCabinet: "Gabinete del paciente",
    patientHome: "Mi visión general",
    aiGem: "Asistente médico IA",
    language: "Idioma",
    logout: "Cerrar sesión",
  },
  patientCabinet: patientCabinetDefault,
  billingPage: billingPageDefault,
  casesPage: casesPageDefault,
  caseDetails: caseDetailsDefault,
  login: {
    title: "Bienvenido a Euro Second Opinion",
    secureAccess: "Acceso médico seguro",
    roleDoctor: "Médico",
    rolePatient: "Paciente",
    loginPlaceholder: "Nombre de usuario",
    passwordPlaceholder: "Contraseña",
    signIn: "Iniciar sesión",
    invalidCredentials: "Credenciales inválidas",
    doctorDemoAccess: "Demo médico: admin / admin",
    patientDemoAccess: "Demo paciente: patient / patient123",
  },
  dashboard: {
    title: "Panel de control",
    subtitle: "Bienvenido",
  },
  aiGem: {
    title: "Asistente médico IA",
    subtitle: "Asistente de soporte clínico",
    inputLabel: "Solicitud del paciente",
    inputPlaceholder: "Describe síntomas, historial o preguntas...",
    generate: "Generar informe",
    generating: "Generando...",
    warning: "Este asistente es solo de apoyo, no un diagnóstico.",
    outputLabel: "Informe IA",
    noOutput: "Aún no se generó ningún informe.",
    error: "Error al generar el informe IA.",
  },
  patientsPage: {
    title: "Pacientes",
    subtitle: "Portal de pacientes y casos activos",
    headers: {
      id: "ID",
      name: "Paciente",
      location: "Ubicación",
      priority: "Prioridad",
      cases: "Casos",
      updated: "Última actualización",
    },
  },
  chat: {
    title: "Asistente médico IA",
    placeholder: "Describe tus síntomas o haz una pregunta...",
    send: "Enviar",
    aiAssistant: "Asistente médico IA",
    backToPortal: "Volver al portal",
  },
  icd10: {
    title: "Referencia ICD-10",
    search: "Buscar códigos ICD-10",
    noResults: "No se encontraron resultados",
  },
};

const translations_pt: TranslationShape = {
  app: {
    dashboard: "Painel de controle",
    patients: "Pacientes",
    cases: "Casos",
    uploadDicom: "Carregar DICOM",
    billing: "Faturação",
    patientCabinet: "Gabinete do paciente",
    patientHome: "Minha visão geral",
    aiGem: "Assistente médico IA",
    language: "Idioma",
    logout: "Sair",
  },
  patientCabinet: patientCabinetDefault,
  billingPage: billingPageDefault,
  casesPage: casesPageDefault,
  caseDetails: caseDetailsDefault,
  login: {
    title: "Bem-vindo ao Euro Second Opinion",
    secureAccess: "Acesso médico seguro",
    roleDoctor: "Médico",
    rolePatient: "Paciente",
    loginPlaceholder: "Nome de usuário",
    passwordPlaceholder: "Senha",
    signIn: "Entrar",
    invalidCredentials: "Credenciais inválidas",
    doctorDemoAccess: "Médico demo: admin / admin",
    patientDemoAccess: "Paciente demo: patient / patient123",
  },
  dashboard: {
    title: "Painel de controle",
    subtitle: "Bem-vindo",
  },
  aiGem: {
    title: "Assistente médico IA",
    subtitle: "Assistente de suporte clínico",
    inputLabel: "Solicitação do paciente",
    inputPlaceholder: "Descreva sintomas, histórico ou perguntas...",
    generate: "Gerar relatório",
    generating: "Gerando...",
    warning: "Este assistente é apenas de apoio, não um diagnóstico.",
    outputLabel: "Relatório IA",
    noOutput: "Nenhum relatório gerado ainda.",
    error: "Falha ao gerar o relatório IA.",
  },
  patientsPage: {
    title: "Pacientes",
    subtitle: "Portal de pacientes e casos ativos",
    headers: {
      id: "ID",
      name: "Paciente",
      location: "Ubicación",
      priority: "Prioridade",
      cases: "Casos",
      updated: "Última atualização",
    },
  },
  chat: {
    title: "Assistente médico IA",
    placeholder: "Descreva seus sintomas ou faça uma pergunta...",
    send: "Enviar",
    aiAssistant: "Assistente médico IA",
    backToPortal: "Voltar ao portal",
  },
  icd10: {
    title: "Referência ICD-10",
    search: "Pesquisar códigos ICD-10",
    noResults: "Nenhum resultado encontrado",
  },
};

const translations_nl: TranslationShape = {
  app: {
    dashboard: "Dashboard",
    patients: "Patiënten",
    cases: "Zaken",
    uploadDicom: "DICOM uploaden",
    billing: "Facturatie",
    patientCabinet: "Patiëntenkasten",
    patientHome: "Mijn overzicht",
    aiGem: "AI Medische assistent",
    language: "Taal",
    logout: "Afmelden",
  },
  patientCabinet: patientCabinetDefault,
  billingPage: billingPageDefault,
  casesPage: casesPageDefault,
  caseDetails: caseDetailsDefault,
  login: {
    title: "Welkom bij Euro Second Opinion",
    secureAccess: "Veilige medische toegang",
    roleDoctor: "Arts",
    rolePatient: "Patiënt",
    loginPlaceholder: "Gebruikersnaam",
    passwordPlaceholder: "Wachtwoord",
    signIn: "Inloggen",
    invalidCredentials: "Ongeldige referenties",
    doctorDemoAccess: "Demo arts: admin / admin",
    patientDemoAccess: "Demo patiënt: patient / patient123",
  },
  dashboard: {
    title: "Dashboard",
    subtitle: "Welkom",
  },
  aiGem: {
    title: "AI Medische assistent",
    subtitle: "Klinische ondersteuningsassistent",
    inputLabel: "Patiëntprompt",
    inputPlaceholder: "Beschrijf symptomen, geschiedenis of vragen...",
    generate: "Genereer rapport",
    generating: "Genereren...",
    warning: "Deze assistent is alleen ter ondersteuning, geen diagnose.",
    outputLabel: "AI-rapport",
    noOutput: "Nog geen rapport gegenereerd.",
    error: "Kon het AI-rapport niet genereren.",
  },
  patientsPage: {
    title: "Patiënten",
    subtitle: "Patiëntenportaal en actieve gevallen",
    headers: {
      id: "ID",
      name: "Patiënt",
      location: "Locatie",
      priority: "Prioriteit",
      cases: "Zaken",
      updated: "Laatst bijgewerkt",
    },
  },
  chat: {
    title: "AI Medische assistent",
    placeholder: "Beschrijf uw symptomen of stel een vraag...",
    send: "Verzenden",
    aiAssistant: "AI Medische assistent",
    backToPortal: "Terug naar portal",
  },
  icd10: {
    title: "ICD-10 Referentie",
    search: "ICD-10 codes zoeken",
    noResults: "Geen resultaten gevonden",
  },
};

const translations_pl: TranslationShape = {
  app: {
    dashboard: "Panel sterowania",
    patients: "Pacjenci",
    cases: "Przypadki",
    uploadDicom: "Prześlij DICOM",
    billing: "Rozliczenia",
    patientCabinet: "Gabinet pacjenta",
    patientHome: "Mój przegląd",
    aiGem: "Asystent medyczny AI",
    language: "Język",
    logout: "Wyloguj się",
  },
  patientCabinet: patientCabinetDefault,
  billingPage: billingPageDefault,
  casesPage: casesPageDefault,
  caseDetails: caseDetailsDefault,
  login: {
    title: "Witaj w Euro Second Opinion",
    secureAccess: "Bezpieczny dostęp medyczny",
    roleDoctor: "Lekarz",
    rolePatient: "Pacjent",
    loginPlaceholder: "Nazwa użytkownika",
    passwordPlaceholder: "Hasło",
    signIn: "Zaloguj się",
    invalidCredentials: "Nieprawidłowe dane logowania",
    doctorDemoAccess: "Demo lekarza: admin / admin",
    patientDemoAccess: "Demo pacjenta: patient / patient123",
  },
  dashboard: {
    title: "Panel sterowania",
    subtitle: "Witaj",
  },
  aiGem: {
    title: "Asystent medyczny AI",
    subtitle: "Asystent wsparcia klinicznego",
    inputLabel: "Zapytanie pacjenta",
    inputPlaceholder: "Opisz objawy, historię lub pytania...",
    generate: "Wygeneruj raport",
    generating: "Generowanie...",
    warning: "Ten asystent służy tylko wsparciu, nie diagnozie.",
    outputLabel: "Raport AI",
    noOutput: "Jeszcze nie wygenerowano raportu.",
    error: "Nie udało się wygenerować raportu AI.",
  },
  patientsPage: {
    title: "Pacjenci",
    subtitle: "Portal pacjenta i aktywne przypadki",
    headers: {
      id: "ID",
      name: "Pacjent",
      location: "Lokalizacja",
      priority: "Priorytet",
      cases: "Przypadki",
      updated: "Ostatnia aktualizacja",
    },
  },
  chat: {
    title: "Asystent medyczny AI",
    placeholder: "Opisz swoje objawy lub zadaj pytanie...",
    send: "Wyślij",
    aiAssistant: "Asystent medyczny AI",
    backToPortal: "Wróć do portalu",
  },
  icd10: {
    title: "Odniesienie ICD-10",
    search: "Szukaj kodów ICD-10",
    noResults: "Nie znaleziono wyników",
  },
};

const translations_ru: TranslationShape = {
  app: {
    dashboard: "Панель управления",
    patients: "Пациенты",
    cases: "Кейсы",
    uploadDicom: "Загрузить DICOM",
    billing: "Выставление счетов",
    patientCabinet: "Кабинет пациента",
    patientHome: "Мой обзор",
    aiGem: "AI Медицинский помощник",
    language: "Язык",
    logout: "Выйти",
  },
  patientCabinet: patientCabinetDefault,
  billingPage: billingPageDefault,
  casesPage: casesPageDefault,
  caseDetails: caseDetailsDefault,
  login: {
    title: "Добро пожаловать в Euro Second Opinion",
    secureAccess: "Безопасный медицинский доступ",
    roleDoctor: "Врач",
    rolePatient: "Пациент",
    loginPlaceholder: "Имя пользователя",
    passwordPlaceholder: "Пароль",
    signIn: "Вход",
    invalidCredentials: "Неверные учетные данные",
    doctorDemoAccess: "Демо врача: admin / admin",
    patientDemoAccess: "Демо пациента: patient / patient123",
  },
  dashboard: {
    title: "Панель управления",
    subtitle: "Добро пожаловать",
  },
  aiGem: {
    title: "AI Медицинский помощник",
    subtitle: "Ассистент клинической поддержки",
    inputLabel: "Запрос пациента",
    inputPlaceholder: "Опишите симптомы, анамнез или вопросы...",
    generate: "Сгенерировать отчет",
    generating: "Генерация...",
    warning: "Этот ассистент предназначен только для поддержки, не диагноз.",
    outputLabel: "Отчет AI",
    noOutput: "Отчет ещё не сгенерирован.",
    error: "Не удалось сгенерировать отчет AI.",
  },
  patientsPage: {
    title: "Пациенты",
    subtitle: "Портал пациента и активные кейсы",
    headers: {
      id: "ID",
      name: "Пациент",
      location: "Местоположение",
      priority: "Приоритет",
      cases: "Кейсы",
      updated: "Последнее обновление",
    },
  },
  chat: {
    title: "AI Медицинский помощник",
    placeholder: "Опишите свои симптомы или задайте вопрос...",
    send: "Отправить",
    aiAssistant: "AI Медицинский помощник",
    backToPortal: "Вернуться в портал",
  },
  icd10: {
    title: "Справочник МКБ-10",
    search: "Поиск кодов МКБ-10",
    noResults: "Результаты не найдены",
  },
};

const translations_ja: TranslationShape = {
  app: {
    dashboard: "ダッシュボード",
    patients: "患者",
    cases: "症例",
    uploadDicom: "DICOMアップロード",
    billing: "請求",
    patientCabinet: "患者用キャビネット",
    patientHome: "マイ概要",
    aiGem: "AI医療アシスタント",
    language: "言語",
    logout: "ログアウト",
  },
  patientCabinet: patientCabinetDefault,
  login: {
    title: "Euro Second Opinionへようこそ",
    secureAccess: "安全な医療アクセス",
    roleDoctor: "医師",
    rolePatient: "患者",
    loginPlaceholder: "ユーザー名",
    passwordPlaceholder: "パスワード",
    signIn: "ログイン",
    invalidCredentials: "無効な認証情報",
    doctorDemoAccess: "デモ医師: admin / admin",
    patientDemoAccess: "デモ患者: patient / patient123",
  },
  dashboard: {
    title: "ダッシュボード",
    subtitle: "ようこそ",
  },
  aiGem: {
    title: "AI医療アシスタント",
    subtitle: "臨床支援アシスタント",
    inputLabel: "患者プロンプト",
    inputPlaceholder: "症状、病歴、または質問を記述してください...",
    generate: "レポートを生成",
    generating: "生成中...",
    warning: "このアシスタントは診断ではなく、サポート用です。",
    outputLabel: "AIレポート",
    noOutput: "まだレポートは生成されていません。",
    error: "AIレポートの生成に失敗しました。",
  },
  patientsPage: {
    title: "患者",
    subtitle: "患者ポータルとアクティブ症例",
    headers: {
      id: "ID",
      name: "患者",
      location: "場所",
      priority: "優先度",
      cases: "症例",
      updated: "最終更新",
    },
  },
  chat: {
    title: "AI医療アシスタント",
    placeholder: "症状を説明するか、質問してください...",
    send: "送信",
    aiAssistant: "AI医療アシスタント",
    backToPortal: "ポータルに戻る",
  },
  icd10: {
    title: "ICD-10リファレンス",
    search: "ICD-10コードを検索",
    noResults: "結果が見つかりません",
  },
};

const translations_zh: TranslationShape = {
  app: {
    dashboard: "仪表板",
    patients: "患者",
    cases: "病例",
    uploadDicom: "上传DICOM",
    billing: "账单",
    patientCabinet: "患者柜",
    patientHome: "我的概览",
    aiGem: "AI医疗助手",
    language: "语言",
    logout: "登出",
  },
  patientCabinet: patientCabinetDefault,
  billingPage: billingPageDefault,
  casesPage: casesPageDefault,
  caseDetails: caseDetailsDefault,
  login: {
    title: "欢迎来到欧洲第二意见",
    secureAccess: "安全医疗访问",
    roleDoctor: "医生",
    rolePatient: "患者",
    loginPlaceholder: "用户名",
    passwordPlaceholder: "密码",
    signIn: "登录",
    invalidCredentials: "凭证无效",
    doctorDemoAccess: "演示医生: admin / admin",
    patientDemoAccess: "演示患者: patient / patient123",
  },
  dashboard: {
    title: "仪表板",
    subtitle: "欢迎",
  },
  aiGem: {
    title: "AI医疗助手",
    subtitle: "临床支持助手",
    inputLabel: "患者请求",
    inputPlaceholder: "描述症状、病史或问题...",
    generate: "生成报告",
    generating: "生成中...",
    warning: "此助手仅用于支持，不是诊断。",
    outputLabel: "AI报告",
    noOutput: "尚未生成报告。",
    error: "生成AI报告失败。",
  },
  patientsPage: {
    title: "患者",
    subtitle: "患者门户和活跃病例",
    headers: {
      id: "ID",
      name: "患者",
      location: "位置",
      priority: "优先级",
      cases: "病例",
      updated: "最后更新",
    },
  },
  chat: {
    title: "AI医疗助手",
    placeholder: "描述您的症状或提出问题...",
    send: "发送",
    aiAssistant: "AI医疗助手",
    backToPortal: "返回门户",
  },
  icd10: {
    title: "ICD-10参考",
    search: "搜索ICD-10代码",
    noResults: "未找到结果",
  },
};

const translations_ko: TranslationShape = {
  app: {
    dashboard: "대시보드",
    patients: "환자",
    cases: "사례",
    uploadDicom: "DICOM 업로드",
    billing: "청구",
    patientCabinet: "환자 캐비닛",
    patientHome: "내 개요",
    aiGem: "AI 의료 어시스턴트",
    language: "언어",
    logout: "로그아웃",
  },
  patientCabinet: patientCabinetDefault,
  billingPage: billingPageDefault,
  casesPage: casesPageDefault,
  caseDetails: caseDetailsDefault,
  login: {
    title: "유로 세컨드 오피니언에 오신 것을 환영합니다",
    secureAccess: "안전한 의료 액세스",
    roleDoctor: "의사",
    rolePatient: "환자",
    loginPlaceholder: "사용자 이름",
    passwordPlaceholder: "비밀번호",
    signIn: "로그인",
    invalidCredentials: "잘못된 자격 증명",
    doctorDemoAccess: "데모 의사: admin / admin",
    patientDemoAccess: "데모 환자: patient / patient123",
  },
  dashboard: {
    title: "대시보드",
    subtitle: "환영합니다",
  },
  aiGem: {
    title: "AI 의료 어시스턴트",
    subtitle: "임상 지원 어시스턴트",
    inputLabel: "환자 프롬프트",
    inputPlaceholder: "증상, 병력 또는 질문을 설명하세요...",
    generate: "보고서 생성",
    generating: "생성 중...",
    warning: "이 어시스턴트는 진단이 아니라 지원용입니다.",
    outputLabel: "AI 보고서",
    noOutput: "아직 보고서가 생성되지 않았습니다.",
    error: "AI 보고서를 생성하지 못했습니다.",
  },
  patientsPage: {
    title: "환자",
    subtitle: "환자 포털 및 활성 사례",
    headers: {
      id: "ID",
      name: "환자",
      location: "위치",
      priority: "우선 순위",
      cases: "사례",
      updated: "최종 업데이트",
    },
  },
  chat: {
    title: "AI 의료 어시스턴트",
    placeholder: "증상을 설명하거나 질문하십시오...",
    send: "보내기",
    aiAssistant: "AI 의료 어시스턴트",
    backToPortal: "포털로 돌아가기",
  },
  icd10: {
    title: "ICD-10 참조",
    search: "ICD-10 코드 검색",
    noResults: "결과를 찾을 수 없습니다",
  },
};

export const translations: Record<LanguageCode, TranslationShape> = {
  en: translations_en,
  de: translations_de,
  fr: translations_fr,
  it: translations_it,
  es: translations_es,
  pt: translations_pt,
  nl: translations_nl,
  pl: translations_pl,
  ru: translations_ru,
  ja: translations_ja,
  zh: translations_zh,
  ko: translations_ko,
};
