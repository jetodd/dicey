import React, { useState } from "react";
import styles from "./Accordion.module.scss";

export interface IAccordion {
  id: string;
  title: string;
  children: React.ReactNode;
  open?: boolean;
}

export default function Accordian({
  id,
  title,
  children,
  open = false,
}: IAccordion) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div id={id} className={styles.accordion}>
      <h3>
        <button
          id={`${id}-trigger`}
          type="button"
          aria-expanded={isOpen}
          className={styles.trigger}
          aria-controls={`${id}-body`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {title}
          {isOpen ? "-" : "+"}
        </button>
      </h3>
      <div
        id={`${id}-body`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={[styles.body, !isOpen ? styles.closed : null].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
