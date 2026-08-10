"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon } from "../ui/ArrowIcon";
import { SectionLabel } from "../ui/SectionLabel";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section className="contact section" id="contact">
      <div className="shell contactGrid">
        <div>
          <SectionLabel number="05">Контакты</SectionLabel>
          <h2>
            Готовы зажечь
            <br />
            <em>новую звезду?</em>
          </h2>
          <p>
            Расскажите о задаче — вернёмся с вопросами и предложим следующий
            шаг.
          </p>
          <a className="email" href="mailto:super@yandex.ru">
            super@yandex.ru
          </a>
        </div>

        {isSubmitted ? (
          <div className="success" role="status">
            <span aria-hidden="true">✦</span>
            <h3>Заявка отправлена</h3>
            <p>Спасибо! Мы скоро свяжемся с вами.</p>
            <button onClick={() => setIsSubmitted(false)} type="button">
              Отправить ещё одну
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Ваше имя
              <input name="name" placeholder="Как к вам обращаться?" required />
            </label>
            <label>
              Телефон / Telegram
              <input name="contact" placeholder="+7 999 000-00-00" required />
            </label>
            <label>
              Какие у вас задачи
              <textarea
                name="message"
                placeholder="Коротко расскажите о проекте"
                rows={3}
                required
              />
            </label>
            <button type="submit">
              Отправить заявку <ArrowIcon />
            </button>
            <small>Нажимая кнопку, вы соглашаетесь с обработкой данных</small>
          </form>
        )}
      </div>
    </section>
  );
}
