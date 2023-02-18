import { AiFillHome, AiOutlineSearch, AiOutlineHeart} from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

export const SidebarList = [
  {
    id:1,
    caption: "Главная",
    icon: AiFillHome
  },
  {
    id:2,
    caption: "Поисковый запрос",
    icon: AiOutlineSearch
  },
  {
    id:3,
    caption: "Reels",
    icon: BsCameraReels
  },
  {
    id:4,
    caption: "Уведомление",
    icon: AiOutlineHeart
  },
  {
    id:5,
    caption: "Создать",
    icon: CgAddR
  },
  {
    id:6,
    caption: "Еще",
    icon: RxHamburgerMenu
  }


]