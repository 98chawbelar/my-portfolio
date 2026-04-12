import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Text,
  Link,
  VStack,
  List,
  ListItem,
  Icon,
  Heading,
  useColorModeValue,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaGithub, FaCheckCircle } from "react-icons/fa";
import { BsPlay } from "react-icons/bs";
import { projects } from "../../helper/projects";
import PaddingBox from "../../assets/frame/PaddingBox";

// Project Intro Section
const ProjectIntro = () => (
  <Box mb={10}>
    <Heading
      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      fontWeight="semibold"
      fontFamily="monospace"
      lineHeight="short"
      mb={4}
    >
      My Projects
    </Heading>

    <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.300")}>
      Over the past two years, I have dedicated myself to building this suite
      of full-stack and frontend applications as part of a personal learning
      journey and portfolio development. Each project reflects increasing
      complexity and a growing mastery of React, modern UI libraries, state
      management, and backend integrations.
      <br />
      <br />
      These projects are not just demos — they are designed as real-world
      scalable solutions. While I’ve highlighted my three biggest projects
      below (Gym, E-Commerce, and Hospital Booker), I have also created
      several smaller projects like a Calculator App, To-Do List, Weather
      App, and more to sharpen specific technical skills.
    </Text>
  </Box>
);

// Upcoming Projects
const UpcommingProjects = () => (
  <Box mb={10} mt={12}>
    <Heading
      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      fontWeight="semibold"
      fontFamily="monospace"
      lineHeight="short"
      mb={4}
    >
      My Up-comming Projects
    </Heading>

    <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.300")}>
      Over the coming period, I am planning and preparing to build a new suite
      of full-stack and frontend applications as part of my continued
      learning journey and portfolio growth. These upcoming projects are
      designed to challenge my skills further while deepening my
      understanding of React, modern UI libraries, state management, and
      backend integrations.
      <br />
      <br />
      These projects are intended to be more than concept ideas — they are
      planned as real-world, scalable solutions. The primary upcoming
      projects include a Hotel Website, a Hotel Property Management System
      (PMS), and a Game Download Website.
    </Text>
  </Box>
);

// Demo Notice Component
const Notify = () => {
  const bg = useColorModeValue("blue.50", "gray.700");
  const border = useColorModeValue("blue.200", "gray.600");

  return (
    <Box
      mt={12}
      p={6}
      borderRadius="xl"
      bg={bg}
      border="1px solid"
      borderColor={border}
    >
      <Heading size="md" mb={3}>
        Demo Notice
      </Heading>

      <Text fontSize="sm">
        To view the full functionality of the Book Store project
        <br />
        <Link
          className="te"
          href="https://dahal-book-store-server.vercel.app/"
          isExternal
        >
          View Backend API
        </Link>
      </Text>
    </Box>
  );
};

// Project Card
const ProjectCard = ({ project, demo }) => {
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box
      bg={cardBg}
      borderRadius="2xl"
      overflow="hidden"
      p={6}
      shadow="lg"
      transition="all 0.4s ease"
      _hover={{
        transform: "translateY(-6px)",
        shadow: "2xl",
      }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border="1px solid rgba(135, 206, 250, 0.5)"
    >
      {/* Image */}
      <Box mb={4} borderRadius="lg" overflow="hidden">
        <Image
          src={project.image}
          alt={project.name}
          objectFit="cover"
          width="100%"
          height="100%"
          borderRadius="lg"
        />
      </Box>

      {/* Info */}
      <VStack align="start" spacing={3} flex={1}>
        <Heading size="md">{project.name}</Heading>

        <Text fontSize="sm">
          <strong>Languages:</strong> {project.languages.join(", ")}
        </Text>

        <Text fontSize="sm">
          <strong>UI Libraries:</strong> {project.ui}
        </Text>

        <Text fontSize="sm">
          <strong>Tools:</strong>{" "}
          {project.tools ? project.tools.join(", ") : "—"}
        </Text>

        <Box mt={2} width="100%">
          <Text fontWeight="semibold" fontSize="sm" mb={1}>
            Key Features:
          </Text>

          <List spacing={2}>
            {project.features.map((feature, i) => (
              <ListItem key={i} display="flex" alignItems="center">
                <Icon as={FaCheckCircle} color="#87CEFA" mr={2} />
                <Text fontSize="sm">{feature}</Text>
              </ListItem>
            ))}
          </List>

          {/* Actions (like Hero section) */}
          <Flex gap={3} mt={4} wrap="wrap">
            {demo && (
              <Button
                as="a"
                href={demo}
                target="_blank"
                leftIcon={<BsPlay />}
                bg="#87CEFA"
                size="sm"
                fontWeight="600"
                _hover={{ bg: "#4682B4", color: "white" }}
              >
                Live Demo
              </Button>
            )}
          </Flex>
        </Box>
      </VStack>

      {/* GitHub Link */}
      <Link
        href={project.github}
        isExternal
        mt={4}
        display="inline-flex"
        alignItems="center"
        color="#4682B4"
        fontWeight="bold"
        _hover={{ textDecoration: "underline" }}
      >
        <Icon as={FaGithub} mr={2} />
        View on GitHub
      </Link>
    </Box>
  );
};

// Main Component
const Project = () => {
  return (
    <PaddingBox>
      <Container maxW="100%" mt={6}>
        <ProjectIntro />

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              demo={project.demo}
            />
          ))}
        </SimpleGrid>

        <Notify />

        <UpcommingProjects />
      </Container>
    </PaddingBox>
  );
};

export default Project;

