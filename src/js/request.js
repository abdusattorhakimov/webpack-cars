 import toggleLoder from "./loder";
 const request = async (ret) => {
  toggleLoder(true);
  const req = await fetch(ret);
  if (!req.ok) {
    throw new Error("hatolik bor");
  }
  const data = await req.json();
  toggleLoder(false);

  return data;
};
export default request;
