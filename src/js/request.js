import toggleLoder from "./loder";
const request = async (ret) => {

  const req = await fetch(ret);
  if (!req.ok) {
    throw new Error("hatolik bor");
  }
  const data = await req.json();
 
  console.log(data);
  return data;
};

export default request;
