import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'О кафедре',
      links: [
        {
          text: 'История',
          href: getPermalink('/history'),
        },
        {
          text: 'Структура',
          href: getPermalink('/structure'),
        },
      ],
    },
    {
      text: 'Наши люди',
      links: [
        {
          text: 'Сотрудники',
          href: getPermalink('/people'),
        },
        {
          text: 'Руководство',
          href: getPermalink('/management'),
        },
        {
          text: 'С нами работали',
          href: getPermalink('/retired'),
        },
        // {
        //   text: 'Студенты',
        //   href: getPermalink('/students'),
        // },
      ],
    },
    {
      text: 'Образование',
      links: [
        {
          text: 'Учебный план',
          href: getPermalink('/curriculum'),
        },
        {
          text: 'Курсы',
          href: getPermalink('/courses'),
        },
        {
          text: 'Практики',
          href: getPermalink('/practice'),
        },
        {
          text: 'Просвещение',
          href: getPermalink('/philanthropy'),
        },
        {
          text: 'Учебники и пособия',
          href: getPermalink('/books'),
        },
      ],
    },
    // {
    //   text: 'Наука',
    //   href: '#',
    // },
    {
      text: 'Контакты',
      href: getPermalink('/contact'),
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'О кафедре',
      links: [
        {
          text: 'История',
          href: getPermalink('/history'),
        },
        {
          text: 'Структура',
          href: getPermalink('/structure'),
        },
      ],
    },
    {
      title: 'Наши люди',
      links: [
        {
          text: 'Сотрудники',
          href: getPermalink('/people'),
        },
        {
          text: 'Руководство',
          href: getPermalink('/management'),
        },

        {
          text: 'С нами работали',
          href: getPermalink('/retired'),
        },
        // {
        //   text: 'Студенты',
        //   href: getPermalink('/students'),
        // },
      ],
    },
    {
      title: 'Образование',
      links: [
        {
          text: 'Учебный план',
          href: getPermalink('/curriculum'),
        },
        {
          text: 'Курсы',
          href: getPermalink('/courses'),
        },
        {
          text: 'Практики',
          href: getPermalink('/practice'),
        },
        {
          text: 'Просвещение',
          href: getPermalink('/philanthropy'),
        },
        {
          text: 'Учебники и пособия',
          href: getPermalink('/books'),
        },
      ],
    },
    {
      title: 'Университет',
      links: [
        { text: 'Географический факультет', href: 'https://www.geogr.msu.ru/' },
        { text: 'МГУ имени М. В. Ломоносова', href: 'https://www.msu.ru/' },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Контакты', href: getPermalink('/contact') }],
  socialLinks: [
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/cartomsu' },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/channel/UCKRzV5MyOoQNG9rbLdSdgrA',
    },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/cartomsu/karta',
    },
  ],
  footNote: `© ${new Date().getFullYear()} Кафедра картографии и геоинформатики`,
};
