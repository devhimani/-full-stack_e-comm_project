import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>}></Route>
          <Route path="/sign-in" element={<></>}></Route>
          <Route path="/sign-up" element={<></>}></Route>
          <Route path="/*" element={<></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
