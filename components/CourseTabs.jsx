import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/tabs";
import { CoursesTaught, SampleSyllabi, PedagogicalApproach } from "./index";

const CourseTabs = () => {
  return (
    <Tabs variant="enclosed" p="2em 0" lineHeight="2em">
      <TabList justifyContent="center">
        <Tab fontSize="md" fontWeight="">
          Courses Taught
        </Tab>
        <Tab fontSize="md" fontWeight="">
          Sample Syllabi
        </Tab>
        <Tab fontSize="md" fontWeight="">
          Approach
        </Tab>
      </TabList>
      <TabPanels fontFamily="lora" p="0 8%">
        <TabPanel>
          <CoursesTaught />
        </TabPanel>
        <TabPanel>
          <SampleSyllabi />
        </TabPanel>
        <TabPanel>
          <PedagogicalApproach />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CourseTabs;
