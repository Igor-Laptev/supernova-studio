export type Service = {
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
};

export const navigation = [
  { label: "О нас", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Услуги", href: "#services" },
  { label: "Стоимость", href: "#pricing" },
];

export const metrics = [
  { value: "65%", label: "рост спроса на услуги" },
  { value: "70%", label: "покупают онлайн" },
  { value: "40%", label: "инвестиций в недвижимость" },
  { value: "85%", label: "информации в интернете" },
];

export const services: Service[] = [
  {
    title: "Логотип и фирменный стиль",
    description:
      "Стратегия, нейминг, визуальная система и правила работы с брендом.",
  },
  {
    title: "Разработка сайтов",
    description:
      "Исследование, прототип, дизайн и разработка сайта под задачи бизнеса.",
  },
  {
    title: "Продвижение и реклама",
    description:
      "Креативные кампании, медиапланирование и аналитика эффективности.",
  },
  {
    title: "Контент-маркетинг",
    description: "Контент-стратегия, фото, видео и материалы для всех каналов.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Старт",
    price: "200 000 ₽",
    features: ["Анализ проекта", "Упаковка проекта", "Соцсети", "Презентация"],
  },
  {
    name: "Орбита",
    price: "450 000 ₽",
    featured: true,
    features: [
      "Анализ проекта",
      "Гайдлайн",
      "Сайт + SEO",
      "Соцсети + SMM",
      "Презентация",
    ],
  },
  {
    name: "Сверхновая",
    price: "1 000 000 ₽",
    features: [
      "Брендбук",
      "Сайт + SEO",
      "Соцсети + SMM",
      "Контент-стратегия",
      "Реклама",
    ],
  },
];
