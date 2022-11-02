import Button from "../common/Button";
import styles from "./tabs.module.scss";
import classNames from "classnames/bind";
import { policyTabs, regionTabs, tabs } from "../../data/tabs";

export default function Tabs({
  isSideBarTabs = false,
  isRegionsTabs = false,
  isPolicyTabs = false,
  isEconomyTabs = false,
  isLifeStyleTabs = false,
}) {
  let cx = classNames.bind(styles);

  let tabsClasses = cx("tabs", {
    regions_tabs: isRegionsTabs,
    policy_tabs: isPolicyTabs,
    economy_tabs: isEconomyTabs,
    lifestyle_tabs: isLifeStyleTabs,
  });

  return (
    <>
      {isSideBarTabs ? (
        <div className={tabsClasses}>
          {tabs.map((tab) => (
            <Button inner={tab} />
          ))}
        </div>
      ) : null}
      {isRegionsTabs ? (
        <div className={tabsClasses}>
          {regionTabs.map((tab) => (
            <Button inner={tab} />
          ))}
        </div>
      ) : null}
      {isPolicyTabs ? (
        <div className={tabsClasses}>
          {policyTabs.map((tab) => (
            <Button inner={tab} />
          ))}
        </div>
      ) : null}
      {isLifeStyleTabs ? (
        <div className={tabsClasses}>
          {policyTabs.map((tab) => (
            <Button inner={tab} />
          ))}
        </div>
      ) : null}
    </>
  );
}
