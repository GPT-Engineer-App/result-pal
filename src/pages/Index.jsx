import React, { useState } from "react";
import { Container, VStack, Heading, Input, Button, Table, Thead, Tbody, Tr, Th, Td, Alert, AlertIcon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [studentId, setStudentId] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    // Mock data for demonstration
    const mockResults = {
      12345: { name: "John Doe", math: 95, science: 90, english: 85 },
      67890: { name: "Jane Smith", math: 88, science: 92, english: 89 },
    };

    if (mockResults[studentId]) {
      setResults(mockResults[studentId]);
      setError("");
    } else {
      setResults(null);
      setError("Student ID not found.");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          School Results
        </Heading>
        <Input placeholder="Enter Student ID" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handleSearch}>
          Search
        </Button>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        {results && (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Subject</Th>
                <Th>Score</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Math</Td>
                <Td>{results.math}</Td>
              </Tr>
              <Tr>
                <Td>Science</Td>
                <Td>{results.science}</Td>
              </Tr>
              <Tr>
                <Td>English</Td>
                <Td>{results.english}</Td>
              </Tr>
            </Tbody>
          </Table>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
