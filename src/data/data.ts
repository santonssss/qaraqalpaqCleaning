import {
  Home,
  Building2,
  CalendarClock,
  Sparkles,
  Brush,
  Droplet,
} from "lucide-react";

export const services = [
  {
    icon: Home,
    title: "Уборка жилых помещений",
    description:
      "Преобразите свой дом с нашей тщательной уборкой. Мы уделяем внимание каждой детали, обеспечивая чистоту и комфорт в вашем доме.",
    imageSrc:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    icon: Building2,
    title: "Уборка коммерческих помещений",
    description:
      "Создайте чистую и профессиональную атмосферу в вашем офисе с нашими специализированными услугами уборки.",
    imageSrc:
      "https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    icon: Sparkles,
    title: "Генеральная уборка",
    description:
      "Мы очистим даже самые труднодоступные места, избавим от стойкой грязи и освежим ваше пространство.",
    imageSrc:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    icon: CalendarClock,
    title: "Регулярная уборка",
    description:
      "Поддерживайте чистоту на постоянной основе с нашими планами регулярной уборки (ежедневно, еженедельно, ежемесячно).",
    imageSrc:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    icon: Brush,
    title: "Специализированная уборка",
    description:
      "От чистки ковров и мебели до уборки после ремонта — наши профессионалы справятся с любой задачей.",
    imageSrc:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    icon: Droplet,
    title: "Экологичная уборка",
    description:
      "Выбирайте экологически безопасные чистящие средства и методы, которые эффективны и не вредят природе.",
    imageSrc:
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

export const products = [
  {
    id: 1,
    name: "Универсальное чистящее средство",
    description:
      "Мощная, экологичная формула, которая очищает и придаёт блеск всем поверхностям без агрессивных химикатов.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Универсальные",
  },
  {
    id: 2,
    name: "Натуральное средство для стекол",
    description:
      "Бесследно удаляет загрязнения благодаря растительным компонентам, безопасно для детей и животных.",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Специализированные",
  },
  {
    id: 3,
    name: "Средство для мытья полов",
    description: "Глубоко очищает, удаляет грязь и оставляет свежий аромат.",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsZWFuaW5nJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    category: "Полы",
  },
  {
    id: 4,
    name: "Микрофибровые салфетки",
    description:
      "Набор сверхвпитывающих, не оставляющих ворсинок салфеток для уборки без повреждения поверхностей.",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1616740540792-3daec604777d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Инструменты",
  },
  {
    id: 5,
    name: "Средство для глубокой чистки ванной",
    description:
      "Эффективно удаляет мыльный налёт, плесень и грибок со всех поверхностей в ванной.",
    price: 11.99,
    image:
      "https://plus.unsplash.com/premium_photo-1677011779114-5af7e8c06ee1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW5pbmclMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Специализированные",
  },
  {
    id: 6,
    name: "Экологичное средство для мытья посуды",
    description:
      "Растительная, биоразлагаемая формула легко справляется с жиром и бережно относится к коже рук.",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Кухня",
  },
];

export const categories = [
  "Все",
  "Универсальные",
  "Специализированные",
  "Полы",
  "Кухня",
  "Инструменты",
];
