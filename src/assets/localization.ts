export const messages = {
  ru: {
    title: 'Войси',
    notFound: 'Страница не найдена',
    close: 'Закрыть',
    headline:
      'Вы уже знаете, что за зверь — <a target="_blank" href="https://t.me/voicybot">@voicybot</a>. Если его добавить в групповой чат, он автоматически переводит все голосовые сообщения в текст. Вот и все.',
    add: 'Добавить в Телеграм',
    errors: {
      internal: 'Внутренняя ошибка сервера',
    },
    recognition: {
      headline:
        'К сожалению, Телеграм разрешает ботам качать только файлы менее 20 мегабайт, что ограничивает пользу Войси. Поэтому я потратил пару часов и добавил на этот сайт встроенное распознование речи из файлов. Все абсолютно бесплатно, никакие данные не сохраняются у меня на сервере, а код опубликован в <a target="_blank" href="https://github.com/backmeupplz/voicy-landing">открытом доступе</a>. Пользуйтесь на здоровье.',
      wit: {
        headline:
          '<a target="_blank" href="https://wi.ai">Wit.ai</a> — это бесплатный движок распознавания речи. Обычно он поддерживает лишь аудио-записи длинной менее 10 секунд, но Войси автоматически разделяет ваш аудио-файл на отрезки длинной в 10 секунд и распознает их раздельно. Поэтому вы можете наблюдать странные артефакты в районе промежутков между 10-ти секундными интервалами. Пожалуйста, введите ключ от вашего Wit приложения ниже. Можете ознакомиться с <a target="_blank" href="">инструкцией</a>, как получить ключ.',
        key: 'Ключ Wit приложения',
        keyHint: 'Мы не храним ваши ключи',
        file: 'Файл для распознавания',
        fileHint: 'Мы не храним ваши файлы',
      },
      gs: {
        headline:
          '<a target="_blank" href="https://cloud.google.com/speech-to-text/">Google Speech</a> — это более продвинутый движок распознавания речи. После того, как Войси получает ваш файл, он загружает его в  Google Cloud Storage, распознает при помощи Google Speech, а после удаляет файл с Google Cloud Storage. Пожалуйста, предоставьте ваши ключи от Google Cloud ниже. Можете ознакомиться с <a target="_blank" href="">инструкцией</a>, как получить ключи. Пожалуйста, учтите, что Google Speech не бесплатный, Google будет снимать с вас деньги, как указано в их <a target="_blank" href="https://cloud.google.com/speech-to-text/pricing">справке</a>.',
      },
    },
  },
  en: {
    title: 'Voicy',
    notFound: 'Page not found',
    close: 'Close',
    headline:
      'You know what <a target="_blank" href="https://t.me/voicybot">@voicybot</a> is. When added to any group chat, it automatically converts all the audio messages to text. That\'s it.',
    add: 'Add to Telegram',
    errors: {
      internal: 'Internal server error',
    },
    recognition: {
      headline:
        'Unfortunately, Telegram doesn\'t allow bots to download files over 20 megabytes. Because of this limit, I\'ve spent a couple of hours an implemented voice recognition on this webpage. It\'s absolutely free, no data is stored on my servers, and code is completely <a target="_blank" href="https://github.com/backmeupplz/voicy-landing">open source</a>. Enjoy.',
      wit: {
        headline:
          '<a target="_blank" href="https://wi.ai">Wit.ai</a> is a free voice recognition engine. It usually only supports voice messages up to 10 seconds long, but Voicy automatically splits your recordings into 10 seconds intervals and recognizes them separately. Hence you can experience weird artifacts inbetween the 10 second intervals. Please, provide your Wit app key in the form below. Here\'s <a target="_blank" href="">an instruction</a> on how to obtain one.',
        key: 'Wit app key',
      },
      file: 'File to recognize',
      fileHint: 'We do not store your files',
      keyHint: 'We do not store your keys',
      gs: {
        headline:
          '<a target="_blank" href="https://cloud.google.com/speech-to-text/">Google Speech</a> is a more advanced voice recognition engine. After Voicy obtains your file, it uploads the file to the Google Cloud Storage, then recognizes it with Google Speech, then deletes the file from the Google Cloud Storage. Please, provide your Google Cloud credentials below. Here\'s <a target="_blank" href="">an instruction</a> on how to obtain them. Please, note, that Google Speech is not free, Google will charge you as outlined in their <a target="_blank" href="https://cloud.google.com/speech-to-text/pricing">reference</a>.',
        key: 'Google Cloud credentials',
      },
      recognize: 'Recognize',
    },
  },
}
