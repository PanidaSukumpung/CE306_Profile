import { Box, Container, Heading, Text, Card, Flex, Avatar, Badge, Separator } from "@radix-ui/themes";

function Profile() {
    return (
        <Container size="3" py="6">
            <Card className="bg-red-100 shadow-lg shadow-red-300 border-1 border-red-400">
                <Flex direction="column" gap="4" >
                    {/* Header Section */}
                    <Flex align="center" justify="center" gap="4" 
                    className="shadow-md shadow-red-200 hover:shadow-red-400 hover:transition-shadow duration-300 hover:shadow-lg py-3 bg-white rounded-lg">
                        <Avatar
                            size="8"
                            radius="full"
                            fallback="SP"
                            className="border-2 border-red-800"
                            color="blue"
                            src="/img/profile.JPG" />
                            
                        <Box >
                            <Heading size="8" className="text-rose-700 text-center">Panida Sukumpung</Heading>
                            <Heading size="7" className="text-red-300 text-center border-b-2 border-red-700 mb-3 pb-2">ภณิดา สุกำปัง</Heading>
                            <Flex justify="center">
                                <Text size="3" color="gray">นักศึกษาวิศวกรรมคอมพิวเตอร์</Text>
                            </Flex>
                        </Box>
                    </Flex>
                    <Separator size="4" />
                    {/* About Me Section */}
                    <Box>
                        <Heading size="5" mb="3" color="red">
                            เกี่ยวกับฉัน
                        </Heading>
                        <Text>
                            ชื่อเจน เป็นนักศึกษามหาวิทยาลัยธุรกิจบัณฑิตย์
                            เป็นนักศึกษาที่มีความสนใจด้านการพัฒนาเว็บไซต์ให้สวยและใช้งานง่าย
                            เริ่มจากการออกแบบ UI จนถึงการพัฒนา Front-End ด้วย React และ TypeScript
                            รวมถึง UX ที่ช่วยให้ผู้ใช้มีประสบการณ์ดีขึ้น
                        </Text>
                    </Box>
                    
                    <Separator size="4" />

                    {/* About Me Section */}
                    <Box >
                        <Card>
                                <Heading size="5" mb="3" color="red">
                                ข้อมูลส่วนตัว
                            </Heading>
                            <Flex direction="column" gap="2">
                                <Text color="gray">ชื่อ: ภณิดา สุกำปัง</Text>
                                <Text color="gray">ชื่อเล่น: เจน</Text>
                                <Text color="gray">ที่อยู่: Bangkok, Thailand</Text>
                                <Text color="gray">ภาษา: Thai / English</Text>
                                <Text color="gray">Email: panidasukumpung@gmail.com</Text>
    
                            </Flex>
                        </Card>
                    </Box>

                    {/* Education */}
                    <Box>
                        <Card mb="3">
                            <Flex direction="column" gap="2">
                                <Heading size="4" color="red">วิศวกรรมศาสตร์ วิทยาลัยการเกษตรและเทคโนโลยี</Heading>
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