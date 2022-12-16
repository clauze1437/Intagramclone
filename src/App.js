import "./App.css";
// TODO: answer here
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import Profile from "./components/Profile";
import UploadForm from "./components/UploadForm";

function App() {
  // TODO: answer here
  return (
    <BrowserRouter>
      <div aria-label="App">
        <Navbar />
        <h4 className="text-center mb-5">Instagram Clone</h4>
        <UploadForm/>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mb-5">
                <div className="row justify-content-center row-cols-1 row-cols-lg-3 row-cols-md-2 g-3">
                  <PostCard
                    image={
                      "https://i.pinimg.com/564x/fa/de/84/fade84f9dc552d29c155462f6007608d.jpg"
                    }
                    caption={
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quas modi nemo ipsa quidem consequatur veniam animi, inventore laboriosam ratione doloribus sunt! Aliquam, aliquid maxime."
                    }
                    username={"Kim Seok Jin"}
                    userId={"1"}
                    date={"22 May 2022 | 22:29"}
                  />
                  <PostCard
                    image={
                      "https://i.pinimg.com/564x/c4/4b/23/c44b23097b4be7eb66a5531736f7e7e7.jpg"
                    }
                    caption={
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quas modi nemo ipsa quidem consequatur veniam animi."
                    }
                    username={"Jeon Jungkook"}
                    userId={"2"}
                    date={"25 May 2022 | 12:29"}
                  />
                  <PostCard
                    image={
                      "https://i.pinimg.com/564x/5f/f2/1f/5ff21f1d6c0068aa4256d2f3e03465c0.jpg"
                    }
                    caption={
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quas modi nemo ipsa quidem consequatur veniam animi, inventore laboriosam ratione doloribus sunt! Aliquam, aliquid maxime. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quas modi nemo ipsa quidem consequatur veniam animi, inventore laboriosam ratione doloribus sunt! Aliquam, aliquid maxime."
                    }
                    username={"Jimin"}
                    userId={"3"}
                    date={"25 May 2022 | 12:29"}
                  />
                  <PostCard
                    image={
                      "https://i.pinimg.com/564x/8c/8e/b8/8c8eb8250ec0915f20acc9c0e8be5f15.jpg"
                    }
                    caption={
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quas modi nemo ipsa quidem consequatur veniam animi, inventore laboriosam ratione doloribus sunt! Aliquam, aliquid maxime."
                    }
                    username={"Jhope"}
                    userId={"3"}
                    date={"25 May 2022 | 12:29"}
                  />
                </div>
              </div>
            }
          />
          <Route path="profile" element={<Profile />} />
          <Route
            path="*"
            element={<h3 className="container text-center">This Site Can't Be Reached</h3>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
