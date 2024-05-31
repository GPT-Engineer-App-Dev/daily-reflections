import { Box, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <Stack direction="row" spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Blog</Link>
          <Link href="#" color="white">Contact</Link>
        </Stack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }} spacing={8}>
        {/* Blog Posts Section */}
        <Box flex="3">
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>January 1, 2023</Text>
              <Text mt={4}>This is a short excerpt from the blog post...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>February 1, 2023</Text>
              <Text mt={4}>This is a short excerpt from the blog post...</Text>
            </Box>
            {/* Add more blog posts as needed */}
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#">Recent Post 1</Link>
            <Link href="#">Recent Post 2</Link>
            <Link href="#">Recent Post 3</Link>
            {/* Add more recent posts as needed */}
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8} textAlign="center">
        <Stack direction="row" spacing={4} justify="center">
          <Link href="#" isExternal><FaTwitter /></Link>
          <Link href="#" isExternal><FaFacebook /></Link>
          <Link href="#" isExternal><FaInstagram /></Link>
        </Stack>
        <Text mt={4}>© 2023 My Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;