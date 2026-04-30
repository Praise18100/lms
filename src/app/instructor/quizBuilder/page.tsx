import InstructorSectionHeader from '@/components/header/instructorSectionHeader';
import GenerateNewQuiz from '@/components/pages/instructor/quizBuilder/generateNewQuiz';
import PublishedQuizzes from '@/components/pages/instructor/quizBuilder/publishedQuizzes';
import { Flex } from '@chakra-ui/react';

export default function QuizBuilder() {
  return (
        <Flex direction="column" w="full" px={{ base: 7, md: 9 }}>
          <InstructorSectionHeader />
          <Flex gap={6} direction="column">
            <GenerateNewQuiz />
         <PublishedQuizzes />
          </Flex>
        </Flex>
      );
    }
