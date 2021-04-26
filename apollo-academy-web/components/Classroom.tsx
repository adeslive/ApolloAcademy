import { Box, Flex, Heading, Text, Square, Link, Avatar } from "@chakra-ui/react";
import React from "react";
import NextLink from 'next/link';
import { Course, Language, RegularUserFragment, Teacher, VirtualClassroom } from "../generated/graphql";

export type classRoomProps = Pick<VirtualClassroom, 'id' | 'link' | 'description' | 'capacity' | 'createdAt' | 'updatedAt' | 'enable'> & {
    size?: string,
    teacher?: Pick<Teacher, 'id'> & {
        user: RegularUserFragment
    },
    course: Pick<Course, 'id' | 'name' | 'price'> & {
        language: Pick<Language, 'id' | 'name' | 'code'>
    }

};

const Classroom = ({ ...props }) => {
    return (
        <Flex border="1px" borderColor="gray.100" w={props.size !== "small" ? "20rem" : '14rem'} rounded="lg" bg="white" shadow="md" >
            <Square bg="indigo" w="10%" />

            <Box p="2rem">
                <Text ml="auto" as="sup">#{props.id}</Text>
                <NextLink href={"/course/" + props.id}>
                    <Link>
                        <Heading as="h3" size="sm">
                            {props.course.name}
                        </Heading>
                    </Link>
                </NextLink>
                <Text as="sub">{props.course.language.name}</Text>
                <Text isTruncated noOfLines={3} mt="1rem">
                    {props.size !== 'small' && props.description}
                </Text>
            </Box>
            {props.teacher &&
                (<NextLink href={"/teacher/" + props.teacher.id}>

                    <Avatar name={props.teacher.user.name} mt="2rem" mr="2em" />

                </NextLink>)
            }
        </Flex>
    )
}

export default Classroom;