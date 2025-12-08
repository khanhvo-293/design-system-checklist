import React from "react";
import s from "./Hero.module.css";

const Hero = ({ title, subtitle, children, link }) => {
  return (
    <div className={s.root}>
      <h1 className={s.title}>{title}</h1>
      {typeof subtitle === "string" ? (
        <p
          className={s.subtitle}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      ) : (
        <p className={s.subtitle}>{subtitle}</p>
      )}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className={s.link}>
          Checklist: how to build a Component →
        </a>
      )}
      {children && <div className={s.content}>{children}</div>}
    </div>
  );
};

export default Hero;
