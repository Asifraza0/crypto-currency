import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://www.google.com/url?sa=i&url=https://laumania.net/2014/12/25/embed-github-profile-card/%3A%2F%2Flearn.adafruit.com%2Fexcellent-github-profile%2Fadd-an-image&psig=AOvVaw0TIofDG6jPUrrtO9MwT86O&ust=1704214261081000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMDYv4LTvIMDFQAAAAAdAAAAABAE";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder is Asif</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
