import Iconify from "./iconify";
const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfigTeacher = [
  {
    title: 'Dashboard',
    path: '/teacherProfile',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Students',
    path: '/users',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Courses',
    path: '/courses',
    icon: getIcon('eva:shopping-bag-fill'),
  },
];

const navConfigStudent = [
  {
    title: 'Dashboard',
    path: '/studentProfile',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Teachers',
    path: '/users',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Courses',
    path: '/courses',
    icon: getIcon('eva:shopping-bag-fill'),
  },
];

const nav = {teacher: navConfigTeacher, student: navConfigStudent}

export default nav;
