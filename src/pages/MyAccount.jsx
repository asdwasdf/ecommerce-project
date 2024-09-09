import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";

import MyAccountComponents from "@/components/my-account/MyAccount";

const breadcrumb1 = [
  { name: "Home", link: "/" },
  { name: "My Account", link: "/account" }
];

const MyAccount = () => {
  return (
    <div>
      <BreadcrumbsComponent paths={breadcrumb1} />
      <MyAccountComponents />
    </div>
  );
};

export default MyAccount;
