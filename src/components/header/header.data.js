const navItems = [
  {
    path: 'home',
    label: 'Home',
  },
  {
    path: 'whyhjz',
    label: 'Why hjz',
  },
  {
    path: 'HowUseIt',
    label: 'How it work',
  },
  {
    path: 'FAQs',
    label: 'FAQs',
  }
];

const menuItems = [
  {
    path: 'home',
    label: 'Home',
    subMenuStatus: "false", // explicitly set to false
  },
  {
    subMenuStatus: "true",
    path: 'whyhjz',
    label: 'Why hjz',
  },
  {
    path: 'HowUseIt',
    label: 'How it works',
    subMenuStatus: "true",
    subMenu: [
      { path: 'step1', label: 'Step 1' },
      { path: 'step2', label: 'Step 2' },
      { path: 'step3', label: 'Step 3' },
    ],
  },
  {
    path: 'FAQs',
    label: 'FAQs',
    subMenuStatus: "false", // explicitly set to false
  }
];

export default navItems;
export { menuItems };
