"use client";

import { useState } from "react";
import { services } from "../../data/home";
import { SectionLabel } from "../ui/SectionLabel";

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="services shell section" id="services">
      <SectionLabel number="03">Услуги</SectionLabel>
      <div className="split">
        <h2>
          Запускаем проекты
          <br />
          <em>на новую орбиту</em>
        </h2>
        <p>От идеи до измеримого результата — одна команда на всех этапах.</p>
      </div>
      <div className="serviceList">
        {services.map((service, index) => {
          const isActive = activeService === index;

          return (
            <button
              aria-expanded={isActive}
              className={isActive ? "active" : ""}
              key={service.title}
              onClick={() => setActiveService(index)}
              type="button"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <i aria-hidden="true">{isActive ? "−" : "+"}</i>
            </button>
          );
        })}
      </div>
    </section>
  );
}
