import { useState, ReactNode } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CamperFeatures, CamperReviews } from 'modules/camperPageItem';
import s from './featuresReviewsTabs.module.scss';

const FeaturesReviewsTabs = ({ children }: { children?: ReactNode }) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabSelect = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={handleTabSelect}
      focusTabOnClick={false}
    >
      <TabList className={s.tabsList}>
        <Tab className={s.tabName} selectedClassName={s.tabActive}>
          Features
        </Tab>
        <Tab className={s.tabName} selectedClassName={s.tabActive}>
          Reviews
        </Tab>
      </TabList>
      <div className={s.tabsChildrenWrapper}>
        <TabPanel>
          <CamperFeatures />
        </TabPanel>
        <TabPanel>
          <CamperReviews />
        </TabPanel>
        {children && children}
      </div>
    </Tabs>
  );
};

export default FeaturesReviewsTabs;
