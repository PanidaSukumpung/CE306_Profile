import { Box, Container, Heading, Text, Card, Flex } from '@radix-ui/themes';
import { CgWebsite } from "react-icons/cg";
import { FaLightbulb } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Home() {
    return(
        <Container 
            size="3" 
            py="7" 
            className='bg-rose-50 p-6 rounded-2xl mt-6 shadow-xl shadow-rose-100' 
        >
        
            <Box>
                {/* (Header) */}
                <Heading 
                    size="9" 
                    mb="2" 
                    weight="bold" 
                    className='text-rose-700 py-3 border-b-4 border-rose-300 tracking-tight' 
                >
                    Welcome to my Portfolio
                </Heading>
                
                <Text 
                    size="5" 
                    mb="6" 
                    color="gray" 
                    className="italic text-gray-500" 
                >

                    เว็บไซต์แนะนำตัวและประวัติส่วนตัวของ Panida Sukumpung
                </Text>

                {/* เนื้อหาหลัก */}
                <Flex direction="column" gap="5">
                    
                    <Card className='bg-white border border-rose-100 shadow-md transition-shadow hover:shadow-lg'>
                        <Heading size="5" mb="3" className='text-rose-600 font-semibold flex items-center gap-2'>
                            <FaLightbulb className="text-yellow-200 text-2xl " />
                            วิสัยทัศน์และแรงบันดาลใจ
                        </Heading>
                        <Text as="p" size="3" color="gray">
                            ในฐานะนักศึกษาวิศวกรรมคอมพิวเตอร์ ฉันมุ่งมั่นที่จะพัฒนาทักษะด้าน Full-Stack Development โดยเฉพาะการสร้างเว็บแอปพลิเคชันที่ใช้งานง่าย ปลอดภัย และมีประสิทธิภาพ เรียนรู้เทคโนโลยีใหม่ๆเพื่อที่จะสร้างสรรค์
                            เว็บไซต์ได้ทันสมัย และตอบโจทย์ตรงกับผู้ใช้งานได้

                        </Text>
                    </Card>

                    <Card className='bg-white border border-rose-100 shadow-md transition-shadow hover:shadow-lg'>
                        <Heading size="5" mb="3" className='text-rose-600 font-semibold flex items-center gap-2'>
                            <CgWebsite className="text-rose-700 text-4xl" />
                            เกี่ยวกับเว็บไซต์นี้
                        </Heading>
                        
                        <Text as="p" size="3" color="gray">
                            
                            เว็บไซต์นี้ทำหน้าที่เป็น Portfolio เพื่อแนะนำข้อมูลส่วนตัว ประวัติการศึกษา และความสามารถทางเทคนิคต่างๆ ที่ได้พัฒนาขึ้น โดยมีจุดประสงค์เพื่อให้ผู้สนใจได้รู้จักทั้งความสามารถในการทำงานและตัวตนของฉันมากยิ่งขึ้น
                        </Text>
                    </Card>

                    <Card className='bg-white border border-rose-100 shadow-md transition-shadow hover:shadow-lg'>
                        <Heading size="5" mb="3" className='text-rose-600 font-semibold flex items-center gap-2'>
                            <FaReact  className="text-rose-700 text-4xl" />
                            เทคโนโลยีหลักที่ใช้ในการพัฒนา
                        </Heading>
                        <Flex direction="column" gap="2">
                            <Text size="3">
                                <span className="font-semibold text-gray-700">Frontend:</span> React (TypeScript), Radix UI (Theming), Tailwind CSS
                            </Text>
                            <Text size="3">
                                <span className="font-semibold text-gray-700">Routing:</span> React Router Dom
                            </Text>
                            <Text size="3">
                                <span className="font-semibold text-gray-700">Tooling:</span> Vite (Build Tool), ESLint & Prettier (Code Quality)
                            </Text>
                        </Flex>
                    </Card>
                </Flex>
            </Box>
        </Container>
    )
}

export default Home;