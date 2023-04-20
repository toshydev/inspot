import NavigationBar from "../NavigationBar";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <NavigationBar />
    </>
  );
}
