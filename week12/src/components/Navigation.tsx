import { Link , useLocation } from "react-router-dom"
import {Flex , Button , Box} from "@radix-ui/themes"
import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";


function Navigation() {
    const location = useLocation();
    const isActive = (path:string) => {
        return location.pathname === path;
    };
    return(
        <Box className="border-b border-gray-200 bg-white">
            <Flex justify="center" wrap="wrap" gap="3" p="4">
                <Link to ="/" className="no-underline">
                    <Button variant={isActive('/') ? 'solid' : 'soft'} size="3">
                        <IoMdHome /> หน้าหลัก
                    </Button>
                </Link>
                <Link to ="/profile" className="no-underline">
                    <Button variant={isActive('/') ? 'solid' : 'soft'} size="3">
                        <FaRegUser /> ประวัติส่วนตัว
                    </Button>
                </Link>
            </Flex>
        </Box>
    )
}

export default Navigation;