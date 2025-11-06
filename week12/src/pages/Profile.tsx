import { Box, Container, Heading, Text, Card, Flex, Avatar, Badge, Separator } from "@radix-ui/themes";

function Profile() {
    return (
        <Container size="3" py="6">
            <Card>
                <Flex direction="column" gap="4">
                    {/* Header Section */}
                    <Flex align="center" gap="4">
                        <Avatar
                            size="8"
                            radius="full"
                            fallback="SP"
                            color="blue" />
                        <Box>
                            <Heading size="7">ภณิดา สุกำปัง</Heading>
                            <Text size="3" color="gray">นักศึกษาวิศวกรรมคอมพิวเตอร์</Text>
                        </Box>
                    </Flex>
                    <Separator size="4" />
                    {/* About Me Section */}
                    <Box>
                        <Heading size="5" mb="3">
                            เกี่ยวกับฉัน
                        </Heading>
                        <Text>
                            ชื่อเจน เป็นนักศึกษามหาวิทยาลัยธุรกิจบัณฑิตย์
                            เป็นนักศึกษาที่มีความสนใจด้านการพัฒนาเว็บไซต์และเทคโนโลยีสมัยใหม่
                        </Text>
                    </Box>
                    <Separator size="4" />

                    {/* Education */}
                    <Box>
                        <Card mb="3">
                            <Flex direction="column" gap="2">
                                <Heading size="4">วิศวกรรมศาสตร์ วิทยาลัยการเกษตรและเทคโนโลยี</Heading>
                                <Text color="gray">สาขาวิศวกรรมเกษตรและการอาหาร</Text>
                                <Text color="gray">มหาวิทยาลัยธุรกิจบัณฑิตย์</Text>
                                <Text size="2" color="gray">2566 - ปัจจุบัน</Text>
                            </Flex>
                        </Card>

                    </Box>
                    <Separator size="4" />
                    {/* Skills Section */}
                    <Box>
                        <Heading size="5" mb="3">
                            ทักษะและความสามารถ
                        </Heading>
                        <Flex gap="2" wrap="wrap">
                            <Badge size="2" color="blue">HTML/CSS</Badge>
                            <Badge size="2" color="green">JavaScript</Badge>
                            <Badge size="2" color="purple">TypeScript</Badge>
                            <Badge size="2" color="orange">React</Badge>
                            <Badge size="2" color="red">Node.js</Badge>
                            <Badge size="2" color="cyan">Git</Badge>
                            <Badge size="2" color="pink">Tailwind CSS</Badge>
                            <Badge size="2" color="indigo">Radix UI</Badge>
                        </Flex>
                    </Box>
                </Flex>
            </Card>
        </Container>
    )
}

export default Profile