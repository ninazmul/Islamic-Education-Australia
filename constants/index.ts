export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Programs",
    route: "/programs",
  },
  {
    label: "Projects",
    route: "/projects",
  },
  {
    label: "Events",
    route: "/events",
  },
  {
    label: "About Us",
    route: "/about",
  },
  {
    label: "Contact Us",
    route: "/contact",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

export const Committee = [
  {
    position: "President",
    name: "Md Shamsul Islam",
  },
  {
    position: "Vice President",
    name: "Md Sakawat Hossain",
  },
  {
    position: "Treasurer",
    name: "Md Didarul Alam",
  },
  {
    position: "General Secretary",
    name: "Md Abul Hossain",
  },
  {
    position: "Public Officer",
    name: "(Acting) Md Abul Hossain",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  createdAt: new Date(),
  imageUrl: "",
  url: "",
};

export const registrationDefaultValues = {
  firstName: "",
  lastName: "",
  address: "",
  number: "",
  email: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  emergencyContactRelation: "",
  date: new Date(),
  status: "pending",
  userId: "",
};
