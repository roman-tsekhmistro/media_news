import styles from "./policy.module.scss";
import NewsDashboard from "../NewsDashboard";
import Sidebar from "../../../components/common/Sidebar";

export default function Policy() {
  return (
    <section className={styles.policy}>
      <Sidebar isPolicySidebar />
      <NewsDashboard isPolicyList />
    </section>
  );
}
