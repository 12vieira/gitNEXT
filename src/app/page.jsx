import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        {/* <div className="m-5 text-right  text-amber-300" >
          <Link href="/sobre" >Sobre</Link>
          <Link className="ms-2" href="/posts" >Posts</Link>
          <Link className="ms-2" href="/produtos/categorias/cachorro">Produtos</Link>
        </div> */}
        <h1 className="text-center border border-fuchsia-700 p-3 text-fuchsia-700 text-4x1 mt-10">Inicio</h1>
      </main>
    </div>
  );
}
