import { Flex, Heading, Text } from "@chakra-ui/react";
import Accordion from "../layout/Accordion";

const TeachingPhilosophy = () => {
  return (
    <Flex
      lineHeight="2em"
      fontSize="lg"
      fontFamily="yaldevi"
      direction={["column-reverse", "column-reverse", "column-reverse", "row"]}
    >
      <Flex wrap="wrap" p={["1em", "1em", "1em 2em", "100px 10%"]}>
        <Text
          w={["100%", "100%", "100%", "50%"]}
          pr={[null, null, null, "1em"]}
        >
          Pragmatically, the scope and sequence of reading and writing
          assignments reflect my teaching philosophy in that I require students
          to draw upon both their personal experience and their knowledge
          acquired through academic inquiry. While many skills are necessary for
          “success” in the modern job market, none is more essential than the
          ability to create coherent artifacts (written or otherwise) based on
          definite objectives, fluid organization, and clear communication, as
          well as critical thinking. Both high school and college level
          composition classes build these exact skills in that they determine
          where students’ competencies lay as they enter study and then build
          those skills in to marketable assets through outcome-based
          assessments. Not every student is interested in becoming a
          professional writer, but every student is interested in developing his
          or her skills into competitive abilities in a diverse marketplace. As
          such, educators, especially in English and other humanities
          disciplines, have to recognize not only that students come from
          diverse backgrounds, but that they also have diverse objectives.
        </Text>
        <Text
          w={["100%", "100%", "100%", "50%"]}
          pl={[null, null, null, "1em"]}
        >
          In keeping with balancing both student and institutional objectives,
          my education philosophy aims to elevate marginalized voices, empower
          historically overlooked demographics, and provide such students with
          the tools to become lifelong learners through culturally responsive
          teaching. To that end, supplemental texts in the genres (such as
          mentor texts of writing projects or reader-response assignments)
          should represent these voices, whether they are voices from the First
          Nations, the working poor, or immigrant stories, along with other
          voices not mentioned here. When students are able to see themselves
          represented in course texts, they are better able to engage readily
          with the material. For example, I often use the essays “Working at
          Wendy’s” by Joey Franklin and “What’s Wrong with Black English?” by
          Rachel L. Jones to demonstrate both the rhetorical situations of these
          writers while also giving students a chance to reflect critically on
          the ideas the authors present. Because of this and similar approaches
          to composition, students can find pride not only in their own
          identity, but also in the work they produce while making connections
          in the classroom. If students know their instructors value their
          experience, they are more like to make meaningful contributions in the
          classrooms.
        </Text>{" "}
        <Accordion
          heading="Read More"
          headingSize="sm"
          color=""
          borderColor="white"
        >
          <Flex wrap="wrap">
            <Text
              w={["100%", "100%", "100%", "50%"]}
              pt="1em"
              pr={[null, null, null, "1em"]}
            >
              {`English teachers at all levels have a responsibility to engage students
        in critical thinking, skill building, and civic engagement. The
        classroom is the ideal place for this because students across the
        socio-economic continuum interact, creating a learning environment that
        relies not only on curriculum, but also on what students bring to the
        classroom. This collaborative approach benefits both students and
        educators alike. For example, in a Speech and Debate class, I show a
        national championship winning speech given a few years ago by a Sikh
        student. Many students are unfamiliar with the Sikh religion and assume
        the student delivering the speech is Muslim, or Arab, or even African.
        After viewing the speech, students are given the opportunity to ask
        questions, and through their comprehension of the competitor's ideas,
        they come to a greater understanding of what Sikhism is relative to the
        speaker’s identity within American society.`}
            </Text>
            <Text
              w={["100%", "100%", "100%", "50%"]}
              pt="1em"
              pl={[null, null, null, "1em"]}
            >
              {`Furthermore, teachers need
        to communicate high expectations of respect and agency in the classroom.
        While it isn't the teacher's place to tell students what to think or who
        to be, it is the teacher's place to foster an environment of inclusion
        that is free from intimidation, discrimination, and intolerance. Making
        these expectations clear through modeled behavior, syllabus and policy
        emphasis, and text selection is imperative. Through active collaboration
        on projects like a school-wide student writing manual for Myers Park
        High School, curriculum vertical-alignment for 11th and 12th grades,
        course revisions and updates at Franklin University, and evaluating high
        school instructors for Franklin University’s College Credit Plus
        program, I have actively implemented teaching strategies to promote the
        above ideas. My focus is always a student-centered, responsive approach
        to both assessment and meeting standards because 21st Century society
        demands such engagement.`}
            </Text>
          </Flex>
        </Accordion>
      </Flex>
      <Heading
        as="h2"
        p={["1em", "1em", "1em", "0 20px"]}
        textAlign="center"
        bgColor={[null, null, null, "#EEE"]}
        color="neonGreen"
        borderLeft="grey solid 1px"
        fontFamily="yaldevi"
        sx={{
          "@media screen and (min-width: 991px)": {
            writingMode: "vertical-rl",
          },
        }}
      >
        {`P H I L O S O P H Y`}
      </Heading>
    </Flex>
  );
};

export default TeachingPhilosophy;
