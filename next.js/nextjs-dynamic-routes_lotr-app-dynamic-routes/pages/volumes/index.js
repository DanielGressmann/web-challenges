import Link from "next/link";
import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  function handleRandomVolume() {
    const randomVolume = getRandomElement(volumes).slug;
    router.push(`/volumes/${randomVolume}`);
  }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>Random Volume Buttonicus</button>
    </>
  );
}
