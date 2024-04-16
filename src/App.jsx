import SideBar from "./components/SideBar"
import TopBar from "./components/TopBar"
import Overview from "./components/Overview"
import Transactions from "./components/Transactions"
import Table from "./components/Table"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="bg-black-100">
      <div className="border-b pt-0 fixed top-0 left-0 right-0 border-black sm:pl-64 bg-white-500">
        <TopBar />
      </div>
      <SideBar />

      <div className="m-5 mb-0 mt-16 pt-4 sm:ml-64 grid gap-8">
        <Overview />
        <div className="grid gap-6">
          <Transactions />
          <Table />
        </div>
        <Footer />
      </div>
    </div>

  )
}

export default App