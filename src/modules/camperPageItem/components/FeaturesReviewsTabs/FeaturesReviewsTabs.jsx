import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import s from './featuresReviewsTabs.module.scss';

const FeaturesReviewsTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab className={s.tabName}>Features</Tab>
        <Tab className={s.tabName}>Reviews</Tab>
      </TabList>
      <TabPanel></TabPanel>
    </Tabs>
  );
};

export default FeaturesReviewsTabs;
