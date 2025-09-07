import Nav from "./components/nav-bar/nav";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import DepartmentList from "./components/department-list/departments";
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <DepartmentList />
      </main>
      <Footer />
    </>
  );
}

export default App
