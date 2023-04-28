//Header
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import DirectionsWalkOutlinedIcon from '@mui/icons-material/DirectionsWalkOutlined';
export const showIcons = false;
export const announcement = { text: 'Barcelona', url: '' };
export const headerMenu = [
  /*   { title: 'Home', img: 'choose', url: '/', icon: HomeRoundedIcon }, */
  { title: 'Ver', img: 'prices', url: 'see', icon: ApartmentOutlinedIcon },
  { title: 'hacer', img: 'questions', url: 'do', icon: DirectionsWalkOutlinedIcon },
];
//Home
export const head = { title: 'See&Do', meta: 'Web de visitas', icon: 'favicon' };
export const home = { title: 'Barcelona', footer: 'seendo.es' };
//Theme
const dark = { bg: 'gray', headerUl: 'white' };
const light = { class: 'bg-gray-500' };
export const theme = dark;
//Banner
export const title1 = 'Tu gimnasio';
export const title2 = 'Abierto 24hs';