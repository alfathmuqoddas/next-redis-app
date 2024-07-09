import { getData } from "@/components/lib/getData";
import { kv } from "@vercel/kv";

const Page = async () => {
  const data = await getData(1);
  const redisData = await kv.lrange("bike", 0, -1);
  console.log(redisData);
  if (!redisData) {
    console.error("cannot get data");
    return;
  }

  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <div>{JSON.stringify(redisData)}</div>
    </>
  );
};

export default Page;
