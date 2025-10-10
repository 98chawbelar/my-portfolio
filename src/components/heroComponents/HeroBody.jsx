import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { BsPlay } from "react-icons/bs";
import { Link } from "react-router-dom";

import EcommerceImage from "../../assets/projectImages/eCommerce/hero_img.png";
import GymImage from "../../assets/projectImages/gym/HomePageGraphic.png";
import { projects } from "../../helper/projects";
import { CgNametag } from "react-icons/cg";

const HeroBody = () => {
  return (
    <Box mt={{ base: 8, md: 12, lg: 16 }}>
      {/* Section Header */}
      <Flex justify="space-between" align="center" mb={12} flexWrap="wrap">
        <Heading fontSize={{ base: "xl", md: "2xl" }}>
          🚀 Recent Projects
        </Heading>
        <Link to="/project">
          <Button
            rightIcon={<FaArrowRight />}
            bg="#87CEFA"
            _hover={{ bg: "#4682B4", color: "white" }}
            fontWeight="600"
            size="md"
            mt={{ base: 4, md: 0 }}
          >
            View More
          </Button>
        </Link>
      </Flex>

      {/* Project Cards */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projects.map(({ name, image, github, demo, ui, features }, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            transition="all 0.3s ease"
            _hover={{ boxShadow: "xl", transform: "translateY(-6px)" }}
            overflow="hidden"
            minH="440px" // equal card height
            display="flex"
            flexDirection="column"
          >
            {/* Image */}
            <Box
              h="230px" // slightly taller for better visibility
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="gray.50"
              overflow="hidden" // ensures no overflow beyond the box
            >
              <Image
                src={image}
                alt={name}
                objectFit="contain" // keeps image fully visible and not stretched
                maxH="100%"
                maxW="100%"
                _hover={{ boxShadow: "lg", transform: "translateX(-3px)" }}
                p={4} // adds inner spacing so large images don’t touch edges
              />
            </Box>

            {/* Content */}
            <Box flex="1" p={5} display="flex" flexDirection="column">
              <Heading fontSize="lg" mb={2}>
                {name}
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={4} flex="1">
                {ui ||
                  (features && features[0]) ||
                  "A modern, responsive project"}
              </Text>

              {/* Actions */}
              <Flex gap={4} mt="auto" wrap="wrap">
                {github && (
                  <Button
                    as="a"
                    href={github}
                    target="_blank"
                    leftIcon={<FaInfoCircle />}
                    variant="outline"
                    size="sm"
                    fontWeight="500"
                    _hover={{ bg: "#4682B4", borderColor: "#f7f7f7" }}
                  >
                    View Code
                  </Button>
                )}
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
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HeroBody;
