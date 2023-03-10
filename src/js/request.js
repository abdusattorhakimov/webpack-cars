// import toggleLoder from "./loder";
import { wordFanction } from "./updateUI";
const request = async (ret) => {
  //    toggleLoder(true)
  const req = await fetch(ret);
  if (!req.ok) {
    throw new Error("hatolik bor");
  }
  const data = await req.json();
  //   toggleLoder(false)
  //   console.log(data);
  wordFanction(data);
};

export default request;
