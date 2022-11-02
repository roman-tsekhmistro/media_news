import styles from "./faq-policy-item.module.scss";

export default function FaqPolicyItem({ policy }) {
  return <li className={styles.policy_item}>{policy}</li>;
}
