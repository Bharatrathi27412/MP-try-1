import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login1 from "./components/Components/Login1";

// function App() {
//   return (
//     <EthProvider>
//       <div id="App" >
//         <div className="container">
//           <Intro />
//           <hr />
//           <Setup />
//           <hr />
//           <Demo />
//           <hr />
//           <Footer />
//         </div>
//       </div>
//     </EthProvider>
//   );
// }

function App() {

  
  
  return (
    <EthProvider>
      <div className="App" >
        <BrowserRouter>
          <div>
            {" "}
            <Routes>
              <Route
                path="/login"
                element={
                  <Login1
                    accounts
                    contract
                  />
                }
              />{" "}
              {/* <Route
                path="/CreateStudMultisig"
                component={() => (
                  <MultiSigCreationStud
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/GoogleLoginS"
                component={() => (
                  <SignUpGoogle
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/GoogleLoginI"
                component={() => (
                  <SignUpGoogleI
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/OtpI"
                component={() => (
                  <OtpI
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/OtpS"
                component={() => (
                  <OtpS
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/CreateInstMultisig"
                component={() => (
                  <MultiSigCreationInst
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              /> */}
              {/* <Route
                path="/upload"
                component={() => (
                  <Upload
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />{" "} */}
              {/* <Route
                path="/MyProfileStud"
                component={() => (
                  <MyProfile
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />{" "}
              <Route
                path="/MyProfileInst"
                component={() => (
                  <MyInstitute
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/createstud"
                component={() => (
                  <UpdateProfile
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/createinst"
                component={() => (
                  <UpdateProf
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/StudentDashBoard"
                component={() => (
                  <StudentDashBoard
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/InstituteDashBoard"
                component={() => (
                  <InstituteDashBoard
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/dd"
                component={() => (
                  <Dash
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              /> */}
              {/* <Route
                path="/chnageinst"
                component={() => (
                  <ChangeInstitute
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/instchangeapp"
                component={() => (
                  <InstChangeApprovalbyInst
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  /> */}
              {/* )} />{" "} */}
              {/* <Route
                path="/new"
                component={() => (
                  <NewRequest
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />{" "}
              <Route
                path="/my"
                component={() => (
                  <MyRequest
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />{" "}
              <Route
                path="/myi"
                component={() => (
                  <MyRequestInst
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />{" "}
              */}{" "}
            </Routes>{" "}
            {/* <Routes />
            <InstRoutes /> */}
          </div>
        </BrowserRouter>
      </div>
    </EthProvider>
  )
}

export default App;
