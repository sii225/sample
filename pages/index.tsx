import { Box, Heading, Button, Text } from '@chakra-ui/react';

export default function Home() {
  const Click = () => {
    alert('wait what');
  };
  const wtf = () => {
    alert('wtf');
  };
  return (
    <Box>
      <Heading>aaaa</Heading>
      <Button onClick={Click}>button</Button>
      <Text>Wait what</Text>
      <Box>
        <Text>aaaaa</Text>
      </Box>
    </Box>
  );
}
