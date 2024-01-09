import Aside from "@/components/Aside";
import Overview from "@/components/Overview";
import Search from "@/components/Search";
import Transaction from "@/components/Transaction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row bg-[#FAFAFA]">
      {/* sidebar */}
      <Aside />

      {/* main */}
      <div>
        <Search />
        <Overview />
        <Transaction />
      </div>
    </main>
  );
}
