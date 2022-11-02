import styles from "./accordion-item.module.scss";
import Arrow from "../../../assets/images/footerAccordionArrow.svg";
import classNames from "classnames";

export default function AccordionItem({ listItem, onToggle, active }) {
  return (
    <div className={styles.accordion_item}>
      {listItem?.links ? (
        <button className={styles.button} onClick={onToggle}>
          {listItem.title}
          {listItem?.links ? (
            <img
              className={classNames(styles.control, {
                [styles.rotate]: active,
              })}
              src={Arrow}
              alt="control"
            />
          ) : null}
        </button>
      ) : (
        <button className={styles.button}>
          {listItem.title}
          {listItem?.links ? (
            <img
              className={classNames(styles.control, {
                [styles.rotate]: active,
              })}
              src={Arrow}
              alt="control"
            />
          ) : null}
        </button>
      )}
      <div
        className={classNames(styles.list_item, {
          [styles.active_list]: active,
        })}
      >
        {listItem?.links?.map(({ link }) => (
          <div
            className={classNames(styles.list_item_text, {
              [styles.show_text]: active,
            })}
          >
            {link}
          </div>
        ))}
      </div>
    </div>
  );
}

//
